'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ReassuranceSection } from '@/components/ReassuranceSection';
import { LocationSection } from '@/components/LocationSection';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { MobileFloatingBar } from '@/components/MobileFloatingBar';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalServiceId, setModalServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setModalServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setModalServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col pb-16 sm:pb-0">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Services */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Trust / Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Social Proof / Credibility / Reassurance */}
        <ReassuranceSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Location & Service Area */}
        <LocationSection />

        {/* 7. Contact & Action */}
        <ContactSection initialServiceId={modalServiceId} />

        {/* 8. FAQ */}
        <FAQSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileFloatingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Global Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedServiceId={modalServiceId}
      />
    </div>
  );
}
