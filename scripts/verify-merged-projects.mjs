import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PORTFOLIO_PROJECTS } from '../src/data/portfolioData.ts';
import { getShowcaseCollections } from '../src/lib/merged-projects.ts';

const editorial = JSON.parse(readFileSync(new URL('../src/data/projectEditorial.json', import.meta.url), 'utf8'));
// Curated records intentionally contain content only; the generator applies editorial metadata once.
const curated = JSON.parse(readFileSync(new URL('../src/data/vercel-projects.json', import.meta.url), 'utf8'))
  .map(project => ({ ...project, ...(editorial[project.slug] ?? {}) }));
const donors = ['repo-health', 'audit-tool', 'arabic-auditor', 'build-brief'];
const find = (items, slug) => items.find(project => project.slug === slug);

for (const projects of [curated, PORTFOLIO_PROJECTS]) {
  const {active, merged, routable, groups} = getShowcaseCollections(projects);
  assert.deepEqual(
    merged.filter(project => project.mergedInto.projectSlug === 'dev-hq').map(project => project.slug).sort(),
    [...donors].sort(),
    'The four original donors must belong to Dev HQ',
  );
  assert.equal(groups.find(group => group.destination.slug === 'dev-hq')?.donors.length, 4);
  assert.equal(find(active, 'dev-hq')?.slug, 'dev-hq', 'Destination stays active');
  assert.equal(new Set(merged.map(project => project.slug)).size, merged.length, 'Merged donors are unique');

  for (const slug of donors) {
    const donor = find(merged, slug);
    assert.ok(donor, slug + ' is shown only in merged projects');
    assert.ok(!find(active, slug), slug + ' cannot enter active carousel, grid, or category filters');
    assert.ok(find(routable, slug), slug + ' remains a route');
    assert.ok(donor.repository?.github, 'Original repository remains available');
    assert.ok(donor.imageSrc, 'Original cover remains available');
    const withoutPreviousVersion = projects.map(project =>
      project.slug === slug ? {...project, liveUrl: undefined} : project
    );
    assert.ok(find(getShowcaseCollections(withoutPreviousVersion).merged, slug), 'Old deployment is optional');
  }

  assert.throws(() => getShowcaseCollections(projects.map(project =>
    project.slug === 'repo-health' ? {...project, mergedInto: {projectSlug: 'missing-destination'}} : project
  )), /Missing merge destination/);
  assert.throws(() => getShowcaseCollections(projects.map(project =>
    project.slug === 'repo-health' ? {...project, mergedInto: {projectSlug: 'repo-health'}} : project
  )), /Self-merge/);
  assert.throws(() => getShowcaseCollections(projects.map(project =>
    project.slug === 'dev-hq' ? {...project, mergedInto: {projectSlug: 'repo-health'}} : project
  )), /terminal destinations/);

  const repeatedDonor = {...find(projects, 'repo-health'), id: 'repeated-donor'};
  assert.throws(() => getShowcaseCollections([...projects, repeatedDonor]), /Ambiguous merge participant/);
  const repeatedDestination = {...find(projects, 'dev-hq'), id: 'repeated-destination'};
  assert.throws(() => getShowcaseCollections([...projects, repeatedDestination]), /Ambiguous merge participant/);

  const otherDestination = active.find(project => project.slug !== 'dev-hq' && !project.mergedInto);
  assert.ok(otherDestination, 'Another destination exists for future groups');
  const additionalDonor = {
    ...find(projects, 'repo-health'),
    id: 'future-merged-donor',
    slug: 'future-merged-donor',
    mergedInto: {projectSlug: otherDestination.slug}
  };
  assert.equal(
    getShowcaseCollections([...projects, additionalDonor]).groups.find(group => group.destination.slug === otherDestination.slug)?.donors.length,
    1,
    'Adding future destination groups must be data only',
  );
}

// An existing duplicate unrelated to any merger must not break the build.
const legacyProjects = [
  {slug: 'dev2ops', id: 'old-1'},
  {slug: 'dev2ops', id: 'old-2'},
  {slug: 'dev-hq', id: 'destination', isPublished: true, imageSrc: '/cover.webp', liveUrl: 'https://the-dev-hq.vercel.app/'},
  {slug: 'repo-health', id: 'donor', isPublished: true, imageSrc: '/repo.webp', mergedInto: {projectSlug: 'dev-hq'}},
];
assert.equal(getShowcaseCollections(legacyProjects).groups[0].donors.length, 1);

console.log('PASS: merged portfolio, legacy duplicate tolerance, strict participant ambiguity, original routes, and sitemap eligibility');
