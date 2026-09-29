import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface WhatsAppCardProps {
  number: string;
  className?: string;
}

export const WhatsAppCard: React.FC<WhatsAppCardProps> = ({ number, className = '' }) => {
  // Format clean international whatsapp URL
  const rawClean = number.replace(/[^0-9]/g, '');
  const waNumber = rawClean.startsWith('880')
    ? rawClean
    : rawClean.startsWith('0')
    ? `88${rawClean}`
    : `880${rawClean}`;
  const whatsappUrl = `https://wa.me/${waNumber}?text=Hi!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`;

  const displayPhone = number.startsWith('0')
    ? `+88 ${number}`
    : number.startsWith('+880')
    ? number
    : `+880 1616-329372`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0e1713] via-[#09110d] to-[#080d0b] border border-emerald-500/25 p-6 sm:p-7 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/10 block ${className}`}
    >
      {/* Subtle emerald ambient aura */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-medium">
                Direct Messaging
              </span>
            </div>
            <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-emerald-300 transition-colors">
              Let's Talk on WhatsApp
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-sm">
              Quick discussions, project feasibility checks, and instant creative consultations.
            </p>
            <div className="mt-3 font-mono text-xs text-zinc-400 flex items-center gap-2">
              <span>WhatsApp:</span>
              <span className="text-emerald-300 font-mono font-semibold bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-500/30">
                {displayPhone}
              </span>
            </div>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};
