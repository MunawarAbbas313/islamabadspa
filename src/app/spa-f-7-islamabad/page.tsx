import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, Sparkles, ShieldCheck, Check, Flower2, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Top Spa in F-7 Islamabad – Luxury Spa & Massage",
  description:
    "Top luxury spa in F-7 Islamabad. Private suites, organic oils, certified therapists and couples packages at Maqbool Market, F-7/4. Book on 0318 3526306.",
  alternates: {
    canonical: "/spa-f-7-islamabad",
  },
};

const faqs = [
  {
    question: "Where is your spa located in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Belvie Spa and Massage Center is located in Maqbool Market, F-7/4, Islamabad, in the commercial area. Convenient parking is available nearby.",
  },
  {
    question: "What makes Belvie Spa the top-rated spa in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "We combine certified professional therapists, hospital-grade sanitation, soundproof private suites, and 100% organic cold-pressed massage oils to deliver an authentic 5-star experience.",
  },
  {
    question: "Do you offer couple packages in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Yes, we feature dedicated private couples suites where you and your partner can enjoy synchronized Swedish or Aromatherapy treatments in candlelit privacy.",
  },
  {
    question: "What are your operating hours in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "We are open daily from 11:00 AM to 12:00 AM (midnight), Monday through Sunday.",
  },
];

export default function SpaF7Page() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="h-3.5 w-3.5" /> Maqbool Market, F-7/4, Islamabad Luxury Sanctuary
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Top Luxury Spa in F-7, Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover tranquility in Maqbool Market, F-7/4, Islamabad. Professional massage therapies, organic botanicals, and bespoke relaxation rituals crafted for discerning residents.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Your Appointment
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

      {/* Spa Details */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              An Oasis for Maqbool Market, F-7/4, Islamabad Residents
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              A Refined Retreat in F-7/4, Islamabad
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Living in Maqbool Market, F-7/4, Islamabad means enjoying the finest lifestyle amenities—and your wellness treatments should be no exception. <strong>Belvie Spa and Massage Center</strong> is dedicated to delivering European-standard bodywork, certified technique, and absolute discretion.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Minutes away from F-6, F-8, E-7, G-7 and Blue Area</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Convenient parking nearby without traffic delays</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Fresh Egyptian cotton linens & sterilized equipment for every visit</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Signature Spa Experiences
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tailored treatments designed to melt away physical tension and quiet a busy mind.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Aromatherapy Bliss</span>
                <span className="text-primary font-bold">PKR 6,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Classic Swedish Massage</span>
                <span className="text-primary font-bold">PKR 5,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Hot Stone Therapy</span>
                <span className="text-primary font-bold">PKR 7,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Couples Double Suite</span>
                <span className="text-primary font-bold">PKR 12,000</span>
              </div>
            </div>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold")}
            >
              Explore Full Spa Menu &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Maqbool Market, F-7/4, Islamabad Spa Questions
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Experience the Belvie Spa in Maqbool Market, F-7/4, Islamabad"
        subtitle="Reserve your private session today. Call +92 318 3526306 or message on WhatsApp."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
