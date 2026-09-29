import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sliders, Moon, Sparkles, Globe } from 'lucide-react';
import { ProfileData, ThemeMode, Language, getCreatorName } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface NavbarProps {
  profile: ProfileData;
  activeSection: string;
  onOpenEditor: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  t: TranslationDictionary['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onOpenEditor,
  theme,
  onToggleTheme,
  currentLang,
  onSelectLang,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.services, href: '#services' },
    { label: t.videoWork, href: '#video-work' },
    { label: t.graphicDesign, href: '#graphic-design' },
    { label: t.process, href: '#process' },
    { label: t.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = getCreatorName(profile, currentLang);

  const languages: Array<{ code: Language; label: string; native: string }> = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'bn', label: 'বাং', native: 'বাংলা' },
    { code: 'ar', label: 'عربي', native: 'العربية' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-[#06120E]/90 backdrop-blur-md border-b border-emerald-500/15 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366] rounded-md px-1 shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] font-display font-extrabold text-sm tracking-tight group-hover:scale-105 group-hover:bg-[#25D366] group-hover:text-[#06120E] transition-all shadow-sm">
              JK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-[#25D366] transition-colors leading-tight">
                {displayName}
              </span>
              <span className="font-mono text-[9px] text-emerald-400/80 tracking-wider">
                {t.subtitle || 'VIDEO & GRAPHICS'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs px-2.5 py-1.5 rounded-full transition-all duration-200 font-medium ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm border border-emerald-500/30'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls: Language Switcher, Theme Toggle, Quick Edit & CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher Component */}
            <div
              className="flex items-center p-0.5 rounded-full bg-black/60 border border-emerald-500/30 backdrop-blur-sm"
              role="group"
              aria-label="Language selection"
            >
              <div className="px-2 text-zinc-400">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => onSelectLang(l.code)}
                  title={l.native}
                  aria-pressed={currentLang === l.code}
                  className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                    currentLang === l.code
                      ? 'bg-[#25D366] text-[#06120E] font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle Component */}
            <div
              className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm"
              role="group"
              aria-label="Theme selection"
            >
              <button
                type="button"
                onClick={() => theme !== 'dark' && onToggleTheme()}
                title="Emerald Dark theme"
                aria-pressed={theme === 'dark'}
                className={`p-1.5 rounded-full text-xs font-mono transition-all ${
                  theme === 'dark'
                    ? 'bg-emerald-500/20 text-[#25D366] border border-emerald-500/40 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#25D366]" />
              </button>

              <button
                type="button"
                onClick={() => theme !== 'midnight' && onToggleTheme()}
                title="High-Contrast Midnight theme"
                aria-pressed={theme === 'midnight'}
                className={`p-1.5 rounded-full text-xs font-mono transition-all ${
                  theme === 'midnight'
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 shadow-sm shadow-[#00F0FF]/25'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
              </button>
            </div>

            {/* Edit Info Trigger */}
            <button
              onClick={onOpenEditor}
              title="Edit personal placeholders"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden lg:inline font-mono text-[11px]">{t.editInfo}</span>
            </button>

            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="relative inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#10B981] text-[#06120E] shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{t.workTogether}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            {/* Quick language toggle for mobile */}
            <button
              type="button"
              onClick={() => {
                const order: Language[] = ['en', 'bn', 'ar'];
                const nextIdx = (order.indexOf(currentLang) + 1) % order.length;
                onSelectLang(order[nextIdx]);
              }}
              className="px-2.5 py-1 rounded-lg border border-emerald-500/40 bg-[#25D366]/15 text-[#25D366] text-xs font-mono font-bold flex items-center gap-1"
              title="Switch language (EN / BN / AR)"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLang.toUpperCase()}</span>
            </button>

            <button
              onClick={onOpenEditor}
              className="p-1.5 text-zinc-400 hover:text-white border border-white/10 rounded-lg bg-white/[0.02]"
              title="Edit placeholders"
            >
              <Sliders className="w-4 h-4 text-[#25D366]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-300 hover:text-white border border-white/10 rounded-lg bg-white/[0.02] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[60px] bg-[#06120E]/95 backdrop-blur-xl border-b border-emerald-500/20 px-6 py-6 transition-all duration-300 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {/* Mobile Language Switcher */}
            <div className="py-2.5 px-3 rounded-xl bg-white/[0.03] border border-emerald-500/20 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Language / ভাষা / اللغة</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      onSelectLang(l.code);
                    }}
                    className={`py-2 px-2 rounded-lg border text-xs font-mono font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                      currentLang === l.code
                        ? 'bg-[#25D366] text-[#06120E] border-[#25D366] shadow-sm'
                        : 'bg-transparent border-white/10 text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[9px] font-normal opacity-80">{l.native}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Theme Toggle Section */}
            <div className="py-2 px-3 rounded-xl bg-white/[0.03] border border-white/10 mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {t.themeToggle}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => theme !== 'dark' && onToggleTheme()}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-[#25D366] font-semibold'
                      : 'bg-transparent border-white/10 text-zinc-400'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Emerald</span>
                </button>
                <button
                  type="button"
                  onClick={() => theme !== 'midnight' && onToggleTheme()}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border text-xs font-medium transition-all ${
                    theme === 'midnight'
                      ? 'bg-[#00F0FF]/20 border-[#00F0FF]/50 text-[#00F0FF] font-semibold'
                      : 'bg-transparent border-white/10 text-zinc-400'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Midnight</span>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base py-2 text-zinc-300 hover:text-[#25D366] font-medium border-b border-white/[0.05]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-[#06120E] font-bold text-sm shadow-lg shadow-[#25D366]/25"
              >
                <span>{t.workTogether}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
