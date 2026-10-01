import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, MapPin, Clock, Award, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best Massage Center in F-7 Islamabad",
  description:
    "Best massage center in F-7 Islamabad – Belvie Spa, Maqbool Market F-7/4. Certified therapists, private suites, Swedish, Thai & deep tissue massage. Call 0318 3526306.",
  alternates: {
    canonical: "/massage-center-f-7-islamabad",
  },
};

const faqs = [
  {
    question: "Where in Maqbool Market, F-7/4, Islamabad is the massage center located?",
    answer:
      "We are located in Maqbool Market, F-7/4, Islamabad, with convenient parking nearby.",
  },
  {
    question: "Is Belvie Spa F-7 easy to reach from F-6, F-8 and Blue Area?",
    answer:
      "Yes. Maqbool Market, F-7/4 is centrally located – just a few minutes' drive from F-6, F-8, E-7, G-7 and Blue Area.",
  },
  {
    question: "What massage therapies are available at F-7?",
    answer:
      "Our F-7 center offers full body massage, deep tissue therapy, Swedish relaxation, traditional Thai bodywork, foot reflexology, and private couples retreat packages.",
  },
  {
    question: "What are your operating hours in F-7?",
    answer:
      "We are open every day from 11:00 AM to 12:00 AM (midnight), including Saturdays and Sundays.",
  },
];

export default function MassageCenterF7Page() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "Belvie Spa - Massage Center Maqbool Market, F-7/4, Islamabad",
    description:
      "Top-rated luxury massage center and spa located in Maqbool Market, F-7/4, Islamabad, Islamabad.",
    telephone: "+923183526306",
    url: "https://www.islamabadmassagecenter.com/massage-center-f-7-islamabad",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maqbool Market, F-7/4",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    hasMap: "https://share.google/WgrBX63tHp54fzlxB",
    openingHours: "Mo-Su 11:00-23:59",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <MapPin className="h-3.5 w-3.5" /> Maqbool Market, F-7/4
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Best Massage Center in F-7, Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently located in <strong>Maqbool Market, F-7/4</strong>. Certified therapists, hospital-grade sanitation, soundproof suites, and convenient parking nearby.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book in F-7
            </Link>
            <a
              href="tel:+923183526306"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-bold gap-2 px-8")}
            >
              <Phone className="h-5 w-5 text-emerald-600" /> Call: 0318 3526306
            </a>
          </div>
        </div>
      </section>

      {/* F-7 Specific Info */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Location Advantages
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Your Neighborhood Wellness Retreat
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Living in or near Maqbool Market, F-7/4, Islamabad means world-class cafés, shopping and green avenues on your doorstep. Now you also have a verified, professional massage center right at your doorstep.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>In the heart of F-7, close to Jinnah Super Market</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero hassle parking with private designated slots</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>A short drive from F-6, F-8, E-7, G-7 and Blue Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Open 7 days a week, 11 AM – 12 AM</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              F-7 Treatment Menu
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Full Body Massage (60 Min)</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Deep Tissue Therapy (60 Min)</span>
                <span className="text-primary font-bold">PKR 6,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Traditional Thai Massage</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Couples Double Suite Session</span>
                <span className="text-primary font-bold">PKR 12,000</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=F-7+Town+Phase+7+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold gap-2")}
              >
                <Navigation className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              F-7 Location FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Visit Us in Maqbool Market, F-7/4, Islamabad Today"
        subtitle="Call +92 318 3526306 or message on WhatsApp to reserve your slot."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
