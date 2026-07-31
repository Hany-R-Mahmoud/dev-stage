import React from 'react';
import { Language } from '../types';
import { Plus, Moon, Sun } from 'lucide-react';
import { DevStageLogoMark } from './DevStageLogoMark';
import { PwaInstallMenuAction } from './PwaInstallMenuAction';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: 'portfolio' | 'dashboard';
  onViewChange: (view: 'portfolio' | 'dashboard') => void;
  onNewProject?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeView,
  onViewChange,
  onNewProject,
  theme = 'dark',
  onToggleTheme,
}) => {
  const isAr = language === 'ar';
  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all backdrop-blur-md ${
      isDark 
        ? 'border-white/10 bg-[#0E0D0C]/90 text-[#F4F2ED]' 
        : 'border-[#1A1A1A]/15 bg-[#F9F8F6]/90 text-[#1A1A1A]'
    }`}>
      <nav aria-label={isAr ? 'التنقل الرئيسي' : 'Primary navigation'} className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-16">
        
        {/* Logo & Brand Monogram */}
        <button 
          onClick={() => onViewChange('portfolio')}
          className="flex items-center gap-3 text-start cursor-pointer group"
          aria-label={isAr ? 'العودة إلى معرض ديف ستيج' : 'Return to Dev Stage portfolio'}
        >
          <DevStageLogoMark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <div className="flex flex-col">
            <span className={`font-serif-luxury text-base font-bold tracking-wider uppercase leading-none ${
              isDark ? 'text-[#F4F2ED]' : 'text-[#1A1A1A]'
            }`}>
              {isAr ? (
                <>ديف <span className="text-[#D4AF37] font-serif-luxury font-normal">ستيج</span></>
              ) : (
                <>Dev <span className="text-[#D4AF37] font-serif-luxury font-normal">Stage</span></>
              )}
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* New Project Quick Button if in Dashboard */}
          {activeView === 'dashboard' && onNewProject && (
            <button
              onClick={onNewProject}
              className="flex items-center gap-1.5 bg-[#D4AF37] text-[#1A1A1A] px-4 py-2 text-xs tracking-[0.2em] font-bold uppercase transition hover:bg-white hover:text-[#1A1A1A] cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>{isAr ? 'مشروع جديد' : 'NEW PROJECT'}</span>
            </button>
          )}

          <div className="hidden items-center gap-3 sm:gap-4 md:flex">
            {/* Theme Mode Switcher */}
            <PwaInstallMenuAction language={language} dark={isDark} />

            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`flex items-center justify-center h-8 w-8 border transition-colors duration-300 cursor-pointer ${
                  isDark
                    ? 'border-white/20 hover:border-white text-[#F4F2ED] bg-[#181716]'
                    : 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#1A1A1A] bg-[#EBE5DE]/60'
                }`}
                title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-[#D4AF37]" />
                ) : (
                  <Moon className="h-4 w-4 text-[#D4AF37]" />
                )}
              </button>
            )}

            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(isAr ? 'en' : 'ar')}
              className={`flex items-center justify-center h-8 min-w-[34px] border px-2.5 text-xs font-bold tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
                isDark
                  ? 'border-white/20 hover:border-white text-[#F4F2ED]'
                  : 'border-[#1A1A1A]/30 hover:border-[#1A1A1A] text-[#1A1A1A]'
              }`}
              title={isAr ? 'Switch to English' : 'التحويل للعربية'}
            >
              <span className={`inline-flex items-center justify-center leading-none ${!isAr ? 'relative -top-[1.5px]' : ''}`}>
                {isAr ? 'EN' : 'ع'}
              </span>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};
