import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'J.Chukwuemeka Holdings | Tech, Logistics & Business Solutions · Asokoro, Abuja',
  description:
    'J.Chukwuemeka Holdings provides enterprise software development, data analytics, website design, courier & shipping, business consultancy, and logistics car dealership & rentals in Asokoro, Abuja. Open 24/7.',
  openGraph: {
    title: 'J.Chukwuemeka Holdings | Asokoro, Abuja',
    description:
      'Data Analytics, Software Development, Courier & Shipping, Website Design, Consultancy, Logistics & Car Dealership / Rentals. Available 24/7 in Asokoro, Abuja.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J.Chukwuemeka Holdings | Asokoro, Abuja',
    description:
      'Data Analytics, Software Development, Courier & Shipping, Website Design, Consultancy, Logistics & Car Dealership / Rentals. Available 24/7 in Asokoro, Abuja.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#0b0f17] text-slate-100 antialiased selection:bg-[#d4af37]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
