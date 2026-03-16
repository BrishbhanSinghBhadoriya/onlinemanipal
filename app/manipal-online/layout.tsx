import type { Metadata } from "next";
import Script from "next/script";

// ─────────────────────────────────────────────
// All Indian States & Major Cities (SEO Keywords)
// ─────────────────────────────────────────────
const indianCities = [
  // Metros & Tier-1
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  // Tier-2
  "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
  "Patna", "Vadodara", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
  "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Allahabad", "Ranchi",
  "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai",
  "Raipur", "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli", "Dharwad", "Bareilly",
  "Moradabad", "Mysuru", "Gurgaon", "Noida", "Thiruvananthapuram", "Salem", "Warangal",
  "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida",
  "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Dehradun", "Durgapur",
  "Asansol", "Nanded", "Kolhapur", "Ajmer", "Gulbarga", "Jamnagar", "Ujjain", "Loni",
  "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli", "Mangalore",
  "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Udaipur",
  "Kalyani", "Bhubaneswar", "Imphal", "Shillong", "Aizawl", "Kohima", "Agartala",
  "Panaji", "Port Blair", "Silvassa", "Daman", "Puducherry",
];

const keywords = [
  // Core admission keywords
  "Manipal University Online Admission 2026",
  "Online Manipal Admission 2026",
  "Manipal University Jaipur Online Courses",
  "MUJ Online MBA Admission 2026",
  "Online MBA Manipal University 2026",
  "Manipal Online MCA Admission 2026",
  "Manipal Online BBA Admission",
  "Manipal Online BCA Admission 2026",
  "Manipal Online B.Com Admission",
  "Manipal Online M.Com",
  "Manipal Online MA MSc",
  "MUJ Online Degree Programs",
  "NAAC A+ Online University India",
  "UGC Approved Online Degree India 2026",
  "Online Degree Admission India 2026",
  "distance education Manipal 2026",
  "Manipal online learning portal",
  // City-specific long-tails
  ...indianCities.flatMap((city) => [
    `Manipal Online Admission ${city}`,
    `Online MBA ${city} Manipal`,
    `Online Degree ${city} 2026`,
  ]),
  // Feature keywords
  "online degree with placement assistance",
  "flexible online MBA India",
  "WES evaluated online degree",
  "online BBA top university India",
  "affordable online degree India",
];

export const metadata: Metadata = {
  metadataBase: new URL("https://degree-admission.online"),

  // ── Title & Description ──
  title: {
    default:
      "Manipal University Online Admission 2026 | MBA, MCA, BBA, BCA, B.Com – Apply Now",
    template: "%s | Manipal Online Admission 2026",
  },
  description:
    "Apply for Manipal University Online Admission 2026. UGC-approved, NAAC A+ accredited online MBA, MCA, BBA, BCA, B.Com, M.Com, MA & MSc degrees. 100% placement support, WES-evaluated degrees, flexible classes. Enroll now from anywhere in India.",

  keywords: keywords.slice(0, 60), // Next.js accepts string[]

  authors: [{ name: "Degree Admission Online", url: "https://degree-admission.online" }],
  creator: "degree-admission.online",
  publisher: "Degree Admission Online",

  // ── Canonical & Alternates ──
  alternates: {
    canonical: "https://degree-admission.online/manipal-online",
  },

  // ── Open Graph ──
  openGraph: {
    title:
      "Manipal University Online Admission 2026 | MBA, MCA, BBA, BCA – Apply Now",
    description:
      "Get UGC-approved online degrees from Manipal University Jaipur (NAAC A+). MBA, MCA, BBA, BCA, B.Com, M.Com, MA & MSc with 100% placement support. Apply online today.",
    url: "https://degree-admission.online/manipal-online",
    siteName: "Degree Admission Online – Manipal University",
    images: [
      {
        url: "https://degree-admission.online/manipal-og.jpg",
        width: 1200,
        height: 630,
        alt: "Manipal University Online Admission 2026 – MBA MCA BBA BCA",
        type: "image/jpeg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ── Twitter Card ──
  twitter: {
    card: "summary_large_image",
    title: "Manipal University Online Admission 2026 | Apply Now",
    description:
      "UGC-approved NAAC A+ online degrees – MBA, MCA, BBA, BCA, B.Com & more. 100% placement support. Apply from anywhere in India.",
    images: ["https://degree-admission.online/manipal-og.jpg"],
    site: "@DegreeAdmission",
    creator: "@DegreeAdmission",
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ──
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── Manifest ──
  manifest: "/site.webmanifest",

  // ── Verification ──
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN", // 🔁 Replace
    // bing: "YOUR_BING_WEBMASTER_TOKEN",        // 🔁 Uncomment & replace
  },

  // ── Category ──
  category: "Education",
};

// ─────────────────────────────────────────────
// JSON-LD Structured Data Schemas
// ─────────────────────────────────────────────

/** Organization schema */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Degree Admission Online – Manipal University Partner",
  url: "https://degree-admission.online/manipal-online",
  logo: "https://degree-admission.online/logo.webp",
  description:
    "Authorized marketing partner for Manipal University Jaipur online degree programs including MBA, MCA, BBA, BCA, B.Com, M.Com, MA and MSc.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Admissions",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/onlinemanipalmuj",
    "https://www.instagram.com/onlinemanipalmuj",
    "https://www.linkedin.com/school/manipal-university-jaipur",
  ],
};

/** EducationalOrganization schema (the actual university) */
const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Manipal University Jaipur",
  alternateName: "MUJ",
  url: "https://manipal.edu/online-education.html",
  description:
    "Manipal University Jaipur (MUJ) is a NAAC A+ accredited university offering UGC-approved online degree programs including MBA, MCA, BBA, BCA, B.Com, M.Com, MA, and MSc.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dehmi Kalan, Near GVK Toll Plaza",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "303007",
    addressCountry: "IN",
  },
  accreditation: "NAAC A+",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Degree Programs 2026",
    itemListElement: [
      "MBA", "MCA", "M.Com", "MSc", "MA",
      "BBA", "BCA", "B.Com", "BA",
    ].map((course) => ({
      "@type": "Course",
      name: `Online ${course}`,
      provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur" },
      courseMode: "online",
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        category: "Online Degree",
        availability: "https://schema.org/InStock",
        areaServed: "IN",
      },
    })),
  },
};

