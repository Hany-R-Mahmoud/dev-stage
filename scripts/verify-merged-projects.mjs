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
  assert.equal(find(merged, 'mi3ad')?.mergedInto?.projectSlug, 'monasabati');
  assert.equal(groups.find(group => group.destination.slug === 'monasabati')?.donors.length, 1);
  assert.ok(!find(active, 'mi3ad'), 'Mi3ad cannot enter active categories or carousel');
  assert.ok(find(routable, 'mi3ad'), 'Mi3ad keeps its original route');
  assert.equal(find(merged, 'mofakker')?.mergedInto?.projectSlug, 'mohtaway');
  assert.ok(!find(active, 'mofakker'), 'Mofakker cannot appear as a separate active app');
  assert.ok(find(active, 'mohtaway'), 'Mohtaway remains the active destination');
  assert.ok(find(routable, 'mofakker'), 'Mofakker keeps its original route with merge details');
  assert.equal(groups.find(group => group.destination.slug === 'mohtaway')?.donors.length, 1);
  assert.equal(find(active, 'mohtaway')?.title.en, 'Banat Afkary');
  assert.equal(find(active, 'mohtaway')?.liveUrl, 'https://banat-afkary.vercel.app/');

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
  )), /Unknown merge destination/);
  assert.throws(() => getShowcaseCollections(projects.map(project =>
    project.slug === 'repo-health' ? {...project, mergedInto: {projectSlug: 'repo-health'}} : project
  )), /Invalid self/);
  assert.throws(() => getShowcaseCollections(projects.map(project =>
    project.slug === 'dev-hq' ? {...project, mergedInto: {projectSlug: 'repo-health'}} : project
  )), /Merge chain/);

  const repeatedDonor = {...find(projects, 'repo-health'), id: 'repeated-donor'};
  assert.throws(() => getShowcaseCollections([...projects, repeatedDonor]), /Duplicate project slug/);
  const repeatedDestination = {...find(projects, 'dev-hq'), id: 'repeated-destination'};
  assert.throws(() => getShowcaseCollections([...projects, repeatedDestination]), /Duplicate project slug/);

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

// Legacy dev2ops mirror is resolved at generation; duplicate effective slugs now fail.
assert.equal(PORTFOLIO_PROJECTS.filter(project => project.slug === 'dev2ops').length,1);
const duplicate = {...PORTFOLIO_PROJECTS.find(project => project.slug === 'dev2ops'), id:'obsolete-mirror'};
assert.throws(()=>getShowcaseCollections([...PORTFOLIO_PROJECTS,duplicate]),/Duplicate project slug/);

console.log('PASS: merged portfolio, canonical dev2ops, strict participant validation, original routes, and sitemap eligibility');
