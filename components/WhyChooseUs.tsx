'use client';

import { Clock, MapPin, Layers, PhoneCall, CheckCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA, formatTelLink } from '@/lib/business-data';

export function WhyChooseUs() {
  const trustPoints = [
    {
      icon: <Clock className="h-6 w-6 text-amber-400" />,
      title: '24/7 Uninterrupted Readiness',
      description:
        'Operating 24 hours a day, 7 days a week. When time-critical delivery, urgent executive transportation, or rapid software assistance is required, our channels are actively responsive.',
      fact: 'Open Monday through Sunday, 24 Hours',
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-400" />,
      title: 'Prime Asokoro, Abuja Base',
      description:
        'Situated at 1A Kofi Annan St, Asokoro, AMAC. Our central Federal Capital Territory presence ensures rapid mobility, efficient local courier coverage, and convenient client access.',
      fact: '1A Kofi Annan St, Asokoro, AMAC 900231',
    },
    {
      icon: <Layers className="h-6 w-6 text-amber-400" />,
      title: 'Integrated Multi-Sector Capability',
      description:
        'One accountable entity providing both virtual technology solutions (code, data, web) and physical operations (courier, shipping, car fleet, consultancy). No disjointed subcontractors.',
      fact: '6 Core Disciplines Under One Roof',
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-amber-400" />,
      title: 'Direct Executive Accessibility',
      description:
        'We do not hide behind automated ticketing queues. Reach us directly on phone or WhatsApp for transparent scopes, prompt quotes, and fast scheduling.',
      fact: 'Direct Line: +234 916 040 8780',
    },
  ];

  return (
    <section id="why-us" className="scroll-mt-16 bg-[#07090e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Operational Advantages
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Work With J.Chukwuemeka Holdings
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Real, tangible advantages based on our verified Asokoro location, round-the-clock availability,
            and comprehensive multi-sector service delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0d121c] p-6 transition-colors hover:border-amber-500/40 hover:bg-[#101724]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10">
                  {point.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-3">
                <p className="text-[11px] font-semibold text-amber-400">
                  {point.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
