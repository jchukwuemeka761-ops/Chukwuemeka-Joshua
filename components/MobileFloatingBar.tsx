'use client';

import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl, formatTelLink } from '@/lib/business-data';

interface MobileFloatingBarProps {
  onOpenBooking: () => void;
}

export function MobileFloatingBar({ onOpenBooking }: MobileFloatingBarProps) {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-500/30 bg-[#0c1017]/95 px-3 py-2.5 backdrop-blur-lg sm:hidden shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2">
        {/* Call Button */}
        <a
          href={formatTelLink(BUSINESS_DATA.phone)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 py-2.5 text-xs font-semibold text-slate-200 active:scale-95 transition"
        >
          <Phone className="h-3.5 w-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I am looking to book a service.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-500/50 bg-emerald-950/40 py-2.5 text-xs font-semibold text-emerald-400 active:scale-95 transition"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Primary CTA Book Now */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex flex-[1.4] items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/20 active:scale-95 transition"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </aside>
  );
}
