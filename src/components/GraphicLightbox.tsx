import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GraphicProject } from '../types/portfolio';

interface GraphicLightboxProps {
  project: GraphicProject | null;
  projects?: GraphicProject[];
  onClose: () => void;
  onNavigate?: (direction: 'next' | 'prev') => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const GraphicLightbox: React.FC<GraphicLightboxProps> = ({
  project,
  onClose,
  onNavigate,
  onPrev,
  onNext,
}) => {
  const handlePrev = () => {
    if (onNavigate) onNavigate('prev');
    else if (onPrev) onPrev();
  };

  const handleNext = () => {
    if (onNavigate) onNavigate('next');
    else if (onNext) onNext();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
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

  const displayFilename = project.filename || project.image.replace(/^\//, '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#0A1C16] border border-emerald-500/20 shadow-2xl overflow-hidden animate-scaleUp flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/15 bg-[#06120E] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/20">
              {project.category}
            </span>
            <span className="font-mono text-xs text-zinc-400">
              {displayFilename}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Large Image Showcase Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px]">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[65vh] w-auto max-w-full object-contain filter contrast-105"
          />

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 text-white transition-all shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Lightbox Footer Content */}
        <div className="p-6 bg-[#0A1C16] border-t border-emerald-500/15 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 id="lightbox-title" className="font-display font-bold text-xl text-white">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-zinc-300 mt-1">
              Local image reference: /public/{displayFilename} • High-resolution presentation
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span>Use ← → keys or swipe</span>
            <span className="text-zinc-600">•</span>
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
