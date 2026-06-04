import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import {
  businessStructuredData,
  defaultSeoImage,
  safeJsonLd,
  siteDescription,
  siteName,
  siteUrl,
} from "../lib/seo";
import "lenis/dist/lenis.css";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Auckland CBD Hostel Accommodation`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "travel",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteName} | Auckland CBD Hostel Accommodation`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: defaultSeoImage.url,
        alt: defaultSeoImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Auckland CBD Hostel Accommodation`,
    description: siteDescription,
    images: [defaultSeoImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(businessStructuredData) }}
        />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XN4MLT8KYQ" />
    </html>
  );
}
