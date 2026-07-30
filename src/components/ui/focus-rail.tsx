"use client";

import * as React from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
  category?: string;
  client?: string;
  arabicTitle?: string;
  arabicDescription?: string;
  arabicMeta?: string;
  onClick?: () => void;
};

interface FocusRailProps {
  items: FocusRailItem[];
  isArabic?: boolean;
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  onSelectProject?: (item: FocusRailItem) => void;
}

/**
 * Helper to wrap indices (e.g., -1 becomes length-1)
 */
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

/**
 * Physics Configuration
 * Base spring for spatial movement (x/z)
 */
const BASE_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

/**
 * Scale Spring
 * Bouncier spring specifically for the visual "Click/Tap" feedback on the center card
 */
const TAP_SPRING = {
  type: "spring",
  stiffness: 450,
  damping: 18, // Lower damping = subtle overshoot/wobble "tap"
  mass: 1,
};

export function FocusRail({
  items,
  isArabic = false,
  initialIndex = 0,
  loop = true,
  autoPlay = true,
  interval = 10000,
  className,
  onSelectProject,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef<number>(0);

  const count = items.length;
  if (count === 0) return null;

  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  // --- NAVIGATION HANDLERS ---
  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  // --- MOUSE WHEEL / TRACKPAD LOGIC ---
  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      // Debounce: prevent rapid firing from inertia scrolling (400ms lockout)
      if (now - lastWheelTime.current < 400) return;

      // Detect horizontal scroll primarily, but also fallback to vertical if shift is held
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      // Threshold to avoid accidental micro-scrolls
      if (Math.abs(delta) > 20) {
        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  // Autoplay logic
  React.useEffect(() => {
    if (!autoPlay || isHovering || count < 2) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval, count]);

  // Keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  // --- SWIPE / DRAG LOGIC ---
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const visibleIndices = count === 1 ? [0] : [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group relative flex h-[580px] w-full flex-col overflow-hidden bg-[#F9F8F6] dark:bg-[#0E0D0C] text-[#1A1A1A] dark:text-[#F4F2ED] outline-none select-none overflow-x-hidden border-t-4 border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/20 dark:border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] font-sans-luxury transition-colors duration-300",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${activeItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={activeItem.imageSrc}
              alt=""
              className="h-full w-full object-cover blur-3xl saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] dark:from-[#0E0D0C] via-[#F9F8F6]/80 dark:via-[#0E0D0C]/80 to-[#F9F8F6]/40 dark:to-[#0E0D0C]/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        {/* DRAGGABLE RAIL CONTAINER */}
        <motion.div
          className="relative mx-auto flex h-[340px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            // Dynamic transforms
            const xOffset = offset * 320;
            const zOffset = -dist * 180;
            const scale = isCenter ? 1 : 0.85;
            const rotateY = offset * -20;

            const opacity = isCenter ? 1 : Math.max(0.2, 1 - dist * 0.4);
            const blur = isCenter ? 0 : dist * 4;
            const brightness = isCenter ? 1 : 0.75;

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute aspect-[16/10] w-[280px] md:w-[360px] border bg-[#1A1A1A] dark:bg-[#0E0D0C] shadow-xl transition-all duration-300 overflow-hidden",
                  isCenter 
                    ? "z-20 border-2 border-[#D4AF37] shadow-[0_12px_32px_rgba(0,0,0,0.25)] ring-1 ring-[#1A1A1A]/20 dark:ring-white/20 cursor-grab active:cursor-grabbing" 
                    : "z-10 border-[#1A1A1A]/20 dark:border-white/15 cursor-pointer"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale, // Trigger "tap" via TAP_SPRING when this changes
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={(val) => {
                  // Use bouncier spring for scale to create the "Tap" effect
                  if (val === "scale") return TAP_SPRING;
                  return BASE_SPRING;
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActive((p) => p + offset);
                  }
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className={cn(
                    "h-full w-full object-contain pointer-events-none transition-all duration-700",
                    isCenter ? "grayscale-0" : "grayscale"
                  )}
                />

                {/* Lighting layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60 pointer-events-none" />

                {isCenter && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] font-mono tracking-widest uppercase px-3 py-1 bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#D4AF37] dark:text-[#0E0D0C] border border-[#1A1A1A] dark:border-white/20">
                      {isArabic ? 'مشروع مميز' : 'FEATURED WORK'}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info & Controls */}
        <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center justify-between gap-6 md:flex-row pointer-events-auto">
          <div className="flex flex-1 flex-col items-center text-center md:items-start ltr:md:text-left rtl:md:text-right h-28 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="space-y-1.5"
              >
                {activeItem.meta && (
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F9F8F6] dark:text-[#0E0D0C] bg-[#1A1A1A] dark:bg-[#F4F2ED] border border-[#1A1A1A] dark:border-white/20 px-3 py-1 inline-block">
                    {activeItem.meta}
                  </span>
                )}
                <h2 className="font-serif-luxury text-3xl font-bold tracking-tight md:text-4xl text-[#1A1A1A] dark:text-[#F4F2ED]">
                  {activeItem.title}
                </h2>
                {activeItem.description && (
                  <p className="max-w-lg text-[#6C6863] dark:text-[#A39E98] text-sm md:text-base line-clamp-2 font-sans-luxury">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            {(activeItem.href || onSelectProject || activeItem.onClick) && (
              <a
                href={activeItem.href || "#"}
                onClick={(e) => {
                  if (activeItem.href) return;
                  if (onSelectProject) {
                    e.preventDefault();
                    onSelectProject(activeItem);
                  } else if (activeItem.onClick) {
                    e.preventDefault();
                    activeItem.onClick();
                  }
                }}
                className="group flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] text-white dark:text-[#0E0D0C] hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:bg-[#D4AF37] dark:hover:text-[#0E0D0C] px-6 py-2.5 text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300 shadow-md cursor-pointer border border-[#1A1A1A] dark:border-white/20"
              >
                <span>
                  {isArabic ? 'التفاصيل' : 'DETAILS'}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:-scale-x-100" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
