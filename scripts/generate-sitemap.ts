import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PORTFOLIO_PROJECTS } from '../src/data/portfolioData';

const siteUrl = process.env.SITE_URL?.trim().replace(/\/$/, '');

if (!siteUrl || !/^https?:\/\/[^\s/]+/.test(siteUrl)) {
  throw new Error('SITE_URL must be a real absolute http(s) production URL.');
}

const publicDirectory = join(process.cwd(), 'public');
const projectUrls = PORTFOLIO_PROJECTS
  .filter((project) => project.isPublished)
  .flatMap((project) => [`/en/projects/${project.slug}`, `/ar/projects/${project.slug}`]);
const urls = ['/', '/en/', '/ar/', ...projectUrls];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>
`;
const robots = `User-agent: *
Allow: /
Disallow: /dashboard

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir(publicDirectory, { recursive: true });
await writeFile(join(publicDirectory, 'sitemap.xml'), xml, 'utf8');
await writeFile(join(publicDirectory, 'robots.txt'), robots, 'utf8');
console.log(`Generated ${urls.length} sitemap URLs for ${siteUrl}`);
