'use client';

import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl, formatTelLink } from '@/lib/business-data';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#080b10] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info (Col span 2) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-slate-900">
                <span className="font-serif text-base font-bold text-amber-400">JC</span>
              </div>
              <div>
                <span className="font-serif text-base font-bold text-white sm:text-lg">
                  J.Chukwuemeka Holdings
                </span>
                <p className="text-[10px] font-semibold tracking-wider text-amber-400 uppercase">
                  Asokoro · Abuja FCT
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-300">
              A registered Nigerian multi-sector enterprise providing integrated Software Development,
              Website Design, Data Analytics, Courier & Shipping, Logistics & Car Dealership/Rentals,
              and Business Consultancy.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-amber-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium">Active Operations · Open 24 Hours Daily</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Enterprise
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-amber-400 transition-colors">
                  Standards & SLA
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact & Book
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Practice Areas</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>Software Development</li>
              <li>Website Design</li>
              <li>Data Analyst & BI</li>
              <li>Courier & Shipping</li>
              <li>Logistics Car Rentals</li>
              <li>Business Consultancy</li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-white uppercase">Contact Desk</h4>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>1A Kofi Annan St, Asokoro, AMAC 900231, Abuja</span>
              </li>
              <li>
                <a
                  href={formatTelLink(BUSINESS_DATA.phone)}
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <span>+234 916 040 8780</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5 shrink-0" />
                  <span>+234 916 040 8780</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                  <span>{BUSINESS_DATA.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>Mon – Sun: Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and Back to Top */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} J.Chukwuemeka Holdings. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 transition hover:text-amber-400"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
