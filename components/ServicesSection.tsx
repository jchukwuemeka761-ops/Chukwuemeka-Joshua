'use client';

import { useState } from 'react';
import {
  Code2,
  Globe,
  BarChart3,
  Truck,
  Car,
  Compass,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_DATA, ServiceItem, buildWhatsAppUrl } from '@/lib/business-data';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'logistics' | 'advisory'>('all');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'software-development':
        return <Code2 className="h-6 w-6 text-amber-400" />;
      case 'website-design':
        return <Globe className="h-6 w-6 text-amber-400" />;
      case 'data-analyst':
        return <BarChart3 className="h-6 w-6 text-amber-400" />;
      case 'courier-shipping':
        return <Truck className="h-6 w-6 text-amber-400" />;
      case 'logistics-car-rentals':
        return <Car className="h-6 w-6 text-amber-400" />;
      case 'consultancy':
        return <Compass className="h-6 w-6 text-amber-400" />;
      default:
        return <Sparkles className="h-6 w-6 text-amber-400" />;
    }
  };

  const filteredServices = BUSINESS_DATA.services.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.category === activeFilter;
  });

  return (
    <section id="services" className="scroll-mt-16 bg-[#07090e] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Specialized Practice Areas
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Our Core Commercial Services
          </h2>
          <p className="mt-4 text-base text-slate-300">
            J.Chukwuemeka Holdings unites high-calibre digital technology, secure physical freight,
            executive automobile mobility, and high-level corporate advisory under unified 24/7 management.
          </p>

          {/* Interactive filter tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'border border-amber-500/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              All Services (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('tech')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === 'tech'
                  ? 'border border-amber-500/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              Tech & Digital (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('logistics')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === 'logistics'
                  ? 'border border-amber-500/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              Logistics & Mobility (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('advisory')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                activeFilter === 'advisory'
                  ? 'border border-amber-500/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              Advisory & Strategy (1)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0d121c] p-6 transition-all duration-300 hover:border-amber-500/40 hover:bg-[#101724] hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Header with Icon and index */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 transition-colors group-hover:border-amber-400 group-hover:bg-amber-500/20">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-serif text-sm font-semibold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & summary */}
                <h3 className="mt-5 text-xl font-bold text-white transition-colors group-hover:text-amber-300">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {service.summary}
                </p>

                {/* Deliverables List */}
                <div className="mt-5 border-t border-white/5 pt-4">
                  <p className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                    Key Deliverables
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 border-t border-slate-800/80 pt-4">
                <p className="mb-3 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Suited for:</strong> {service.idealFor}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.id)}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-amber-500/15 py-2.5 px-3 text-xs font-bold text-amber-300 transition-colors hover:bg-amber-500 hover:text-slate-950"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      BUSINESS_DATA.whatsapp,
                      `Hello J.Chukwuemeka Holdings, I would like to inquire about ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 py-2.5 px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct consultation callout strip */}
        <div className="mt-14 rounded-xl border border-amber-500/25 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/5 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-lg font-bold text-white sm:text-xl">
                Need a Custom Package Combining Tech & Physical Logistics?
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                Talk directly with our Asokoro team to structure cross-sector contracts, recurring courier runs, or enterprise software development.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="shrink-0 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
