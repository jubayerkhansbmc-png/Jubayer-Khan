import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types/portfolio';

import { TranslationDictionary } from '../data/translations';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  t?: TranslationDictionary['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, t }) => {
  const badgeText = t ? t.badge : 'Endorsements';
  const titleText = t ? t.title : 'Client Testimonials';
  const placeholderNote = t ? t.placeholderNote : '[Editable testimonial placeholders for incoming client feedback and collaborations]';

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-mono text-xs">
            {placeholderNote}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="relative p-7 rounded-2xl bg-[#0A1C16] border border-white/10 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/5"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 mb-6 group-hover:border-emerald-500/30">
                  <Quote className="w-5 h-5 text-[#25D366]" />
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author placeholder info */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-mono text-emerald-400">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
