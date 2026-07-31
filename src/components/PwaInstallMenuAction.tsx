import {Download} from 'lucide-react';
import type {Language} from '../types';
import {usePwa} from '../pwa/PwaContext';

type PwaInstallMenuActionProps = Readonly<{
  language: Language;
  dark: boolean;
}>;

export function PwaInstallMenuAction({language, dark}: PwaInstallMenuActionProps) {
  const {isStandalone, installedHint, canInstall, install, openHelp} = usePwa();
  if (isStandalone || installedHint) return null;

  const isAr = language === 'ar';
  const label = isAr ? 'تثبيت ديف ستيج' : 'INSTALL DEV STAGE';
  const handleClick = () => {
    if (canInstall) {
      void install();
    } else {
      openHelp();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={`inline-flex min-h-11 items-center justify-center gap-2 border px-3 text-[10px] font-bold tracking-[0.12em] transition-colors cursor-pointer ${
        dark
          ? 'border-[#D4AF37]/60 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10'
          : 'border-[#8C6B11]/60 text-[#8C6B11] hover:border-[#8C6B11] hover:bg-[#D4AF37]/10'
      }`}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
