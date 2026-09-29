import React from 'react';
import { ProcessStep } from '../types/portfolio';

import { TranslationDictionary } from '../data/translations';

interface ProcessProps {
  steps: ProcessStep[];
  t?: TranslationDictionary['process'];
}

export const Process: React.FC<ProcessProps> = ({ steps, t }) => {
  const badgeText = t ? t.badge : 'Methodology';
  const titleText = t ? t.title : 'My Creative Process';
  const subtitleText = t ? t.subtitle : 'A structured, collaborative approach ensuring creative alignment, rapid iteration, and production-grade delivery.';
  const stageText = t ? t.stage : 'Stage';
  const stepOfText = t ? t.stepOf : 'Step';

  const items = t
    ? t.steps.map((st) => ({
        number: st.number,
        title: st.title,
        description: st.description,
        details: [],
      }))
    : steps;

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
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

        {/* Timeline Grid (4 steps) */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {items.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-2xl p-7 bg-[#0A1C16] border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#25D366]/10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-white group-hover:text-[#25D366] transition-colors">
                      {step.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-xs font-mono text-zinc-400 group-hover:border-emerald-500/40 group-hover:text-[#25D366] transition-all">
                      {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-emerald-200 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Milestone Footer */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                    {stageText} {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {stepOfText} {index + 1} / 4
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
