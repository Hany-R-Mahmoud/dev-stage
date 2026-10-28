import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import curated from '../src/data/vercel-projects.json';
import { PORTFOLIO_PROJECTS } from '../src/data/portfolioData';
const slugs = PORTFOLIO_PROJECTS.map(project => project.slug);
assert.equal(new Set(curated.map(project => project.slug)).size, curated.length, 'Reviewed project routes must be unique');
assert.equal(curated.length, 21, 'All requested projects must be included');
for (const project of curated) {
  assert.equal(slugs.filter(slug => slug === project.slug).length, 1, project.slug + ' must have one route');
  const entry = PORTFOLIO_PROJECTS.find(candidate => candidate.slug === project.slug);
  assert.deepEqual(entry, project, project.slug + ' must retain its reviewed data');
  assert.equal(new URL(project.liveUrl).protocol, 'https:');
  for (const language of ['en', 'ar'] as const) {
    assert.ok(project.title[language] && project.description[language] && project.contentMDX[language]);
  }
  for (const image of [project.imageSrc, ...project.galleryImages]) {
    const file = 'public' + image;
    assert.ok(existsSync(file), 'Missing image: ' + file);
    const bytes = readFileSync(file);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  }
}
assert.deepEqual(JSON.parse(readFileSync('vercel.json', 'utf8')).git.deploymentEnabled, { '*': false, main: true });
console.log('Verified 21 reviewed project entries, unique routes, bilingual content, screenshot files, and deployment policy.');

