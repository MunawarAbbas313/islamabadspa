import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, Sparkles, Tag, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa Services & Packages in Islamabad",
  description:
    "Luxury spa services in Islamabad: full body massage, reflexology, hot stone, aromatherapy and couples packages at our top spa in F-7. Transparent PKR prices.",
  alternates: {
    canonical: "/spa-services",
  },
};

const spaPackages = [
  {
    name: "Classic Relaxation Package",
    duration: "60 Min",
    price: "PKR 5,000",
    desc: "Swedish effleurage massage designed to calm the central nervous system, improve venous blood flow, and relieve everyday stress.",
    target: "Beginners & stressed professionals",
  },
  {
    name: "Deep Muscle Rehabilitation",
    duration: "60 Min",
    price: "PKR 6,000",
    desc: "Intense deep tissue manipulation focusing on stubborn fascial adhesions, lower back stiffness, and upper thoracic knots.",
    target: "Athletes, office workers & chronic pain sufferers",
  },
  {
    name: "Aromatherapy Detox Ritual",
    duration: "60 Min",
    price: "PKR 6,500",
    desc: "Swedish massage infused with pure botanical essential oils (French Lavender & Eucalyptus) to soothe respiratory and mental strain.",
    target: "High anxiety & fatigue relief",
  },
  {
    name: "Traditional Thai Energy Alignment",
    duration: "60 / 90 Min",
    price: "PKR 5,500",
    desc: "Dry assisted yoga bodywork combining passive stretching and sen line acupressure to unlock joint flexibility without oils.",
    target: "Flexibility & spinal mobility",
  },
  {
    name: "Couples Luxury Sanctuary",
    duration: "60 Min",
    price: "PKR 12,000",
    desc: "Private double suite relaxation for two partners featuring synchronized Swedish massages, organic tea, and candlelit ambiance.",
    target: "Anniversaries, couples & special dates",
  },
  {
    name: "Hot Basalt Stone Restoration",
    duration: "75 Min",
    price: "PKR 7,000",
    desc: "Water-heated volcanic basalt stones placed and glided along energetic meridians to melt tight muscles with zero pain.",
    target: "Deep chronic stiffness & winter relaxation",
  },
];

const faqs = [
  {
    question: "What is the difference between single and couple spa services?",
    answer:
      "Our single services are hosted in soundproof individual suites, while couples services are hosted in our spacious double suite designed specifically for two partners to relax together.",
  },
  {
    question: "Are your spa products chemical-free?",
    answer:
      "Yes, 100% of our oils and wellness lotions are organic, cold-pressed, and dermatologically safe for sensitive skin.",
  },
  {
    question: "How do I book a spa service in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Simply call our reception at +92 318 3526306 or click the WhatsApp button to reserve your slot directly with our front desk.",
  },
];

export default function SpaServicesPage() {
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
            <Sparkles className="h-3.5 w-3.5" /> Curated Wellness Menu
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Luxury Spa Services & Packages in Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience bespoke therapeutic services crafted for maximum rejuvenation. Certified therapists, private suites, and transparent PKR pricing in Maqbool Market, F-7/4, Islamabad.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Spa Package
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

      {/* Packages Grid */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaPackages.map((pkg, i) => (
            <div
              key={i}
              className="bg-card rounded-3xl p-6 md:p-8 border border-border hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {pkg.duration}
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    {pkg.price}
                  </span>
                </div>
                <h2 className="text-xl font-bold font-playfair text-foreground">
                  {pkg.name}
                </h2>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {pkg.desc}
                </p>
                <div className="p-3 rounded-xl bg-muted/40 text-xs text-foreground/80 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Ideal for: {pkg.target}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border/60">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "primary" }), "w-full rounded-xl text-xs font-bold")}
                >
                  Book This Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Spa Services FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Experience Premium Spa Services in Maqbool Market, F-7/4, Islamabad"
        subtitle="Call 0318 3526306 or reach out on WhatsApp to reserve your treatment."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
