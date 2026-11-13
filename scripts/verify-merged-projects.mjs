import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const curated = JSON.parse(readFileSync(new URL('../src/data/vercel-projects.json', import.meta.url), 'utf8'));
const raw = readFileSync(new URL('../src/data/portfolioData.ts', import.meta.url), 'utf8');
const generated = JSON.parse(raw.split('export const PORTFOLIO_PROJECTS = ')[1].split(' satisfies Project[];')[0]);
const donors = ['repo-health', 'audit-tool', 'arabic-auditor', 'build-brief'];
const validImage = p => p.imageSrc && !p.imageSrc.startsWith('data:image/svg+xml');
const find = (projects, slug) => projects.find(p => p.slug === slug);
function classify(projects) {
  const map = new Map(projects.map(p => [p.slug, p]));
  assert.equal(map.size, projects.length);
  for (const p of projects.filter(p => p.mergedInto)) {
    assert.notEqual(p.slug, p.mergedInto.projectSlug);
    const destination = map.get(p.mergedInto.projectSlug);
    assert.ok(destination, 'destination must exist');
    assert.ok(!destination.mergedInto, 'terminal destination only');
    assert.ok(destination.isPublished && destination.liveUrl && validImage(destination), 'destination must be active');
  }
  const active = projects.filter(p => p.isPublished && validImage(p) && p.liveUrl && !p.mergedInto);
  const merged = projects.filter(p => p.isPublished && validImage(p) && p.mergedInto);
  return { active, merged, routable: [...active, ...merged] };
}
for (const projects of [curated, generated]) {
  const { active, merged, routable } = classify(projects);
  assert.deepEqual(merged.filter(p => p.mergedInto.projectSlug === 'dev-hq').map(p => p.slug).sort(), [...donors].sort());
  assert.equal(find(active, 'dev-hq')?.slug, 'dev-hq');
  for (const slug of donors) {
    assert.ok(!find(active, slug));
    assert.ok(find(routable, slug));
    assert.ok(find(merged, slug)?.repository?.github);
    const noOldUrl = projects.map(p => p.slug === slug ? {...p, liveUrl: undefined} : p);
    assert.ok(find(classify(noOldUrl).routable, slug));
  }
  assert.throws(() => classify(projects.map(p => p.slug === 'repo-health' ? {...p, mergedInto: {projectSlug: 'invalid'}} : p)));
  assert.throws(() => classify(projects.map(p => p.slug === 'repo-health' ? {...p, mergedInto: {projectSlug: 'repo-health'}} : p)));
  assert.throws(() => classify(projects.map(p => p.slug === 'dev-hq' ? {...p, mergedInto: {projectSlug: 'repo-health'}} : p)));
  const extra = {...find(projects, 'repo-health'), slug: 'extra-donor', id: 'extra-donor', mergedInto: {projectSlug: 'dev-hq'}};
  assert.ok(find(classify([...projects, extra]).merged, 'extra-donor'));
}
console.log('PASS merged donors, active filters, original routes, optional links, destination validation, data regeneration parity');
