import type { Project } from '../types';
import { getProjectDirectory, hasRealProjectImage, validateProjectRecords } from './projectDirectory';
export { hasRealProjectImage };
export const validateMergeRelationships = validateProjectRecords;
export function getShowcaseCollections(projects: readonly Project[]) {
  const { active, merged, routable, mergedGroups } = getProjectDirectory(projects);
  return { active, merged, routable, groups: mergedGroups };
}
