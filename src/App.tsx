import React, { useState, useEffect, useRef } from 'react';
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
import { MergedProjectsSection } from './components/MergedProjectsSection';
import { ProjectDirectory } from './components/ProjectDirectory';
import { getProjectDirectory, visibilityOf } from './lib/projectDirectory';
import type { ProjectCategoryId } from './data/projectCategories';
import { toAbsoluteUrl, updateSeoMetadata } from './lib/seo';
import { Feather } from 'lucide-react';

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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [exploreRequest, setExploreRequest] = useState<{id: ProjectCategoryId; token: number} | null>(null);
  const [savedCarouselCategory, setSavedCarouselCategory] = useState<string>(() => {
    try { return window.sessionStorage.getItem('devstage-carousel-v2') ?? ''; } catch { return ''; }
  });
  const directoryScrollRef = useRef(0);
  const handleExploreCategory = (id: string) => {
    setExploreRequest(previous => ({id:id as ProjectCategoryId, token:(previous?.token ?? 0)+1}));
  };

  const openProjectDetails = (project: Project) => {
    if (!isCompactViewport) {
      setSelectedProject(project);
      return;
    }

    setSelectedProject(null);
    directoryScrollRef.current = window.scrollY;
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
    window.requestAnimationFrame(() => window.scrollTo({top: directoryScrollRef.current, behavior: 'instant'}));
  };

  // Handle document direction and language attributes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const isAr = language === 'ar';

  const {
    active: publishedProjects, routable: routableProjects, removed: removedProjects,
    unlisted: unlistedProjects, categoryGroups, representatives, mergedGroups,
  } = getProjectDirectory(projects);
  const projectRouteProject = projectSlug ? routableProjects.find(project => project.slug === projectSlug) : null;
  const removedRouteProject = projectSlug ? removedProjects.find(project => project.slug === projectSlug) : undefined;
  const unlistedRoute = projectRouteProject ? unlistedProjects.some(p => p.slug === projectRouteProject.slug) : false;
  const projectRouteDestination = projectRouteProject?.mergedInto ? projects.find(project => project.slug === projectRouteProject.mergedInto?.projectSlug) : undefined;

  useEffect(() => {
    if (removedRouteProject) {
      updateSeoMetadata({
        title: language === 'ar' ? 'المشروع غير متاح | ديف ستيج' : 'Project unavailable | Dev Stage',
        description: language === 'ar' ? 'هذا المشروع لم يعد معروضًا في المعرض.' : 'This project is no longer available in the portfolio.',
        path: localizedPath(language, removedRouteProject.slug),
        language,
        noindex: true,
      });
      return;
    }
    if (projectRouteProject) {
      updateSeoMetadata({
        title: `${projectRouteProject.title[language]}${projectRouteProject.mergedInto ? (language === 'ar' ? ' — مشروع مدمج' : ' — Merged project') : ''} | Dev Stage`,
        description: projectRouteProject.mergedInto && projectRouteDestination ? `${projectRouteProject.description[language]} ${language === 'ar' ? 'تم دمجه داخل' : 'Merged into'} ${projectRouteDestination.title[language]}.` : projectRouteProject.description[language],
        path: localizedPath(language, projectRouteProject.slug),
        language,
        type: 'article',
        noindex: unlistedRoute,
        jsonLd: unlistedRoute ? undefined : {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: projectRouteProject.title[language],
          headline: projectRouteProject.title[language],
          description: projectRouteProject.mergedInto && projectRouteDestination ? `${projectRouteProject.description[language]} ${language === 'ar' ? 'تم دمجه داخل' : 'Merged into'} ${projectRouteDestination.title[language]}.` : projectRouteProject.description[language],
          ...(projectRouteDestination ? { isPartOf: { '@type': 'CreativeWork', name: projectRouteDestination.title[language], url: toAbsoluteUrl(localizedPath(language, projectRouteDestination.slug)) } } : {}),
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
  }, [language, profile, projectRouteProject, projectRouteDestination, removedRouteProject, unlistedRoute, publishedProjects]);
  const focusRailItems: FocusRailItem[] = representatives.map(({category,project}) => ({
    id: category.id,
    projectSlug: project.slug,
    categoryId: category.id,
    title: project.title[language],
    description: project.description[language],
    meta: project.meta[language],
    imageSrc: project.imageSrc,
    liveUrl: project.liveUrl,
    logoSrc: project.logoSrc,
    category: category.title[language],
    client: project.client[language],
    href: localizedPath(language, project.slug),
  }));
  const initialCarouselIndex = Math.max(0, focusRailItems.findIndex(item => item.categoryId === savedCarouselCategory));

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
          <div className={projectRouteProject || removedRouteProject ? 'hidden md:block' : undefined}>
            <Navbar
              language={language}
              onLanguageChange={handleLanguageChange}
              theme={theme}
              onToggleTheme={toggleTheme}
            />
          </div>

          {/* PUBLIC PORTFOLIO SHOWCASE */}
          {removedRouteProject ? (
            <main dir={isAr ? 'rtl' : 'ltr'} className="relative z-10 mx-auto min-h-[60vh] max-w-[900px] space-y-5 px-6 py-20 md:px-16">
              <h1 className="font-serif-luxury text-3xl font-bold sm:text-4xl">{isAr ? 'المشروع غير متاح' : 'Project unavailable'}</h1>
              <p className="text-[#6C6863] dark:text-[#A39E98]">{isAr ? 'هذا المشروع لم يعد معروضًا في المعرض. يمكنك استكشاف المشاريع الأخرى.' : 'This project is no longer listed in the public portfolio. Explore the available projects instead.'}</p>
              <button type="button" onClick={handleProjectBack} className="min-h-11 border border-[#D4AF37] px-4 py-2 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'العودة للمشاريع' : 'Back to projects'}</button>
            </main>
          ) : projectRouteProject ? (
              <ProjectDetailPage
                project={projectRouteProject}
                mergeDestination={projectRouteDestination}
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
              
              {/* One representative from every nonempty active category. */}
              {focusRailItems.length>0 && <section className="space-y-4" aria-label={isAr?'معرض الأقسام':'Category representatives'}>
                <div className="flex flex-col justify-between gap-4 border-b border-[#1A1A1A]/15 pb-4 dark:border-white/15 md:flex-row md:items-end">
                  <div>
                    <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A88620] dark:text-[#D4AF37]">
                      <Feather className="h-4 w-4" aria-hidden="true"/>{isAr?'المشاريع المختارة':'CURATED WORK'}
                    </span>
                    <h2 className="mt-2 font-serif-luxury text-3xl font-bold sm:text-4xl">{isAr?'مشروع من كل قسم':'One project from each category'}</h2>
                  </div>
                </div>
                <FocusRail
                  items={focusRailItems} initialIndex={initialCarouselIndex}
                  isArabic={isAr} autoPlay={true} interval={10000} loop={focusRailItems.length>1}
                  onActiveCategoryChange={id=>{
                    setSavedCarouselCategory(id);
                    try {window.sessionStorage.setItem('devstage-carousel-v2',id)} catch {/* optional */}
                  }}
                  onExploreCategory={handleExploreCategory}
                  onSelectProject={item=>{
                    const project=projects.find(candidate=>candidate.slug===item.projectSlug);
                    if(project)openProjectDetails(project);
                  }}
                />
              </section>}

              {/* Profile Author Editorial Card */}
              <div id="profile-card" className="scroll-mt-24">
                <ProfileCard profile={profile} language={language} />
              </div>

              <ProjectDirectory
                groups={categoryGroups}
                language={language}
                onOpenDetails={openProjectDetails}
                exploreRequest={exploreRequest}
              />

              <MergedProjectsSection groups={mergedGroups} language={language} onOpenDetails={openProjectDetails} />

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
          mergeDestination={selectedProject?.mergedInto ? projects.find(project => project.slug === selectedProject.mergedInto?.projectSlug) : undefined}
          language={language}
          onClose={() => setSelectedProject(null)}
        />

    </>
  );
}
