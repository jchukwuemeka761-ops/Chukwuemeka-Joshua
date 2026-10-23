'use client';

import { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import {
  BUSINESS_DATA,
  buildWhatsAppUrl,
  formatTelLink,
  validateBookingForm,
  generateWhatsAppInquiryMessage,
  BookingFormInput,
} from '@/lib/business-data';

interface ContactSectionProps {
  initialServiceId?: string;
}

export function ContactSection({ initialServiceId }: ContactSectionProps) {
  const [formData, setFormData] = useState<BookingFormInput>({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'software-development',
    contactPreference: 'whatsapp',
    urgency: 'immediate',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppPreviewUrl, setWhatsAppPreviewUrl] = useState('');

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

    const selectedService =
      BUSINESS_DATA.services.find((s) => s.id === formData.serviceId)?.title ||
      'General Inquiry';

    const message = generateWhatsAppInquiryMessage(formData, selectedService);
    const waUrl = buildWhatsAppUrl(BUSINESS_DATA.whatsapp, message);

    setWhatsAppPreviewUrl(waUrl);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-slate-800 bg-[#0a0d14] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Get In Touch 24/7
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Book a Service or Request a Quote
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Reach out directly for rapid turnaround. Connect via phone, WhatsApp, or submit your details below
            for immediate attention from our Asokoro team.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Left Column: Direct Contact Cards */}
          <div className="space-y-4 lg:col-span-5">
            {/* Phone Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0d121c] p-5 transition hover:border-amber-500/40">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">Telephone Line</h3>
                    <span className="text-[11px] font-semibold text-emerald-400">Open 24/7</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">Direct voice call to our central desk</p>
                  <a
                    href={formatTelLink(BUSINESS_DATA.phone)}
                    className="mt-2 inline-block font-mono text-sm font-bold text-amber-400 hover:text-amber-300"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-xl border border-emerald-500/30 bg-[#0c1619] p-5 transition hover:border-emerald-400/60">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-500/40 bg-emerald-500/15 text-emerald-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">WhatsApp Business</h3>
                    <span className="text-[11px] font-bold text-emerald-400">Instant Chat</span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400">Fastest response for quotes & inquiries</p>
                  <a
                    href={buildWhatsAppUrl(BUSINESS_DATA.whatsapp, 'Hello J.Chukwuemeka Holdings, I would like to book a service.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-500 px-3 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0d121c] p-5 transition hover:border-amber-500/40">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Email Address</h3>
                  <p className="mt-0.5 text-xs text-slate-400">Formal proposals, RFPs & inquiries</p>
                  <a
                    href={`mailto:${BUSINESS_DATA.email}`}
                    className="mt-2 inline-block text-xs font-semibold text-slate-200 underline decoration-slate-600 underline-offset-4 hover:text-amber-400"
                  >
                    {BUSINESS_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0d121c] p-5 transition hover:border-amber-500/40">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white">Office Location</h3>
                  <p className="mt-1 text-xs text-slate-300">{BUSINESS_DATA.address.full}</p>
                  <a
                    href={BUSINESS_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0d121c] p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="text-lg font-bold text-white">
                      Direct Service Booking Form
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Submit your details to generate a booking request or dispatch directly to WhatsApp.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Service Selection */}
                    <div>
                      <label htmlFor="serviceId" className="block text-xs font-semibold text-slate-300">
                        Select Required Service <span className="text-amber-400">*</span>
                      </label>
                      <select
                        id="serviceId"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      >
                        {BUSINESS_DATA.services.map((service) => (
                          <option key={service.id} value={service.id} className="bg-slate-900 text-white">
                            {service.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceId && (
                        <p className="mt-1 text-xs text-red-400">{errors.serviceId}</p>
                      )}
                    </div>

                    {/* Name & Phone in 2 columns */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-300">
                          Full Name or Company <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Chukwuemeka O."
                          className={`mt-1.5 w-full rounded-lg border bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                            errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-slate-300">
                          Phone Number <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234..."
                          className={`mt-1.5 w-full rounded-lg border bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Email & Urgency in 2 columns */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-300">
                          Email Address <span className="text-slate-500">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className={`mt-1.5 w-full rounded-lg border bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none ${
                            errors.email
                              ? 'border-red-500'
                              : 'border-slate-700 focus:border-amber-400'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block text-xs font-semibold text-slate-300">
                          Timeline / Urgency
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                        >
                          <option value="immediate">Immediate / Urgent (24/7)</option>
                          <option value="this-week">Within this week</option>
                          <option value="planning">Future Planning / Quote</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Preference */}
                    <div>
                      <span className="block text-xs font-semibold text-slate-300 mb-2">
                        Preferred Response Method
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'whatsapp', label: 'WhatsApp' },
                          { id: 'phone', label: 'Phone Call' },
                          { id: 'email', label: 'Email' },
                        ].map((pref) => (
                          <button
                            type="button"
                            key={pref.id}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                contactPreference: pref.id as any,
                              }))
                            }
                            className={`rounded-lg py-2 text-xs font-medium border text-center transition ${
                              formData.contactPreference === pref.id
                                ? 'border-amber-500/60 bg-amber-500/15 text-amber-300 font-semibold'
                                : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                            }`}
                          >
                            {pref.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="notes" className="block text-xs font-semibold text-slate-300">
                        Project Details / Specific Requirements
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Provide details (e.g., parcel pickup address, software specifications, rental dates, or consultancy scope)..."
                        className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Submit buttons */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-3 px-4 text-xs font-bold text-slate-950 shadow-md transition hover:brightness-110 active:scale-95"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit Booking Request</span>
                    </button>

                    <a
                      href={buildWhatsAppUrl(
                        BUSINESS_DATA.whatsapp,
                        formData.name
                          ? `Hello J.Chukwuemeka Holdings, I am ${formData.name} inquiring about ${formData.serviceId}.`
                          : 'Hello J.Chukwuemeka Holdings, I am inquiring about your services.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/50 bg-emerald-950/40 py-3 px-4 text-xs font-bold text-emerald-400 transition hover:bg-emerald-900/40"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Fast Track via WhatsApp</span>
                    </a>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    Booking Request Prepared
                  </h3>
                  <p className="mt-2 text-xs text-slate-300">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry for{' '}
                    <strong className="text-amber-400">
                      {BUSINESS_DATA.services.find((s) => s.id === formData.serviceId)?.title}
                    </strong>{' '}
                    has been recorded.
                  </p>

                  <div className="mt-6 rounded-xl border border-slate-800 bg-[#080b10] p-4 text-left text-xs">
                    <p className="font-semibold text-slate-300">Summary:</p>
                    <p className="mt-1 text-slate-400">Phone: {formData.phone}</p>
                    {formData.email && <p className="text-slate-400">Email: {formData.email}</p>}
                    <p className="text-slate-400">Preferred Contact: {formData.contactPreference}</p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={whatsAppPreviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 px-6 text-xs font-bold text-slate-950 shadow-md transition hover:bg-emerald-400"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Send Straight to WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          serviceId: 'software-development',
                          contactPreference: 'whatsapp',
                          urgency: 'immediate',
                          notes: '',
                        });
                      }}
                      className="rounded-lg border border-slate-700 bg-slate-900 py-3 px-4 text-xs font-semibold text-slate-300 hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
