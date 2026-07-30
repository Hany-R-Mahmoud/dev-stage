import React, { useState, useEffect } from 'react';
import { Project, Profile, Language } from './types';
import { PORTFOLIO_PROJECTS, PORTFOLIO_PROFILE } from './data/portfolioData';
import { FocusRail, FocusRailItem } from './components/ui/focus-rail';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { ProjectLogo } from './components/ProjectLogo';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { Dashboard } from './components/Dashboard';
import { ThemeWaveOverlay } from './components/ThemeWaveOverlay';
import { toAbsoluteUrl, updateSeoMetadata } from './lib/seo';
import { 
  Sparkles, Layers, ArrowUpRight, Feather, Filter, ChevronDown
} from 'lucide-react';

type RouteState = Readonly<{
  view: 'portfolio' | 'dashboard';
  projectSlug: string | null;
  language: Language;
}>;

function readRoute(): RouteState {
  if (typeof window === 'undefined') {
    return { view: 'portfolio', projectSlug: null, language: 'en' };
  }

  const segments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
  const language: Language = segments[0] === 'ar' ? 'ar' : 'en';
  const routeSegments = segments[0] === 'ar' || segments[0] === 'en' ? segments.slice(1) : segments;

  if (routeSegments[0] === 'dashboard') {
    return { view: 'dashboard', projectSlug: null, language };
  }

  if (routeSegments[0] === 'projects' && routeSegments[1]) {
    return { view: 'portfolio', projectSlug: routeSegments[1], language };
  }

  return { view: 'portfolio', projectSlug: null, language };
}

function localizedPath(language: Language, view: 'portfolio' | 'dashboard', projectSlug?: string | null): string {
  const prefix = language === 'ar' ? '/ar' : '/en';
  if (view === 'dashboard') return `${prefix}/dashboard`;
  if (projectSlug) return `${prefix}/projects/${projectSlug}`;
  return `${prefix}/`;
}

