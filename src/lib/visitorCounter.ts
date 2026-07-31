export interface VisitorCountResponse {
  siteCount: number;
  projectCount?: number;
}

const visitorIdKey = 'apexyard_visitor_id_v1';
const siteCountKey = 'apexyard_site_visitor_count_v1';
const projectCountKey = 'apexyard_project_visitor_counts_v1';
const siteVisitKey = 'apexyard_site_visitor_seen_v1';
const projectVisitKey = 'apexyard_project_visitor_seen_v1';

function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null;

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getVisitorId(): string {
  const storage = getStorage();
  const existing = storage?.getItem(visitorIdKey);
  if (existing) return existing;

  const generated = typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `visitor-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  storage?.setItem(visitorIdKey, generated);
  return generated;
}

function projectStorageKey(projectSlug: string): string {
  return `${projectCountKey}:${projectSlug}`;
}

function readNumber(key: string): number {
  const value = Number(getStorage()?.getItem(key));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function incrementOnce(countKey: string, seenKey: string): number {
  const storage = getStorage();
  if (!storage) return 1;

  if (storage.getItem(seenKey) !== '1') {
    const nextCount = readNumber(countKey) + 1;
    storage.setItem(countKey, String(nextCount));
    storage.setItem(seenKey, '1');
    return nextCount;
  }

  return readNumber(countKey) || 1;
}

export function readLocalVisitorCount(projectSlug?: string): number {
  if (projectSlug) return readNumber(projectStorageKey(projectSlug)) || 1;
  return readNumber(siteCountKey) || 1;
}

export function recordLocalVisitor(projectSlug?: string): VisitorCountResponse {
  const siteCount = incrementOnce(siteCountKey, siteVisitKey);
  const projectCount = projectSlug
    ? incrementOnce(projectStorageKey(projectSlug), `${projectVisitKey}:${projectSlug}`)
    : undefined;

  return {siteCount, projectCount};
}

function getCounterEndpoint(): string {
  return import.meta.env.VITE_VISITOR_API_URL || '/api/visitors';
}

function shouldUseRemoteCounter(): boolean {
  return import.meta.env.PROD || Boolean(import.meta.env.VITE_VISITOR_API_URL);
}

async function readCounterResponse(response: Response): Promise<VisitorCountResponse> {
  if (!response.ok) throw new Error(`Visitor counter request failed with ${response.status}`);
  return response.json() as Promise<VisitorCountResponse>;
}

export async function registerRemoteVisitor(projectSlug?: string): Promise<VisitorCountResponse> {
  const response = await fetch(getCounterEndpoint(), {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({visitorId: getVisitorId(), projectSlug}),
  });

  return readCounterResponse(response);
}

export async function fetchRemoteVisitorCount(projectSlug?: string): Promise<VisitorCountResponse> {
  const params = new URLSearchParams({scope: projectSlug ? 'project' : 'site'});
  if (projectSlug) params.set('projectSlug', projectSlug);

  const response = await fetch(`${getCounterEndpoint()}?${params.toString()}`);
  return readCounterResponse(response);
}

export {shouldUseRemoteCounter};
