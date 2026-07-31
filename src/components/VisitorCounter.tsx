import React, {useEffect, useState} from 'react';
import {Eye} from 'lucide-react';
import type {Language} from '../types';
import {
  fetchRemoteVisitorCount,
  readLocalVisitorCount,
  recordLocalVisitor,
  registerRemoteVisitor,
  shouldUseRemoteCounter,
} from '../lib/visitorCounter';

interface VisitorCounterProps {
  language: Language;
  projectSlug?: string;
  track?: boolean;
  className?: string;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({
  language,
  projectSlug,
  track = true,
  className = '',
}) => {
  const [count, setCount] = useState(() => readLocalVisitorCount(projectSlug));

  useEffect(() => {
    let isMounted = true;

    const loadCount = async () => {
      if (!shouldUseRemoteCounter()) {
        if (track && isMounted) setCount(recordLocalVisitor(projectSlug).projectCount ?? readLocalVisitorCount());
        return;
      }

      try {
        const result = track
          ? await registerRemoteVisitor(projectSlug)
          : await fetchRemoteVisitorCount(projectSlug);

        if (!isMounted) return;
        setCount(projectSlug ? result.projectCount ?? result.siteCount : result.siteCount);
      } catch {
        if (isMounted && track) setCount(recordLocalVisitor(projectSlug).projectCount ?? readLocalVisitorCount());
      }
    };

    void loadCount();
    return () => {
      isMounted = false;
    };
  }, [projectSlug, track]);

  const label = projectSlug
    ? (language === 'ar' ? 'زوار المشروع' : 'PROJECT VISITORS')
    : (language === 'ar' ? 'الزوار' : 'VISITORS');
  const formattedCount = new Intl.NumberFormat(language === 'ar' ? 'ar-EG' : 'en-US').format(count);

  return (
    <span
      className={`inline-flex items-center gap-2 text-[#6C6863] dark:text-[#A39E98] ${className}`}
      title={`${label}: ${formattedCount}`}
    >
      <Eye className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] rtl:tracking-normal">{label}</span>
      <span className="font-mono text-xs font-bold tabular-nums text-[#1A1A1A] dark:text-[#F4F2ED]" aria-live="polite">
        {formattedCount}
      </span>
    </span>
  );
};
