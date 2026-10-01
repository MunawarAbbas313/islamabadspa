import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { ShieldCheck, Sparkles, Heart, Award, CheckCircle2, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us – Top Spa & Massage Center in Islamabad",
  description:
    "About Belvie Spa, a top spa and massage center in F-7 Islamabad. Certified therapists, hospital-grade hygiene, private luxury suites and organic oils.",
  alternates: {
    canonical: "/about",
  },
};

const aboutFaqs = [
  {
    question: "Are all therapists certified at Belvie Spa and Massage Center?",
    answer:
      "Yes, every massage therapist on our team holds verified professional certifications in bodywork and anatomical wellness, undergoing continuous internal quality training.",
  },
  {
    question: "What hygiene protocols are followed?",
    answer:
      "We replace all Egyptian cotton linens after every client session, utilize medical-grade UV sterilizers for accessories, and thoroughly disinfect private therapy rooms between visits.",
  },
  {
    question: "Where in Islamabad are you located?",
    answer:
      "Our wellness center is located in Maqbool Market, F-7/4, Islamabad, a short drive from F-6, F-8, E-7 and Blue Area.",
  },
  {
    question: "Do you offer private suites for individuals and couples?",
    answer:
      "Yes, we provide individual private treatment suites as well as dedicated double suites for couples seeking synchronized relaxation.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Belvie Spa and Massage Center",
    description: "About Belvie Spa and Massage Center, luxury wellness and massage center in Maqbool Market, F-7/4, Islamabad.",
    url: "https://www.islamabadmassagecenter.com/about",
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> Our Story & Values
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground">
            About Belvie Spa – A Top Spa in F-7, Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a commitment to bring authentic, therapeutic bodywork and luxury spa care to the Islamabad, Belvie Spa and Massage Center is dedicated to restoring your physical balance and mental peace.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary" }), "rounded-full gap-2 px-6 font-semibold")}
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
            <a
              href="tel:+923183526306"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2 px-6 font-semibold")}
            >
              <Phone className="h-4 w-4 text-emerald-600" /> Call: 03183526306
            </a>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
            Holistic Bodywork Designed for Modern Living
          </h2>
          <p>
            In today&apos;s fast-paced environment, prolonged desk work, city commuting, and unrelenting stress take a heavy toll on our physiological health. At <strong>Belvie Spa and Massage Center</strong>, we believe massage therapy is not an occasional luxury, but an essential component of preventative self-care.
          </p>
          <p>
            Conveniently situated in <strong>Maqbool Market, F-7/4, Islamabad</strong>, our facility was custom-engineered to isolate you from outside traffic noise. From acoustically insulated treatment suites to warm ambient lighting and custom essential oil aromas, every sensory element is harmonized for deep restoration.
          </p>
        </div>

        {/* Pillars of Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold font-playfair text-foreground">Certified Professional Therapists</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We uphold strict employment criteria. Each therapist is certified in anatomical principles, muscle kneading, and traditional modalities like Thai and Swedish massage.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold font-playfair text-foreground">Hospital-Grade Cleanliness</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every client receives fresh, sanitized Egyptian cotton linens. Our suites and equipment undergo thorough sterilization after every appointment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold font-playfair text-foreground">100% Pure Organic Oils</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We exclusively utilize pure, cold-pressed botanical oils like sweet almond, jojoba, and therapeutic essential oils that deeply nourish your skin.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold font-playfair text-foreground">Absolute Discretion & Privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our individual private suites and couples retreat rooms guarantee complete confidentiality and a peaceful atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* About FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Transparency</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">About Our Standards FAQ</h2>
          </div>
          <FAQSection items={aboutFaqs} />
        </div>
      </section>

      <CTASection />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
