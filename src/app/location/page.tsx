import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { MapPin, Navigation, Phone, MessageCircle, Clock, Car, Compass, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location & Directions – Spa in F-7/4 Islamabad",
  description:
    "Directions to Belvie Spa, Maqbool Market F-7/4 Islamabad. Driving routes, live map and parking tips.",
  alternates: {
    canonical: "/location",
  },
};

const drivingRoutes = [
  {
    from: "From F-6 & Kohsar Market",
    time: "≈ 5 min",
    directions: "F-6 is right next door to F-7. Cross over to F-7 and head to Maqbool Market in sub-sector F-7/4.",
  },
  {
    from: "From F-8 & F-10",
    time: "≈ 10 min",
    directions: "Drive east toward F-7, then follow signs into F-7/4. Maqbool Market is a short turn off the main sector roads.",
  },
  {
    from: "From Blue Area & Jinnah Avenue",
    time: "≈ 10 min",
    directions: "Head toward F-7 via 7th Avenue and continue into F-7/4 to reach Maqbool Market.",
  },
  {
    from: "From E-7, G-7 & G-6",
    time: "≈ 5–10 min",
    directions: "All three sectors border or sit close to F-7. Enter F-7 and make your way to Maqbool Market, F-7/4.",
  },
];

const faqs = [
  {
    question: "Is there client parking available at Belvie Spa F-7?",
    answer:
      "Yes, there is convenient parking near Maqbool Market for all massage and spa clients.",
  },
  {
    question: "What landmarks are close to your location?",
    answer:
      "We are in Maqbool Market, F-7/4 – a short drive from Jinnah Super Market (F-7 Markaz), F-6, F-8 and Blue Area. Tap Get Directions to open our exact pin in Google Maps.",
  },
  {
    question: "Can I get assistance if I have trouble finding the entrance?",
    answer:
      "Absolutely! Call our reception at +92 318 3526306, and our front desk will guide you directly to our parking area.",
  },
];

export default function LocationPage() {
  const directionsUrl = SITE.mapUrl;

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Belvie Spa and Massage Center Location",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    hasMap: SITE.mapUrl,
    telephone: "+923183526306",
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5" /> Centrally Located in F-7
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Find the Best Massage Center in F-7/4, Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in <strong>Maqbool Market, F-7/4, Islamabad</strong>. Explore turn-by-turn driving routes, parking information, and live map coordinates.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Navigation className="h-5 w-5" /> Open Google Maps Directions
            </a>
            <a
              href="tel:+923183526306"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-bold gap-2 px-8")}
            >
              <Phone className="h-5 w-5 text-emerald-600" /> Call Reception: 0318 3526306
            </a>
          </div>
        </div>
      </section>

      {/* Live Map & Key Details */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-card rounded-3xl overflow-hidden border border-border shadow-xs">
          
          <div className="lg:col-span-7 min-h-[420px] bg-muted relative">
            <iframe
              title="Belvie Spa Location Map"
              src={SITE.mapEmbed}
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Verified Address
              </span>
              <h2 className="text-2xl font-bold font-playfair text-foreground">
                Maqbool Market, F-7/4, Islamabad Commercial Hub
              </h2>
              
              <div className="space-y-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Physical Address:</p>
                    <address className="not-italic">{SITE.address.full}</address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Working Hours:</p>
                    <p>Monday – Sunday: 11:00 AM – 12:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Parking Facility:</p>
                    <p>Convenient parking is available near the spa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "primary" }), "w-full rounded-xl text-xs font-bold py-6")}
              >
                Book Appointment Online &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Driving Routes from Major Islamabad Areas */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Directions</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Driving Times & Routes
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Approximate drive times to Belvie Spa from nearby Islamabad sectors. Traffic may vary – use Google Maps for live directions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {drivingRoutes.map((route, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-foreground text-base">
                    {route.from}
                  </h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {route.time}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {route.directions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Location & Access FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Visit Belvie Spa in Maqbool Market, F-7/4, Islamabad"
        subtitle="Call 0318 3526306 or message on WhatsApp for instant assistance."
      />
      <SEOKeywords />
    </div>
  );
}
