import React from 'react';
import { Profile, Language } from '../types';
import { Mail, Github, Linkedin, MapPin, Feather } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  language: Language;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, language }) => {
  const isAr = language === 'ar';

  return (
    <div className="relative overflow-hidden bg-[#F9F8F6] dark:bg-[#141312] border-l-4 border-l-[#D4AF37] border-y border-r border-[#1A1A1A]/15 dark:border-white/15 p-5 sm:p-8 md:p-10 shadow-sm font-sans-luxury text-[#1A1A1A] dark:text-[#F4F2ED] transition-colors duration-300">
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        
        {/* Avatar with Refined Border & Grayscale to Color Hover Effect */}
        <div className="relative shrink-0 group cursor-pointer">
          <img
            src={profile.avatar}
            alt={profile.name[language]}
            className="h-24 w-24 md:h-32 md:w-32 object-cover border border-[#1A1A1A]/30 dark:border-white/30 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 shadow-md"
          />
          <div className="absolute -bottom-2.5 ltr:-right-2.5 rtl:-left-2.5 bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#D4AF37] dark:text-[#0E0D0C] p-1.5 border border-[#D4AF37]">
            <Feather className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Info Content */}
        <div className="flex flex-1 flex-col items-center md:items-start ltr:md:text-left rtl:md:text-right text-center space-y-3">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <h2 className="font-serif-luxury text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#F4F2ED]">
              {profile.name[language]}
            </h2>
            <span className="inline-flex items-center gap-1.5 bg-[#EBE5DE] dark:bg-[#1E1D1B] px-3 py-1 text-[10px] font-mono tracking-widest text-[#6C6863] dark:text-[#A39E98] uppercase border border-[#1A1A1A]/10 dark:border-white/15">
              <MapPin className="h-3 w-3 text-[#D4AF37]" />
              {profile.location[language]}
            </span>
          </div>

          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            {profile.title[language]}
          </p>

          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-[#6C6863] dark:text-[#A39E98] font-sans-luxury">
            {profile.bio[language]}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-1">
            {profile.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-[#EBE5DE]/80 dark:bg-[#1C1B1A] px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase text-[#1A1A1A] dark:text-[#F4F2ED] border border-[#1A1A1A]/10 dark:border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-3">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="bg-[#1A1A1A] dark:bg-[#F4F2ED] text-white dark:text-[#0E0D0C] p-2.5 hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:bg-[#D4AF37] dark:hover:text-[#0E0D0C] transition-colors duration-300 border border-[#1A1A1A] dark:border-white/20"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A1A1A] dark:bg-[#F4F2ED] text-white dark:text-[#0E0D0C] p-2.5 hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:bg-[#D4AF37] dark:hover:text-[#0E0D0C] transition-colors duration-300 border border-[#1A1A1A] dark:border-white/20"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A1A1A] dark:bg-[#F4F2ED] text-white dark:text-[#0E0D0C] p-2.5 hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:bg-[#D4AF37] dark:hover:text-[#0E0D0C] transition-colors duration-300 border border-[#1A1A1A] dark:border-white/20"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
