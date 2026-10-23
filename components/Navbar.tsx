'use client';

import { useState } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA, buildWhatsAppUrl, formatTelLink } from '@/lib/business-data';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Standards', href: '#standards' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#0c1017]/95 backdrop-blur-md">
      {/* Top corporate notice bar */}
      <div className="hidden border-b border-white/5 bg-[#080b10] px-4 py-2 text-xs text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">Open 24 Hours Daily</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>1A Kofi Annan St, Asokoro, AMAC 900231, Abuja</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={formatTelLink(BUSINESS_DATA.phone)}
              className="flex items-center gap-1.5 font-medium text-slate-200 transition-colors hover:text-amber-400"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>+234 916 040 8780</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I am inquiring from your website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-500/40 bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-slate-900 shadow-inner transition-transform group-hover:scale-105">
            <span className="font-serif text-lg font-bold tracking-wider text-amber-400">JC</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold tracking-tight text-white transition-colors group-hover:text-amber-300 sm:text-xl">
                J.Chukwuemeka
              </span>
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">Holdings</span>
            </div>
            <p className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
              Asokoro · Abuja FCT
            </p>
          </div>
        </a>

        {/* Desktop navigation links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={formatTelLink(BUSINESS_DATA.phone)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:bg-slate-800"
          >
            <Phone className="h-3.5 w-3.5 text-amber-400" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold tracking-wide text-slate-950 shadow-md shadow-amber-500/20 transition hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 active:scale-95"
          >
            <span>Book Now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-slate-700/60 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-[#0c1017] px-4 pt-3 pb-6 lg:hidden">
          <div className="flex flex-col space-y-3">
            <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-900/90 p-2.5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Open 24 Hours Daily</span>
              </span>
              <span className="text-slate-400">Asokoro, Abuja</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-bold text-slate-950 shadow-md"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={formatTelLink(BUSINESS_DATA.phone)}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 py-2.5 text-xs font-semibold text-slate-200"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I would like to make an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/30 py-2.5 text-xs font-semibold text-emerald-400"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
