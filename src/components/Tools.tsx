import React from 'react';
import { ToolItem } from '../types/portfolio';

import { TranslationDictionary } from '../data/translations';

interface ToolsProps {
  tools: ToolItem[];
  t?: TranslationDictionary['tools'];
}

export const Tools: React.FC<ToolsProps> = ({ tools, t }) => {
  const badgeText = t ? t.badge : 'Technical Stack';
  const titleText = t ? t.title : 'Tools I Use';
  const subtitleText = t ? t.subtitle : 'Industry-standard creative software utilized for editorial cutting, motion design, and color grading.';

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#071510]/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              {badgeText}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
            {titleText}
          </h2>
          <p className="text-zinc-300 text-sm font-normal">
            {subtitleText}
          </p>
        </div>

        {/* Tools Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group p-6 rounded-2xl bg-[#0A1C16] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center hover:shadow-xl hover:shadow-[#25D366]/5"
            >
              {/* Software Initial / Logo badge */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center font-display font-black text-lg text-white group-hover:scale-110 group-hover:border-emerald-500/40 transition-transform mb-3 shadow-inner">
                {tool.name.includes('Premiere') && <span className="text-[#9999FF]">Pr</span>}
                {tool.name.includes('After Effects') && <span className="text-[#9999FF]">Ae</span>}
                {tool.name.includes('Photoshop') && <span className="text-[#31A8FF]">Ps</span>}
                {tool.name.includes('Illustrator') && <span className="text-[#FF9A00]">Ai</span>}
              </div>

              <h4 className="font-display font-semibold text-sm sm:text-base text-zinc-100 group-hover:text-[#25D366] transition-colors mb-1">
                {tool.name}
              </h4>
              <span className="font-mono text-[11px] text-emerald-400/80 uppercase tracking-wider">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
