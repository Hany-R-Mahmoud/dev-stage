import assert from 'node:assert/strict';
import { PORTFOLIO_PROJECTS } from '../src/data/portfolioData';
import { PROJECT_CATEGORIES } from '../src/data/projectCategories';
import { getProjectDirectory, validateProjectRecords } from '../src/lib/projectDirectory';
import type { Project } from '../src/types';

const donorSlugs=['repo-health','audit-tool','arabic-auditor','build-brief'];
const all=PORTFOLIO_PROJECTS;
const dir=getProjectDirectory(all);
assert.equal(new Set(all.map(p=>p.slug)).size,all.length,'unique generated slugs');
assert.equal(new Set(all.map(p=>p.id)).size,all.length,'unique generated IDs');
assert.equal(dir.active.length,92,'migration active baseline');
assert.equal(dir.merged.length,4,'four listed donors');
assert.equal(dir.active.length+dir.merged.length,96,'unique public works');
assert.equal(dir.representatives.length,dir.categoryGroups.length);
assert.equal(dir.representatives.length,PROJECT_CATEGORIES.length,'all ten categories have eligible examples');
for(const {category,project} of dir.representatives){
  assert.equal(project.primaryCategoryId,category.id);
  assert.ok(!project.mergedInto);
  const group=dir.categoryGroups.find(g=>g.category.id===category.id)!;
  assert.equal(group.projects.length,group.projects.filter(p=>p.primaryCategoryId===category.id).length);
  assert.ok(group.projects.some(p=>p.slug===project.slug));
}
for(const slug of donorSlugs){
  const donor=dir.merged.find(p=>p.slug===slug)!;
  assert.ok(donor);
  assert.equal(donor.mergedInto?.projectSlug,'dev-hq');
  assert.ok(!dir.active.some(p=>p.slug===slug));
  assert.ok(dir.routable.some(p=>p.slug===slug));
  const noLive=all.map(p=>p.slug===slug?{...p,liveUrl:undefined}:p);
  assert.ok(getProjectDirectory(noLive).merged.some(p=>p.slug===slug));
}
assert.equal(dir.mergedGroups.find(g=>g.destination.slug==='dev-hq')?.donors.length,4);
assert.ok(dir.sitemap.every(p=>p.portfolioVisibility!=='unlisted'&&p.portfolioVisibility!=='removed'));
assert.ok(!dir.active.some(p=>p.slug==='dev2ops'&&p.id!=='apexyard-dev2ops'));

function fixture(slug:string,category:Project['primaryCategoryId']='games'):Project {
  return {
    ...all.find(p=>p.slug==='map-crack')!,
    id:'fixture-'+slug,slug,category:'Web',primaryCategoryId:category,showcasePriority:undefined,
    title:{en:slug,ar:slug},mergedInto:undefined,portfolioVisibility:'listed',
    liveUrl:'https://example.com/'+slug,imageSrc:'/projects/map-crack/cover.jpg',
  };
}
const first=fixture('one'), second=fixture('two'), destination=fixture('target','developer');
second.showcasePriority=1;
const minimal=[first,second,destination];
assert.equal(getProjectDirectory(minimal).representatives.length,2);
assert.equal(getProjectDirectory(minimal).representatives.find(r=>r.category.id==='games')?.project.slug,'two');
const prioritized=[{...first,showcasePriority:0},second,destination];
assert.equal(getProjectDirectory(prioritized).representatives.find(r=>r.category.id==='games')?.project.slug,'one');
const reclassified=[{...first,primaryCategoryId:'productivity' as const},second,destination];
assert.equal(getProjectDirectory(reclassified).representatives.length,3);
const merged=[{...first,mergedInto:{projectSlug:'target'}},second,destination];
assert.equal(getProjectDirectory(merged).active.length,2);
assert.equal(getProjectDirectory(merged).merged.length,1);
assert.equal(getProjectDirectory(merged).mergedGroups[0].destination.slug,'target');
const unlisted=[{...first,portfolioVisibility:'unlisted' as const},second,destination];
assert.ok(getProjectDirectory(unlisted).unlisted.some(p=>p.slug==='one'));
assert.ok(!getProjectDirectory(unlisted).sitemap.some(p=>p.slug==='one'));
const removed=[{...first,portfolioVisibility:'removed' as const},second,destination];
assert.ok(getProjectDirectory(removed).removed.some(p=>p.slug==='one'));
assert.ok(!getProjectDirectory(removed).routable.some(p=>p.slug==='one'));
assert.equal(getProjectDirectory([second]).representatives.length,1,'last member removed from another category');
assert.equal(getProjectDirectory([]).representatives.length,0,'zero-slide case');
assert.equal(getProjectDirectory([first,{...second,showcasePriority:undefined}]).representatives.find(r=>r.category.id==='games')?.project.slug,'one','slug tie-break when priorities are equal');
assert.equal(getProjectDirectory([{...second,showcasePriority:undefined},destination]).representatives.length,2);

const rejects=(items:Project[],pattern:RegExp)=>{
  assert.throws(()=>validateProjectRecords(items),pattern);
};
rejects([first,{...first,id:'other'}],/Duplicate project slug/);
rejects([first,{...first,slug:'other'}],/Duplicate project ID/);
rejects([{...first,primaryCategoryId:'invalid' as Project['primaryCategoryId']}],/Unknown category/);
rejects([{...first,primaryCategoryId:undefined}],/no primary category/);
rejects([{...first,showcasePriority:-1}],/priority/);
rejects([{...first,liveUrl:'javascript:alert(1)'}],/live URL/);
rejects([{...first,mergedInto:{projectSlug:'unknown'}},destination],/Unknown merge destination/);
rejects([{...first,mergedInto:{projectSlug:'one'}}],/self/);
rejects([{...first,mergedInto:{projectSlug:'two'}},{...second,mergedInto:{projectSlug:'target'}},destination],/chain/);
rejects([{...first,mergedInto:{projectSlug:'target'}},{...destination,portfolioVisibility:'removed'}],/unavailable destination/);
rejects([{...first,mergedInto:{projectSlug:'target',mergedAt:'not-a-date'}},destination],/date/);
console.log('PASS: category registry, migration totals, representatives, lifecycle, invalid metadata, routes, merge semantics and sitemap');
