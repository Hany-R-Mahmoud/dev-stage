interface VisitorRequest {
  method?: string;
  body?: unknown;
  url?: string;
}

interface VisitorResponse {
  status: (code: number) => VisitorResponse;
  setHeader?: (name: string, value: string) => void;
  json: (body: unknown) => void;
}

type RedisCommand = Array<string>;

const siteKey = 'dev-stage:visitors:site';

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL
    || process.env.UPSTASH_REDIS_REST_URL
    || process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN
    || process.env.UPSTASH_REDIS_REST_TOKEN
    || process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  return url && token ? {url: url.replace(/\/$/, ''), token} : null;
}

function validVisitorId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-zA-Z0-9_-]{16,128}$/.test(value);
}

function validProjectSlug(value: unknown): value is string {
  return typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,96}$/.test(value);
}

function projectKey(slug: string): string {
  return `dev-stage:visitors:project:${slug}`;
}

async function runRedisPipeline(commands: RedisCommand[]) {
  const config = getRedisConfig();
  if (!config) throw new Error('Visitor storage is not configured');

  const response = await fetch(`${config.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });

  if (!response.ok) throw new Error(`Visitor storage returned ${response.status}`);

  const results = await response.json() as Array<{result?: number; error?: string}>;
  const failed = results.find((result) => result.error);
  if (failed?.error) throw new Error(failed.error);
  return results.map((result) => Number(result.result) || 0);
}

function parseBody(body: unknown): {visitorId?: unknown; projectSlug?: unknown} {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as {visitorId?: unknown; projectSlug?: unknown};
    } catch {
      return {};
    }
  }

  return typeof body === 'object' && body !== null
    ? body as {visitorId?: unknown; projectSlug?: unknown}
    : {};
}

function respondUnavailable(response: VisitorResponse) {
  response.status(503).json({error: 'visitor_storage_unconfigured'});
}

export default async function handler(request: VisitorRequest, response: VisitorResponse) {
  response.setHeader?.('Cache-Control', 'no-store');

  if (request.method === 'GET') {
    const url = new URL(request.url || '/api/visitors', 'https://dev-stage.local');
    const scope = url.searchParams.get('scope');
    const projectSlug = url.searchParams.get('projectSlug');

    if (scope !== 'site' && scope !== 'project') {
      response.status(400).json({error: 'invalid_scope'});
      return;
    }

    if (scope === 'project' && !validProjectSlug(projectSlug)) {
      response.status(400).json({error: 'invalid_project_slug'});
      return;
    }

    if (!getRedisConfig()) {
      respondUnavailable(response);
      return;
    }

    try {
      const counts = await runRedisPipeline([
        ['PFCOUNT', siteKey],
        ...(projectSlug ? [['PFCOUNT', projectKey(projectSlug)]] : []),
      ]);
      response.status(200).json({siteCount: counts[0], projectCount: counts[1]});
    } catch {
      respondUnavailable(response);
    }
    return;
  }

  if (request.method !== 'POST') {
    response.status(405).json({error: 'method_not_allowed'});
    return;
  }

  const {visitorId, projectSlug} = parseBody(request.body);
  if (!validVisitorId(visitorId) || (projectSlug !== undefined && !validProjectSlug(projectSlug))) {
    response.status(400).json({error: 'invalid_visitor_payload'});
    return;
  }

  const validSlug = projectSlug === undefined ? undefined : projectSlug as string;

  if (!getRedisConfig()) {
    respondUnavailable(response);
    return;
  }

  try {
    const commands: RedisCommand[] = [
      ['PFADD', siteKey, visitorId],
      ['PFCOUNT', siteKey],
    ];
    if (validSlug) {
      commands.push(['PFADD', projectKey(validSlug), visitorId]);
      commands.push(['PFCOUNT', projectKey(validSlug)]);
    }

    const results = await runRedisPipeline(commands);
    response.status(200).json({
      siteCount: results[1],
      projectCount: validSlug ? results[3] : undefined,
    });
  } catch {
    respondUnavailable(response);
  }
}
