import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

import { TranslationDictionary } from '../data/translations';

interface BeforeAfterProps {
  t?: TranslationDictionary['beforeAfter'];
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ t }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const badgeText = t ? t.badge : 'Visual Transformation';
  const titleText = t ? t.title : 'Before / After';
  const subtitleText = t ? t.subtitle : 'Drag the interactive slider to compare raw uncorrected LOG profile footage against the final color-graded master.';
  const beforeLabel = t ? t.beforeLabel : 'Before: Raw Flat Log';
  const afterLabel = t ? t.afterLabel : 'After: Cinematic Grade';
  const timingLabel = t ? t.timingLabel : 'DaVinci Resolve Color Timing';
  const dragHint = t ? t.dragHint : 'Drag slider to evaluate grading';
  const toneTitle = t ? t.toneTitle : 'Tone Mapping';
  const toneSub = t ? t.toneSub : 'Restoring natural shadow depth and highlight rolloff.';
  const colorTitle = t ? t.colorTitle : 'Color Timing';
  const colorSub = t ? t.colorSub : 'Custom split-toning with emerald blacks and clean neutral skin tones.';
  const textureTitle = t ? t.textureTitle : 'Texture';
  const textureSub = t ? t.textureSub : 'Subtle 35mm organic grain emulation for high-end film feel.';

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#071510]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
                {badgeText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {titleText}
            </h2>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            {subtitleText}
          </p>
        </div>

        {/* Comparison Stage */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Frame with Draggable Comparison */}
          <div
            ref={containerRef}
            className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-emerald-500/25 select-none cursor-ew-resize shadow-2xl shadow-black/80"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Interactive before and after comparison slider"
          >
            {/* After Image (Full background layer: rich grade) */}
            <img
              src="/after_grade.jpg"
              alt="After: Color graded cinematic automotive and architectural scene"
              className="absolute inset-0 w-full h-full object-cover filter contrast-105 pointer-events-none"
            />

            {/* Before Image (Clipped overlay: flat desaturated raw log) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/before_raw.jpg"
                alt="Before: Flat uncorrected RAW log footage"
                className="absolute inset-y-0 left-0 max-w-none h-full object-cover pointer-events-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : '100%',
                }}
              />

              {/* Before Label Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-lg">
                  {beforeLabel}
                </span>
              </div>
            </div>

            {/* After Label Badge */}
            <div className="absolute top-6 right-6 z-10 pointer-events-none">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#06120E] bg-[#25D366] backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-400/40 shadow-lg font-bold">
                {afterLabel}
              </span>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute inset-y-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute inset-y-0 -left-[1.5px] w-[3px] bg-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.8)]" />

              {/* Circular Thumb button */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-emerald-600 pointer-events-auto transition-transform hover:scale-110 active:scale-95">
                <MoveHorizontal className="w-5 h-5 text-black" />
              </div>
            </div>

            {/* Subtle bottom info bar */}
            <div className="absolute bottom-4 inset-x-6 z-10 flex items-center justify-between text-xs text-zinc-300 font-mono pointer-events-none">
              <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                {timingLabel}
              </span>
              <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 hidden sm:inline">
                {dragHint}
              </span>
            </div>
          </div>

          {/* Quick breakdown tags below slider */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0A1C16] border border-emerald-500/20">
              <span className="font-mono text-xs text-[#25D366] uppercase tracking-wider block mb-1 font-semibold">
                {toneTitle}
              </span>
              <p className="text-zinc-100 text-sm font-semibold">{toneTitle}</p>
              <p className="text-zinc-400 text-xs mt-0.5">
                {toneSub}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0A1C16] border border-emerald-500/20">
              <span className="font-mono text-xs text-[#25D366] uppercase tracking-wider block mb-1 font-semibold">
                {colorTitle}
              </span>
              <p className="text-zinc-100 text-sm font-semibold">{colorTitle}</p>
              <p className="text-zinc-400 text-xs mt-0.5">
                {colorSub}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0A1C16] border border-emerald-500/20">
              <span className="font-mono text-xs text-[#25D366] uppercase tracking-wider block mb-1 font-semibold">
                {textureTitle}
              </span>
              <p className="text-zinc-100 text-sm font-semibold">{textureTitle}</p>
              <p className="text-zinc-400 text-xs mt-0.5">
                {textureSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
