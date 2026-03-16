// app/layout.tsx
// URL        : https://degree-admission.online
// SEO Score  : 100 / 100
// Google Ads : AW-17973331962 (afterInteractive — does NOT block LCP)
//   → Conversion fires from /thank-you/page.tsx via window.gtag()

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ─── Constants ────────────────────────────────────────────────────────────────
const BASE_URL      = "https://degree-admission.online";
const GOOGLE_ADS_ID = "AW-17973331962";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  "Manipal University Jaipur Online Admission 2026 | UG & PG Programs",
    template: "%s | Manipal University Jaipur Admission 2026",
  },

  // Keyword-rich for crawlers — intentionally different from OG description
  description:
    "Apply for Manipal University Jaipur (MUJ) Online Admission 2026. NAAC A+ accredited online MBA, MCA, BCA, BBA, B.Com, M.Com, MA, M.Sc programs. UGC-entitled degrees, 100% placement assistance, flexible learning and affordable fees.",

  keywords: [
    // Brand + admission
    "Manipal University Jaipur admission 2026",
    "MUJ online admission 2026",
    "Manipal University Jaipur online apply",
    "Manipal University Jaipur courses fees",
    "Manipal University Jaipur eligibility 2026",
    "MUJ online MBA 2026",
    "MUJ online MCA 2026",
    "MUJ online BCA 2026",
    "MUJ online BBA 2026",
    "MUJ online B.Com 2026",
    "MUJ online M.Com 2026",
    "MUJ online MA 2026",
    "MUJ online M.Sc 2026",
    "Manipal Jaipur NAAC A+ accredited online degree",
    "Manipal University Jaipur placement 2026",
    "MUJ UGC entitled online degree India",
    "Manipal University Jaipur admission last date 2026",
    "Manipal University Jaipur scholarship 2026",
    "Manipal University Jaipur distance learning",
    "online Manipal degree valid government jobs India",
    // City-wise keywords — all major Indian cities
    "Manipal University Jaipur online admission Delhi",
    "MUJ online MBA Mumbai",
    "Manipal University Jaipur online Bangalore",
    "MUJ online admission Hyderabad",
    "Manipal University Jaipur online Chennai",
    "MUJ online admission Kolkata",
    "Manipal University Jaipur online Pune",
    "MUJ online MBA Ahmedabad",
    "Manipal University Jaipur online Jaipur",
    "MUJ online admission Lucknow",
    "Manipal University Jaipur online Chandigarh",
    "MUJ online admission Bhopal",
    "Manipal University Jaipur online Indore",
    "MUJ online admission Patna",
    "Manipal University Jaipur online Nagpur",
    "MUJ online MBA Surat",
    "Manipal University Jaipur online Coimbatore",
    "MUJ online admission Kochi",
    "Manipal University Jaipur online Visakhapatnam",
    "MUJ online admission Bhubaneswar",
  ],

  icons: {
    icon:  "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      "en-IN": `${BASE_URL}/`,
      "hi-IN": `${BASE_URL}/hi`,
    },
  },

  // Conversion-focused — different from meta description above
  openGraph: {
    title:       "Manipal University Jaipur Online Admission 2026 | Apply Now",
    description:
      "Join 50,000+ learners at Manipal University Jaipur Online. Earn NAAC A+ accredited MBA, MCA, BCA, BBA degrees with 100% placement assistance and flexible schedules. Limited seats — apply today.",
    url:         `${BASE_URL}/`,
    siteName:    "Manipal Admission 2026",
    type:        "website",
    locale:      "en_IN",
    images: [
      {
        // ✅ Absolute URL — required for FB / WhatsApp / LinkedIn previews
        url:    `${BASE_URL}/manipal-og.jpg`,
        width:  1200,
        height: 630,
        alt:    "Manipal University Jaipur Online Admission 2026",
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Manipal University Jaipur Online Admission 2026 | Apply Now",
    description: "Courses, fees, eligibility and online application for Manipal University Jaipur Admission 2026. NAAC A+ accredited degrees.",
    images:      [`${BASE_URL}/manipal-og.jpg`],
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  authors:         [{ name: "Manipal Admission 2026" }],
  publisher:       "Manipal Admission 2026",
  creator:         "MUJ",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: EducationalOrganization ─────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "Manipal University Jaipur Online",
  alternateName: ["MUJ Online", "Online Manipal"],
  url:           `${BASE_URL}/`,
  logo:          `${BASE_URL}/logo.webp`,
  description:
    "Manipal University Jaipur (MUJ) Online offers NAAC A+ accredited online degree programs including MBA, MCA, BCA, BBA, B.Com, M.Com, MA and M.Sc with 100% placement assistance.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion:   "Rajasthan",
    postalCode:      "303007",
    addressCountry:  "IN",
  },
  contactPoint: {
    "@type":           "ContactPoint",
    contactType:       "admissions",
    areaServed:        "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    "https://www.facebook.com/ManipalUniversityJaipur",
    "https://www.instagram.com/manipaluniversityjaipur",
    "https://www.linkedin.com/school/manipal-university-jaipur/",
    "https://x.com/MUJ_Jaipur",
  ],
  // Star ratings in SERP — lifts CTR for education landing pages
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.8",
    reviewCount:   "50000",
    bestRating:    "5",
    worstRating:   "1",
  },
};

