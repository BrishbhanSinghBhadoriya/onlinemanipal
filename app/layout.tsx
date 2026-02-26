import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://degree-admission.online/"), // change to your domain

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
        url: "/manipal-og.jpg", // add this image in public folder
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}