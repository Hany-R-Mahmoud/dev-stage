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
const standaloneAppSlugs = new Set([
  'tabeeb-flow',
  'focus-session-flow',
  'minaretes',
  'js2next',
  'etamini',
  'yahya',
  'skills-agency',
  'spec-flow-ai',
  'jadwal',
  'al-rawi',
  'dev2ops',
  'emojie-crack',
  'masar-ci',
  'wajjba',
]);

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_KV_REST_API_URL
    || process.env.KV_REST_API_URL
    || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN
    || process.env.KV_REST_API_TOKEN
    || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? {url: url.replace(/\/$/, ''), token} : null;
}

function validVisitorId(value: unknown): value is string {
  return typeof value === 'string' && /^[a-zA-Z0-9_-]{16,128}$/.test(value);
}

function validProjectSlug(value: unknown): value is string {
  return typeof value === 'string' && /^[a-z0-9][a-z0-9-]{0,96}$/.test(value);
}

function validAppSlug(value: unknown): value is string {
  return typeof value === 'string' && standaloneAppSlugs.has(value);
}

function projectKey(slug: string): string {
  return `dev-stage:visitors:project:${slug}`;
}

function appKey(slug: string): string {
  return `standalone:visitors:app:${slug}`;
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

function parseBody(body: unknown): {visitorId?: unknown; projectSlug?: unknown; appSlug?: unknown} {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as {visitorId?: unknown; projectSlug?: unknown; appSlug?: unknown};
    } catch {
      return {};
    }
  }

  return typeof body === 'object' && body !== null
    ? body as {visitorId?: unknown; projectSlug?: unknown; appSlug?: unknown}
    : {};
}

function respondUnavailable(response: VisitorResponse) {
  response.status(503).json({error: 'visitor_storage_unconfigured'});
}

export default async function handler(request: VisitorRequest, response: VisitorResponse) {
  response.setHeader?.('Cache-Control', 'no-store');
  response.setHeader?.('Access-Control-Allow-Origin', '*');
  response.setHeader?.('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader?.('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    response.status(204).json({});
    return;
  }

  if (request.method === 'GET') {
    const url = new URL(request.url || '/api/visitors', 'https://dev-stage.local');
    const scope = url.searchParams.get('scope');
    const projectSlug = url.searchParams.get('projectSlug');
    const appSlug = url.searchParams.get('appSlug');

    if (scope !== 'site' && scope !== 'project' && scope !== 'app') {
      response.status(400).json({error: 'invalid_scope'});
      return;
    }

    if (scope === 'project' && !validProjectSlug(projectSlug)) {
      response.status(400).json({error: 'invalid_project_slug'});
      return;
    }

    if (scope === 'app' && !validAppSlug(appSlug)) {
      response.status(400).json({error: 'invalid_app_slug'});
      return;
    }

    if (!getRedisConfig()) {
      respondUnavailable(response);
      return;
    }

    try {
      if (scope === 'app') {
        const counts = await runRedisPipeline([['PFCOUNT', appKey(appSlug as string)]]);
        response.status(200).json({appCount: counts[0]});
        return;
      }

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

  const {visitorId, projectSlug, appSlug} = parseBody(request.body);
  if (
    !validVisitorId(visitorId)
    || (projectSlug !== undefined && !validProjectSlug(projectSlug))
    || (appSlug !== undefined && !validAppSlug(appSlug))
    || (projectSlug !== undefined && appSlug !== undefined)
  ) {
    response.status(400).json({error: 'invalid_visitor_payload'});
    return;
  }

  const validSlug = projectSlug === undefined ? undefined : projectSlug as string;
  const validatedAppSlug = appSlug === undefined ? undefined : appSlug as string;

  if (!getRedisConfig()) {
    respondUnavailable(response);
    return;
  }

  try {
    if (validatedAppSlug !== undefined) {
      const results = await runRedisPipeline([
        ['PFADD', appKey(validatedAppSlug), visitorId],
        ['PFCOUNT', appKey(validatedAppSlug)],
      ]);
      response.status(200).json({appCount: results[1]});
      return;
    }

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
