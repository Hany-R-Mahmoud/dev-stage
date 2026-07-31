import {useEffect, useState} from 'react';
import {Copy, ExternalLink, X} from 'lucide-react';
import type {Language} from '../types';
import {usePwa} from '../pwa/PwaContext';

type PwaInstallHelpDialogProps = Readonly<{
  language: Language;
  dark: boolean;
}>;

export function PwaInstallHelpDialog({language, dark}: PwaInstallHelpDialogProps) {
  const {helpOpen, closeHelp, platform, isLikelyWebView, androidIntentUrl, currentUrl, copyCurrentUrl, confirmInstalled} = usePwa();
  const [copied, setCopied] = useState(false);
  const isAr = language === 'ar';

  useEffect(() => {
    if (!helpOpen) return undefined;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closeHelp(); };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; };
  }, [closeHelp, helpOpen]);

  if (!helpOpen) return null;

  const copy = async () => {
    setCopied(await copyCurrentUrl());
    window.setTimeout(() => setCopied(false), 2400);
  };
  const title = isAr ? 'تثبيت ديف ستيج' : 'Install Dev Stage';
  const browserInstructions = platform === 'ios'
    ? (isAr ? 'في Safari اضغط مشاركة ثم «إضافة إلى الشاشة الرئيسية». إذا كنت داخل تطبيق آخر، افتح الرابط في Safari أولاً.' : 'In Safari, tap Share, then “Add to Home Screen”. If you are inside another app, open this link in Safari first.')
    : (isAr ? 'في Chrome أو المتصفح المتوافق، افتح قائمة المتصفح واختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».' : 'In Chrome or a compatible browser, open the browser menu and choose “Install app” or “Add to Home screen”.');

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-3 sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeHelp(); }}>
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="pwa-install-title"
        dir={isAr ? 'rtl' : 'ltr'}
        className={`w-full max-w-lg overflow-hidden border shadow-2xl ${dark ? 'border-white/15 bg-[#181716] text-[#F4F2ED]' : 'border-[#1A1A1A]/15 bg-[#F9F8F6] text-[#1A1A1A]'}`}
      >
        <div className="flex items-center justify-between border-b border-current/10 px-5 py-4">
          <h2 id="pwa-install-title" className="text-lg font-bold">{title}</h2>
          <button type="button" onClick={closeHelp} aria-label={isAr ? 'إغلاق' : 'Close'} className="inline-flex h-11 w-11 items-center justify-center text-[#6C6863] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"><X className="h-5 w-5" aria-hidden="true" /></button>
        </div>
        <div className="max-h-[min(82dvh,38rem)] space-y-5 overflow-y-auto px-5 py-5">
          {isLikelyWebView && androidIntentUrl ? (
            <a href={androidIntentUrl} className="flex min-h-12 items-center justify-center gap-2 border border-[#D4AF37] px-4 text-sm font-bold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {isAr ? 'محاولة الفتح في المتصفح' : 'Try opening in browser'}
            </a>
          ) : null}
          <p className="text-sm leading-7 text-[#6C6863] dark:text-[#A39E98]">{browserInstructions}</p>
          <div className="space-y-2">
            <label htmlFor="pwa-current-url" className="block text-xs font-bold text-[#D4AF37]">{isAr ? 'رابط ديف ستيج' : 'Dev Stage link'}</label>
            <textarea id="pwa-current-url" readOnly value={currentUrl} dir="ltr" rows={3} className="w-full resize-none border border-current/15 bg-transparent p-3 text-left text-xs leading-6 outline-none focus:border-[#D4AF37]" />
            <button type="button" onClick={() => void copy()} className="inline-flex min-h-11 items-center gap-2 border border-current/20 px-3 text-xs font-bold hover:border-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"><Copy className="h-4 w-4" aria-hidden="true" />{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ الرابط' : 'Copy link')}</button>
            <p className="text-xs leading-6 text-[#6C6863] dark:text-[#A39E98]">{isAr ? 'إذا منع التطبيق فتح المتصفح أو النسخ، اضغط مطولاً على الرابط وحدد «نسخ»، ثم افتحه في Safari أو Chrome.' : 'If the host blocks browser launch or copying, press and hold the link, select “Copy”, then open it in Safari or Chrome.'}</p>
          </div>
          <button type="button" onClick={confirmInstalled} className="min-h-11 text-xs font-semibold text-[#6C6863] underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]">{isAr ? 'التطبيق مثبت بالفعل' : 'I already installed the app'}</button>
        </div>
      </section>
    </div>
  );
}
