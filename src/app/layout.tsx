import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { practice } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dakotadentalnd.com"),
  title: {
    default: "Dakota Dental Associates | Grand Forks, ND",
    template: "%s | Dakota Dental Associates",
  },
  description:
    "Dakota Dental Associates, office of Drs. Paul Bothun, Heidi Stevens, Rachel Cummings, Chris Bothun and Kayla Nelson. Located in Grand Forks, ND, offering general and cosmetic dentistry, implants, periodontics and orthodontics.",
  applicationName: "Dakota Dental Associates",
  keywords: [
    "Grand Forks dentist",
    "Dakota Dental Associates",
    "cosmetic dentistry Grand Forks",
    "dental implants Grand Forks",
    "Invisalign Grand Forks",
    "CEREC Grand Forks",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dakotadentalnd.com",
    siteName: "Dakota Dental Associates",
    title: "Dakota Dental Associates | Grand Forks, ND",
    description:
      "Exceptional dentistry in the heart of the Red River Valley. General and cosmetic dentistry, implants, periodontics and orthodontics in Grand Forks, ND.",
    images: [{ url: "/images/1-9.jpg", width: 1180, height: 490, alt: "Dakota Dental Associates office exterior" }],
  },
  twitter: {
    card: "summary",
    title: "Dakota Dental Associates | Grand Forks, ND",
    description:
      "General and cosmetic dentistry, implants, periodontics and orthodontics in Grand Forks, ND.",
    images: ["/images/1-9.jpg"],
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0b2b25",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: practice.name,
  url: "https://www.dakotadentalnd.com",
  image: "https://www.dakotadentalnd.com/images/1-9.jpg",
  telephone: practice.phone,
  email: practice.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    addressLocality: practice.address.city,
    addressRegion: practice.address.state,
    postalCode: practice.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9046699,
    longitude: -97.086025,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "07:10",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "07:10",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [practice.facebook, practice.yelp],
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-spruce focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
