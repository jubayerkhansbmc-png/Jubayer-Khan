import React, { useState, useEffect } from 'react';
import {
  initialProfileData,
  servicesData,
  videoProjectsData,
  graphicProjectsData,
  processStepsData,
  toolsData,
} from './data/portfolioData';
import { ProfileData, VideoProject, ThemeMode, Language, getCreatorName } from './types/portfolio';
import { translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { VideoPortfolio } from './components/VideoPortfolio';
import { VideoModal } from './components/VideoModal';
import { GraphicDesign } from './components/GraphicDesign';
import { Process } from './components/Process';
import { Tools } from './components/Tools';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuickEditDrawer } from './components/QuickEditDrawer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('portfolio_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const savedSocials = parsed.socials || {};
        const mergedSocials = {
          ...initialProfileData.socials,
          ...savedSocials,
        };
        // Auto-upgrade placeholder socials to authentic user accounts
        if (!savedSocials.facebook || savedSocials.facebook.includes('yourprofile')) {
          mergedSocials.facebook = initialProfileData.socials.facebook;
        }
        if (!savedSocials.instagram || savedSocials.instagram.includes('yourprofile')) {
          mergedSocials.instagram = initialProfileData.socials.instagram;
        }
        if (!savedSocials.behance || savedSocials.behance.includes('yourprofile')) {
          mergedSocials.behance = initialProfileData.socials.behance;
        }
        if (!savedSocials.whatsapp || savedSocials.whatsapp.includes('00000')) {
          mergedSocials.whatsapp = initialProfileData.socials.whatsapp;
        }
        if (!savedSocials.youtube || savedSocials.youtube.includes('yourchannel')) {
          mergedSocials.youtube = initialProfileData.socials.youtube;
        }

        return {
          ...initialProfileData,
          ...parsed,
          customPhoto: undefined,
          socials: mergedSocials,
          creatorName: parsed.creatorName || initialProfileData.creatorName,
          creatorNameBn: parsed.creatorNameBn || initialProfileData.creatorNameBn,
          creatorNameAr: parsed.creatorNameAr || initialProfileData.creatorNameAr,
        };
      } catch {
        return initialProfileData;
      }
    }
    return initialProfileData;
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved === 'midnight' ? 'midnight' : 'dark';
  });

  // Multilingual support: en (English default), bn (Bengali), ar (Arabic)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'bn' || saved === 'ar' ? (saved as Language) : 'en';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync theme with DOM root and persistence
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'midnight') {
      document.documentElement.classList.add('theme-midnight');
    } else {
      document.documentElement.classList.remove('theme-midnight');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Current localized creator name based on active language
  const currentCreatorName = getCreatorName(profile, lang);

  // Sync language, direction (RTL for Arabic), and dynamic document title
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio_lang', lang);

    if (lang === 'bn') {
      document.title = `${currentCreatorName} | ভিডিও এডিটর ও গ্রাফিক ডিজাইনার`;
    } else if (lang === 'ar') {
      document.title = `${currentCreatorName} | محرر فيديو ومصمم جرافيك`;
    } else {
      document.title = `${currentCreatorName} | Video Editor & Graphic Designer`;
    }
  }, [lang, currentCreatorName]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'midnight' : 'dark'));
  };

  const handleSelectLang = (newLang: Language) => {
    setLang(newLang);
  };

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'services',
      'video-work',
      'graphic-design',
      'process',
      'contact',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -60% 0px',
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('portfolio_profile', JSON.stringify(updated));
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    localStorage.removeItem('portfolio_profile');
    setIsEditorOpen(false);
  };

  const handleOpenShowreel = () => {
    // Open the primary showcase YouTube video directly
    setSelectedVideo(videoProjectsData[0]);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Active translation dictionary
  const t = translations[lang] || translations.en;

  return (
    <div
      data-theme={theme}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#06120E] text-[#EDF7F3] selection:bg-[#25D366] selection:text-[#06120E] relative transition-colors duration-300 ${
        theme === 'midnight' ? 'theme-midnight' : ''
      }`}
    >
      {/* Navigation */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onOpenEditor={() => setIsEditorOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        currentLang={lang}
        onSelectLang={handleSelectLang}
        t={t.nav}
      />

      <main>
        {/* 1. Full-screen Hero Section with Scroll-Reactive Portrait Photo on the Right */}
        <Hero
          profile={profile}
          onOpenShowreel={handleOpenShowreel}
          t={t.hero}
          lang={lang}
        />

        {/* 2. Creative Marquee / Skills Strip */}
        <Marquee />

        {/* 3. About Me Section + Social Media Cards + WhatsApp Card */}
        <About profile={profile} t={t.about} lang={lang} />

        {/* 4. Services Section (01 - 07) */}
        <Services services={servicesData} t={t.services} />

        {/* 5. Selected Video Work (User's authentic 6 YouTube videos step-by-step) */}
        <VideoPortfolio
          projects={videoProjectsData}
          onSelectProject={(proj) => setSelectedVideo(proj)}
          t={t.video}
        />

        {/* 6. Graphic Design Showcase (Featuring Behance: Bangla Typography Poster Design) */}
        <GraphicDesign
          projects={graphicProjectsData}
          t={t.graphic}
          behanceUrl={profile.socials.behance}
        />

        {/* 7. Creative Process (4 Simple Steps) */}
        <Process steps={processStepsData} t={t.process} />

        {/* 7. Tools I Use (Core Adobe Suite: Premiere Pro, After Effects, Photoshop, Illustrator) */}
        <Tools tools={toolsData} t={t.tools} />

        {/* 8. Final Cinematic CTA Section */}
        <CTASection onScrollToContact={scrollToContact} t={t.cta} />

        {/* 9. Contact Section with WhatsApp, Email & Inquiry Form */}
        <ContactSection profile={profile} t={t.contact} lang={lang} />
      </main>

      {/* 10. Minimal Footer */}
      <Footer profile={profile} t={t.footer} lang={lang} />

      {/* Video Modal Player (YouTube Embedded + Fullscreen) */}
      <VideoModal
        project={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Quick Edit Drawer for Live Testing */}
      <QuickEditDrawer
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onReset={handleResetProfile}
      />
      {/* Custom Emerald Reactive Cursor */}
      <CustomCursor />
    </div>
  );
}
