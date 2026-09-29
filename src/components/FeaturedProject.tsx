import React from 'react';
import { ArrowUpRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';

import { TranslationDictionary } from '../data/translations';

interface FeaturedProjectProps {
  onOpenMedia?: () => void;
  t?: TranslationDictionary['featured'];
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenMedia, t }) => {
  const tools = ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve Studio', 'Audition'];
  const deliverables = t ? t.deliverables : [
    'Color Grading & 35mm Film Grain',
    'Custom Kinetic Title Design',
    'Spatial Sound Mix & Foley',
    'Master 4K + 9:16 Vertical Cut',
  ];

  const badgeText = t ? t.badge : 'Spotlight Case Study';
  const titleText = t ? t.title : 'Featured Project';
  const tagText = t ? t.tag : 'Commercial Film & Motion';
  const gradedText = t ? t.graded : 'Color Graded';
  const highlightText = t ? t.highlight : 'Case Study Highlight';
  const headlineText = t ? t.headline : 'Aura Dynamics — Visual Film & Campaign';
  const descriptionText = t ? t.description : '[Featured Project Description Placeholder] — A comprehensive creative showcase emphasizing precision narrative assembly, custom color contrast curves, cinematic grain emulation, and synchronized bass-driven sound cues.';
  const deliverablesTitle = t ? t.deliverablesTitle : 'Creative Deliverables:';
  const toolsTitle = t ? t.toolsTitle : 'Tools & Stack:';
  const watchReelText = t ? t.watchReel : 'Watch Case Reel';
  const requestSimilarText = t ? t.requestSimilar : 'Request Similar Project';

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
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

        {/* Featured Card Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0A1C16] to-[#06120E] border border-emerald-500/20 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Media Stage */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black border border-white/10 group cursor-pointer shadow-2xl"
                onClick={onOpenMedia}
                role="button"
                tabIndex={0}
                aria-label="Preview featured project media"
              >
                <img
                  src="/featured_project.jpg"
                  alt="Featured case study high-concept cinematography showcase"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-104 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    Commercial Film & Motion
                  </span>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Color Graded
                  </span>
                </div>

                {/* Central Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366] text-[#06120E] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group-hover:scale-110 group-hover:bg-[#10B981] transition-all duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom media indicator */}
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs text-zinc-300 font-mono pointer-events-none">
                  <span>Aspect: 2.39:1 Anamorphic</span>
                  <span>4K UHD Master</span>
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#25D366] uppercase tracking-wider mb-2 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{highlightText}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 leading-tight">
                  {headlineText}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {descriptionText}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <p className="font-mono text-xs text-emerald-400/80 uppercase tracking-wider">
                    {deliverablesTitle}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="mb-8">
                  <p className="font-mono text-xs text-emerald-400/80 uppercase tracking-wider mb-3">
                    {toolsTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-emerald-500/20 text-xs font-mono text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenMedia}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-semibold text-xs transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{watchReelText}</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  <span>{requestSimilarText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
