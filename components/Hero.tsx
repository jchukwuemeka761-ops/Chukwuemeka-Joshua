'use client';

import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl, formatTelLink } from '@/lib/business-data';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#0e131d] via-[#0a0d14] to-[#07090e] pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Subtle luxury ambient gold glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Local trust signal banner */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Open 24 Hours Daily</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-amber-400" />
            <span>Asokoro, AMAC · Abuja FCT</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
            <span>Multi-Sector Enterprise Solutions</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-amber-400 uppercase sm:text-sm">
              J.Chukwuemeka Holdings
            </p>

            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Enterprise Technology, Logistics & Business Solutions in Asokoro, Abuja
            </h1>

            <p className="mt-5 text-base text-slate-300 sm:text-lg lg:leading-relaxed">
              Serving corporate entities, organizations, and private clients with integrated{' '}
              <strong className="font-semibold text-white">Software Development</strong>,{' '}
              <strong className="font-semibold text-white">Data Analytics</strong>,{' '}
              <strong className="font-semibold text-white">Courier & Shipping</strong>,{' '}
              <strong className="font-semibold text-white">Website Design</strong>,{' '}
              <strong className="font-semibold text-white">Business Consultancy</strong>, and{' '}
              <strong className="font-semibold text-white">Logistics & Car Rentals</strong>.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:brightness-110 active:scale-95"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-amber-400/50 hover:bg-slate-800"
              >
                <span>View Services</span>
                <ChevronRight className="h-4 w-4 text-amber-400" />
              </a>

              {/* Instant WhatsApp Action */}
              <a
                href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I am looking to book a service.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/30 px-5 py-3.5 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-900/30"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct phone quick note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <span>Need immediate assistance?</span>
              <a
                href={formatTelLink(BUSINESS_DATA.phone)}
                className="font-semibold text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:text-amber-300"
              >
                Call +234 916 040 8780 directly
              </a>
            </div>
          </div>

          {/* Quick Hub Overview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-amber-500/25 bg-gradient-to-b from-[#141a26] to-[#0d121c] p-6 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                    Central Operations Brief
                  </h2>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    J.Chukwuemeka Holdings Hub
                  </p>
                </div>
                <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                  24/7 ACTIVE
                </div>
              </div>

              {/* Service Matrix Highlights */}
              <div className="mt-5 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-amber-500/15 p-1 text-amber-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Full-Stack Digital & Tech</h3>
                    <p className="text-xs text-slate-400">Software development, web systems & data intelligence</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-amber-500/15 p-1 text-amber-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Rapid Courier & Freight</h3>
                    <p className="text-xs text-slate-400">Abuja same-day dispatch and nationwide package shipping</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-amber-500/15 p-1 text-amber-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Executive Mobility & Car Fleet</h3>
                    <p className="text-xs text-slate-400">Logistics car rentals, dealership sourcing & leasing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-amber-500/15 p-1 text-amber-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-white">Corporate Strategic Advisory</h3>
                    <p className="text-xs text-slate-400">Operational consultancy and growth roadmap guidance</p>
                  </div>
                </div>
              </div>

              {/* Quick Location & Schedule footer inside card */}
              <div className="mt-6 rounded-xl border border-white/5 bg-[#0a0d15] p-3.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 font-medium text-amber-400">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Operating Hours</span>
                  </span>
                  <span className="font-semibold text-white">All 7 Days · 24 Hours</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400">
                  1A Kofi Annan St, Asokoro, AMAC 900231, Federal Capital Territory
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-4">
          <div className="rounded-lg border border-white/5 bg-[#0f141f]/40 p-4">
            <p className="text-xs font-medium text-slate-400">Operational Hours</p>
            <p className="mt-1 text-sm font-bold text-amber-400 sm:text-base">Open 24 Hours Daily</p>
            <p className="text-[11px] text-slate-500">Every day of the week</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0f141f]/40 p-4">
            <p className="text-xs font-medium text-slate-400">Primary Location</p>
            <p className="mt-1 text-sm font-bold text-white sm:text-base">Asokoro, Abuja</p>
            <p className="text-[11px] text-slate-500">1A Kofi Annan St, AMAC</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0f141f]/40 p-4">
            <p className="text-xs font-medium text-slate-400">Core Disciplines</p>
            <p className="mt-1 text-sm font-bold text-amber-400 sm:text-base">6 Core Divisions</p>
            <p className="text-[11px] text-slate-500">Tech, Logistics & Advisory</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0f141f]/40 p-4">
            <p className="text-xs font-medium text-slate-400">Contact Accessibility</p>
            <p className="mt-1 text-sm font-bold text-white sm:text-base">Direct Line & WhatsApp</p>
            <p className="text-[11px] text-slate-500">+234 916 040 8780</p>
          </div>
        </div>
      </div>
    </section>
  );
}
