import {Download, ExternalLink, X} from 'lucide-react';
import type {Language} from '../types';
import {usePwa} from '../pwa/PwaContext';

type PwaStatusBarProps = Readonly<{
  language: Language;
  dark: boolean;
}>;

export function PwaStatusBar({language, dark}: PwaStatusBarProps) {
  const {showPromotion, isLikelyWebView, platform, canInstall, install, openHelp, dismissPromotion} = usePwa();
  if (!showPromotion) return null;

  const isAr = language === 'ar';
  const title = isLikelyWebView
    ? (isAr ? 'افتح ديف ستيج في المتصفح للتثبيت' : 'Open Dev Stage in your browser to install')
    : platform === 'ios'
      ? (isAr ? 'أضف ديف ستيج إلى الشاشة الرئيسية' : 'Add Dev Stage to your Home Screen')
      : (isAr ? 'ثبّت ديف ستيج للوصول السريع' : 'Install Dev Stage for quick access');

  return (
    <div
      role="status"
      className={`relative z-30 mx-4 my-3 flex items-center gap-3 border px-3 py-2.5 shadow-lg md:mx-auto md:max-w-3xl ${
        dark ? 'border-[#D4AF37]/35 bg-[#181716]/95 text-[#F4F2ED]' : 'border-[#8C6B11]/30 bg-[#F9F8F6]/95 text-[#1A1A1A]'
      }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <Download className="h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
      <p className="min-w-0 flex-1 text-xs font-semibold leading-relaxed sm:text-sm">{title}</p>
      <button
        type="button"
        onClick={() => { if (canInstall) void install(); else openHelp(); }}
        className="inline-flex min-h-11 shrink-0 items-center gap-1.5 border border-[#D4AF37] px-3 text-xs font-bold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        {isLikelyWebView ? <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        {isAr ? (isLikelyWebView ? 'فتح' : 'تثبيت') : (isLikelyWebView ? 'OPEN' : 'INSTALL')}
      </button>
      <button
        type="button"
        onClick={dismissPromotion}
        aria-label={isAr ? 'إخفاء إشعار التثبيت' : 'Dismiss installation notice'}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#6C6863] transition hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
