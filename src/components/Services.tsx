import React from 'react';
import {
  Film,
  Smartphone,
  Sparkles,
  Tv,
  Palette,
  Share2,
  Image as ImageIcon,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem } from '../types/portfolio';

import { TranslationDictionary } from '../data/translations';

interface ServicesProps {
  services: ServiceItem[];
  t?: TranslationDictionary['services'];
}

const iconMap: Record<string, React.ElementType> = {
  Film,
  Smartphone,
  Sparkles,
  Tv,
  Palette,
  Share2,
  ImageIcon,
};

export const Services: React.FC<ServicesProps> = ({ services, t }) => {
  const badgeText = t ? t.badge : 'Core Capabilities';
  const titleText = t ? t.title : 'What I Do';
  const subtitleText = t ? t.subtitle : 'High-caliber post-production and visual design services engineered to maximize audience retention and artistic impact.';
  const inquireText = t ? t.inquireRates : 'Inquire for rates';

  const items = t
    ? t.list.map((item, idx) => ({
        number: item.number,
        title: item.title,
        description: item.description,
        iconName: services[idx]?.iconName || 'Sparkles',
        tags: item.tags,
      }))
    : services;

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
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

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const isFeatured = index === 0;

            return (
              <div
                key={service.number}
                className={`group relative rounded-2xl p-7 transition-all duration-300 border bg-[#0A1C16]/80 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#25D366]/10 ${
                  isFeatured
                    ? 'border-emerald-500/40 hover:border-[#25D366]'
                    : 'border-white/[0.08] hover:border-emerald-500/50'
                }`}
              >
                {/* Subtle emerald gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#25D366] tracking-widest font-semibold px-2 py-0.5 rounded bg-[#25D366]/10 border border-[#25D366]/20">
                      {service.number}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-300 group-hover:text-emerald-300 group-hover:border-[#25D366]/40 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-emerald-200 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Tags & Link Arrow */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>{inquireText}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#25D366] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
