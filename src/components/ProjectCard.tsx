import type { Language, Project } from '../types';
import { CATEGORY_BY_ID } from '../data/projectCategories';
import { ProjectLogo } from './ProjectLogo';
import { ArrowUpRight } from 'lucide-react';

type Props = { project: Project; language: Language; onOpenDetails: (project: Project) => void };

export function ProjectCard({ project, language, onOpenDetails }: Props) {
  const isAr = language === 'ar';
  const category = project.primaryCategoryId ? CATEGORY_BY_ID[project.primaryCategoryId] : undefined;
  return (
    <article className="group relative flex w-full flex-col overflow-hidden border border-[#1A1A1A]/20 bg-[#F9F8F6] text-left transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl dark:border-white/20 dark:bg-[#141312] dark:hover:border-[#D4AF37] rtl:text-right">
      <button type="button" onClick={() => onOpenDetails(project)}
        className="flex w-full flex-1 flex-col space-y-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37] rtl:text-right">
        <div className="relative aspect-[16/10] overflow-hidden border border-[#1A1A1A]/20 bg-[#1A1A1A] dark:border-white/20">
          <img src={project.imageSrc} alt={project.title[language]} loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"/>
          {category && <span className="absolute top-2.5 end-2.5 border border-[#D4AF37]/40 bg-[#1A1A1A]/90 px-2.5 py-1 text-[10px] font-medium text-[#F4F2ED]">{category.title[language]}</span>}
        </div>
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <span className="text-[10px] font-mono tracking-wider text-[#A88620] dark:text-[#D4AF37]">{project.meta[language]}</span>
            <span className="shrink-0 text-[10px] font-mono text-[#6C6863] dark:text-[#A39E98]">{project.year}</span>
          </div>
          <div className="flex items-center gap-3">
            <ProjectLogo name={project.title[language]} logoSrc={project.logoSrc} className="h-10 w-10"/>
            <h4 className="font-serif-luxury text-2xl font-bold">{project.title[language]}</h4>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-[#6C6863] dark:text-[#A39E98]">{project.description[language]}</p>
        </div>
      </button>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-[#1A1A1A]/10 px-5 py-3 text-xs dark:border-white/10">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-1 font-mono text-[10px] font-semibold text-[#6C6863] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] dark:text-[#A39E98]">
          {isAr ? 'زيارة الموقع' : 'Visit website'} <ArrowUpRight className="h-3.5 w-3.5 text-[#A88620] dark:text-[#D4AF37]"/>
        </a>}
        <a href={`/${language}/projects/${project.slug}`} onClick={event=>{event.preventDefault();onOpenDetails(project)}}
          className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#1A1A1A] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] dark:text-[#F4F2ED]">
          {isAr ? 'التفاصيل' : 'Details'} <ArrowUpRight className="h-4 w-4 text-[#A88620] dark:text-[#D4AF37]"/>
        </a>
      </div>
    </article>
  );
}
