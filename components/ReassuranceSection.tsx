'use client';

import { Shield, FileCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { formatTelLink, BUSINESS_DATA } from '@/lib/business-data';

interface ReassuranceSectionProps {
  onOpenBooking: () => void;
}

export function ReassuranceSection({ onOpenBooking }: ReassuranceSectionProps) {
  const commitments = [
    {
      icon: <Lock className="h-5 w-5 text-amber-400" />,
      title: 'Confidentiality & Data Protection',
      text: 'Strict discretion and confidentiality on all data analysis, proprietary business code, and corporate documents.',
    },
    {
      icon: <FileCheck className="h-5 w-5 text-amber-400" />,
      title: 'Clear Deliverables & Scopes',
      text: 'Every project, courier assignment, or vehicle lease is preceded by transparent terms, defined timelines, and clear expectations.',
    },
    {
      icon: <Shield className="h-5 w-5 text-amber-400" />,
      title: 'Physical Accountability',
      text: 'An established physical hub at 1A Kofi Annan St, Asokoro, AMAC, providing verified accountability and peace of mind.',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-amber-400" />,
      title: '24/7 Rapid Response Guarantee',
      text: 'Prompt response across phone and WhatsApp 24 hours a day, ensuring urgent logistical or technical requirements are met without delay.',
    },
  ];

  return (
    <section id="standards" className="scroll-mt-16 border-t border-slate-800 bg-[#0a0d14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Client Reassurance & Standards
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our Professional Operating Standards
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We uphold high standards of business integrity, operational transparency,
            and reliable 24/7 communication for every engagement.
          </p>
        </div>

        {/* 4 Commitments Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800/90 bg-[#0e1420] p-6 transition hover:border-amber-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Transparent Engagement Workflow */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-[#0d121c] p-8 sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              How We Work With You
            </h3>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              A straightforward, transparent four-step engagement framework.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative border-l-2 border-amber-500/30 pl-4 sm:border-l-0 sm:border-t-2 sm:pt-4 sm:pl-0">
              <span className="font-mono text-xs font-bold text-amber-400">STEP 01</span>
              <h4 className="mt-1 text-sm font-bold text-white">Initial Contact</h4>
              <p className="mt-1 text-xs text-slate-300">
                Submit an inquiry via our booking form, call +234 916 040 8780, or chat via WhatsApp.
              </p>
            </div>

            <div className="relative border-l-2 border-amber-500/30 pl-4 sm:border-l-0 sm:border-t-2 sm:pt-4 sm:pl-0">
              <span className="font-mono text-xs font-bold text-amber-400">STEP 02</span>
              <h4 className="mt-1 text-sm font-bold text-white">Scope & Schedule</h4>
              <p className="mt-1 text-xs text-slate-300">
                We review requirements, confirm operational availability, and agree on clear deliverables.
              </p>
            </div>

            <div className="relative border-l-2 border-amber-500/30 pl-4 sm:border-l-0 sm:border-t-2 sm:pt-4 sm:pl-0">
              <span className="font-mono text-xs font-bold text-amber-400">STEP 03</span>
              <h4 className="mt-1 text-sm font-bold text-white">Active Deployment</h4>
              <p className="mt-1 text-xs text-slate-300">
                Engineering software, delivering courier packages, dispatching vehicles, or executing consultancy.
              </p>
            </div>

            <div className="relative border-l-2 border-amber-500/30 pl-4 sm:border-l-0 sm:border-t-2 sm:pt-4 sm:pl-0">
              <span className="font-mono text-xs font-bold text-amber-400">STEP 04</span>
              <h4 className="mt-1 text-sm font-bold text-white">Delivery & Support</h4>
              <p className="mt-1 text-xs text-slate-300">
                Final delivery handoff, status updates, and ongoing 24/7 client coordination.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              <span>Book a Service Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={formatTelLink(BUSINESS_DATA.phone)}
              className="text-xs font-semibold text-slate-300 hover:text-amber-300"
            >
              Or call our 24/7 line: <span className="text-amber-400">+234 916 040 8780</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
