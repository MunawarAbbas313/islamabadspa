import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, Sparkles, Heart, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Full Body Massage in Islamabad (F-7)",
  description:
    "Best full body massage in Islamabad. 60/90-minute sessions with warm organic oils and certified therapists at Belvie Spa, F-7/4. Call 0318 3526306.",
  alternates: {
    canonical: "/full-body-massage",
  },
};

const faqs = [
  {
    question: "What does a full body massage include at Belvie Spa?",
    answer:
      "A complete full body massage systematically treats the neck, shoulders, upper and lower back, hips, legs, calves, arms, and feet using custom warm organic oils to release total tension.",
  },
  {
    question: "How long is a full body massage session?",
    answer:
      "We offer 60-minute standard full body sessions and 90-minute extended deep restoration sessions.",
  },
  {
    question: "What should I wear during a full body massage?",
    answer:
      "You will undress in complete privacy to your comfort level and remain covered under a clean sheet. Professional draping is strictly maintained throughout the session.",
  },
  {
    question: "What is the price of a full body massage in Islamabad?",
    answer:
      "Our 60-minute Full Body Massage is PKR 5,500, with 90-minute extended sessions available at PKR 7,500.",
  },
];

export default function FullBodyMassagePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Full Body Massage Islamabad",
    serviceType: "Full Body Massage Therapy",
    description:
      "Restorative full body massage in Maqbool Market, F-7/4, Islamabad using warm organic essential oils and certified therapists.",
    provider: {
      "@type": "DaySpa",
      name: "Belvie Spa and Massage Center",
      telephone: "+923183526306",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Maqbool Market, F-7/4, Islamabad",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
    },
    offers: {
      "@type": "Offer",
      price: "5500",
      priceCurrency: "PKR",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" /> Complete Body Revival
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Full Body Massage in Islamabad – F-7
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Reclaim your vitality with our signature full body massage. Warm cold-pressed oils, rhythmic Swedish strokes, and certified therapist expertise in Maqbool Market, F-7/4, Islamabad.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Full Body Session
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

      {/* Details & Anatomy Breakdown */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Restorative Protocol
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              What to Expect From Your Session
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Our 60-to-90-minute full body massage combines the physiological benefits of European effleurage with targeted trigger point compression. It systematically works through major muscle chains to release stored metabolic waste.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Neck, trapezius, and shoulder tension relief</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Deep thoracic and lower lumbar spine decompression</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Hamstrings, quads, and calf lactic acid flush</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Foot reflexology finish to balance bodily systems</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Full Body Session Rates
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 flex justify-between items-center">
                <div>
                  <p className="font-bold text-foreground">60-Minute Full Body Session</p>
                  <p className="text-xs text-muted-foreground">Comprehensive full body relaxation</p>
                </div>
                <span className="text-lg font-bold text-primary">PKR 5,500</span>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/70 flex justify-between items-center">
                <div>
                  <p className="font-bold text-foreground">90-Minute Extended Session</p>
                  <p className="text-xs text-muted-foreground">Deep tissue focus + head & foot therapy</p>
                </div>
                <span className="text-lg font-bold text-primary">PKR 7,500</span>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary" }), "w-full rounded-xl text-xs font-bold py-6")}
            >
              Reserve Full Body Massage Slot &rarr;
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
              Full Body Massage FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Ready for Complete Full Body Relaxation?"
        subtitle="Call 0318 3526306 or message on WhatsApp to reserve your slot at Maqbool Market, F-7/4, Islamabad."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
