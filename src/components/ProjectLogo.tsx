import React, { useEffect, useState } from 'react';

interface ProjectLogoProps {
  name: string;
  logoSrc?: string;
  className?: string;
}

function initials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words.slice(0, 2).map((word) => word[0]) : [name.trim()[0] ?? '?'])
    .join('')
    .toUpperCase();
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({ name, logoSrc, className = '' }) => {
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setHasFailed(false);
  }, [logoSrc]);

  return (
    <span
      role="img"
      aria-label={`${name} logo`}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden border border-[#D4AF37]/60 bg-[#1A1A1A] text-[11px] font-mono font-bold tracking-wider text-[#D4AF37] dark:bg-[#0E0D0C] ${className}`}
    >
      {logoSrc && !hasFailed ? (
        <img
          src={logoSrc}
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
