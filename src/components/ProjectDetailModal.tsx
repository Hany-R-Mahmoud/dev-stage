import React, { useEffect, useState } from 'react';
import { Project, Language } from '../types';
import { ProjectLogo } from './ProjectLogo';
import { X, Calendar, User, Building, Tag, Image as ImageIcon, Code, Sparkles, Feather, ListChecks, AlertTriangle, Lightbulb, ArrowUpRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  language: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  language,
  onClose,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    setActiveImage(null);
  }, [project?.id]);

  if (!project) return null;

  const isAr = language === 'ar';
  const displayImage = activeImage || project.imageSrc;
  const hasPortfolioDetails = Boolean(
    project.progress || project.features?.length || project.issues?.length || project.suggestions?.length,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F9F8F6] dark:bg-[#141312] text-[#1A1A1A] dark:text-[#F4F2ED] border-t-4 border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/20 dark:border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.3)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.8)] p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 font-sans-luxury paper-noise-bg transition-colors duration-300"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 ltr:right-3.5 rtl:left-3.5 sm:top-6 sm:ltr:right-6 sm:rtl:left-6 bg-[#1A1A1A] dark:bg-[#F4F2ED] p-2.5 sm:p-3 text-[#F9F8F6] dark:text-[#0E0D0C] hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:bg-[#D4AF37] dark:hover:text-[#0E0D0C] transition-colors duration-300 cursor-pointer z-20 border border-[#1A1A1A] dark:border-white/20"
          aria-label="Close"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Header Tags & Title */}
        <div className="space-y-2.5 sm:space-y-3 ltr:pr-10 rtl:pl-10 sm:ltr:pr-12 sm:rtl:pl-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="bg-[#1A1A1A] dark:bg-[#F4F2ED] text-white dark:text-[#0E0D0C] px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase">
              {project.meta[language]}
            </span>
            <span className="bg-[#EBE5DE] dark:bg-[#1E1D1B] text-[#6C6863] dark:text-[#A39E98] px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase border border-[#1A1A1A]/10 dark:border-white/15">
              {project.category}
            </span>
            {project.status && (
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/50 px-3 py-0.5 sm:px-3.5 sm:py-1">
                {project.status}
              </span>
            )}
            <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest ltr:ml-auto rtl:mr-auto">
              {project.year}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ProjectLogo name={project.title[language]} logoSrc={project.logoSrc} className="h-10 w-10" />
            <h2 id={`project-modal-title-${project.id}`} className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] leading-tight">
              {project.title[language]}
            </h2>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#D4AF37] px-3 py-2 text-xs font-mono uppercase tracking-widest text-[#1A1A1A] dark:text-[#F4F2ED] hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-colors"
            >
              <span>{isAr ? 'زيارة المشروع' : 'Visit project'}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* PRIMARY VISUAL SHOWCASE & GALLERY ARCHIVE */}
        <div className={`grid grid-cols-1 ${project.galleryImages && project.galleryImages.length > 0 ? 'md:grid-cols-4' : ''} gap-4 items-start`}>
          {/* Main Visual Frame */}
          <div className={`${project.galleryImages && project.galleryImages.length > 0 ? 'md:col-span-3' : 'w-full'}`}>
            <div className="relative overflow-hidden border-2 border-[#D4AF37]/50 dark:border-[#D4AF37]/50 aspect-[16/10] bg-[#1A1A1A] shadow-[0_8px_32px_rgba(0,0,0,0.25)] group w-full">
              <img
                src={displayImage}
                alt={project.title[language]}
                className="h-full w-full object-contain transition-all duration-500"
              />
              <div className="absolute bottom-2 ltr:left-2 rtl:right-2 bg-[#1A1A1A]/90 dark:bg-[#0E0D0C]/90 backdrop-blur-md px-2.5 py-1 border border-[#D4AF37]/40 text-[10px] font-mono tracking-widest text-[#F4F2ED] uppercase flex items-center gap-1.5">
                <ImageIcon className="h-3 w-3 text-[#D4AF37]" />
                <span>{isAr ? 'العرض الرئيسي' : 'MAIN VISUAL'}</span>
              </div>
            </div>
          </div>

          {/* Integrated Gallery Archive Column */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="md:col-span-1 space-y-2">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#6C6863] dark:text-[#A39E98] flex items-center gap-1.5">
                <ImageIcon className="h-3 w-3 text-[#D4AF37]" />
                {isAr ? 'أرشيف المعرض' : 'GALLERY ARCHIVE'}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-1 gap-2 max-h-[340px] overflow-y-auto ltr:pr-1 rtl:pl-1">
                <button
                  onClick={() => setActiveImage(project.imageSrc)}
                  aria-label={`${project.title[language]} ${isAr ? 'لقطة' : 'screenshot'} 1`}
                  className={`relative shrink-0 aspect-[16/10] w-full overflow-hidden border-2 transition cursor-pointer ${
                    displayImage === project.imageSrc 
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-[0.98]' 
                      : 'border-[#1A1A1A]/20 dark:border-white/20 opacity-70 hover:opacity-100 hover:border-[#D4AF37]/60'
                  }`}
                >
                  <img src={project.imageSrc} alt="" className="h-full w-full object-contain transition-all duration-500" />
                </button>
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    aria-label={`${project.title[language]} ${isAr ? 'لقطة' : 'screenshot'} ${idx + 2}`}
                    className={`relative shrink-0 aspect-[16/10] w-full overflow-hidden border-2 transition cursor-pointer ${
                      displayImage === img 
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-[0.98]' 
                        : 'border-[#1A1A1A]/20 dark:border-white/20 opacity-70 hover:opacity-100 hover:border-[#D4AF37]/60'
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-contain transition-all duration-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Metadata Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 bg-[#EBE5DE]/60 dark:bg-[#1E1D1B] border border-[#1A1A1A]/15 dark:border-white/15 font-mono">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#6C6863] dark:text-[#A39E98] uppercase tracking-widest flex items-center gap-1.5">
              <Building className="h-3.5 w-3.5 text-[#D4AF37]" />
              {isAr ? 'العميل' : 'Client'}
            </span>
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-1.5 truncate">
              {project.client[language]}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-[#6C6863] dark:text-[#A39E98] uppercase tracking-widest flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#D4AF37]" />
              {isAr ? 'الدور' : 'Role'}
            </span>
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-1.5 truncate">
              {project.role[language]}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-[#6C6863] dark:text-[#A39E98] uppercase tracking-widest flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
              {isAr ? 'السنة' : 'Year'}
            </span>
            <span className="text-xs font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-1.5">
              {project.year}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-[#6C6863] dark:text-[#A39E98] uppercase tracking-widest flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5 text-[#D4AF37]" />
              {isAr ? 'الوسوم' : 'Tags'}
            </span>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] text-[#1A1A1A] dark:text-[#F4F2ED]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Brief / Subtitle */}
        <p className="text-[#6C6863] dark:text-[#A39E98] text-base sm:text-lg leading-relaxed font-sans-luxury border-l-2 border-[#D4AF37] ltr:pl-4 rtl:pr-4">
          {project.description[language]}
        </p>

        {hasPortfolioDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.progress && (
              <div className="md:col-span-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#F4F2ED] dark:text-[#1A1A1A] p-5 sm:p-6 border border-[#D4AF37]/50">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] dark:text-[#9A7A12]">
                  <Sparkles className="h-4 w-4" />
                  {isAr ? 'التقدم الحالي' : 'CURRENT PROGRESS'}
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed">{project.progress[language]}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="bg-[#EBE5DE]/50 dark:bg-[#1E1D1B] p-5 border border-[#1A1A1A]/15 dark:border-white/15">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
                  <ListChecks className="h-4 w-4" />
                  {isAr ? 'الميزات' : 'FEATURES'}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {project.features.map((feature, index) => <li key={index}>• {feature[language]}</li>)}
                </ul>
              </div>
            )}

            {project.issues && project.issues.length > 0 && (
              <div className="bg-[#EBE5DE]/50 dark:bg-[#1E1D1B] p-5 border border-[#1A1A1A]/15 dark:border-white/15">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
                  <AlertTriangle className="h-4 w-4" />
                  {isAr ? 'المشكلات والصعوبات' : 'ISSUES / TROUBLES'}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {project.issues.map((issue, index) => <li key={index}>• {issue[language]}</li>)}
                </ul>
              </div>
            )}

            {project.suggestions && project.suggestions.length > 0 && (
              <div className="md:col-span-2 bg-[#EBE5DE]/50 dark:bg-[#1E1D1B] p-5 border border-[#1A1A1A]/15 dark:border-white/15">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37]">
                  <Lightbulb className="h-4 w-4" />
                  {isAr ? 'الخطوات المقترحة' : 'SUGGESTED NEXT STEPS'}
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {project.suggestions.map((suggestion, index) => <li key={index}>• {suggestion[language]}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* MDX Case Study Article Content */}
        <div className="bg-[#EBE5DE]/40 dark:bg-[#1E1D1B] p-6 sm:p-8 border border-[#1A1A1A]/15 dark:border-white/15 text-[#1A1A1A] dark:text-[#F4F2ED] space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37] uppercase tracking-widest border-b border-[#1A1A1A]/15 dark:border-white/15 pb-3">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>CASE STUDY ARTICLE • {isAr ? 'عربي' : 'ENGLISH MDX'}</span>
            </div>
            <Feather className="h-4 w-4 text-[#1A1A1A] dark:text-[#F4F2ED]" />
          </div>

          <div className="editorial-drop-cap whitespace-pre-line text-base sm:text-lg leading-relaxed text-start font-sans-luxury text-[#1A1A1A] dark:text-[#F4F2ED]">
            {project.contentMDX[language]}
          </div>
        </div>

      </div>
    </div>
  );
};
