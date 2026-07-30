import React, { useEffect, useState } from 'react';

interface ProjectLogoProps {
  name: string;
  liveUrl?: string;
  className?: string;
}

function initials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words.slice(0, 2).map((word) => word[0]) : [name.trim()[0] ?? '?'])
    .join('')
    .toUpperCase();
}

function faviconUrl(liveUrl?: string) {
  if (!liveUrl) return null;

  try {
    return `${new URL(liveUrl).origin}/favicon.ico`;
  } catch {
    return null;
  }
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({ name, liveUrl, className = '' }) => {
  const favicon = faviconUrl(liveUrl);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setHasFailed(false);
  }, [favicon]);

  return (
    <span
      role="img"
      aria-label={`${name} logo`}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden border border-[#D4AF37]/60 bg-[#1A1A1A] text-[11px] font-mono font-bold tracking-wider text-[#D4AF37] dark:bg-[#0E0D0C] ${className}`}
    >
      {favicon && !hasFailed ? (
        <img
          src={favicon}
          alt=""
          className="h-full w-full object-contain p-1"
          onError={() => setHasFailed(true)}
        />
      ) : (
        initials(name)
      )}
    </span>
  );
};
