export interface BusinessInfo {
  name: string;
  type: string;
  tagline: string;
  address: {
    street: string;
    area: string;
    district: string;
    postalCode: string;
    state: string;
    full: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  mapsUrl: string;
  hours: {
    day: string;
    status: string;
  }[];
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'tech' | 'logistics' | 'advisory';
  summary: string;
  deliverables: string[];
  idealFor: string;
  ctaText: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: 'J.Chukwuemeka Holdings',
  type: 'General Local Business & Multi-Sector Enterprise',
  tagline: 'Data Analyst, Software Development, Courier/Shipping, Website Design, Consultancy, Logistics Car Dealership/Rentals',
  address: {
    street: '1A Kofi Annan St',
    area: 'Asokoro',
    district: 'AMAC',
    postalCode: '900231',
    state: 'Federal Capital Territory',
    full: '1A Kofi Annan St, Asokoro, AMAC 900231, Federal Capital Territory',
  },
  phone: '+2349160408780',
  whatsapp: '+2349160408780',
  email: 'jchukwuemeka761@gmail.com',
  mapsUrl:
    'https://www.google.com/maps/place/Aso,+Federal+Capital+Territory/@9.0279362,7.4789779,13z/data=!3m1!4b1!4m6!3m5!1s0x104e0bfec4fbfbd1:0x747c78bf2db11ad2!8m2!3d9.0219598!4d7.5208645!16s%2Fg%2F11nmcvsb7j?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
  hours: [
    { day: 'Monday', status: 'Open 24 hours' },
    { day: 'Tuesday', status: 'Open 24 hours' },
    { day: 'Wednesday', status: 'Open 24 hours' },
    { day: 'Thursday', status: 'Open 24 hours' },
    { day: 'Friday', status: 'Open 24 hours' },
    { day: 'Saturday', status: 'Open 24 hours' },
    { day: 'Sunday', status: 'Open 24 hours' },
  ],
  services: [
    {
      id: 'software-development',
      title: 'Software Development',
      category: 'tech',
      summary:
        'Engineering custom web applications, workflow automation tools, internal portals, and bespoke digital solutions designed to scale your operations.',
      deliverables: [
        'Custom web applications & portals',
        'Database architectures & API integrations',
        'Workflow & business process automation',
        'System maintenance & technical support',
      ],
      idealFor: 'Enterprises, institutions, and businesses needing robust digital systems.',
      ctaText: 'Request Software Scope',
    },
    {
      id: 'website-design',
      title: 'Website Design',
      category: 'tech',
      summary:
        'Modern, responsive, conversion-focused websites and landing pages optimized for search engines, mobile devices, and fast user action.',
      deliverables: [
        'Corporate websites & brand portals',
        'High-converting landing pages & inquiry funnels',
        'Mobile-first responsive interface architecture',
        'Domain, hosting, and business email integration',
      ],
      idealFor: 'Companies seeking a commanding, credible online presence.',
      ctaText: 'Discuss Web Project',
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst & Insights',
      category: 'tech',
      summary:
        'Transforming raw transactional and operational data into clear visual dashboards, performance analytics, and actionable decision-making metrics.',
      deliverables: [
        'Interactive dashboards & KPI visualizers',
        'Operational reporting & performance metrics',
        'Data cleaning, transformation & structuring',
        'Trend forecasting & analytics consulting',
      ],
      idealFor: 'Decision makers requiring structured evidence to guide commercial growth.',
      ctaText: 'Consult on Analytics',
    },
    {
      id: 'courier-shipping',
      title: 'Courier / Shipping',
      category: 'logistics',
      summary:
        'Fast, secure point-to-point courier dispatch, nationwide parcel transit, express document delivery, and verified freight coordination.',
      deliverables: [
        'Priority document & parcel courier service',
        'Same-day intra-city delivery across Abuja & AMAC',
        'Nationwide shipping & consignment handling',
        'Safe packaging and real-time delivery status updates',
      ],
      idealFor: 'Corporate offices, individuals, and commercial traders moving goods securely.',
      ctaText: 'Book Courier Pickup',
    },
    {
      id: 'logistics-car-rentals',
      title: 'Logistics Car Dealership / Rentals',
      category: 'logistics',
      summary:
        'Executive vehicle rentals, dependable corporate mobility solutions, fleet coordination, and trusted automobile procurement & dealership services.',
      deliverables: [
        'Short-term & long-term executive car rentals',
        'Corporate transport & official event fleet dispatch',
        'Automobile sourcing, sales, and dealership advisory',
        'Well-maintained vehicles with optional professional drivers',
      ],
      idealFor: 'VIPs, corporate teams, travelers, and clients acquiring verified vehicles.',
      ctaText: 'Reserve Vehicle / Fleet',
    },
    {
      id: 'consultancy',
      title: 'Business Consultancy',
      category: 'advisory',
      summary:
        'Practical strategic counsel on business operations, technology adoption, logistics management, and growth planning tailored to the Nigerian market.',
      deliverables: [
        'Operational process optimization reviews',
        'Technology implementation roadmaps',
        'Logistics & supply chain advisory',
        'Commercial feasibility & strategy guidance',
      ],
      idealFor: 'Organizations looking to eliminate operational friction and scale smoothly.',
      ctaText: 'Schedule Consultation',
    },
  ],
};

/**
 * Pure helper to generate a direct WhatsApp click-to-chat URL with a pre-encoded message.
 */
export function buildWhatsAppUrl(phone: string, text?: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const baseUrl = `https://wa.me/${cleanPhone}`;
  if (!text) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Pure helper to format telephone string for tel: protocols
 */
export function formatTelLink(phone: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  return `tel:${cleanPhone}`;
}

/**
 * Pure helper to validate booking form inputs
 */
export interface BookingFormInput {
  name: string;
  phone: string;
  email?: string;
  serviceId: string;
  contactPreference: 'whatsapp' | 'phone' | 'email';
  urgency: 'immediate' | 'this-week' | 'planning';
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(input: Partial<BookingFormInput>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please provide your full name or company name.';
  }

  if (!input.phone || input.phone.trim().length < 8) {
    errors.phone = 'Please provide a valid contact phone number.';
  }

  if (!input.serviceId || input.serviceId.trim().length === 0) {
    errors.serviceId = 'Please select a service.';
  }

  if (input.email && input.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email.trim())) {
      errors.email = 'Please provide a valid email address or leave blank.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates an inquiry message formatted for WhatsApp dispatch
 */
export function generateWhatsAppInquiryMessage(input: BookingFormInput, serviceTitle: string): string {
  const lines: string[] = [
    `Hello J.Chukwuemeka Holdings,`,
    ``,
    `I would like to make an inquiry / booking regarding: *${serviceTitle}*.`,
    ``,
    `*Client Name:* ${input.name}`,
    `*Phone:* ${input.phone}`,
  ];

  if (input.email) {
    lines.push(`*Email:* ${input.email}`);
  }

  const urgencyLabels: Record<string, string> = {
    immediate: 'Immediate / Urgent (24/7 Response)',
    'this-week': 'Within this week',
    planning: 'Future Planning / Quote Only',
  };
  lines.push(`*Timeline:* ${urgencyLabels[input.urgency] || input.urgency}`);

  const prefLabels: Record<string, string> = {
    whatsapp: 'WhatsApp Chat',
    phone: 'Phone Call',
    email: 'Email',
  };
  lines.push(`*Preferred Contact:* ${prefLabels[input.contactPreference] || input.contactPreference}`);

  if (input.notes && input.notes.trim()) {
    lines.push(``, `*Details:* ${input.notes.trim()}`);
  }

  lines.push(``, `Inquiry sent via J.Chukwuemeka Holdings website.`);
  return lines.join('\n');
}

/**
 * Checks if business is open right now. Since the business is open 24/7 every day, this always returns open: true.
 */
export function getBusinessStatus() {
  return {
    isOpen: true,
    label: 'Open Now · 24/7 Operations',
    subtext: 'Always accessible for urgent bookings, shipping & consultations',
  };
}
