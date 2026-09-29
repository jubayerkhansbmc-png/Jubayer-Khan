import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQItem } from '../types/portfolio';

import { TranslationDictionary } from '../data/translations';

interface FAQProps {
  faqs: FAQItem[];
  t?: TranslationDictionary['faq'];
}

export const FAQ: React.FC<FAQProps> = ({ faqs, t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const badgeText = t ? t.badge : 'Clear Answers';
  const titleText = t ? t.title : 'Frequently Asked Questions';
  const subtitleText = t ? t.subtitle : 'Common queries regarding collaboration, project workflows, and turnaround expectations.';
  const items = t?.items && t.items.length > 0 ? t.items : faqs;

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#071510]/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              {badgeText}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            {titleText}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-normal">
            {subtitleText}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-[#0A1C16] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#25D366] text-[#06120E] border-[#25D366]' : 'rotate-0'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base leading-relaxed border-t border-emerald-500/10 animate-fadeIn font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
