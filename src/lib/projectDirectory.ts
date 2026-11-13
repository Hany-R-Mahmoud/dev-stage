import type { Project } from '../types';
import { PROJECT_CATEGORIES, CATEGORY_BY_ID, type ProjectCategoryId } from '../data/projectCategories';

export type CategoryGroup = Readonly<{ category: (typeof PROJECT_CATEGORIES)[number]; projects: Project[] }>;
export type MergedGroup = Readonly<{ destination: Project; donors: Project[] }>;
export const hasRealProjectImage = (project: Project): boolean =>
  Boolean(project.imageSrc && !project.imageSrc.startsWith('data:image/svg+xml'));
export const visibilityOf = (project: Project) => project.portfolioVisibility ?? 'listed';
export const hasActiveDetails = (project: Project) => Boolean(project.isPublished && hasRealProjectImage(project) && project.liveUrl && project.primaryCategoryId);
export const hasMergedDetails = (project: Project) => Boolean(project.isPublished && hasRealProjectImage(project) && project.mergedInto && project.primaryCategoryId);
const slugCompare = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0;
const ranking = (a: Project, b: Project) =>
  (a.showcasePriority ?? Number.POSITIVE_INFINITY) - (b.showcasePriority ?? Number.POSITIVE_INFINITY) || slugCompare(a.slug,b.slug);

export function validateProjectRecords(projects: readonly Project[]): void {
  const bySlug = new Map<string, Project>();
  const byId = new Set<string>();
  for (const p of projects) {
    if (bySlug.has(p.slug)) throw new Error(`Duplicate project slug: ${p.slug}`);
    if (byId.has(p.id)) throw new Error(`Duplicate project ID: ${p.id}`);
    bySlug.set(p.slug,p);
    byId.add(p.id);
  }
  for(const p of projects) {
    const visibility = visibilityOf(p);
    if(!['listed','unlisted','removed'].includes(visibility)) throw new Error(`Invalid portfolio visibility: ${p.slug}`);
    if(p.primaryCategoryId && !(p.primaryCategoryId in CATEGORY_BY_ID)) throw new Error(`Unknown category: ${p.slug} (${p.primaryCategoryId})`);
    if(p.showcasePriority !== undefined && (!Number.isSafeInteger(p.showcasePriority) || p.showcasePriority < 0)) throw new Error(`Invalid showcase priority: ${p.slug}`);
    if(p.liveUrl && !/^https:\/\/[^\s]+$/i.test(p.liveUrl)) throw new Error(`Invalid live URL: ${p.slug}`);
    if(p.repository?.github && !/^https:\/\/[^\s]+$/i.test(p.repository.github)) throw new Error(`Invalid repository URL: ${p.slug}`);
    if(visibility === 'listed' && p.isPublished && hasRealProjectImage(p) && (p.liveUrl || p.mergedInto) && !p.primaryCategoryId) throw new Error(`Listed showcase project has no primary category: ${p.slug}`);
    const link=p.mergedInto;
    if(!link) continue;
    if(!link.projectSlug||link.projectSlug===p.slug) throw new Error(`Invalid self/missing merge destination: ${p.slug}`);
    const destination=bySlug.get(link.projectSlug);
    if(!destination) throw new Error(`Unknown merge destination for ${p.slug}: ${link.projectSlug}`);
    if(destination.mergedInto) throw new Error(`Merge chain/cycle forbidden: ${p.slug} -> ${destination.slug}`);
    if(visibility==='listed' && (!hasActiveDetails(destination)||visibilityOf(destination)!=='listed')) throw new Error(`Listed merge ${p.slug} points to unavailable destination ${destination.slug}`);
    if(link.toolUrl&&!/^https:\/\/[^\s]+$/i.test(link.toolUrl)) throw new Error(`Invalid tool URL: ${p.slug}`);
    if(link.mergedAt&&(!/^\d{4}-\d{2}-\d{2}$/.test(link.mergedAt)||Number.isNaN(Date.parse(link.mergedAt)))) throw new Error(`Invalid merge date: ${p.slug}`);
  }
}

export function getProjectDirectory(projects: readonly Project[]) {
  validateProjectRecords(projects);
  const active=projects.filter(p=>visibilityOf(p)==='listed'&&!p.mergedInto&&hasActiveDetails(p));
  const merged=projects.filter(p=>visibilityOf(p)==='listed'&&hasMergedDetails(p));
  const unlisted=projects.filter(p=>visibilityOf(p)==='unlisted' && (p.mergedInto?hasMergedDetails(p):hasActiveDetails(p)));
  const removed=projects.filter(p=>visibilityOf(p)==='removed');
  const routable=[...active,...merged,...unlisted];
  const categoryGroups: CategoryGroup[]=PROJECT_CATEGORIES.map(category=>({
    category,projects:active.filter(p=>p.primaryCategoryId===category.id).sort((a,b)=>slugCompare(a.slug,b.slug))
  })).filter(group=>group.projects.length>0);
  const representatives=categoryGroups.map(group=>({
    category:group.category,project:[...group.projects].sort(ranking)[0]
  }));
  const bySlug=new Map(projects.map(p=>[p.slug,p]));
  const groupMap=new Map<string, MergedGroup>();
  for(const donor of merged){const destination=bySlug.get(donor.mergedInto!.projectSlug)!;const g=groupMap.get(destination.slug);if(g)g.donors.push(donor);else groupMap.set(destination.slug,{destination,donors:[donor]});}
  const categoryIndex=(id?:ProjectCategoryId)=>PROJECT_CATEGORIES.findIndex(cat=>cat.id===id);
  const mergedGroups=[...groupMap.values()].sort((a,b)=>{
    const ac=categoryIndex(a.destination.primaryCategoryId);const bc=categoryIndex(b.destination.primaryCategoryId);
    return ac-bc || slugCompare(a.destination.slug,b.destination.slug);
  });
  return {active,merged,unlisted,removed,routable,categoryGroups,representatives,mergedGroups,sitemap:[...active,...merged]};
}
