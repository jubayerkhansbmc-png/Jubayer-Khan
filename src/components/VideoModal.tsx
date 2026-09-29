import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Film, Sparkles } from 'lucide-react';
import { VideoProject } from '../types/portfolio';

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const ytId = project.youtubeId || extractYouTubeId(project.videoUrl);
  const isVertical = project.isShorts || project.aspectRatio === '9:16';
  const watchUrl = ytId
    ? isVertical
      ? `https://www.youtube.com/shorts/${ytId}`
      : `https://www.youtube.com/watch?v=${ytId}`
    : project.videoUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className={`relative w-full rounded-3xl bg-[#0A1C16] border border-emerald-500/25 shadow-2xl overflow-hidden animate-scaleUp my-auto ${
          isVertical ? 'max-w-md' : 'max-w-4xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-emerald-500/15 bg-[#06120E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            {project.stepNumber && (
              <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Step {project.stepNumber}
              </span>
            )}
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-300">
              {project.category}
            </span>
            {isVertical && (
              <span className="font-mono text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Shorts (9:16)
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage Container */}
        <div
          className={`relative w-full bg-black overflow-hidden flex items-center justify-center ${
            isVertical ? 'aspect-[9/16] max-h-[70vh]' : 'aspect-video'
          }`}
        >
          {ytId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : project.videoUrl ? (
            <video
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#25D366] text-[#06120E] mx-auto flex items-center justify-center shadow-xl mb-4">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-white font-display font-bold text-lg mb-1">{project.title}</h4>
              </div>
            </div>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="p-5 sm:p-6 bg-[#0A1C16]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
            <div>
              <h3 id="video-modal-title" className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-emerald-400/90 flex items-center gap-2">
                <Film className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{project.category}</span>
                {project.duration && <span>• {project.duration}</span>}
              </p>
            </div>

            {watchUrl && (
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#10B981] text-[#06120E] text-xs font-bold font-mono transition-all shadow-md shrink-0 self-start"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/15">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
