'use client';

import { useState } from 'react';
import {
  MapPin,
  Clock,
  Navigation,
  ExternalLink,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Building,
} from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl, formatTelLink } from '@/lib/business-data';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="scroll-mt-16 bg-[#07090e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Headquarters & Coverage
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Location & Operating Hours
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Conveniently situated in Asokoro, Abuja. We serve businesses, corporate institutions,
            and private clients across the Federal Capital Territory and nationwide.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Address & Hours Detail Card */}
          <div className="space-y-6 lg:col-span-5">
            {/* Address Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0d121c] p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Physical Address</h3>
                  <p className="text-xs text-amber-400">Asokoro District, AMAC</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-white/5 bg-[#080b10] p-3.5">
                <p className="text-sm font-medium text-slate-200">
                  {BUSINESS_DATA.address.full}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-amber-400/40 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={BUSINESS_DATA.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-300 transition hover:bg-amber-500/20"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0d121c] p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Operating Schedule</h3>
                    <p className="text-xs text-slate-400">Continuous 24/7 Service</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Open 24/7
                </span>
              </div>

              <div className="mt-5 divide-y divide-white/5 rounded-lg border border-white/5 bg-[#080b10] text-xs">
                {BUSINESS_DATA.hours.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between px-3.5 py-2.5">
                    <span className="font-medium text-slate-300">{schedule.day}</span>
                    <span className="font-semibold text-amber-400">{schedule.status}</span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Staff and logistics dispatch are on standby 24 hours every day for urgent courier pickups,
                executive car rentals, and software support.
              </p>
            </div>
          </div>

          {/* Interactive Map Visual Panel */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d121c] shadow-xl">
              {/* Top Map header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-[#101622] px-6 py-4">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Asokoro District · Abuja Municipal Area Council (AMAC)
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400">9.0219° N, 7.5208° E</span>
              </div>

              {/* Map visual representation */}
              <div className="relative h-72 w-full bg-[#131b29] sm:h-80">
                {/* Stylized vector map grid background */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px), radial-gradient(#334155 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                {/* Road lines simulation */}
                <svg className="absolute inset-0 h-full w-full stroke-slate-700/60" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="40%" x2="100%" y2="50%" strokeWidth="3" />
                  <line x1="20%" y1="0" x2="35%" y2="100%" strokeWidth="2.5" />
                  <line x1="60%" y1="0" x2="75%" y2="100%" strokeWidth="4" className="stroke-amber-500/30" />
                  <line x1="0" y1="75%" x2="100%" y2="65%" strokeWidth="2" />
                  <circle cx="68%" cy="52%" r="48" className="fill-amber-500/10 stroke-amber-500/30" />
                </svg>

                {/* Central pin marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-amber-400 opacity-30"></span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 bg-slate-950 shadow-xl">
                      <MapPin className="h-5 w-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="mt-2 rounded-md border border-amber-500/40 bg-slate-950/90 px-3 py-1.5 shadow-xl backdrop-blur-sm">
                    <p className="text-xs font-bold text-white">J.Chukwuemeka Holdings</p>
                    <p className="text-[10px] text-amber-300">1A Kofi Annan St, Asokoro</p>
                  </div>
                </div>

                {/* Overlay link button */}
                <div className="absolute right-4 bottom-4">
                  <a
                    href={BUSINESS_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-slate-950/90 border border-slate-700 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition hover:border-amber-400 hover:text-amber-300"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Map Footer Info */}
              <div className="border-t border-white/5 bg-[#0b0f17] p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Regional Service Coverage
                    </h4>
                    <p className="mt-1 text-xs text-slate-300">
                      Asokoro, Maitama, Central Business District (CBD), Garki, Wuse, Guzape, and greater Abuja AMAC, with nationwide shipping for freight & parcels.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center sm:items-end">
                    <a
                      href={formatTelLink(BUSINESS_DATA.phone)}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white transition hover:text-amber-300"
                    >
                      <Phone className="h-3.5 w-3.5 text-amber-400" />
                      <span>{BUSINESS_DATA.phone}</span>
                    </a>
                    <a
                      href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I am requesting your location details.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-emerald-400 transition hover:text-emerald-300"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>WhatsApp for Location Pin</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
