import {useState} from 'react';
import {Grid2X2, Home, LayoutDashboard, UserRound} from 'lucide-react';
import type {Language} from '../types';

type MobileBottomNavProps = Readonly<{
  language: Language;
  activeView: 'portfolio' | 'dashboard';
  onViewChange: (view: 'portfolio' | 'dashboard') => void;
}>;

type NavItemId = 'home' | 'works' | 'profile' | 'studio';

const navItems = [
  {id: 'home' as const, Icon: Home, en: 'Home', ar: 'الرئيسية'},
  {id: 'works' as const, Icon: Grid2X2, en: 'Works', ar: 'الأعمال'},
  {id: 'profile' as const, Icon: UserRound, en: 'Profile', ar: 'الملف'},
  {id: 'studio' as const, Icon: LayoutDashboard, en: 'Studio', ar: 'الاستوديو'},
];

export function MobileBottomNav({language, activeView, onViewChange}: MobileBottomNavProps) {
  const isAr = language === 'ar';
  const [activeItem, setActiveItem] = useState<NavItemId>(activeView === 'dashboard' ? 'studio' : 'home');
  const portfolioActiveItem = activeItem === 'studio' ? 'home' : activeItem;

  const goToPortfolioSection = (id: NavItemId, targetId?: string) => {
    setActiveItem(id);
    onViewChange('portfolio');

    window.setTimeout(() => {
      if (!targetId) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        return;
      }

      document.getElementById(targetId)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 0);
  };

  const handleNavigation = (id: NavItemId) => {
    if (id === 'studio') {
      setActiveItem('studio');
      onViewChange('dashboard');
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (id === 'works') {
      goToPortfolioSection('works', 'project-showroom');
      return;
    }

    if (id === 'profile') {
      goToPortfolioSection('profile', 'profile-card');
      return;
    }

    goToPortfolioSection('home');
  };

  return (
    <nav
      aria-label={isAr ? 'التنقل السفلي' : 'Mobile navigation'}
      dir={isAr ? 'rtl' : 'ltr'}
      className="fixed inset-x-0 bottom-0 z-[55] border-t border-white/15 bg-[#0E0D0C]/95 text-[#F4F2ED] shadow-[0_-8px_24px_rgba(0,0,0,0.25)] backdrop-blur-lg md:hidden"
    >
      <div className="mx-auto grid max-w-xl grid-cols-4 px-2 pb-[env(safe-area-inset-bottom)]">
        {navItems.map(({id, Icon, en, ar}) => {
          const isActive = (activeView === 'dashboard' && id === 'studio')
            || (activeView === 'portfolio' && id === portfolioActiveItem);

          return (
            <button
              key={id}
              type="button"
              onClick={() => handleNavigation(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-[10px] font-mono uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37] ${
                isActive ? 'text-[#D4AF37]' : 'text-[#A39E98] hover:text-[#F4F2ED]'
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.4 : 1.8} aria-hidden="true" />
              <span>{isAr ? ar : en}</span>
              {isActive && <span className="absolute inset-x-5 top-0 h-0.5 bg-[#D4AF37]" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
