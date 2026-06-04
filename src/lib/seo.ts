import type { Metadata } from "next";

export const siteUrl = "https://www.hobsonlodge.co.nz";
export const siteName = "Hobson Lodge";
export const siteDescription =
  "Newly refurbished Auckland CBD hostel accommodation with mixed dorms, female dorms, double rooms, free WiFi, modern kitchen and onsite parking by pre-booking.";

export const contactDetails = {
  address: "224 Hobson Street, Auckland CBD, Auckland 1010, New Zealand",
  email: "info@hobsonlodge.co.nz",
  phoneDisplay: "09 972 9019",
  phoneInternational: "+6499729019",
};

export const defaultSeoImage = {
  alt: "Hobson Lodge exterior on Hobson Street in Auckland CBD",
  url: "/images/0.jpg",
};

const defaultKeywords = [
  "Hobson Lodge",
  "Auckland CBD hostel",
  "Auckland hostel",
  "hostel accommodation Auckland",
  "Auckland dorm beds",
  "Auckland backpacker accommodation",
  "Auckland double rooms",
  "Hobson Street accommodation",
];

type SeoMetadataOptions = {
  description: string;
  imageAlt?: string;
  imageUrl?: string;
  path: string;
  title: string;
  titleAbsolute?: boolean;
};

export function createSeoMetadata({
  description,
  imageAlt = defaultSeoImage.alt,
  imageUrl = defaultSeoImage.url,
  path,
  title,
  titleAbsolute = false,
}: SeoMetadataOptions): Metadata {
  const pageUrl = new URL(path, siteUrl).toString();
  const metadataTitle = titleAbsolute ? { absolute: title } : title;

  return {
    title: metadataTitle,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: titleAbsolute ? title : `${title} | ${siteName}`,
      description,
      url: pageUrl,
      siteName,
      locale: "en_NZ",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleAbsolute ? title : `${title} | ${siteName}`,
      description,
      images: [imageUrl],
    },
  };
}

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "en-NZ",
      publisher: {
        "@id": `${siteUrl}/#business`,
      },
    },
    {
      "@type": "LodgingBusiness",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      logo: new URL("/images/hobsonlodgelogo.png", siteUrl).toString(),
      image: [
        new URL("/images/0.jpg", siteUrl).toString(),
        new URL("/images/bedin8_1.jpg", siteUrl).toString(),
        new URL("/images/dbe_1.jpg", siteUrl).toString(),
      ],
      description: siteDescription,
      telephone: contactDetails.phoneInternational,
      email: contactDetails.email,
      priceRange: "$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "224 Hobson Street",
        addressLocality: "Auckland",
        addressRegion: "Auckland",
        postalCode: "1010",
        addressCountry: "NZ",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:30",
          closes: "17:00",
        },
      ],
      amenityFeature: [
        "Free WiFi access in all areas",
        "Modern kitchen",
        "Laundry facilities",
        "Individual lockers",
        "Hotel grade mattresses",
        "Onsite parking by pre-booking",
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
  ],
};

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