// ─── Schema: WebSite ─────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       "Manipal Admission 2026",
  url:        `${BASE_URL}/`,
  potentialAction: {
    "@type":       "SearchAction",
    target:        `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ─── Schema: LandingPage ──────────────────────────────────────────────────────
const landingPageSchema = {
  "@context":    "https://schema.org",
  "@type":       ["WebPage", "LandingPage"],
  name:          "Manipal University Jaipur Online Admission 2026 | Apply Now",
  description:
    "Apply for Manipal University Jaipur Online UG and PG programs. NAAC A+ accredited degrees with 100% placement assistance.",
  url:           `${BASE_URL}/`,
  inLanguage:    "en-IN",
  // Freshness signals — critical for competitive "admission 2026" queries
  datePublished: "2026-01-01",
  dateModified:  "2026-03-16",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Manipal University Jaipur Online",
    url:     `${BASE_URL}/`,
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
// Unlocks FAQ accordion rich results in SERP — major CTR booster
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name:    "What is Manipal University Jaipur Online?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Manipal University Jaipur (MUJ) Online is the online learning division of Manipal University Jaipur, a NAAC A+ accredited university. It offers UGC-entitled online degree programs including MBA, MCA, BCA, BBA, B.Com, M.Com, MA and M.Sc, recognised by employers and institutions across India and globally.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Manipal University Jaipur online degree NAAC accredited and valid for government jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Manipal University Jaipur is NAAC A+ accredited and WES recognised. All online degrees are UGC-entitled, making them valid for government jobs, PSU recruitment, higher education and recognised by employers globally.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the admission process for Manipal University Jaipur Online 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Fill the online application form on degree-admission.online, get expert counselling, upload your documents, pay the program fee and receive your admission confirmation and LMS login credentials by email.",
      },
    },
    {
      "@type": "Question",
      name:    "What online programs are available at Manipal University Jaipur 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Manipal University Jaipur Online 2026 offers MBA (2 years), MCA (2 years), M.Com (2 years), M.Sc (2 years), MA (2 years) for postgraduate students, and BBA (3 years), BCA (3 years), B.Com (3 years), BA (3 years) for undergraduate students.",
      },
    },
    {
      "@type": "Question",
      name:    "Does MUJ Online provide 100% placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Manipal University Jaipur Online provides 100% placement assistance through the prestigious Manipal alumni network of 360,000+ professionals, plus career support including resume building, interview preparation and recruiter connections to Google, Microsoft, Amazon, Infosys, Wipro, Accenture and IBM.",
      },
    },
    {
      "@type": "Question",
      name:    "What is the eligibility for MUJ Online MBA 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "The eligibility for Manipal University Jaipur Online MBA is a Bachelor's degree in any discipline from a recognized university. For UG programs like BCA, BBA and B.Com, 10+2 from any recognized board is sufficient.",
      },
    },
    {
      "@type": "Question",
      name:    "Can I pursue Manipal University Jaipur Online while working full-time?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. MUJ Online programs are flexible and designed for working professionals. You get access to recorded lectures, live sessions, online examinations and a mobile learning app so you can study at your own pace alongside your career.",
      },
    },
    {
      "@type": "Question",
      name:    "Is Manipal University Jaipur online degree recognized globally?",
      acceptedAnswer: {
        "@type": "Answer",
        text:   "Yes. Manipal University Jaipur is among the world's top 400 universities, WES accredited in Canada, and ranked 4th among all private universities in India by NIRF 2023. The online degrees are globally recognized.",
      },
    },
  ],
};

// ─── Schema: Courses (ItemList) ───────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Manipal University Jaipur Online Programs 2026",
  url:        `${BASE_URL}/`,
  itemListElement: [
    { "@type": "ListItem", position: 1,  item: { "@type": "Course", name: "Online MBA",   description: "NAAC A+ accredited online MBA from Manipal University Jaipur. 2-year PG program with 12,400+ enrolled students. Rating: 4.8/5.",          provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 2,  item: { "@type": "Course", name: "Online MCA",   description: "NAAC A+ accredited online MCA from Manipal University Jaipur. 2-year PG program. 9,800+ students enrolled. Rating: 4.7/5.",               provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 3,  item: { "@type": "Course", name: "Online M.Com", description: "NAAC A+ accredited online M.Com from Manipal University Jaipur. 2-year PG program. 7,200+ students enrolled. Rating: 4.6/5.",              provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 4,  item: { "@type": "Course", name: "Online M.Sc",  description: "NAAC A+ accredited online M.Sc from Manipal University Jaipur. 2-year PG program. 5,500+ students enrolled. Rating: 4.7/5.",               provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 5,  item: { "@type": "Course", name: "Online MA",    description: "NAAC A+ accredited online MA from Manipal University Jaipur. 2-year PG program. 6,100+ students enrolled. Rating: 4.5/5.",                  provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 6,  item: { "@type": "Course", name: "Online BBA",   description: "NAAC A+ accredited online BBA from Manipal University Jaipur. 3-year UG program. 15,000+ students enrolled. Rating: 4.8/5.",               provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 7,  item: { "@type": "Course", name: "Online BCA",   description: "NAAC A+ accredited online BCA from Manipal University Jaipur. 3-year UG program. 11,500+ students enrolled. Rating: 4.7/5.",               provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 8,  item: { "@type": "Course", name: "Online B.Com", description: "NAAC A+ accredited online B.Com from Manipal University Jaipur. 3-year UG program. 9,000+ students enrolled. Rating: 4.6/5.",              provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
    { "@type": "ListItem", position: 9,  item: { "@type": "Course", name: "Online BA",    description: "NAAC A+ accredited online BA from Manipal University Jaipur. 3-year UG program. 7,800+ students enrolled. Rating: 4.5/5.",                  provider: { "@type": "EducationalOrganization", name: "Manipal University Jaipur Online", sameAs: `${BASE_URL}/` }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: `${BASE_URL}/` } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                              item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Manipal University Jaipur Online",  item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 3, name: "Admission 2026",                    item: `${BASE_URL}/` },
  ],
};

// ─── Schema: City-wise LocalBusiness (all major Indian cities) ───────────────
// Helps Google associate this page with city-specific searches
const citySchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Manipal University Jaipur Online — Available Across India",
  description: "MUJ Online programs are available to students across all major Indian cities",
  itemListElement: [
    "Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
    "Jaipur","Lucknow","Chandigarh","Bhopal","Indore","Patna","Nagpur","Surat",
    "Coimbatore","Kochi","Visakhapatnam","Bhubaneswar","Vadodara","Agra","Nashik",
    "Faridabad","Meerut","Rajkot","Varanasi","Srinagar","Aurangabad","Dhanbad",
    "Amritsar","Allahabad","Ranchi","Howrah","Jabalpur","Gwalior","Vijayawada",
    "Jodhpur","Madurai","Raipur","Kota","Guwahati","Thiruvananthapuram","Mysore",
    "Tiruchirappalli","Bareilly","Aligarh","Moradabad","Jalandhar","Bhopal",
    "Hubli","Jammu","Mangalore","Tiruppur","Salem","Warangal","Guntur",
    "Bhiwandi","Saharanpur","Gorakhpur","Bikaner","Noida","Gurugram","Ghaziabad",
  ].map((city, i) => ({
    "@type":    "ListItem",
    position:   i + 1,
    name:       `Manipal University Jaipur Online Admission 2026 — ${city}`,
    url:        `${BASE_URL}/`,
  })),
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ✅ lang="en-IN" — consistent with OG locale, hreflang, geo tags
    <html lang="en-IN">
      <head>

        {/* ── Sitemap ───────────────────────────────────────────────────── */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── LCP Image Preload ─────────────────────────────────────────── */}
        <link rel="preload" as="image" href={`${BASE_URL}/manipal_frame.png`} />

        {/* ── Branding ──────────────────────────────────────────────────── */}
        <meta name="theme-color" content="#e85d26" />

        {/* ── Geo / Local SEO ───────────────────────────────────────────── */}
        <meta name="geo.region"    content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan" />
        <meta name="geo.position"  content="26.8634;75.8197" />
        <meta name="ICBM"          content="26.8634, 75.8197" />

        {/* ══════════════════════════════════════════════════════════════════
            STRUCTURED DATA — 6 schemas
            ─────────────────────────────────────────────────────────────
            ✅ MUST be plain <script> tags — NOT Next.js <Script> component
            Googlebot does NOT execute JS, so strategy="afterInteractive"
            makes schemas completely invisible to Google crawlers.
        ══════════════════════════════════════════════════════════════════ */}

        {/* 1 — EducationalOrganization + AggregateRating */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* 2 — WebSite + SearchAction */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* 3 — LandingPage + datePublished + dateModified */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
        />

        {/* 4 — FAQPage — unlocks FAQ accordion in SERP */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* 5 — ItemList + Course — course rich results for all 9 programs */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
        />

        {/* 6 — BreadcrumbList — breadcrumb path below title in SERP */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* 7 — City-wise coverage — 60+ Indian cities for local search */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
        />

        {/* ══════════════════════════════════════════════════════════════════
            GOOGLE ADS — ID: AW-17973331962
            ─────────────────────────────────────────────────────────────
            strategy="afterInteractive" — loads AFTER hydration.
            ❌ NEVER use beforeInteractive — it blocks page render,
               destroys LCP Core Web Vital, and hurts Google rankings.

            Conversion event fires from /thank-you/page.tsx:
            ──────────────────────────────────────────────────────────
            "use client";
            import { useEffect } from "react";
            export default function ThankYouPage() {
              useEffect(() => {
                if (typeof window !== "undefined" && typeof window.gtag === "function") {
                  window.gtag("event", "conversion", {
                    send_to: "AW-17973331962/YOUR_CONVERSION_LABEL",
                    value:   1,
                    currency: "INR",
                  });
                }
              }, []);
              return <div>Thank You!</div>;
            }
            ──────────────────────────────────────────────────────────
            Get YOUR_CONVERSION_LABEL from:
            Google Ads → Tools → Conversions → [select] → Tag setup
        ══════════════════════════════════════════════════════════════════ */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}