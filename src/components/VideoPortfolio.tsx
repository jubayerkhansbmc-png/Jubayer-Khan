import React, { useState } from 'react';
import { Play, ExternalLink, Film, Youtube, Sparkles } from 'lucide-react';
import { VideoProject } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface VideoPortfolioProps {
  projects: VideoProject[];
  onSelectProject: (project: VideoProject) => void;
  t?: TranslationDictionary['video'];
}

type FilterCategory = 'all' | 'widescreen' | 'shorts';

export const VideoPortfolio: React.FC<VideoPortfolioProps> = ({ projects, onSelectProject, t }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const badgeText = t ? t.badge : 'Video Portfolio';
  const titleText = t ? t.title : 'Selected Video Work';
  const watchCutText = t ? t.watchCut : 'Watch Video';
  const previewText = t ? t.preview : 'Play Video →';

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'widescreen') return !project.isShorts && project.aspectRatio !== '9:16';
    if (activeFilter === 'shorts') return project.isShorts || project.aspectRatio === '9:16';
    return true;
  });

  return (
    <section id="video-work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#06120E]">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#25D366]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
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

          {/* YouTube Channel Link */}
          <a
            href="https://www.youtube.com/@JubayerKhansbmc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600/15 hover:bg-red-600/25 border border-red-500/30 text-white font-mono text-xs transition-all w-fit shadow-lg shadow-red-600/10 group"
          >
            <Youtube className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">YouTube @JubayerKhansbmc</span>
            <ExternalLink className="w-3 h-3 text-red-400" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
              activeFilter === 'all'
                ? 'bg-[#25D366] text-[#06120E] border-[#25D366] shadow-lg shadow-[#25D366]/20'
                : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-emerald-500/30'
            }`}
          >
            All Videos ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter('widescreen')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
              activeFilter === 'widescreen'
                ? 'bg-[#25D366] text-[#06120E] border-[#25D366] shadow-lg shadow-[#25D366]/20'
                : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-emerald-500/30'
            }`}
          >
            Standard 16:9 ({projects.filter((p) => !p.isShorts && p.aspectRatio !== '9:16').length})
          </button>
          <button
            onClick={() => setActiveFilter('shorts')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
              activeFilter === 'shorts'
                ? 'bg-[#25D366] text-[#06120E] border-[#25D366] shadow-lg shadow-[#25D366]/20'
                : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-emerald-500/30'
            }`}
          >
            Shorts & Reels 9:16 ({projects.filter((p) => p.isShorts || p.aspectRatio === '9:16').length})
          </button>
        </div>

        {/* Step-by-Step Video Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isShort = project.isShorts || project.aspectRatio === '9:16';
            const stepNumber = project.stepNumber || `0${index + 1}`;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-2xl bg-[#0A1C16] border border-white/10 hover:border-[#25D366]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#25D366]/10 flex flex-col justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onSelectProject(project);
                }}
                aria-label={`Open video ${project.title}`}
              >
                {/* Media Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C16] via-black/25 to-black/40 opacity-75 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badges: Step Indicator and Format */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-black bg-[#25D366] px-2.5 py-1 rounded shadow-md uppercase">
                      Step {stepNumber}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isShort ? (
                        <span className="font-mono text-[10px] font-semibold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-amber-500/30">
                          Shorts (9:16)
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] font-semibold text-emerald-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                          16:9 Video
                        </span>
                      )}
                      {project.duration && (
                        <span className="font-mono text-[10px] text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                          {project.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Center Play Button with Hover Scaling */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-13 h-13 rounded-full bg-[#25D366] text-[#06120E] flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-[#10B981] transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          title="Open directly on YouTube"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                      <Film className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>{watchCutText}</span>
                    </span>
                    <span className="text-zinc-400 group-hover:text-white transition-colors">
                      {previewText}
                    </span>
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
