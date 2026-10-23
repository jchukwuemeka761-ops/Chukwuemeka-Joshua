'use client';

import { Building2, ShieldCheck, Clock, MapPin, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA, formatTelLink } from '@/lib/business-data';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-slate-800 bg-[#0a0d14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#111723] to-[#0c1018] p-8 shadow-xl">
              {/* Monogram Crest */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-slate-900 shadow-md">
                <span className="font-serif text-2xl font-bold tracking-widest text-amber-400">JC</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                J.Chukwuemeka Holdings
              </h3>
              <p className="mt-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                Registered Multi-Sector Enterprise
              </p>

              <div className="mt-6 space-y-3 border-t border-white/5 pt-6 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>1A Kofi Annan St, Asokoro, AMAC, Abuja</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>24 Hours Continuous Operations · 7 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
                  <span>Corporate Discretion & Service Dependability</span>
                </div>
              </div>

              {/* Direct call badge */}
              <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <p className="text-xs font-medium text-slate-300">Direct Inquiries & Executive Line:</p>
                <a
                  href={formatTelLink(BUSINESS_DATA.phone)}
                  className="mt-1 block font-mono text-base font-bold text-amber-400 hover:text-amber-300"
                >
                  +234 916 040 8780
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              About the Enterprise
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Unifying Digital Systems and Essential Physical Operations
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                Based in the diplomatic and commercial precinct of <strong className="font-semibold text-white">Asokoro, Abuja</strong>,
                <strong className="font-semibold text-white"> J.Chukwuemeka Holdings</strong> is an integrated local business enterprise
                established to solve critical needs across both the digital realm and physical logistics.
              </p>

              <p>
                Modern businesses and private clients in Abuja frequently face the hassle of coordinating disjointed service providers:
                one agency for software engineering, an external freelancer for data dashboards, an unverified courier for urgent documents,
                and separate brokers for executive mobility and car rentals.
              </p>

              <p>
                J.Chukwuemeka Holdings centralizes these essential capabilities under a single trusted corporate umbrella.
                Whether you require bespoke software systems, business intelligence reporting, responsive website design,
                priority shipping, luxury car rentals, or commercial advisory, we provide accountable execution with 24/7 responsiveness.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-[#0d121c] p-4">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Technological Competence</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  Modern software, scalable web architectures, and quantitative data analytics for informed governance.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-[#0d121c] p-4">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  <span>Ground Logistics & Fleet</span>
                </div>
                <p className="mt-1.5 text-xs text-slate-400">
                  Reliable dispatch, secure courier transit across AMAC & nationwide, and executive car rental solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
