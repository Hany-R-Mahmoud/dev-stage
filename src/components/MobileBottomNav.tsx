import {useState} from 'react';
import {Grid2X2, Home, Menu, Moon, Sun, UserRound} from 'lucide-react';
import type {Language} from '../types';

type MobileBottomNavProps = Readonly<{
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}>;

type NavItemId = 'home' | 'works' | 'profile' | 'more';

const navItems = [
  {id: 'home' as const, Icon: Home, en: 'Home', ar: 'الرئيسية'},
  {id: 'works' as const, Icon: Grid2X2, en: 'Works', ar: 'الأعمال'},
  {id: 'profile' as const, Icon: UserRound, en: 'Profile', ar: 'الملف'},
  {id: 'more' as const, Icon: Menu, en: 'More', ar: 'المزيد'},
];

export function MobileBottomNav({language, onLanguageChange, theme, onToggleTheme}: MobileBottomNavProps) {
  const isAr = language === 'ar';
  const [activeItem, setActiveItem] = useState<NavItemId>('home');
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const closeMore = () => {
    setIsMoreOpen(false);
    setActiveItem('home');
  };

  const goToPortfolioSection = (id: NavItemId, targetId?: string) => {
    setActiveItem(id);

    window.setTimeout(() => {
      if (!targetId) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        return;
      }

      document.getElementById(targetId)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 0);
  };

  const handleNavigation = (id: NavItemId) => {
    if (id === 'more') {
      setIsMoreOpen((isOpen) => {
        setActiveItem(isOpen ? 'home' : 'more');
        return !isOpen;
      });
      return;
    }

    closeMore();

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
      {isMoreOpen && (
        <div id="mobile-more-menu" role="menu" aria-label={isAr ? 'إعدادات إضافية' : 'More options'} className="absolute inset-x-2 bottom-[calc(100%+0.5rem)] border border-white/15 bg-[#181716]/[.98] p-2 text-[#F4F2ED] shadow-2xl">
          <div className="grid gap-1">
            <button
              type="button"
              role="menuitem"
              onClick={() => { onToggleTheme(); closeMore(); }}
              className="flex min-h-12 items-center gap-3 px-3 text-start text-xs font-mono uppercase tracking-[0.12em] text-[#A39E98] transition-colors hover:bg-white/5 hover:text-[#F4F2ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" /> : <Moon className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />}
              <span>{theme === 'dark' ? (isAr ? 'الوضع الفاتح' : 'Light theme') : (isAr ? 'الوضع الداكن' : 'Dark theme')}</span>
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => { onLanguageChange(isAr ? 'en' : 'ar'); closeMore(); }}
              className="flex min-h-12 items-center gap-3 px-3 text-start text-xs font-mono uppercase tracking-[0.12em] text-[#A39E98] transition-colors hover:bg-white/5 hover:text-[#F4F2ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
            >
              <span className="flex h-4 w-4 items-center justify-center text-[#D4AF37]">ع</span>
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      )}
      <div className="mx-auto grid max-w-xl grid-cols-4 px-2 pb-[env(safe-area-inset-bottom)]">
        {navItems.map(({id, Icon, en, ar}) => {
          const isActive = (id === 'more' && isMoreOpen)
            || id === activeItem;

          return (
            <button
              key={id}
              type="button"
              onClick={() => handleNavigation(id)}
              aria-current={isActive ? 'page' : undefined}
              aria-expanded={id === 'more' ? isMoreOpen : undefined}
              aria-haspopup={id === 'more' ? 'menu' : undefined}
              aria-controls={id === 'more' ? 'mobile-more-menu' : undefined}
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
