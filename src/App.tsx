import React, { useState, useEffect } from 'react';
import { Project, Language } from './types';
import { PORTFOLIO_PROJECTS, PORTFOLIO_PROFILE } from './data/portfolioData';
import { FocusRail, FocusRailItem } from './components/ui/focus-rail';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { ProjectLogo } from './components/ProjectLogo';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ThemeWaveOverlay } from './components/ThemeWaveOverlay';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VisitorCounter } from './components/VisitorCounter';
import { toAbsoluteUrl, updateSeoMetadata } from './lib/seo';
import { trackEvent } from './lib/monitoring';
import { ArrowUpRight, Feather, Filter, ChevronDown } from 'lucide-react';

type RouteState = Readonly<{
  projectSlug: string | null;
  language: Language;
}>;

function useCompactViewport() {
  const [isCompactViewport, setIsCompactViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  return isCompactViewport;
}

function readRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { projectSlug: null, language: 'en' };
  }

  const segments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
  const language: Language = segments[0] === 'ar' ? 'ar' : 'en';
  const routeSegments = segments[0] === 'ar' || segments[0] === 'en' ? segments.slice(1) : segments;

  if (routeSegments[0] === 'projects' && routeSegments[1]) {
    return { projectSlug: routeSegments[1], language };
  }

  return { projectSlug: null, language };
}

function localizedPath(language: Language, projectSlug?: string | null): string {
  const prefix = language === 'ar' ? '/ar' : '/en';
  if (projectSlug) return `${prefix}/projects/${projectSlug}`;
  return `${prefix}/`;
}

function isLegacyDashboardPath(): boolean {
  if (typeof window === 'undefined') return false;

  const segments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
  const routeSegments = segments[0] === 'ar' || segments[0] === 'en' ? segments.slice(1) : segments;
  return routeSegments[0] === 'dashboard';
}

