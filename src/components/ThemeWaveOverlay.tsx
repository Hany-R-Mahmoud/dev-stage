import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeWaveOverlayProps {
  isAnimating: boolean;
  targetTheme: 'light' | 'dark' | null;
  onComplete: () => void;
}

export const ThemeWaveOverlay: React.FC<ThemeWaveOverlayProps> = ({
  isAnimating,
  targetTheme,
  onComplete,
}) => {
  if (!isAnimating || !targetTheme) return null;

  const isTargetDark = targetTheme === 'dark';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Falling Background Wave Fill: Grows from top height 0% to 100% within the page background */}
        <motion.div
          className={`absolute top-0 left-0 right-0 w-full ${
            isTargetDark ? 'bg-[#0E0D0C]' : 'bg-[#F9F8F6]'
          }`}
          initial={{ height: '0%' }}
          animate={{ height: '100%' }}
          transition={{
            duration: 1.8,
            ease: [0.33, 1, 0.68, 1], // Gentle, luxurious liquid wave glide
          }}
          onAnimationComplete={onComplete}
        >
          {/* Organic Wave Edge attached directly at the bottom boundary of the falling theme fill */}
          <div className="absolute top-full left-0 right-0 w-full -mt-0.5 leading-none pointer-events-none">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-16 sm:h-20 md:h-24 drop-shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
              preserveAspectRatio="none"
            >
              {/* Secondary Gold Wave Glow Layer */}
              <path
                d="M0 0 L1440 0 L1440 30 C 1120 85, 780 10, 420 70 C 200 100, 80 25, 0 45 Z"
                fill="#D4AF37"
                opacity="0.3"
              />
              {/* Primary Theme Wave Body */}
              <path
                d="M0 0 L1440 0 L1440 15 C 1080 75, 720 15, 380 65 C 180 95, 60 20, 0 40 Z"
                fill={isTargetDark ? '#0E0D0C' : '#F9F8F6'}
              />
              {/* Gold Crest Contour Line */}
              <path
                d="M0 40 C 60 20, 180 95, 380 65 C 720 15, 1080 75, 1440 15"
                stroke="#D4AF37"
                strokeWidth="3.5"
                fill="none"
                opacity="0.9"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
