'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Where is J.Chukwuemeka Holdings physically located in Abuja?',
      answer:
        'Our central operations hub is located at 1A Kofi Annan St, Asokoro, AMAC 900231, Federal Capital Territory. We are conveniently situated in the Asokoro district, providing quick access across Abuja.',
    },
    {
      question: 'What are your operational and customer service hours?',
      answer:
        'J.Chukwuemeka Holdings operates 24 hours daily, Monday through Sunday. Whether you have an urgent late-night courier dispatch, emergency car rental request, or software support query, our lines are active.',
    },
    {
      question: 'What specific services do you provide?',
      answer:
        'We provide six core corporate services: Software Development, Website Design, Data Analytics & Reporting, Courier & Shipping, Logistics & Car Dealership/Rentals, and Business Consultancy.',
    },
    {
      question: 'Can I arrange urgent courier dispatch or executive car rental at short notice?',
      answer:
        'Yes. With our 24/7 operating model, you can contact us via phone (+234 916 040 8780) or WhatsApp at any time to confirm vehicle availability or dispatch a priority courier pickup.',
    },
    {
      question: 'What is the fastest way to obtain a quote or book a service?',
      answer:
        'The quickest channel is to click our "Book Now" button or message us directly on WhatsApp at +234 916 040 8780. We review details and respond promptly with clear terms and timelines.',
    },
  ];

  return (
    <section id="faq" className="scroll-mt-16 bg-[#07090e] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold tracking-widest text-amber-400 uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Key Information & Inquiries
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Quick answers regarding our Asokoro location, 24/7 hours, and multi-sector service delivery.
          </p>
        </div>

        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-800 bg-[#0d121c] transition hover:border-amber-500/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white transition focus:outline-none sm:text-base"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-amber-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
