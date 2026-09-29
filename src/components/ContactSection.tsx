import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, Check, Copy, MessageCircle } from 'lucide-react';
import { ProfileData, Language, getCreatorName } from '../types/portfolio';
import { WhatsAppCard } from './WhatsAppCard';
import {
  FacebookIcon,
  YouTubeIcon,
  TikTokIcon,
  BehanceIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from './SocialIcons';
import { TranslationDictionary } from '../data/translations';

interface ContactSectionProps {
  profile: ProfileData;
  t: TranslationDictionary['contact'];
  lang?: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, t, lang = 'en' }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Video Editing',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const displayName = getCreatorName(profile, lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Project Inquiry: ${formState.service} from ${formState.name || 'Client'}`);
    const greeting = lang === 'bn' ? `প্রিয় ${displayName}` : lang === 'ar' ? `مرحباً ${displayName}` : `Hi ${displayName}`;
    const body = encodeURIComponent(
      `${greeting},\n\nName: ${formState.name}\nEmail: ${formState.email}\nProject Type: ${formState.service}\n\nProject Details:\n${formState.message}\n`
    );
    window.location.href = `mailto:${profile.socials.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialChannels = [
    {
      name: 'Facebook',
      url: profile.socials.facebook,
      icon: FacebookIcon,
      color: 'hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400',
      label: 'Official Profile',
    },
    {
      name: 'YouTube',
      url: profile.socials.youtube,
      icon: YouTubeIcon,
      color: 'hover:border-red-500/50 hover:bg-red-500/10 text-red-400',
      label: 'Videos & Edits',
    },
    {
      name: 'WhatsApp',
      url: (() => {
        const clean = profile.socials.whatsapp.replace(/[^0-9]/g, '');
        const wa = clean.startsWith('880') ? clean : clean.startsWith('0') ? `88${clean}` : `880${clean}`;
        return `https://wa.me/${wa}`;
      })(),
      icon: WhatsAppIcon,
      color: 'hover:border-emerald-500/50 hover:bg-emerald-500/10 text-[#25D366]',
      label: 'Direct Chat',
    },
    {
      name: 'TikTok',
      url: profile.socials.tiktok,
      icon: TikTokIcon,
      color: 'hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400',
      label: 'Short Reels',
    },
    {
      name: 'Behance',
      url: profile.socials.behance,
      icon: BehanceIcon,
      color: 'hover:border-blue-400/50 hover:bg-blue-400/10 text-sky-400',
      label: 'Portfolio & Stills',
    },
    {
      name: 'Instagram',
      url: profile.socials.instagram,
      icon: InstagramIcon,
      color: 'hover:border-purple-500/50 hover:bg-purple-500/10 text-purple-400',
      label: 'Visual Stories',
    },
    {
      name: 'LinkedIn',
      url: profile.socials.linkedin,
      icon: LinkedInIcon,
      color: 'hover:border-sky-600/50 hover:bg-sky-600/10 text-sky-400',
      label: 'Professional Network',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#071510]/50">
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

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct channels (WhatsApp, Email, Socials Grid) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Highlight Card */}
            <WhatsAppCard number={profile.socials.whatsapp} />

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#0A1C16] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300">
                    <Mail className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block">
                      {t.directEmail}
                    </span>
                    <a
                      href={`mailto:${profile.socials.email}`}
                      className="font-display font-bold text-base text-white hover:text-[#25D366] transition-colors"
                    >
                      {profile.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-zinc-300 font-normal">
                {t.responseTime}
              </p>
            </div>

            {/* Social Media Channels with Official Brand Icons */}
            <div className="p-6 rounded-2xl bg-[#0A1C16] border border-white/10">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-4 font-semibold">
                {t.socialProfiles}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {socialChannels.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] transition-all flex items-center justify-between group ${item.color}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                        <div>
                          <p className="text-xs font-bold text-zinc-100 group-hover:text-white">
                            {item.name}
                          </p>
                          <p className="text-[10px] font-mono text-zinc-400">
                            {item.label}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1C16] border border-white/10 shadow-2xl">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                {t.sendMessage}
              </h3>
              <p className="text-zinc-300 text-sm mb-6 font-normal">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-emerald-300 mb-1.5 uppercase tracking-wider">
                      {t.yourName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#25D366] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-emerald-300 mb-1.5 uppercase tracking-wider">
                      {t.emailAddress}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#25D366] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-emerald-300 mb-1.5 uppercase tracking-wider">
                    {t.serviceRequired}
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#25D366] text-sm"
                  >
                    {t.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-emerald-300 mb-1.5 uppercase tracking-wider">
                    {t.projectOverview}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.messagePlaceholder}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#25D366] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-bold text-sm transition-all duration-200 shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendRequest}</span>
                </button>

                {submitted && (
                  <p className="text-center font-mono text-xs text-emerald-400 mt-2">
                    {t.inquiryPrepared}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
