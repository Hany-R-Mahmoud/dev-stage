import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import type { Language, Project } from '../types';
import type { CategoryGroup } from '../lib/projectDirectory';
import type { ProjectCategoryId } from '../data/projectCategories';
import { ProjectCard } from './ProjectCard';

const KEY = 'devstage-directory-v2';
type Persisted = { selected: string; allOpen: string[]; singleOpen: boolean };
type ExploreRequest = { id: ProjectCategoryId; token: number } | null;
type Props = {
  groups: CategoryGroup[];
  language: Language;
  onOpenDetails: (project: Project) => void;
  exploreRequest: ExploreRequest;
};
function readPersisted(): Persisted | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.sessionStorage.getItem(KEY);
    return value ? JSON.parse(value) as Persisted : null;
  } catch { return null; }
}

export function ProjectDirectory({groups,language,onOpenDetails,exploreRequest}:Props) {
  const isAr=language==='ar';
  const groupIds=groups.map(group=>group.category.id);
  const [selected,setSelected]=React.useState<string>(()=>readPersisted()?.selected??'all');
  const [allOpen,setAllOpen]=React.useState<string[]>(()=>{
    const cached=readPersisted();
    return cached ? cached.allOpen : (groups.length ? [groups[0].category.id] : []);
  });
  const [singleOpen,setSingleOpen]=React.useState<boolean>(()=>readPersisted()?.singleOpen??true);
  const validSelected=selected==='all'||groupIds.includes(selected as ProjectCategoryId)?selected:'all';
  const safeAllOpen=allOpen.filter(id=>groupIds.includes(id as ProjectCategoryId));
  const visibleGroups=validSelected==='all'?groups:groups.filter(group=>group.category.id===validSelected);
  const isExpanded=(id:string)=>validSelected==='all'?safeAllOpen.includes(id):singleOpen;
  const setCategory=(id:string)=>{
    setSelected(id);
    if(id!=='all')setSingleOpen(true);
  };
  const toggle=(id:string)=>{
    if(validSelected!=='all'){setSingleOpen(v=>!v);return;}
    setAllOpen(current=>current.includes(id)?current.filter(value=>value!==id):[...current,id]);
  };
  const expandAll=()=>validSelected==='all'?setAllOpen([...groupIds]):setSingleOpen(true);
  const collapseAll=()=>validSelected==='all'?setAllOpen([]):setSingleOpen(false);

  React.useEffect(()=>{
    try { window.sessionStorage.setItem(KEY,JSON.stringify({selected:validSelected,allOpen:safeAllOpen,singleOpen})); } catch { /* session storage optional */ }
  },[validSelected,allOpen,singleOpen,groups]);

  React.useEffect(()=>{
    if(!exploreRequest||!groupIds.includes(exploreRequest.id))return;
    setSelected(exploreRequest.id);
    setSingleOpen(true);
    const raf=window.requestAnimationFrame(()=>{
      const heading=document.getElementById(`category-heading-${exploreRequest.id}`);
      heading?.scrollIntoView({behavior:'smooth',block:'start'});
      heading?.focus({preventScroll:true});
    });
    return ()=>window.cancelAnimationFrame(raf);
  },[exploreRequest?.token]);

  const currentTotal=visibleGroups.reduce((sum,group)=>sum+group.projects.length,0);
  return (
    <section id="project-showroom" className="scroll-mt-24 space-y-6 pt-6" aria-labelledby="directory-heading">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#1A1A1A]/15 pb-5 dark:border-white/15">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A88620] dark:text-[#D4AF37]">{isAr?'استكشف حسب المجال':'EXPLORE BY PURPOSE'}</p>
          <h2 id="directory-heading" className="mt-2 font-serif-luxury text-3xl font-bold sm:text-4xl">{isAr?'معرض المشاريع':'Project Showroom'}</h2>
          <p className="mt-2 text-sm text-[#6C6863] dark:text-[#A39E98]">{isAr?`${currentTotal} مشروعًا في العرض الحالي`:`${currentTotal} projects in this view`}</p>
        </div>
        {groups.length>0&&<div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
          <label htmlFor="project-category-filter" className="flex min-h-11 flex-1 items-center gap-2 border border-[#1A1A1A]/20 bg-[#EBE5DE] px-3 dark:border-white/20 dark:bg-[#1A1918] sm:flex-none">
            <Filter className="h-4 w-4 shrink-0 text-[#A88620] dark:text-[#D4AF37]" aria-hidden="true"/>
            <span className="sr-only">{isAr?'تصفية الأقسام':'Filter categories'}</span>
            <select id="project-category-filter" value={validSelected} onChange={e=>setCategory(e.target.value)}
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#1A1A1A] focus-visible:outline-none dark:text-[#F4F2ED] sm:min-w-48">
              <option value="all">{isAr?'كل الأقسام':'All categories'}</option>
              {groups.map(group=><option key={group.category.id} value={group.category.id}>{group.category.title[language]} ({group.projects.length})</option>)}
            </select>
          </label>
          <button type="button" onClick={expandAll} className="min-h-11 px-2 text-xs font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr?'فتح كل الأقسام':'Expand all'}</button>
          <button type="button" onClick={collapseAll} className="min-h-11 px-2 text-xs font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr?'إغلاق كل الأقسام':'Collapse all'}</button>
        </div>}
      </div>
      {visibleGroups.length===0&&<div className="space-y-3 border border-[#1A1A1A]/15 p-5 dark:border-white/15">
        <p>{isAr?'لا توجد مشاريع نشطة في هذا القسم.':'No active projects in this category.'}</p>
        <button type="button" onClick={()=>setCategory('all')} className="min-h-11 underline underline-offset-4">{isAr?'عرض كل الأقسام':'Reset category filter'}</button>
      </div>}
      <div className="space-y-3">
        {visibleGroups.map(group=>{
          const id=group.category.id;
          const expanded=isExpanded(id);
          const panelId=`category-panel-${id}`;
          return <section key={id} className="border-b border-[#1A1A1A]/15 dark:border-white/15" aria-labelledby={`category-heading-${id}`}>
            <h3 id={`category-heading-${id}`} tabIndex={-1} className="scroll-mt-28 outline-none">
              <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={()=>toggle(id)}
                className="flex min-h-20 w-full items-center justify-between gap-4 py-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
                <span className="space-y-1">
                  <span className="block font-serif-luxury text-xl font-semibold sm:text-2xl">{group.category.title[language]} <span className="ms-2 text-sm font-sans font-normal text-[#6C6863] dark:text-[#A39E98]">({group.projects.length})</span></span>
                  <span className="block text-sm font-normal text-[#6C6863] dark:text-[#A39E98]">{group.category.description[language]}</span>
                </span>
                <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-[#A88620] transition-transform motion-reduce:transition-none dark:text-[#D4AF37] ${expanded?'rotate-180':''}`}/>
              </button>
            </h3>
            {expanded&&<div id={panelId} className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
              {group.projects.map(project=><div key={project.slug} className="flex min-w-0">
                <ProjectCard project={project} language={language} onOpenDetails={onOpenDetails}/>
              </div>)}
            </div>}
          </section>;
        })}
      </div>
    </section>
  );
}
