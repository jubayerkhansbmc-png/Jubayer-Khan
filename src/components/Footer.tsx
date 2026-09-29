import React, { useState } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';
import { ProfileData, Language, getCreatorName } from '../types/portfolio';
import {
  FacebookIcon,
  YouTubeIcon,
  WhatsAppIcon,
  TikTokIcon,
  BehanceIcon,
  InstagramIcon,
  LinkedInIcon,
} from './SocialIcons';
import { TranslationDictionary } from '../data/translations';

interface FooterProps {
  profile: ProfileData;
  t: TranslationDictionary['footer'];
  lang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ profile, t, lang = 'en' }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const currentYear = new Date().getFullYear();
  const displayName = getCreatorName(profile, lang);

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: (() => {
        const clean = profile.socials.whatsapp.replace(/[^0-9]/g, '');
        const wa = clean.startsWith('880') ? clean : clean.startsWith('0') ? `88${clean}` : `880${clean}`;
        return `https://wa.me/${wa}`;
      })(),
      icon: WhatsAppIcon,
      color: 'hover:text-[#25D366] text-emerald-400',
    },
    { name: 'Facebook', url: profile.socials.facebook, icon: FacebookIcon, color: 'hover:text-blue-400 text-zinc-400' },
    { name: 'YouTube', url: profile.socials.youtube, icon: YouTubeIcon, color: 'hover:text-red-400 text-zinc-400' },
    { name: 'TikTok', url: profile.socials.tiktok, icon: TikTokIcon, color: 'hover:text-pink-400 text-zinc-400' },
    { name: 'Behance', url: profile.socials.behance, icon: BehanceIcon, color: 'hover:text-sky-400 text-zinc-400' },
    { name: 'Instagram', url: profile.socials.instagram, icon: InstagramIcon, color: 'hover:text-purple-400 text-zinc-400' },
    { name: 'LinkedIn', url: profile.socials.linkedin, icon: LinkedInIcon, color: 'hover:text-blue-300 text-zinc-400' },
  ];

  return (
    <footer className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/15 bg-[#040D0A]">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-emerald-500/15 items-start">
          {/* Brand Info & Socials */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] font-display font-extrabold text-sm shadow-sm">
                JK
              </div>
              <span className="font-display font-bold text-xl text-white">
                {displayName}
              </span>
            </div>

            <p className="text-zinc-300 text-sm max-w-md leading-relaxed font-normal">
              {t.description}
            </p>

            {/* Official Social Links with Logos */}
            <div className="flex flex-wrap gap-2.5 pt-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 text-xs font-mono transition-all ${item.color} hover:bg-white/[0.06]`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter / Stay Connected Card */}
          <div className="lg:col-span-6 bg-[#0A1C16] p-6 sm:p-8 rounded-2xl border border-emerald-500/20">
            <h4 className="font-display font-bold text-lg text-white mb-1">
              {t.stayConnected}
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm mb-4 font-normal">
              {t.newsletterDesc}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-[#25D366] text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shrink-0 shadow-md shadow-[#25D366]/20"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>{t.subscribed}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.subscribe}</span>
                  </>
                )}
              </button>
            </form>
            {subscribed && (
              <p className="font-mono text-[11px] text-emerald-400 mt-2">
                {t.subscribedNote}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {currentYear} {displayName}. {t.rightsReserved}</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400/90">{t.taglineBottom}</span>
            <span>•</span>
            <span>{t.independent}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
