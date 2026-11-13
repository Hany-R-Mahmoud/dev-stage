import type { Project } from '../types';

export type MergeGroup = Readonly<{ destination: Project; donors: Project[] }>;

export const hasRealProjectImage = (project: Project): boolean =>
  Boolean(project.imageSrc && !project.imageSrc.startsWith('data:image/svg+xml'));

export function validateMergeRelationships(projects: readonly Project[]): void {
  const bySlug = new Map<string, Project>();
  for (const project of projects) {
    if (bySlug.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    bySlug.set(project.slug, project);
  }
  for (const project of projects) {
    const link = project.mergedInto;
    if (!link) continue;
    if (!link.projectSlug) throw new Error(`Missing destination slug for ${project.slug}`);
    if (link.projectSlug === project.slug) throw new Error(`Self-merge: ${project.slug}`);
    const destination = bySlug.get(link.projectSlug);
    if (!destination) throw new Error(`Missing merge destination: ${project.slug} -> ${link.projectSlug}`);
    if (destination.mergedInto) throw new Error(`Merged projects must point to terminal destinations: ${project.slug}`);
    if (!destination.isPublished || !destination.liveUrl || !hasRealProjectImage(destination)) throw new Error(`Inactive merge destination: ${destination.slug}`);
    if (link.toolUrl && !/^https:\/\//.test(link.toolUrl)) throw new Error(`Non-HTTPS tool URL: ${project.slug}`);
    if (link.mergedAt && !/^\d{4}-\d{2}-\d{2}$/.test(link.mergedAt)) throw new Error(`Invalid merge date: ${project.slug}`);
  }
}

export function getShowcaseCollections(projects: readonly Project[]) {
  validateMergeRelationships(projects);
  const withImage = projects.filter(p => p.isPublished && hasRealProjectImage(p));
  const active = withImage.filter(p => !p.mergedInto && Boolean(p.liveUrl));
  const merged = withImage.filter(p => Boolean(p.mergedInto));
  const routable = [...active, ...merged];
  const lookup = new Map(projects.map(p => [p.slug, p]));
  const grouped = new Map<string, MergeGroup>();
  for (const donor of merged) {
    const slug = donor.mergedInto!.projectSlug;
    const existing = grouped.get(slug);
    if (existing) existing.donors.push(donor);
    else grouped.set(slug, { destination: lookup.get(slug)!, donors: [donor] });
  }
  return { active, merged, routable, groups: [...grouped.values()] };
}
