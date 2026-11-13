import type { Language, Project } from '../types';
import type { MergeGroup } from '../lib/merged-projects';
import { ProjectLogo } from './ProjectLogo';

type Props = { groups: MergeGroup[]; language: Language; onOpenDetails: (project: Project) => void };

export function MergedProjectsSection({ groups, language, onOpenDetails }: Props) {
  if (!groups.length) return null;
  const isAr = language === 'ar';
  return (
    <section id="merged-projects" className="scroll-mt-24 space-y-8 pt-6" aria-labelledby="merged-projects-heading">
      <div className="space-y-3 border-b border-[#1A1A1A]/15 pb-6 dark:border-white/15">
        <p className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">{isAr ? 'سجل المشاريع' : 'PROJECT ARCHIVE'}</p>
        <h2 id="merged-projects-heading" className="font-serif-luxury text-3xl font-bold sm:text-4xl">{isAr ? 'مشاريع تم دمجها' : 'Merged projects'}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-[#6C6863] dark:text-[#A39E98]">{isAr ? 'مشاريع بدأت مستقلة، وأصبحت جزءًا من مشاريع أكبر. تفاصيلها وروابطها الأصلية محفوظة هنا.' : 'Projects that began independently and are now part of larger products. Their original details and links remain available here.'}</p>
      </div>
      {groups.map(({destination,donors}) => (
        <div key={destination.slug} className="space-y-5" aria-label={destination.title[language]}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-s-2 border-[#D4AF37] ps-4">
            <h3 className="font-serif-luxury text-xl font-semibold sm:text-2xl">{isAr ? 'تم دمجها داخل: ' : 'Merged into: '}{destination.title[language]}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <button type="button" onClick={() => onOpenDetails(destination)} className="min-h-11 font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'تفاصيل المشروع الموحد' : 'Unified project details'}</button>
              {destination.liveUrl && <a href={destination.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center font-semibold text-[#A88620] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'افتح المشروع الموحد' : 'Open unified project'} ↗</a>}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {donors.map(project => {
              const primary = project.mergedInto?.toolUrl || destination.liveUrl;
              return <article key={project.id} className="overflow-hidden border border-[#1A1A1A]/20 bg-[#F9F8F6] dark:border-white/20 dark:bg-[#141312]">
                <button type="button" onClick={() => onOpenDetails(project)} className="block w-full space-y-3 p-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]">
                  <div className="aspect-[16/10] overflow-hidden bg-[#1A1A1A]"><img src={project.imageSrc} alt={project.title[language]} loading="lazy" className="h-full w-full object-contain"/></div>
                  <span className="inline-block border border-[#D4AF37]/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#A88620] dark:text-[#D4AF37]">{isAr ? 'تم الدمج' : 'Merged'}</span>
                  <div className="flex items-center gap-3"><ProjectLogo name={project.title[language]} logoSrc={project.logoSrc} className="h-9 w-9"/><h4 className="font-serif-luxury text-xl font-bold">{project.title[language]}</h4></div>
                  <p className="text-sm leading-relaxed text-[#6C6863] dark:text-[#A39E98]">{project.description[language]}</p>
                  {project.mergedInto?.mergedAt && <p className="text-xs text-[#6C6863] dark:text-[#A39E98]">{isAr ? 'تاريخ الدمج: ' : 'Merged on: '}{project.mergedInto.mergedAt}</p>}
                  <span className="block text-sm font-medium underline underline-offset-4">{isAr ? 'التفاصيل الأصلية' : 'Original details'}</span>
                </button>
                <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-[#1A1A1A]/10 px-4 py-2 text-xs dark:border-white/10">
                  {primary && <a href={primary} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-[#A88620] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{project.mergedInto?.toolUrl ? (isAr ? 'افتح الأداة' : 'Open tool') : (isAr ? 'المشروع الموحد' : 'Unified project')} ↗</a>}
                  {project.repository?.github && <a href={project.repository.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'المستودع' : 'Repository'} ↗</a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'النسخة السابقة' : 'Previous version'} ↗</a>}
                </div>
              </article>;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
