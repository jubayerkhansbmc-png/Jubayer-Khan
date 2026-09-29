import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'VIDEO EDITING',
    'MOTION GRAPHICS',
    'GRAPHIC DESIGN',
    'THUMBNAIL DESIGN',
    'SOCIAL MEDIA CONTENT',
    'VISUAL DESIGN',
  ];

  return (
    <div className="relative w-full py-4 sm:py-5 border-y border-emerald-500/15 bg-[#0A1C16]/50 overflow-hidden backdrop-blur-sm">
      {/* Side gradient fades */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#06120E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#06120E] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Repeated to loop seamlessly */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 group cursor-default">
            <span className="font-display font-bold text-xs sm:text-sm tracking-widest text-emerald-200/80 group-hover:text-[#25D366] transition-colors uppercase">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]/70" />
          </div>
        ))}
      </div>
    </div>
  );
};
