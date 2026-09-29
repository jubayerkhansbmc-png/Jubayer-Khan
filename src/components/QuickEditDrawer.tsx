import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders, Check } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface QuickEditDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
  onReset: () => void;
}

export const QuickEditDrawer: React.FC<QuickEditDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onReset,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#0A1C16] border-l border-emerald-500/20 h-full flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-emerald-500/15 flex items-center justify-between bg-[#06120E]">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#25D366]" />
            <h3 className="font-display font-bold text-base text-white">
              Edit Portfolio Placeholders
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10"
            aria-label="Close panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5">
          <p className="text-xs text-zinc-300 leading-relaxed font-normal">
            Customize your live placeholders directly. Changes are automatically reflected across the entire site and saved locally in your browser.
          </p>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#25D366] font-semibold border-b border-emerald-500/15 pb-1">
              General Identity
            </h4>

            <div className="space-y-3 p-3 rounded-xl bg-black/40 border border-emerald-500/20">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1 flex items-center justify-between">
                  <span>Name (English)</span>
                  <span className="text-[10px] text-zinc-500 font-sans">English display</span>
                </label>
                <input
                  type="text"
                  value={formData.creatorName}
                  onChange={(e) => setFormData({ ...formData, creatorName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
                  placeholder="Mohammad Jubayer Khan"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-emerald-400 mb-1 flex items-center justify-between">
                  <span>বাংলায় আপনার নাম (Bengali)</span>
                  <span className="text-[10px] text-zinc-400 font-sans">বাংলা ভার্সনে দেখাবে</span>
                </label>
                <input
                  type="text"
                  value={formData.creatorNameBn || ''}
                  onChange={(e) => setFormData({ ...formData, creatorNameBn: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white text-xs focus:outline-none focus:border-[#25D366]"
                  placeholder="মোহাম্মদ জুবায়ের খান"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-emerald-400 mb-1 flex items-center justify-between">
                  <span dir="rtl">الاسم بالعربية (Arabic)</span>
                  <span className="text-[10px] text-zinc-400 font-sans">يظهر في النسخة العربية</span>
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={formData.creatorNameAr || ''}
                  onChange={(e) => setFormData({ ...formData, creatorNameAr: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-emerald-500/30 text-white text-xs focus:outline-none focus:border-[#25D366]"
                  placeholder="محمد زبير خان"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Eyebrow Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
                placeholder="VIDEO EDITOR & GRAPHIC DESIGNER"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Hero Description</label>
              <textarea
                rows={3}
                value={formData.heroBio}
                onChange={(e) => setFormData({ ...formData, heroBio: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366] resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">About Me Lead Quote</label>
              <textarea
                rows={2}
                value={formData.aboutIntro}
                onChange={(e) => setFormData({ ...formData, aboutIntro: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366] resize-none"
              />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#25D366] font-semibold border-b border-emerald-500/15 pb-1">
              Contact & Social Channels
            </h4>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">WhatsApp Number</label>
              <input
                type="text"
                value={formData.socials.whatsapp}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, whatsapp: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366] font-mono"
                placeholder="+8801616329372"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.socials.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, email: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
                placeholder="jubayerkhansbmc@gmail.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">YouTube URL</label>
              <input
                type="text"
                value={formData.socials.youtube}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, youtube: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Instagram URL</label>
              <input
                type="text"
                value={formData.socials.instagram}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, instagram: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">LinkedIn URL</label>
              <input
                type="text"
                value={formData.socials.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, linkedin: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Facebook URL</label>
              <input
                type="text"
                value={formData.socials.facebook}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, facebook: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">TikTok URL</label>
              <input
                type="text"
                value={formData.socials.tiktok}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, tiktok: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
                placeholder="https://tiktok.com/@yourprofile"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 mb-1">Behance Portfolio URL</label>
              <input
                type="text"
                value={formData.socials.behance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, behance: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-white text-xs focus:outline-none focus:border-[#25D366]"
                placeholder="https://behance.net/yourprofile"
              />
            </div>
          </div>
        </form>

        {/* Footer actions */}
        <div className="p-4 border-t border-emerald-500/15 bg-[#06120E] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white text-xs font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#10B981] text-[#06120E] font-bold text-xs transition-colors shadow-lg shadow-[#25D366]/20"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Live Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
