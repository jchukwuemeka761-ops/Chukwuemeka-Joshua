'use client';

import { useState, useEffect } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import {
  BUSINESS_DATA,
  buildWhatsAppUrl,
  validateBookingForm,
  generateWhatsAppInquiryMessage,
  BookingFormInput,
  formatTelLink,
} from '@/lib/business-data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormInput>({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId || 'software-development',
    contactPreference: 'whatsapp',
    urgency: 'immediate',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const [prevServiceId, setPrevServiceId] = useState(selectedServiceId);
  if (selectedServiceId !== prevServiceId) {
    setPrevServiceId(selectedServiceId);
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    const currentService =
      BUSINESS_DATA.services.find((s) => s.id === formData.serviceId)?.title ||
      'General Inquiry';

    const text = generateWhatsAppInquiryMessage(formData, currentService);
    const generatedUrl = buildWhatsAppUrl(BUSINESS_DATA.whatsapp, text);
    setWaUrl(generatedUrl);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/40 bg-[#0e131d] p-6 shadow-2xl sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 rounded-lg border border-slate-700 p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
                24/7 Priority Booking
              </span>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Book a Service Consultation
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                J.Chukwuemeka Holdings · 1A Kofi Annan St, Asokoro, Abuja
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              {/* Service Select */}
              <div>
                <label htmlFor="modal-serviceId" className="block text-xs font-semibold text-slate-300">
                  Select Service <span className="text-amber-400">*</span>
                </label>
                <select
                  id="modal-serviceId"
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  {BUSINESS_DATA.services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title}
                    </option>
                  ))}
                </select>
                {errors.serviceId && (
                  <p className="mt-1 text-xs text-red-400">{errors.serviceId}</p>
                )}
              </div>

              {/* Name & Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-300">
                    Your Name / Organization <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-slate-700 focus:border-amber-400'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-300">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                      errors.phone ? 'border-red-500' : 'border-slate-700 focus:border-amber-400'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Urgency */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-300">
                    Email <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`mt-1.5 w-full rounded-lg border bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-slate-700 focus:border-amber-400'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-urgency" className="block text-xs font-semibold text-slate-300">
                    Urgency
                  </label>
                  <select
                    id="modal-urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="immediate">Urgent (24/7 Response)</option>
                    <option value="this-week">Within this week</option>
                    <option value="planning">Future project quote</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-slate-300">
                  Requirements / Notes
                </label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us what you need..."
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* CTA actions */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 py-3 px-4 text-xs font-bold text-slate-950 shadow-md transition hover:from-amber-400 hover:to-amber-500"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Confirm Booking Request</span>
                </button>

                <div className="text-center text-[11px] text-slate-400">
                  Or call directly:{' '}
                  <a href={formatTelLink(BUSINESS_DATA.phone)} className="font-bold text-amber-400 hover:underline">
                    {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation */
          <div className="py-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <h3 className="mt-3 text-lg font-bold text-white">Booking Ready</h3>
            <p className="mt-1 text-xs text-slate-300">
              Thank you, {formData.name}. Click below to dispatch your booking directly to our WhatsApp line.
            </p>

            <div className="mt-5 space-y-2.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 px-4 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-lg border border-slate-700 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
