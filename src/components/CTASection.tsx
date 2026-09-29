import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

import { TranslationDictionary } from '../data/translations';

interface CTASectionProps {
  onScrollToContact: () => void;
  t?: TranslationDictionary['cta'];
}

export const CTASection: React.FC<CTASectionProps> = ({ onScrollToContact, t }) => {
  const badgeText = t ? t.badge : "Let's Collaborate";
  const titlePart1 = t ? t.titlePart1 : 'Have a project';
  const titleHighlight = t ? t.titleHighlight : 'in mind?';
  const subtitleText = t ? t.subtitle : "Whether you need a full video campaign cut, dynamic motion graphics, high-CTR thumbnails, or a brand visual refresh, let's bring your creative vision to life.";
  const workTogetherText = t ? t.workTogether : "Let's Work Together";
  const contactMeText = t ? t.contactMe : 'Contact Me';

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#25D366]/15 to-emerald-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
            {badgeText}
          </span>
        </div>

        {/* Large Cinematic Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-6 leading-[1.08]">
          {titlePart1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#34D399]">
            {titleHighlight}
          </span>
        </h2>

        {/* Short editable supporting text */}
        <p className="text-zinc-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {subtitleText}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onScrollToContact}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-semibold text-sm sm:text-base transition-all duration-200 shadow-xl shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{workTogetherText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            onClick={onScrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 text-zinc-200 hover:text-white font-medium text-sm sm:text-base transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{contactMeText}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
