import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://degree-admission.online/"),
  title: {
    default: "Manipal University Jaipur Admission 2026 | Courses, Fees, Apply Online",
    template: "%s | Manipal University Jaipur 2026",
  },
  description:
    "Apply for Manipal University Jaipur Admission 2026. Check courses, fees, eligibility, admission process, placements, and online application details for UG & PG programs.",
  keywords: [
    "Manipal University Jaipur Admission 2026",
    "MUJ Jaipur courses and fees",
    "Manipal Jaipur online admission",
    "UG PG admission Manipal Jaipur",
    "Manipal University Jaipur placement",
    "MUJ apply online 2026",
    "distance and online Manipal Jaipur",
  ],
  authors: [{ name: "MUJ Affiliate" }],
  creator: "MUJ",
  openGraph: {
    title: "Manipal University Jaipur Admission 2026",
    description:
      "Get complete details about Manipal University Jaipur Admission 2026 including courses, fees, eligibility, placements, and admission process.",
    url: "https://www.unifost.com/manipal-university-jaipur",
    siteName: "manipal admission 2026",
    images: [
      {
        url: "/manipal-og.jpg",
        width: 1200,
        height: 630,
        alt: "Manipal University Jaipur Admission 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal University Jaipur Admission 2026",
    description:
      "Courses, Fees, Eligibility & Apply Online for Manipal University Jaipur Admission 2026.",
    images: ["/manipal-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* ---------------- Google Ads Conversion ---------------- */}
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17973331962');
            gtag('event', 'conversion', {
              send_to: 'AW-17973331962/u2NJCIrsiIEcEPqPrfpC'
            });
          `}
        </Script>

        {/* ---------------- Meta Pixel (Facebook Pixel) ---------------- */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1230848505368304');
            fbq('track', 'PageView');
            fbq('track', 'Lead'); // Meta conversion
          `}
        </Script>

        {/* ---------------- Meta Pixel noscript fallback ---------------- */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}