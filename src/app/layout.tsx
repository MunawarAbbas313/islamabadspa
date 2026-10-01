import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { PromoBadge } from "@/components/shared/PromoBadge";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.islamabadmassagecenter.com"),
  title: {
    default: "Best Massage Center in Islamabad | Belvie Spa F-7",
    template: "%s | Belvie Spa Islamabad",
  },
  description:
    "Belvie Spa is the best massage center in Islamabad, located in Maqbool Market, F-7/4. Top spa for full body, deep tissue, Thai & Swedish massage with certified therapists. Call 0318 3526306.",
  keywords: [
    // Brand
    "Belvie Spa",
    "Belvie Spa and Massage Center",
    // Primary: best / top massage center
    "best massage center in Islamabad",
    "best massage center F-7",
    "best massage center F-7 Islamabad",
    "top spa in Islamabad",
    "top spa F-7 Islamabad",
    "best spa in Islamabad",
    "luxury spa Islamabad",
    // Location: F-7 / sector
    "massage center F-7",
    "massage center F-7/4",
    "spa F-7 Islamabad",
    "massage F-7 Markaz",
    "spa Maqbool Market F-7",
    "massage center Islamabad",
    "spa in Islamabad",
    // Services
    "full body massage Islamabad",
    "body massage Islamabad",
    "deep tissue massage Islamabad",
    "Thai massage Islamabad",
    "Swedish massage Islamabad",
    "hot stone massage Islamabad",
    "couples massage Islamabad",
    "aromatherapy massage Islamabad",
    "foot reflexology Islamabad",
    // Intent
    "massage center near me",
    "spa near me Islamabad",
    "massage center open late Islamabad",
    "spa open now F-7",
    "massage price in Islamabad",
    "DHA Islamabad massage",
    "PWD massage",
  ],
  authors: [{ name: "Belvie Spa and Massage Center" }],
  creator: "Belvie Spa and Massage Center",
  publisher: "Belvie Spa and Massage Center",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://www.islamabadmassagecenter.com",
    title: "Best Massage Center in Islamabad | Belvie Spa F-7",
    description:
      "Top spa and massage center in Maqbool Market, F-7/4, Islamabad. Certified therapists, 100% private suites, full body, deep tissue and Thai massage.",
    siteName: "Belvie Spa and Massage Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Massage Center in Islamabad | Belvie Spa F-7",
    description:
      "Top spa in F-7 Islamabad for full body, deep tissue and Thai massage. Call 0318 3526306 to book.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${SITE.url}/#spa`,
  name: "Belvie Spa and Massage Center",
  url: "https://www.islamabadmassagecenter.com",
  logo: "https://www.islamabadmassagecenter.com/icon.png",
  image: "https://www.islamabadmassagecenter.com/icon.png",
  description:
    "Best massage center in Islamabad and top spa in F-7, offering full body, Swedish, Thai, deep tissue, hot stone and couples massage in Maqbool Market, F-7/4.",
  telephone: "+923183526306",
  priceRange: "PKR 3000 - PKR 12000",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    postalCode: "44000",
    addressCountry: "PK",
  },
  hasMap: SITE.mapUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
  ],
  currenciesAccepted: "PKR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Massage Services in Islamabad",
    itemListElement: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Thai Massage",
      "Swedish Massage",
      "Hot Stone Massage",
      "Couples Massage",
      "Aromatherapy Massage",
      "Foot Reflexology",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "F-7 Islamabad",
    "F-6 Islamabad",
    "F-8 Islamabad",
    "E-7 Islamabad",
    "Blue Area Islamabad",
    "DHA Islamabad",
    "Islamabad",
    "G-6 Islamabad",
    "PWD Islamabad",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <MobileStickyCTA />
          <PromoBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
