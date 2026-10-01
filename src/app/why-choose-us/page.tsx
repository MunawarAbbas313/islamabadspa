import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { ShieldCheck, Award, Heart, Sparkles, CheckCircle2, Phone, Calendar, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why We're the Best Massage Center in Islamabad",
  description:
    "Why Belvie Spa is the best massage center in Islamabad: 100% certified therapists, hospital-grade hygiene, private suites and 24-hour weekends in F-7.",
  alternates: {
    canonical: "/why-choose-us",
  },
};

const pillars = [
  {
    icon: Award,
    title: "100% Certified Professional Therapists",
    description:
      "We never hire untrained amateurs. Every therapist on our floor holds verified credentials in anatomical bodywork, myofascial release, Swedish effleurage, and traditional Thai massage.",
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Hygiene Standards",
    description:
      "Every client receives 100% fresh, sanitized Egyptian cotton linens. Our tools undergo medical UV sterilization, and private treatment suites are thoroughly sanitized between sessions.",
  },
  {
    icon: Lock,
    title: "Complete Discretion & Soundproof Suites",
    description:
      "Your privacy and peace of mind are non-negotiable. Our individual suites and couple retreat rooms are soundproofed to isolate you completely from external traffic noise.",
  },
  {
    icon: Heart,
    title: "100% Pure Organic Cold-Pressed Oils",
    description:
      "We strictly avoid cheap paraffin mineral oils. Our massage bases consist of pure sweet almond and jojoba oils infused with therapeutic French essential oils that nourish your skin.",
  },
  {
    icon: Sparkles,
    title: "Transparent PKR Pricing & No Hidden Charges",
    description:
      "What you see is what you pay. We publish all service durations and rates openly with zero surprise gratuity demands or forced up-sells.",
  },
  {
    icon: CheckCircle2,
    title: "Prime Maqbool Market, F-7/4, Islamabad Location",
    description:
      "Centrally located in Maqbool Market, F-7/4 – a few minutes from F-6, F-8, E-7, G-7 and Blue Area.",
  },
];

const faqs = [
  {
    question: "How do you verify your therapist credentials?",
    answer:
      "All therapists must provide certified documentation from accredited wellness institutes and pass rigorous practical examinations covering anatomy, pressure modulation, and client privacy.",
  },
  {
    question: "Do you reuse linens between clients?",
    answer:
      "Never. We maintain a strict single-use policy. All towels, sheets, and pillow covers are removed immediately and laundered at high temperatures with medical-grade detergents.",
  },
  {
    question: "Can I inspect the treatment room before my session starts?",
    answer:
      "Yes, we gladly welcome clients to view their private suite, verify cleanliness, and consult with the therapist before committing to their session.",
  },
];

export default function WhyChooseUsPage() {
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
            <ShieldCheck className="h-3.5 w-3.5" /> Trust & Clinical Integrity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Why Belvie Spa Is the Best Massage Center in Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why hundreds of discerning residents across Maqbool Market, F-7/4, Islamabad, DHA Islamabad, and Islamabad trust us as their premier wellness sanctuary.
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

      {/* Pillars of Excellence */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-6xl space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair text-foreground">
            The 6 Pillars of the &quot;Belvie Spa&quot; Standard
          </h2>
          <p className="text-muted-foreground text-sm">
            We hold ourselves to international hospitality and health benchmarks so you can relax with 100% confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={i}
                className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-playfair text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Standards & Integrity FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Experience the Difference at Belvie Spa and Massage Center"
        subtitle="Call +92 318 3526306 or message on WhatsApp to reserve your certified session in Maqbool Market, F-7/4, Islamabad."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
