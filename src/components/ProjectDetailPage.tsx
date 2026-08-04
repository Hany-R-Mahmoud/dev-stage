import React from 'react';
import type { Language, Project } from '../types';
import { ProjectLogo } from './ProjectLogo';
import { VisitorCounter } from './VisitorCounter';
import { trackEvent } from '../lib/monitoring';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  language: Language;
  onBack: () => void;
}

export function ProjectDetailPage({ project, language, onBack }: ProjectDetailPageProps) {
  const isAr = language === 'ar';

  return (
    <main
      className="project-detail-screen fixed inset-0 z-40 overflow-y-auto overscroll-contain pb-28 pt-[env(safe-area-inset-top)] md:static md:mx-auto md:max-w-[1120px] md:overflow-visible md:bg-transparent md:px-6 md:py-10 md:pt-10 lg:px-16 lg:py-16"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <header className="project-detail-screen__header sticky top-0 z-10 flex min-h-16 items-center border-b px-4 md:hidden">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-[var(--project-detail-muted)] transition-colors hover:text-[var(--project-detail-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-detail-accent)]"
          aria-label={isAr ? 'العودة إلى المعرض' : 'Back to portfolio'}
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
          <span>{isAr ? 'رجوع' : 'Back'}</span>
        </button>
        <h1 className="pointer-events-none absolute inset-x-16 truncate text-center text-sm font-bold text-[var(--project-detail-fg)]">
          {project.title[language]}
        </h1>
      </header>

      <button
        type="button"
        onClick={onBack}
        className="hidden min-h-11 items-center gap-2 border border-[#1A1A1A]/20 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#6C6863] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] dark:border-white/20 dark:text-[#A39E98] md:inline-flex"
      >
        <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
        {isAr ? 'العودة إلى المعرض' : 'Back to portfolio'}
      </button>

      <article className="mt-5 space-y-8 px-4 md:mt-8 md:px-0">
        <header className="space-y-4 border-b border-[#1A1A1A]/15 dark:border-white/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">{project.meta[language]}</p>
          <div className="flex items-center gap-4">
            <ProjectLogo name={project.title[language]} logoSrc={project.logoSrc} className="h-12 w-12 sm:h-14 sm:w-14" />
            <h2 className="hidden font-serif-luxury text-3xl font-bold leading-tight text-[#1A1A1A] dark:text-[#F4F2ED] sm:text-5xl md:block md:text-6xl">
              {project.title[language]}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#6C6863] dark:text-[#A39E98]">{project.description[language]}</p>
          <VisitorCounter language={language} projectSlug={project.slug} />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('project_live_site_clicked', {
                project_slug: project.slug,
                category: project.category,
                source: 'project_detail',
              })}
              className="inline-flex items-center border border-[#D4AF37] px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#1A1A1A] dark:text-[#F4F2ED] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors"
            >
              {isAr ? 'زيارة المشروع' : 'Visit project'} ↗
            </a>
          )}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98]">
            <span>{project.category}</span>
            <span>{project.year}</span>
            <span>{project.client[language]}</span>
          </div>
        </header>

        <figure className="aspect-[16/10] overflow-hidden border-2 border-[#D4AF37]/50 bg-[#1A1A1A]">
          <img src={project.imageSrc} alt={project.title[language]} className="h-full w-full object-contain" />
        </figure>

        {project.galleryImages.length > 0 && (
          <section className="space-y-4" aria-labelledby="project-gallery-heading">
            <h2 id="project-gallery-heading" className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">
              {isAr ? 'معرض الصور' : 'Project gallery'}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.galleryImages.map((image, index) => (
                <figure key={image} className="aspect-[16/10] overflow-hidden border border-[#1A1A1A]/15 dark:border-white/15 bg-[#1A1A1A]">
                  <img
                    src={image}
                    alt={`${project.title[language]} ${isAr ? 'لقطة' : 'screenshot'} ${index + 2}`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.progress && (
          <section className="border-l-2 border-[#D4AF37] bg-[#EBE5DE]/60 dark:bg-[#1E1D1B] p-5 sm:p-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">{isAr ? 'التقدم الحالي' : 'Current progress'}</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#1A1A1A] dark:text-[#F4F2ED]">{project.progress[language]}</p>
          </section>
        )}

        {project.features && project.features.length > 0 && (
          <section>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">{isAr ? 'الميزات' : 'Features'}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <li key={`${feature.en}-${index}`} className="border border-[#1A1A1A]/15 dark:border-white/15 p-4 text-sm leading-relaxed text-[#6C6863] dark:text-[#A39E98]">
                  {feature[language]}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-y border-[#1A1A1A]/15 dark:border-white/15 py-5">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">{isAr ? 'مبني باستخدام' : 'Built with'}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#6C6863] dark:text-[#A39E98]">
            {project.tags.filter((tag) => tag !== project.status).join(' · ')}
          </p>
        </section>
      </article>
    </main>
  );
}
