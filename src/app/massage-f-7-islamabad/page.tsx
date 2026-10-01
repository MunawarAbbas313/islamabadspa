import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, Sparkles, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Massage in F-7 Islamabad – Professional Therapists",
  description:
    "Professional massage in F-7 Islamabad by certified therapists. Deep tissue, Thai, Swedish & full body massage at Maqbool Market, F-7/4. From PKR 5,000.",
  alternates: {
    canonical: "/massage-f-7-islamabad",
  },
};

const faqs = [
  {
    question: "Where can I get a professional massage in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Belvie Spa and Massage Center is located in Maqbool Market, F-7/4, Islamabad, offering professional Swedish, Thai, Deep Tissue, and Full Body therapies.",
  },
  {
    question: "What is the price of a massage in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Our 60-minute massage therapies range from PKR 5,000 to PKR 6,500 depending on the modality (Swedish, Thai, Deep Tissue, or Aromatherapy).",
  },
  {
    question: "Can I choose between male and female therapists in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "Yes, we have certified male and female therapists available. Please specify your preference when calling or messaging on WhatsApp.",
  },
  {
    question: "Do you offer walk-in massage appointments in Maqbool Market, F-7/4, Islamabad?",
    answer:
      "While walk-ins are welcomed subject to open room availability, we strongly suggest booking in advance to guarantee your preferred time slot.",
  },
];

export default function MassageF7Page() {
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
            <Sparkles className="h-3.5 w-3.5" /> Certified Bodywork Specialists
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Professional Massage Services in F-7 Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Recharge your body and mind with authentic, therapeutic bodywork. Certified therapists, organic oils, and soundproof private suites in Maqbool Market, F-7/4, Islamabad.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Your Massage
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

      {/* Details */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Therapeutic Massage Excellence
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Targeted Relief for Modern Stress & Fatigue
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Whether you are an active athlete seeking accelerated muscle recovery, an executive dealing with tension headaches, or simply needing an escape from weekly demands, our Maqbool Market, F-7/4, Islamabad massage therapies are customized to your exact physical requirements.
            </p>
            <ul className="space-y-2 text-sm text-foreground pt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Swedish effleurage for nervous system recovery
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Deep tissue myofascial release for chronic knots
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Traditional Thai stretching for spinal flexibility
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Pressure customized to your personal preference
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Session Options in Maqbool Market, F-7/4, Islamabad
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">60 Min Full Body Massage</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">60 Min Deep Tissue Therapy</span>
                <span className="text-primary font-bold">PKR 6,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">90 Min Extended Therapeutic</span>
                <span className="text-primary font-bold">PKR 8,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">45 Min Foot Reflexology</span>
                <span className="text-primary font-bold">PKR 3,500</span>
              </div>
            </div>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary" }), "w-full rounded-xl text-xs font-bold")}
            >
              Reserve Your Therapist Slot &rarr;
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
              Maqbool Market, F-7/4, Islamabad Massage FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Schedule Your Massage in Maqbool Market, F-7/4, Islamabad Today"
        subtitle="Call 0318 3526306 or message on WhatsApp to reserve your certified therapist in F-7."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
