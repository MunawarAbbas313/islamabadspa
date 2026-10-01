import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, Sparkles, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Body Massage in Islamabad – Therapeutic Bodywork",
  description:
    "Therapeutic body massage in Islamabad for back, neck and shoulder pain. Certified therapists and private suites at our F-7 massage center. Call 0318 3526306.",
  alternates: {
    canonical: "/body-massage",
  },
};

const faqs = [
  {
    question: "What is the difference between a body massage and a full body massage?",
    answer:
      "A body massage can be focused on specific problem regions—such as back, neck, and shoulders—or configured as a complete full-body experience according to your pain points and time preferences.",
  },
  {
    question: "How does a body massage help with back and neck stiffness?",
    answer:
      "Our certified therapists use targeted friction, kneading, and myofascial release to break down lactic acid and micro-spasms in tight muscles, restoring natural range of motion.",
  },
  {
    question: "Do you offer gentle or deep pressure body massages?",
    answer:
      "Both! We tailor the pressure to your exact preference—from gentle Swedish relaxation to firm, intense Deep Tissue and Traditional Thai stretching.",
  },
];

export default function BodyMassagePage() {
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
            <Activity className="h-3.5 w-3.5" /> Muscle Restoration & Balance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Therapeutic Body Massage in Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminate stiffness, improve posture, and alleviate fatigue with specialized body massage treatments in Maqbool Market, F-7/4, Islamabad.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Your Body Massage
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

      {/* Overview */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Anatomical Relief
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Personalized Bodywork for Everyday Wellness
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Every body carries tension differently. Whether sitting long hours in Islamabad traffic or enduring gym strain, our certified therapists assess your kinetic alignment and craft a session tailored to unlock tight joints and rejuvenate your body.
            </p>
            <ul className="space-y-2 text-sm text-foreground pt-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Focus on deep postural muscle groups
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Relieves pinched nerves and sciatica symptoms
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Choice of warming herbal aromatherapy oils
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" /> Sanitized private suites for absolute calm
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Body Massage Types Available
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Deep Tissue Body Massage</span>
                <span className="text-primary font-bold">PKR 6,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Swedish Body Relaxation</span>
                <span className="text-primary font-bold">PKR 5,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Hot Stone Body Therapy</span>
                <span className="text-primary font-bold">PKR 7,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Thai Assisted Bodywork</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
            </div>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold")}
            >
              See All Treatments & Booking &rarr;
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
              Body Massage FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Reclaim Pain-Free Movement Today"
        subtitle="Book your session at Belvie Spa and Massage Center in Maqbool Market, F-7/4, Islamabad. Call 0318 3526306."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
