import React, { useState, useEffect } from 'react';
import { Play, ArrowUpRight, Sparkles, Maximize2, X, ZoomIn } from 'lucide-react';
import { ProfileData, Language, getCreatorName } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface HeroProps {
  profile: ProfileData;
  onOpenShowreel: () => void;
  t: TranslationDictionary['hero'];
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenShowreel,
  t,
  lang,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const displayName = getCreatorName(profile, lang);

  // Slow-motion cinematic entrance on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Track window scroll for reactive motion of the portrait photo
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentPhoto = profile.customPhoto || '/profile.jpg';

  // Compute smooth scroll-out / scroll-in physics for the portrait photo
  // At scrollY = 0, full opacity and zero translation offset
  // As user scrolls down past 350px, it smoothly glides out to the right and fades
  const photoOpacity = Math.max(0, 1 - scrollY / 320);
  const photoTranslateX = lang === 'ar' ? -Math.min(100, (scrollY / 300) * 80) : Math.min(100, (scrollY / 300) * 80);
  const photoScale = Math.max(0.88, 1 - (scrollY / 600) * 0.12);
  const isPhotoVisible = scrollY < 450;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#25D366]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-emerald-950/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-14 sm:gap-16">
        {/* ROW 1: Headline & Bio Left, Scroll-Motion Portrait Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge: Video Editor & Graphic Designer */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                {t.tagline || 'Video Editor & Graphic Designer'}
              </span>
            </div>

            {/* Creator's Name - BIG, BOLD, PROMINENT */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-white leading-[1.04] mb-4">
              <span className="text-white">{displayName}</span>
            </h1>

            {/* Headline Subtitle: Turning Ideas Into Visual Experiences */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-zinc-200 tracking-normal leading-snug mb-5">
              {t.headlinePart1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#34D399]">
                {t.headlineHighlight}
              </span>{' '}
              {t.headlinePart2}
            </h2>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              {t.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('video-work')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-bold text-sm transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.viewWork}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <span>{t.letsTalk}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              </button>

              <div className="hidden sm:flex items-center gap-2 pl-2 text-emerald-400 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>{t.available}</span>
              </div>
            </div>

            {/* Quick Metrics / Capabilities Strip */}
            <div className="mt-10 pt-6 border-t border-emerald-500/15 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block font-mono text-[10px] text-emerald-400/80 uppercase tracking-wider mb-1">
                  01
                </span>
                <p className="font-display font-bold text-sm text-zinc-100">{t.disc1Title}</p>
                <p className="text-xs text-zinc-400">{t.disc1Sub}</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-emerald-400/80 uppercase tracking-wider mb-1">
                  02
                </span>
                <p className="font-display font-bold text-sm text-zinc-100">{t.disc2Title}</p>
                <p className="text-xs text-zinc-400">{t.disc2Sub}</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-emerald-400/80 uppercase tracking-wider mb-1">
                  03
                </span>
                <p className="font-display font-bold text-sm text-zinc-100">{t.disc3Title}</p>
                <p className="text-xs text-zinc-400">{t.disc3Sub}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Slow-Motion Animated Portrait Photo with Hover Scale & Click-to-Enlarge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-xs sm:max-w-sm transition-all duration-1000 ease-out transform ${
                isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              {/* Outer decorative ambient glow aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#25D366]/30 via-emerald-800/20 to-emerald-400/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />

              {/* Photo Box Container - hover scales slightly */}
              <div className="group relative rounded-2xl overflow-hidden bg-[#0A1C16] border-2 border-emerald-500/40 hover:border-[#25D366] p-2.5 shadow-2xl shadow-black/80 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(37,211,102,0.25)]">
                {/* Aspect ratio frame (4:5 portrait) */}
                <div
                  className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-black cursor-pointer group/photo"
                  onClick={() => setIsEnlarged(true)}
                  title="Click to view enlarged photo"
                >
                  <img
                    src={currentPhoto}
                    alt={displayName}
                    className="w-full h-full object-cover object-center filter contrast-105 transition-transform duration-700 ease-out group-hover/photo:scale-105"
                  />

                  {/* Gradient film tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06120E] via-transparent to-black/30 opacity-70 group-hover/photo:opacity-50 transition-opacity" />

                  {/* Creator Tag & Verified Dot */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-semibold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>{displayName}</span>
                    </span>

                    <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      PRO CREATIVE
                    </span>
                  </div>

                  {/* Click to Enlarge Badge */}
                  <div className="absolute top-12 right-3 pointer-events-none opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-black/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 font-mono text-[10px]">
                      <ZoomIn className="w-3 h-3 text-[#25D366]" />
                      <span>Enlarge</span>
                    </span>
                  </div>

                  {/* Clean Official Creator Badge on Photo Base */}
                  <div className="absolute inset-x-3 bottom-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[11px] text-zinc-200 font-semibold tracking-wide">
                      {displayName}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                      <span>OFFICIAL</span>
                    </span>
                  </div>
                </div>

                {/* Sub-caption below photo */}
                <div className="pt-2 px-1 flex items-center justify-between text-[11px] font-mono text-emerald-400/90">
                  <span>{t.photoCredit || `Photo: ${displayName}`}</span>
                  <span className="text-zinc-400">Click photo to zoom</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Wide Cinematic Showreel Bar (Placed below the headline & photo as requested) */}
        <div className="w-full">
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A1C16] border border-emerald-500/25 p-4 sm:p-6 shadow-2xl cursor-pointer group transition-all duration-500 hover:border-[#25D366]/50 hover:shadow-2xl hover:shadow-[#25D366]/10"
            onClick={onOpenShowreel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenShowreel();
            }}
            aria-label="Play Showreel"
          >
            <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black">
              <img
                src="/showreel_poster.jpg"
                alt="Showreel preview poster showcasing video editing workstation and color grading timeline"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Gradient film tints */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120E] via-black/20 to-black/50 opacity-70 group-hover:opacity-85 transition-opacity" />

              {/* Top Bar Details */}
              <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>{t.showreelBadge}</span>
                </div>

                <div className="font-mono text-xs text-emerald-300 bg-black/70 px-3 py-1 rounded-md border border-emerald-500/25">
                  {t.showreelSpec}
                </div>
              </div>

              {/* Central Play Trigger Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-[#25D366] text-[#06120E] flex items-center justify-center shadow-2xl shadow-[#25D366]/50 transition-all duration-300 ${
                    isHovered ? 'scale-110 bg-[#10B981]' : 'scale-100'
                  }`}
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Video Metadata */}
              <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {t.showreelSub}
                  </p>
                  <h4 className="text-white font-display font-bold text-base sm:text-xl">
                    {t.showreelTitle}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10 text-xs font-mono">
                    <Maximize2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="hidden sm:inline">{t.clickToPlay}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Photo Lightbox Modal */}
      {isEnlarged && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setIsEnlarged(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-md w-full bg-[#0A1C16] border-2 border-emerald-500/40 rounded-3xl p-3 shadow-2xl animate-scaleUp overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-display font-bold text-sm text-white">{displayName}</span>
                <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  PRO CREATIVE
                </span>
              </div>
              <button
                onClick={() => setIsEnlarged(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <img
                src={currentPhoto}
                alt={displayName}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-3 text-center">
              <p className="text-xs font-mono text-emerald-400">
                {displayName} • Official Portrait
              </p>
              <p className="text-[11px] text-zinc-400 font-mono mt-1">
                Click outside or press Close to dismiss
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
