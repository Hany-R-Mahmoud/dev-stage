import React from 'react';
import type { Language, Project } from '../types';

interface ProjectDetailPageProps {
  project: Project;
  language: Language;
}

function renderContentLine(line: string, index: number): React.ReactNode {
  const heading = line.match(/^#{1,3}\s+(.+)$/);
  if (heading) {
    return (
      <h2 key={`${line}-${index}`} className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] pt-4">
        {heading[1]}
      </h2>
    );
  }

  return (
    <p key={`${line}-${index}`} className="text-sm sm:text-base leading-relaxed text-[#6C6863] dark:text-[#A39E98]">
      {line.replace(/^[-*]\s+/, '• ')}
    </p>
  );
}

export function ProjectDetailPage({ project, language }: ProjectDetailPageProps) {
  const isAr = language === 'ar';
  const contentLines = project.contentMDX[language].split(/\n+/).filter(Boolean);

  return (
    <main className="relative z-10 mx-auto max-w-[1120px] px-6 md:px-16 py-10 md:py-16">
      <a
        href={isAr ? '/ar/' : '/en/'}
        className="inline-flex items-center border border-[#1A1A1A]/20 dark:border-white/20 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
      >
        {isAr ? 'العودة إلى المعرض' : 'Back to portfolio'}
      </a>

      <article className="mt-8 space-y-8" dir={isAr ? 'rtl' : 'ltr'}>
        <header className="space-y-4 border-b border-[#1A1A1A]/15 dark:border-white/15 pb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">{project.meta[language]}</p>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1A1A1A] dark:text-[#F4F2ED]">
            {project.title[language]}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#6C6863] dark:text-[#A39E98]">{project.description[language]}</p>
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

        <section className="space-y-3">
          <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">{isAr ? 'دراسة الحالة' : 'Case study'}</h2>
          {contentLines.map(renderContentLine)}
        </section>
      </article>
    </main>
  );
}
