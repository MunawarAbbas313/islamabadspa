import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, MessageCircle, Calendar, ShieldCheck, Check, Sparkles, MapPin, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Best Massage Center in Islamabad – Certified Therapists",
  description:
    "Looking for the best massage center in Islamabad? Belvie Spa in F-7/4 offers full body, deep tissue, Thai & Swedish massage in private suites. Call 0318 3526306.",
  alternates: {
    canonical: "/massage-center-islamabad",
  },
};

const faqs = [
  {
    question: "Where is the best massage center located in Islamabad?",
    answer:
      "Belvie Spa and Massage Center is situated in Maqbool Market, F-7/4, Islamabad, conveniently located, a short drive from F-6, F-8, E-7, G-7 and Blue Area.",
  },
  {
    question: "What types of massage services are offered at your Islamabad center?",
    answer:
      "We provide Swedish Relaxation, Deep Tissue Therapy, Traditional Thai Massage, Full Body Massage, Foot Reflexology, Hot Stone Therapy, and Couples Retreat packages.",
  },
  {
    question: "Are your massage therapists certified?",
    answer:
      "Yes, 100% of our therapists are certified professionals trained in anatomical wellness, safe pressure modulation, and hygienic standards.",
  },
  {
    question: "How do I book a massage session?",
    answer:
      "You can book immediately by calling our reception at +92 318 3526306 or messaging us on WhatsApp. Advanced booking is recommended for peak evening and weekend slots.",
  },
];

export default function MassageCenterIslamabadPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Belvie Spa - Massage Center Islamabad",
    description:
      "Top certified massage center in Islamabad offering therapeutic full body, deep tissue, and Thai massage.",
    telephone: "+923183526306",
    url: "https://belviespa.com/massage-center-islamabad",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maqbool Market, F-7/4, Islamabad",
      addressLocality: "Islamabad",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    hasMap: "https://share.google/WgrBX63tHp54fzlxB",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Award className="h-3.5 w-3.5" /> Top Rated Wellness Destination
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Best Massage Center in Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience restorative bodywork, certified therapist care, and hospital-grade hygiene at Islamabad&apos;s most trusted massage center. Located in Maqbool Market, F-7/4, Islamabad.
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

      {/* Content & Quality Differentiators */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Why Islamabad Chooses Belvie Spa
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              A True Medical & Relaxation Sanctuary
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Finding a safe, professional, and genuinely therapeutic massage center in Islamabad shouldn&apos;t be difficult. At Belvie Spa and Massage Center, we have eliminated the guesswork by establishing rigorous clinical sanitation protocols, hiring verified therapists, and creating private soundproof suites.
            </p>
            <ul className="space-y-2 text-sm text-foreground pt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Individual private suites with private changing areas
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Pure, organic sweet almond and essential oils
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Male & female certified therapists available
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Zero waiting times with scheduled appointment slots
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border space-y-6 shadow-xs">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Available Massage Modalities
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Full Body Massage</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Deep Tissue Therapy</span>
                <span className="text-primary font-bold">PKR 6,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Traditional Thai Massage</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Swedish Relaxation</span>
                <span className="text-primary font-bold">PKR 5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Couples Retreat Suite</span>
                <span className="text-primary font-bold">PKR 12,000</span>
              </div>
            </div>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold")}
            >
              View Full Menu & Modalities &rarr;
            </Link>
          </div>
        </div>

        {/* Regional Accessibility */}
        <div className="bg-secondary/30 p-8 rounded-3xl border border-border text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold font-playfair text-foreground">
            Conveniently Located in Maqbool Market, F-7/4, Islamabad
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our center in F-7/4 is easy to reach from anywhere in Islamabad – just minutes from F-6, F-8, E-7, G-7 and Blue Area.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Massage Center Islamabad FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Book Your Islamabad Massage Session Today"
        subtitle="Call +92 318 3526306 or message on WhatsApp to reserve your certified therapist in Maqbool Market, F-7/4, Islamabad."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