export default function App() {
  const storageKeys = {
    projects: 'apexyard_projects_v1',
    profile: 'apexyard_profile_v1',
  };
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

  const [activeView, setActiveView] = useState<'portfolio' | 'dashboard'>(initialRoute.view);
  const [projectSlug, setProjectSlug] = useState<string | null>(initialRoute.projectSlug);

  const handleViewChange = (view: 'portfolio' | 'dashboard') => {
    setActiveView(view);
    setProjectSlug(null);
    const targetPath = localizedPath(language, view);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const targetPath = localizedPath(nextLanguage, activeView, projectSlug);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  // Sync back/forward browser history buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = readRoute();
      setLanguage(route.language);
      setActiveView(route.view);
      setProjectSlug(route.projectSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem(storageKeys.projects);
    if (!saved) return PORTFOLIO_PROJECTS;

    const savedProjects = JSON.parse(saved) as Project[];
    const savedById = new Map(savedProjects.map((project) => [project.id, project]));

    return PORTFOLIO_PROJECTS.map((project) => {
      const savedProject = savedById.get(project.id);
      return savedProject
        ? {
            ...savedProject,
            title: project.title,
            description: project.description,
            client: project.client,
            liveUrl: project.liveUrl,
            contentMDX: project.contentMDX,
            features: project.features,
            progress: project.progress,
            issues: project.issues,
            suggestions: project.suggestions,
            imageSrc: project.imageSrc,
            galleryImages: project.galleryImages,
          }
        : project;
    });
  });

  const [profile, setProfile] = useState<Profile>(() => {
    const saved = localStorage.getItem(storageKeys.profile);
    return saved
      ? {
          ...JSON.parse(saved),
          title: PORTFOLIO_PROFILE.title,
          bio: PORTFOLIO_PROFILE.bio,
          email: PORTFOLIO_PROFILE.email,
          linkedin: PORTFOLIO_PROFILE.linkedin,
        }
      : PORTFOLIO_PROFILE;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem(storageKeys.projects, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(storageKeys.profile, JSON.stringify(profile));
  }, [profile]);

  // Handle document direction and language attributes
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const isAr = language === 'ar';

  // Filter projects for the main portfolio view
  const publishedProjects = projects.filter(p => p.isPublished);
  const projectRouteProject = projectSlug ? projects.find((project) => project.slug === projectSlug && project.isPublished) : null;

  useEffect(() => {
    if (activeView === 'dashboard') {
      updateSeoMetadata({
        title: language === 'ar' ? 'استوديو إدارة المحتوى — ديف ستيج' : 'Dev Stage Editorial CMS Studio',
        description: language === 'ar' ? 'مساحة إدارة داخلية لمعرض مشاريع ديف ستيج.' : 'Internal content management workspace for the Dev Stage project portfolio.',
        path: localizedPath(language, 'dashboard'),
        language,
        noindex: true,
      });
      return;
    }

    if (projectRouteProject) {
      updateSeoMetadata({
        title: `${projectRouteProject.title[language]} | Dev Stage`,
        description: projectRouteProject.description[language],
        path: localizedPath(language, 'portfolio', projectRouteProject.slug),
        language,
        type: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: projectRouteProject.title[language],
          headline: projectRouteProject.title[language],
          description: projectRouteProject.description[language],
          image: toAbsoluteUrl('/og-image.svg'),
          url: toAbsoluteUrl(localizedPath(language, 'portfolio', projectRouteProject.slug)),
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
      path: localizedPath(language, 'portfolio'),
      language,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: language === 'ar' ? 'معرض مشاريع ديف ستيج' : 'Dev Stage Project Portfolio',
        description: language === 'ar'
          ? 'معرض ثنائي اللغة لمشاريع الويب والهاتف والأنظمة.'
          : 'A bilingual portfolio of web, mobile, and systems projects.',
        url: toAbsoluteUrl(localizedPath(language, 'portfolio')),
        inLanguage: language,
        author: { '@type': 'Person', name: profile.name[language] },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: publishedProjects.slice(0, 50).map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: toAbsoluteUrl(localizedPath(language, 'portfolio', project.slug)),
            name: project.title[language],
          })),
        },
      },
    });
  }, [activeView, language, profile, projectRouteProject, publishedProjects, projectSlug]);
  const categoryLabels: Record<string, { en: string; ar: string }> = {
    Web: { en: 'Web Projects', ar: 'مشاريع الويب' },
    Mobile: { en: 'Mobile Projects', ar: 'مشاريع الهاتف' },
    Tools: { en: 'Tools & Systems', ar: 'أدوات وأنظمة' },
  };
  const projectCategories = projects.reduce<string[]>((categories, project) => (
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

  const hasRemoteCover = (project: Project) => /^https?:\/\//.test(project.imageSrc);
  const orderProjectsByImage = (projectList: Project[]) => [
    ...projectList.filter(hasRemoteCover),
    ...projectList.filter((project) => !hasRemoteCover(project)),
  ];
  const filteredProjects = selectedCategory === 'All'
    ? orderProjectsByImage(publishedProjects)
    : orderProjectsByImage(publishedProjects.filter(p => p.category === selectedCategory));

  // The carousel is reserved for projects with a real cover image URL.
  const carouselProjects = publishedProjects.filter((project) => /^https?:\/\//.test(project.imageSrc));
  const focusRailItems: FocusRailItem[] = carouselProjects.map(p => ({
    id: p.id,
    title: p.title[language],
    description: p.description[language],
    meta: p.meta[language],
    imageSrc: p.imageSrc,
    liveUrl: p.liveUrl,
    category: p.category,
    client: p.client[language],
    href: localizedPath(language, 'portfolio', p.slug),
  }));

  return (
    <>
      <div className="min-h-screen bg-[#F9F8F6] dark:bg-[#0E0D0C] text-[#1A1A1A] dark:text-[#F4F2ED] font-sans-luxury selection:bg-[#D4AF37] selection:text-[#1A1A1A] antialiased paper-noise-bg relative transition-colors duration-300">
          
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
          <Navbar
            language={language}
            onLanguageChange={handleLanguageChange}
            activeView={activeView}
            onViewChange={handleViewChange}
            theme={theme}
            onToggleTheme={toggleTheme}
            onNewProject={() => {
              handleViewChange('dashboard');
            }}
          />

          {/* VIEW 1: PUBLIC PORTFOLIO SHOWCASE (/home) */}
          {activeView === 'portfolio' ? (
            projectRouteProject ? (
              <ProjectDetailPage project={projectRouteProject} language={language} />
            ) : (
            <main className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-16 py-8 space-y-16">
              <h1 className="sr-only">
                {isAr ? 'معرض مشاريع ديف ستيج' : 'Dev Stage Project Portfolio'}
              </h1>
              
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
                    if (project) setSelectedProject(project);
                  }}
                />
              </section>

              {/* Profile Author Editorial Card */}
              <ProfileCard profile={profile} language={language} />

              {/* FILTERABLE PROJECT DIRECTORY GRID */}
              <section className="space-y-8 pt-6">
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
                    <button
                      type="button"
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className="group relative flex w-full flex-col justify-between overflow-hidden bg-[#F9F8F6] text-left dark:bg-[#141312] rtl:text-right border border-[#1A1A1A]/20 dark:border-white/20 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] p-5 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] cursor-pointer"
                    >
                      <div className="space-y-4">
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
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
                              {proj.meta[language]}
                            </span>
                            <span className="text-[10px] font-mono text-[#6C6863] dark:text-[#A39E98]">
                              {proj.year}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <ProjectLogo name={proj.title[language]} liveUrl={proj.liveUrl} className="h-10 w-10" />
                            <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] group-hover:text-[#D4AF37] transition-colors duration-300">
                              {proj.title[language]}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-[#6C6863] dark:text-[#A39E98] line-clamp-2 leading-relaxed font-sans-luxury">
                            {proj.description[language]}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 dark:border-white/10 pt-3.5 mt-5 text-xs">
                        <span className="font-mono text-[10px] text-[#6C6863] dark:text-[#A39E98]">{proj.client[language]}</span>
                        <span className="flex items-center gap-1 font-mono text-xs font-bold tracking-wider text-[#1A1A1A] dark:text-[#F4F2ED] group-hover:text-[#D4AF37] transition-colors">
                          {isAr ? 'التفاصيل' : 'DETAILS'}
                          <ArrowUpRight className="h-4 w-4 text-[#D4AF37] ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </button>
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
              </footer>

            </main>
            )
          ) : (
            /* VIEW 2: CMS DASHBOARD (/dashboard) */
            <Dashboard
              projects={projects}
              profile={profile}
              language={language}
              onSaveProjects={setProjects}
              onSaveProfile={setProfile}
            />
          )}
        </div>

        <ProjectDetailModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />

    </>
  );
}