/** BreadcrumbList schema */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://degree-admission.online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Manipal University Online Admission 2026",
      item: "https://degree-admission.online/manipal-online",
    },
  ],
};

/** WebPage schema */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Manipal University Online Admission 2026 | MBA, MCA, BBA, BCA – Apply Now",
  description:
    "Apply for Manipal University Online Admission 2026. UGC-approved, NAAC A+ online MBA, MCA, BBA, BCA, B.Com degrees with placement support.",
  url: "https://degree-admission.online/manipal-online",
  breadcrumb: { "@id": "https://degree-admission.online/manipal-online#breadcrumb" },
  inLanguage: "en-IN",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  publisher: {
    "@type": "Organization",
    name: "Degree Admission Online",
    logo: {
      "@type": "ImageObject",
      url: "https://degree-admission.online/logo.webp",
    },
  },
};

/** FAQPage schema (boosts featured snippets) */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Manipal University Online degree UGC approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Manipal University Jaipur's online degree programs are approved by UGC (University Grants Commission) and the university is NAAC A+ accredited, ensuring nationally and internationally recognized qualifications.",
      },
    },
    {
      "@type": "Question",
      name: "What online courses does Manipal University Jaipur offer in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manipal University Jaipur offers online MBA, MCA, M.Com, MSc, MA (Master's programs) and BBA, BCA, B.Com, BA (Bachelor's programs) for the 2026 batch through its Online Manipal platform.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for Manipal University Online Admission 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply by filling out the enquiry form on this page with your name, email, phone number, desired course, and state. Our counselors will guide you through the complete admission process and documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Does Manipal University Online provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Manipal University's Online Manipal platform provides 100% placement assistance to all enrolled students, connecting them with top recruiters across India and abroad.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Manipal Online degree valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since Manipal University Jaipur's online programs are UGC-approved and NAAC A+ accredited, the online degree holds the same value as an on-campus degree and is valid for government jobs and competitive exams.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for Online MBA at Manipal University Jaipur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fee structure for Online MBA at Manipal University Jaipur is available on request. Easy EMI and financing options are available. Fill the form or contact our counselors for the latest 2026 fee details.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pursue Manipal Online degree while working?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The Online Manipal platform is designed for working professionals and students. Classes are flexible with recorded sessions and live weekend lectures so you can learn at your own pace.",
      },
    },
    {
      "@type": "Question",
      name: "Is Manipal Online degree recognized internationally (WES evaluation)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Manipal University Jaipur's online degrees are evaluated by World Education Services (WES), making them recognized internationally for higher studies and employment abroad.",
      },
    },
  ],
};

// ─────────────────────────────────────────────
// Layout Component
// ─────────────────────────────────────────────

export default function ManipalOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ── Structured Data: Organization ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── Structured Data: EducationalOrganization + Courses ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />

      {/* ── Structured Data: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Structured Data: WebPage ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Structured Data: FAQPage (featured snippets) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Meta Pixel (Facebook) – PageView ── */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1230848505368304');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* ── Meta Pixel noscript fallback ── */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
          alt="fb-pixel"
        />
      </noscript>

      {children}
    </>
  );
}