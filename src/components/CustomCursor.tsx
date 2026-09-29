import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer');
        setIsHovered(!!clickable);
      }
    };

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  // Smooth fluid trailing interpolation for soft visual light
  useEffect(() => {
    let animId: number;
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Soft colorful ambient glow light aura (NO ring, pure visual light) */}
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 blur-lg transition-all duration-300 ease-out will-change-transform ${
          isDown
            ? 'w-24 h-24 opacity-90 scale-125'
            : isHovered
            ? 'w-20 h-20 opacity-80 scale-110'
            : 'w-14 h-14 opacity-60 scale-100'
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          background: isDown
            ? 'radial-gradient(circle, rgba(37,211,102,0.65) 0%, rgba(0,240,255,0.45) 50%, rgba(168,85,247,0.2) 80%, transparent 100%)'
            : isHovered
            ? 'radial-gradient(circle, rgba(37,211,102,0.55) 0%, rgba(56,189,248,0.35) 55%, rgba(16,185,129,0.15) 85%, transparent 100%)'
            : 'radial-gradient(circle, rgba(37,211,102,0.45) 0%, rgba(16,185,129,0.25) 50%, rgba(6,18,14,0.1) 75%, transparent 100%)',
        }}
      />

      {/* Colorful secondary luminous particle glow */}
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm transition-transform duration-100 ease-out will-change-transform ${
          isDown ? 'w-6 h-6 scale-110' : isHovered ? 'w-5 h-5 scale-125' : 'w-3.5 h-3.5 scale-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: isDown
            ? 'radial-gradient(circle, #ffffff 10%, #25D366 40%, #00F0FF 80%)'
            : isHovered
            ? 'radial-gradient(circle, #ffffff 20%, #34D399 60%, #38BDF8 100%)'
            : 'radial-gradient(circle, #EDF7F3 30%, #25D366 80%)',
          boxShadow: isDown
            ? '0 0 16px 4px rgba(37,211,102,0.8), 0 0 24px 6px rgba(0,240,255,0.5)'
            : isHovered
            ? '0 0 14px 3px rgba(37,211,102,0.7), 0 0 20px 4px rgba(56,189,248,0.4)'
            : '0 0 10px 2px rgba(37,211,102,0.5)',
        }}
      />

      {/* Center sharp pinpoint luminous spark */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 bg-white will-change-transform shadow-[0_0_6px_#ffffff]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </div>
  );
};
