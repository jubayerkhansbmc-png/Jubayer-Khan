import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GraphicProject } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';
import { BehanceIcon } from './SocialIcons';

interface GraphicDesignProps {
  projects: GraphicProject[];
  t?: TranslationDictionary['graphic'];
  behanceUrl?: string;
}

export const GraphicDesign: React.FC<GraphicDesignProps> = ({
  projects,
  t,
  behanceUrl = 'https://www.behance.net/gallery/256140723/Bangla-Typography-Poster-Design',
}) => {
  const [selectedProject, setSelectedProject] = useState<GraphicProject | null>(null);

  const badgeText = t ? t.badge : 'Visual Art & Design';
  const titleText = t ? t.title : 'Graphic Design Showcase';
  const subtitleText =
    t ? t.subtitle : 'Bangla typography poster designs, editorial compositions, and brand visual identities.';

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') handleNavigate('next');
      if (e.key === 'ArrowLeft') handleNavigate('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, projects]);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  };

  const featured = projects[0];
  const galleryItems = projects.slice(1);

  return (
    <section id="graphic-design" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#071510]/50 border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
                {badgeText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {titleText}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-zinc-300 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
              {subtitleText}
            </p>
            <a
              href={behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-200 font-mono text-xs transition-all shrink-0 shadow-lg shadow-sky-500/10 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <BehanceIcon className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Behance @JubayerKhan</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-300" />
            </a>
          </div>
        </div>

        {/* Featured Behance Masterpiece: Bangla Typography Poster Design */}
        {featured && (
          <div className="mb-10">
            <div
              onClick={() => setSelectedProject(featured)}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A1C16] to-[#040D0A] border-2 border-emerald-500/30 hover:border-[#25D366] transition-all duration-500 shadow-2xl cursor-pointer hover:shadow-[0_0_35px_rgba(37,211,102,0.15)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedProject(featured);
              }}
              aria-label={`Open ${featured.title}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Poster Preview Image with Hover Scale */}
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl group-hover:border-emerald-500/50 transition-colors">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Featured Poster Design</span>
                  </div>

                  {/* Hover view hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-xs border border-emerald-500/40 shadow-2xl">
                      <ZoomIn className="w-4 h-4 text-[#25D366]" />
                      <span>Click to View Full Size</span>
                    </span>
                  </div>
                </div>

                {/* Info & Call to Action */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs uppercase tracking-wider mb-4">
                      <span>{featured.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4 group-hover:text-emerald-300 transition-colors leading-tight">
                      {featured.title}
                    </h3>

                    <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {featured.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(featured);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-[#06120E] font-bold text-xs shadow-lg hover:bg-[#10B981] transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>View Full Artwork</span>
                    </button>

                    <a
                      href={featured.externalLink || behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 font-mono text-xs transition-all hover:scale-[1.02]"
                    >
                      <BehanceIcon className="w-3.5 h-3.5 text-sky-400" />
                      <span>Open on Behance</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid: All Graphic Design Artworks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#0A1C16] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#25D366]/10 flex flex-col justify-between cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project);
              }}
              aria-label={`Open ${project.title}`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C16] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-mono text-[10px] text-zinc-300 uppercase">
                  {project.category}
                </div>

                {/* Hover trigger hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-[11px] border border-emerald-500/30">
                    <ZoomIn className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>View Artwork</span>
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-emerald-300 transition-colors mb-1.5 line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-zinc-300 text-xs line-clamp-2 font-normal leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-emerald-400/90 flex items-center gap-1">
                    <span>{project.dimensions || 'High-Res Asset'}</span>
                  </span>
                  <span className="text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
                    <span>Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Full-Screen Lightbox Modal for Graphic Design Artworks */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#0A1C16] border-2 border-emerald-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-zinc-500">•</span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white truncate max-w-xs sm:max-w-md">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {selectedProject.externalLink && (
                  <a
                    href={selectedProject.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 text-sky-200 font-mono text-xs transition-colors"
                  >
                    <BehanceIcon className="w-3.5 h-3.5 text-sky-400" />
                    <span className="hidden sm:inline">Behance</span>
                    <ExternalLink className="w-3 h-3 text-sky-300" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Artwork Image Viewport with Nav Arrows */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] max-h-[62vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain filter contrast-105"
              />

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() => handleNavigate('prev')}
                className="absolute left-3 p-2.5 rounded-full bg-black/75 hover:bg-[#25D366] text-white hover:text-black border border-white/20 transition-all shadow-xl"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => handleNavigate('next')}
                className="absolute right-3 p-2.5 rounded-full bg-black/75 hover:bg-[#25D366] text-white hover:text-black border border-white/20 transition-all shadow-xl"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="pt-3 mt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
              <p className="text-xs sm:text-sm text-zinc-200 font-normal">
                {selectedProject.description}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-mono text-zinc-400">
                  {selectedProject.dimensions || 'High-Res Asset'}
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  {projects.findIndex((p) => p.id === selectedProject.id) + 1} / {projects.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
