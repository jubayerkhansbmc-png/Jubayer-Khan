import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProfileData, Language, getCreatorName } from '../types/portfolio';
import { WhatsAppCard } from './WhatsAppCard';
import {
  FacebookIcon,
  YouTubeIcon,
  TikTokIcon,
  BehanceIcon,
  InstagramIcon,
  LinkedInIcon,
} from './SocialIcons';
import { TranslationDictionary } from '../data/translations';

interface AboutProps {
  profile: ProfileData;
  t: TranslationDictionary['about'];
  lang?: Language;
}

export const About: React.FC<AboutProps> = ({ profile, t, lang = 'en' }) => {
  const currentPhoto = profile.customPhoto || '/profile.jpg';
  const displayName = getCreatorName(profile, lang);

  const socialCards = [
    {
      name: 'YouTube',
      url: profile.socials.youtube,
      icon: YouTubeIcon,
      color: 'hover:border-red-500/40 text-red-400',
      label: 'Video Edits & Cuts',
    },
    {
      name: 'Facebook',
      url: profile.socials.facebook,
      icon: FacebookIcon,
      color: 'hover:border-blue-500/40 text-blue-400',
      label: 'Official Page',
    },
    {
      name: 'TikTok',
      url: profile.socials.tiktok,
      icon: TikTokIcon,
      color: 'hover:border-pink-500/40 text-pink-400',
      label: 'Reels & Shorts',
    },
    {
      name: 'Behance',
      url: profile.socials.behance,
      icon: BehanceIcon,
      color: 'hover:border-sky-500/40 text-sky-400',
      label: 'Visual Portfolio',
    },
    {
      name: 'Instagram',
      url: profile.socials.instagram,
      icon: InstagramIcon,
      color: 'hover:border-purple-500/40 text-purple-400',
      label: 'Stills & Motion',
    },
    {
      name: 'LinkedIn',
      url: profile.socials.linkedin,
      icon: LinkedInIcon,
      color: 'hover:border-sky-600/40 text-sky-400',
      label: 'Professional Profile',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* 2-Column Balanced Grid without duplicate photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Bio & Competencies */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-5 p-6 sm:p-8 rounded-3xl bg-[#0A1C16] border border-emerald-500/25 shadow-xl">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15]">
                "{profile.aboutIntro || t.leadQuote}"
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-zinc-200 leading-relaxed font-normal">
                {profile.aboutBio || t.bio}
              </p>
            </div>

            {/* Core creative competencies pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              {t.competencies.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-emerald-500/20 text-xs font-mono text-emerald-200/90 hover:border-emerald-500/40 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Credential statement */}
            <div className="p-4 rounded-2xl bg-[#0A1C16] border border-emerald-500/20 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-sm text-white">{displayName}</p>
                <p className="font-mono text-xs text-[#25D366]">
                  {lang === 'bn'
                    ? 'ভিডিও এডিটর ও গ্রাফিক ডিজাইনার'
                    : lang === 'ar'
                    ? 'محرر فيديو ومصمم جرافيك'
                    : 'Video Editor & Graphic Designer'}
                </p>
              </div>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                {t.proBadge || 'PRO'}
              </span>
            </div>
          </div>

          {/* Right Column: Social Channels & WhatsApp */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider mb-3.5 font-semibold">
                {t.connectTitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialCards.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] transition-all duration-300 flex items-center justify-between ${soc.color} hover:bg-white/[0.05] hover:scale-[1.02] active:scale-[0.98]`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-white/[0.04] text-zinc-300 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-xs text-zinc-200 group-hover:text-white transition-colors">
                            {soc.name}
                          </p>
                          <p className="text-[10px] text-zinc-400 font-mono">
                            {soc.label}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div>
              <WhatsAppCard number={profile.socials.whatsapp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