export default function App() {
  const initialRoute = readRoute();
  const [language, setLanguage] = useState<Language>(initialRoute.language);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('apexyard_theme_v1') as 'light' | 'dark';
      if (savedTheme) return savedTheme;
    }
    return 'dark';
  });

  const [waveState, setWaveState] = useState<{
    isAnimating: boolean;
    targetTheme: 'light' | 'dark' | null;
  }>({
    isAnimating: false,
    targetTheme: null,
  });

  useEffect(() => {
    localStorage.setItem('apexyard_theme_v1', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (waveState.isAnimating) return;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setWaveState({
      isAnimating: true,
      targetTheme: nextTheme,
    });

    // Seamlessly swap DOM theme class as the falling wave covers the viewport (~900ms)
    setTimeout(() => {
      setTheme(nextTheme);
    }, 900);
  };

  const handleWaveComplete = () => {
    setWaveState({
      isAnimating: false,
      targetTheme: null,
    });
  };

  const [projectSlug, setProjectSlug] = useState<string | null>(initialRoute.projectSlug);
  const isCompactViewport = useCompactViewport();

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const targetPath = localizedPath(nextLanguage, projectSlug);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  // Sync back/forward browser history buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = readRoute();
      setLanguage(route.language);
      setProjectSlug(route.projectSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (!isLegacyDashboardPath()) return;

    const targetPath = localizedPath(language);
    if (window.location.pathname !== targetPath) {
      window.history.replaceState({}, '', targetPath);
    }
  }, [language]);

  const projects = PORTFOLIO_PROJECTS;
  const profile = PORTFOLIO_PROFILE;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    trackEvent('project_detail_opened', {
      project_slug: project.slug,
      category: project.category,
      source: isCompactViewport ? 'mobile' : 'desktop',
    });

    if (!isCompactViewport) {
      setSelectedProject(project);
      return;
    }

    setSelectedProject(null);
    setProjectSlug(project.slug);

    const targetPath = localizedPath(language, project.slug);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({top: 0, behavior: 'instant'});
  };

  const handleProjectBack = () => {
    setSelectedProject(null);
    setProjectSlug(null);
    const targetPath = localizedPath(language);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({top: 0, behavior: 'instant'});
  };

  // Handle document direction and language attributes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const isAr = language === 'ar';

  // Public showcase entries need both a real cover image and a live destination.
  // In-progress projects are not part of the public portfolio until their
  // presentation is ready.
  const hasShowcaseImage = (project: Project) => Boolean(
    project.imageSrc && !project.imageSrc.startsWith('data:image/svg+xml'),
  );
  const isShowcaseReady = (project: Project) => Boolean(
    project.isPublished && project.liveUrl && hasShowcaseImage(project),
  );
  const publishedProjects = projects.filter(isShowcaseReady);
  const projectRouteProject = projectSlug
    ? projects.find((project) => project.slug === projectSlug && isShowcaseReady(project))
    : null;

  useEffect(() => {
    if (projectRouteProject) {
      updateSeoMetadata({
        title: `${projectRouteProject.title[language]} | Dev Stage`,
        description: projectRouteProject.description[language],
        path: localizedPath(language, projectRouteProject.slug),
        language,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: projectRouteProject.title[language],
          headline: projectRouteProject.title[language],
          description: projectRouteProject.description[language],
          image: toAbsoluteUrl('/og-image.svg'),
          url: toAbsoluteUrl(localizedPath(language, projectRouteProject.slug)),
          inLanguage: language,
          creator: { '@type': 'Person', name: profile.name[language] },
        },
      });
      return;
    }

    updateSeoMetadata({
      title: language === 'ar' ? 'ديف ستيج — معرض المشاريع' : 'Dev Stage — Project Portfolio',
      description: language === 'ar'
        ? 'معرض ثنائي اللغة لمشاريع الويب والهاتف والأنظمة التي صممها وبناها هاني.'
        : 'A bilingual project portfolio and showroom for thoughtful web, mobile, and systems work.',
      path: localizedPath(language),
      language,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: language === 'ar' ? 'معرض مشاريع ديف ستيج' : 'Dev Stage Project Portfolio',
        description: language === 'ar'
          ? 'معرض ثنائي اللغة لمشاريع الويب والهاتف والأنظمة.'
          : 'A bilingual portfolio of web, mobile, and systems projects.',
        url: toAbsoluteUrl(localizedPath(language)),
        inLanguage: language,
        author: { '@type': 'Person', name: profile.name[language] },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: publishedProjects.slice(0, 50).map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: toAbsoluteUrl(localizedPath(language, project.slug)),
            name: project.title[language],
          })),
        },
      },
    });
  }, [language, profile, projectRouteProject, publishedProjects]);
  const categoryLabels: Record<string, { en: string; ar: string }> = {
    Web: { en: 'Web Projects', ar: 'مشاريع الويب' },
    Mobile: { en: 'Mobile Projects', ar: 'مشاريع الهاتف' },
    Tools: { en: 'Tools & Systems', ar: 'أدوات وأنظمة' },
  };
  const projectCategories = publishedProjects.reduce<string[]>((categories, project) => (
    categories.includes(project.category) ? categories : [...categories, project.category]
  ), []);
  const categories = [
    { id: 'All', en: 'All Works', ar: 'كل الأعمال' },
    ...projectCategories
      .sort()
      .map((category) => ({
        id: category,
        en: categoryLabels[category]?.en ?? category,
        ar: categoryLabels[category]?.ar ?? category,
      })),
  ];

  const filteredProjects = selectedCategory === 'All'
    ? publishedProjects
    : publishedProjects.filter(p => p.category === selectedCategory);

  const carouselProjects = publishedProjects;
  const focusRailItems: FocusRailItem[] = carouselProjects.map(p => ({
    id: p.id,
    title: p.title[language],
    description: p.description[language],
    meta: p.meta[language],
    imageSrc: p.imageSrc,
    liveUrl: p.liveUrl,
    logoSrc: p.logoSrc,
    category: p.category,
    client: p.client[language],
    href: localizedPath(language, p.slug),
  }));

  return (
    <>
      <div className="min-h-screen bg-[#F9F8F6] dark:bg-[#0E0D0C] pb-20 text-[#1A1A1A] dark:text-[#F4F2ED] font-sans-luxury selection:bg-[#D4AF37] selection:text-[#1A1A1A] antialiased paper-noise-bg relative transition-colors duration-300 md:pb-0">
          
          {/* Falling Wave Background Theme Skin Layer */}
          <ThemeWaveOverlay
            isAnimating={waveState.isAnimating}
            targetTheme={waveState.targetTheme}
            onComplete={handleWaveComplete}
          />

          {/* Subtle Visible Editorial Grid Lines */}
          <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-[1600px] mx-auto px-6 md:px-16">
            <div className="w-[1px] h-full bg-[#1A1A1A]/5 dark:bg-white/10"></div>
            <div className="w-[1px] h-full bg-[#1A1A1A]/5 dark:bg-white/10"></div>
            <div className="w-[1px] h-full bg-[#1A1A1A]/5 dark:bg-white/10"></div>
            <div className="w-[1px] h-full bg-[#1A1A1A]/5 dark:bg-white/10"></div>
          </div>

          {/* Navigation Header */}
          <div className={projectRouteProject ? 'hidden md:block' : undefined}>
            <Navbar
              language={language}
              onLanguageChange={handleLanguageChange}
              theme={theme}
              onToggleTheme={toggleTheme}
            />
          </div>

          {/* PUBLIC PORTFOLIO SHOWCASE */}
          {projectRouteProject ? (
              <ProjectDetailPage
                project={projectRouteProject}
                language={language}
                onBack={handleProjectBack}
              />
            ) : (
            <main className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-16 py-8 space-y-16">
              <header className="max-w-4xl space-y-4">
                <p className="text-xs font-mono tracking-[0.25em] rtl:tracking-normal text-[#D4AF37] uppercase">
                  {isAr ? 'ديف ستيج / معرض رقمي' : 'DEV STAGE / DIGITAL SHOWROOM'}
                </p>
                <h1 className="max-w-3xl font-serif-luxury text-4xl font-bold leading-tight text-[#1A1A1A] dark:text-[#F4F2ED] sm:text-6xl">
                  {isAr ? 'منتجات رقمية واضحة ومفيدة' : 'Thoughtful digital products, built with clarity'}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-[#6C6863] dark:text-[#A39E98] sm:text-lg">
                  {isAr
                    ? 'معرض هاني محمود لمشاريع الويب والهاتف والأنظمة، من الفكرة إلى التنفيذ.'
                    : 'A portfolio by Hany Mahmoud featuring web, mobile, and systems work—from first idea to useful shipped product.'}
                </p>
              </header>
              
              {/* 3D FOCUS RAIL FEATURED SHOWCASE (TOP CENTERPIECE) */}
              <section className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1A1A1A]/15 dark:border-white/15 pb-4">
                  <div>
                    <span className="text-xs font-mono tracking-[0.25em] rtl:tracking-normal text-[#D4AF37] uppercase flex items-center gap-2">
                      <Feather className="h-4 w-4 shrink-0" />
                      {isAr ? 'المشاريع المختارة' : 'CURATED WORK'}
                    </span>
                    <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-2 leading-tight sm:leading-snug">
                      {isAr ? 'معرض الأعمال الرئيسي' : 'Featured Gallery'}
                    </h2>
                  </div>
                </div>

                {/* The FocusRail Carousel Component */}
                <FocusRail
                  items={focusRailItems}
                  isArabic={isAr}
                  autoPlay={true}
                  interval={10000}
                  loop={true}
                  onSelectProject={(item) => {
                    const project = projects.find((candidate) => candidate.id === item.id);
                    if (project) openProjectDetails(project);
                  }}
                />
              </section>

              {/* Profile Author Editorial Card */}
              <div id="profile-card" className="scroll-mt-24">
                <ProfileCard profile={profile} language={language} />
              </div>

              {/* FILTERABLE PROJECT DIRECTORY GRID */}
              <section id="project-showroom" className="scroll-mt-24 space-y-8 pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1A1A1A]/15 dark:border-white/15 pb-6">
                  <div>
                    <span className="text-xs font-mono tracking-[0.25em] rtl:tracking-normal text-[#D4AF37] uppercase">
                      {isAr ? 'أعمال مختارة' : 'SELECTED WORKS'}
                    </span>
                    <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-2 leading-tight sm:leading-snug">
                      {isAr ? 'معرض المشاريع' : 'Project Showroom'}
                    </h2>
                  </div>

                  {/* Category Filter Dropdown Menu */}
                  <div className="relative w-full sm:w-auto min-w-[220px] sm:min-w-[260px]">
                    <div className="relative flex items-center bg-[#EBE5DE] dark:bg-[#1A1918] border border-[#1A1A1A]/20 dark:border-white/20 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-colors duration-300 shadow-sm">
                      <div className="flex items-center gap-2 ltr:pl-3.5 ltr:pr-2 rtl:pr-3.5 rtl:pl-2 py-2.5 text-[#D4AF37] pointer-events-none shrink-0">
                        <Filter className="h-4 w-4" />
                        <span className="text-[11px] font-mono tracking-wider rtl:tracking-normal uppercase text-[#6C6863] dark:text-[#A39E98] shrink-0">
                          {isAr ? 'التصنيف:' : 'Category:'}
                        </span>
                      </div>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        aria-label={isAr ? 'تصفية المشاريع حسب التصنيف' : 'Filter projects by category'}
                        className="w-full bg-transparent py-2.5 ltr:pl-1 ltr:pr-9 rtl:pr-1 rtl:pl-9 text-xs font-mono tracking-wider rtl:tracking-normal uppercase text-[#1A1A1A] dark:text-[#F4F2ED] focus:outline-none cursor-pointer appearance-none font-semibold"
                      >
                        {categories.map((cat) => (
                          <option
                            key={cat.id}
                            value={cat.id}
                            className="bg-[#F9F8F6] dark:bg-[#141312] text-[#1A1A1A] dark:text-[#F4F2ED] py-2"
                          >
                            {isAr ? cat.ar : cat.en}
                          </option>
                        ))}
                      </select>
                      <div className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4AF37]">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid Items: Immersive Image-First Presentation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((proj) => (
                    <article
                      key={proj.id}
                      className="group relative flex w-full flex-col overflow-hidden bg-[#F9F8F6] text-left dark:bg-[#141312] rtl:text-right border border-[#1A1A1A]/20 dark:border-white/20 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)]"
                    >
                      <button
                        type="button"
                        onClick={() => openProjectDetails(proj)}
                        className="flex w-full flex-1 flex-col space-y-4 p-5 text-left rtl:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
                      >
                        {/* Dominant Image Container */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/20 dark:border-white/20">
                          <img
                            src={proj.imageSrc}
                            alt={proj.title[language]}
                            className="h-full w-full object-contain transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-2.5 ltr:right-2.5 rtl:left-2.5 bg-[#1A1A1A]/90 dark:bg-[#0E0D0C]/90 text-[#F4F2ED] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border border-[#D4AF37]/40">
                            {proj.category}
                          </div>
                        </div>

                        {/* Title and Metadata */}
                        <div className="space-y-1.5">
                          <div className="flex items-start justify-between gap-3">
                            <span className="min-w-0 flex-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                              {proj.meta[language]}
                            </span>
                            <span className="shrink-0 pt-0.5 text-[10px] font-mono text-[#6C6863] dark:text-[#A39E98]">
                              {proj.year}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ProjectLogo name={proj.title[language]} logoSrc={proj.logoSrc} className="h-10 w-10" />
                            <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] group-hover:text-[#D4AF37] transition-colors duration-300">
                              {proj.title[language]}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#6C6863] dark:text-[#A39E98] line-clamp-2 leading-relaxed font-sans-luxury">
                            {proj.description[language]}
                          </p>
                        </div>
                      </button>

                      <div className="flex items-center justify-between gap-4 border-t border-[#1A1A1A]/10 dark:border-white/10 px-5 py-3.5 text-xs">
                        {proj.liveUrl ? (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(event) => {
                              event.stopPropagation();
                              trackEvent('project_live_site_clicked', {
                                project_slug: proj.slug,
                                category: proj.category,
                                source: 'project_grid',
                              });
                            }}
                            className="inline-flex min-h-11 items-center gap-1 font-mono text-[10px] font-semibold tracking-wider text-[#6C6863] dark:text-[#A39E98] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                          >
                            {isAr ? 'زيارة الموقع' : 'VISIT WEBSITE'}
                            <ArrowUpRight className="h-3.5 w-3.5 text-[#D4AF37]" />
                          </a>
                        ) : (
                          <span className="font-mono text-[10px] text-[#6C6863] dark:text-[#A39E98]">{proj.client[language]}</span>
                        )}
                        <a
                          href={localizedPath(language, proj.slug)}
                          onClick={(event) => {
                            event.preventDefault();
                            openProjectDetails(proj);
                          }}
                          className="flex min-h-11 items-center gap-1 font-mono text-xs font-bold tracking-wider text-[#1A1A1A] dark:text-[#F4F2ED] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors"
                        >
                          {isAr ? 'التفاصيل' : 'DETAILS'}
                          <ArrowUpRight className="h-4 w-4 text-[#D4AF37] ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Luxury Editorial Footer */}
              <footer className="border-t border-[#1A1A1A]/15 dark:border-white/15 pt-12 pb-16 text-center text-xs text-[#6C6863] dark:text-[#A39E98] space-y-3 font-sans-luxury">
                <p className="font-serif-luxury text-base text-[#1A1A1A] dark:text-[#F4F2ED]">
                  {isAr 
                    ? 'ديف ستيج • معرض الأعمال والمشاريع المختارة'
                    : 'Dev Stage • Selected Works & Project Showroom'}
                </p>
                <p dir="ltr" className="font-mono text-[11px] text-[#6C6863] dark:text-[#A39E98] tracking-widest uppercase">
                  © {new Date().getFullYear()} {profile.name[language]} — ALL RIGHTS RESERVED.
                </p>
                <VisitorCounter language={language} className="justify-center pt-2" />
              </footer>

            </main>
          )}

          <MobileBottomNav
            language={language}
            onLanguageChange={handleLanguageChange}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        </div>

        <ProjectDetailModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />

    </>
  );
}
