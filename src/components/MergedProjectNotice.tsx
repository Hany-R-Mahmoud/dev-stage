import type { Language, Project } from '../types';

type Props = { project: Project; destination?: Project; language: Language };

export function MergedProjectNotice({ project, destination, language }: Props) {
  if (!project.mergedInto || !destination) return null;
  const isAr = language === 'ar';
  const primary = project.mergedInto.toolUrl || destination.liveUrl;
  return (
    <aside aria-label={isAr ? 'معلومات دمج المشروع' : 'Merged project information'} className="space-y-3 border border-[#D4AF37]/50 bg-[#EBE5DE]/60 p-4 dark:bg-[#1E1D1B] sm:p-5">
      <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#A88620] dark:text-[#D4AF37]">{isAr ? 'تم دمج هذا المشروع' : 'Merged project'}</p>
      <p className="text-sm leading-relaxed text-[#1A1A1A] dark:text-[#F4F2ED]">
        {isAr ? 'أصبح هذا المشروع جزءًا من ' : 'This project is now part of '}<strong>{destination.title[language]}</strong>.
        {isAr ? ' التطوير مستمر داخل المشروع الموحد، والتفاصيل الأصلية محفوظة هنا.' : ' Development continues in the unified product; the original details remain here.'}
      </p>
      {project.mergedInto.mergedAt && <p className="text-xs text-[#6C6863] dark:text-[#A39E98]">{isAr ? 'تاريخ الدمج: ' : 'Merged on: '}{project.mergedInto.mergedAt}</p>}
      <div className="flex flex-wrap gap-3 text-xs font-mono">
        {primary && <a href={primary} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-[#D4AF37] px-3 py-2 font-semibold hover:bg-[#D4AF37]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{project.mergedInto.toolUrl ? (isAr ? 'افتح الأداة' : 'Open tool') : (isAr ? 'افتح المشروع الموحد' : 'Open unified project')} ↗</a>}
        {project.repository?.github && <a href={project.repository.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'المستودع الأصلي' : 'Original repository'} ↗</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'النسخة السابقة' : 'Previous version'} ↗</a>}
      </div>
    </aside>
  );
}
