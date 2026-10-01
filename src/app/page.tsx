import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { ReviewsCarousel } from "@/components/testimonials/ReviewsCarousel";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { WhySpaNeeded } from "@/components/home/WhySpaNeeded";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { MassageCategories } from "@/components/home/MassageCategories";

export const metadata: Metadata = {
  title: { absolute: "Best Massage Center in Islamabad | Top Spa F-7 – Belvie Spa" },
  description:
    "Belvie Spa is the best massage center in Islamabad and a top spa in F-7. Full body, deep tissue, Thai & Swedish massage by certified therapists in Maqbool Market, F-7/4. Call 0318 3526306.",
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "Where is Belvie Spa located in Islamabad?",
    answer:
      "Belvie Spa and Massage Center is located in Maqbool Market, F-7/4, Islamabad, in the heart of F-7, with convenient parking nearby.",
  },
  {
    question: "What massage services do you provide?",
    answer:
      "We offer comprehensive wellness therapies including Classic Swedish Massage, Deep Tissue Therapy, Traditional Thai Massage, Full Body Massage, Aromatherapy, Hot Stone Massage, Foot Reflexology, and private Couples Retreats.",
  },
  {
    question: "Do you have certified male and female therapists?",
    answer:
      "Yes, our team consists of certified professional male and female therapists trained in international wellness and massage techniques. You can specify your preference when booking.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we highly recommend booking in advance via phone call (+92 318 3526306) or WhatsApp to ensure therapist and private suite availability. Walk-ins are accommodated based on open slots.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open 7 days a week from 11:00 AM to 12:00 AM (midnight), including Saturdays and Sundays.",
  },
  {
    question: "What hygiene protocols do you follow?",
    answer:
      "We enforce hospital-grade sanitation standards: 100% fresh Egyptian cotton linens for each client, UV-sterilized equipment, disposable sheets, and thorough suite disinfection after every session.",
  },
];

const featuredServices = [
  {
    title: "Full Body Massage",
    desc: "Complete head-to-toe relaxation releasing chronic stress and fatigue with warm organic oils.",
    href: "/full-body-massage",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
  {
    title: "Deep Tissue Therapy",
    desc: "Intense, focused pressure targeting deeper muscle layers and chronic myofascial adhesions.",
    href: "/deep-tissue-massage-islamabad",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Traditional Thai Massage",
    desc: "Energizing assisted yoga stretches and acupressure performed without oils for enhanced flexibility.",
    href: "/thai-massage-islamabad",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
  {
    title: "Swedish Relaxation",
    desc: "Gentle rhythmic European strokes that improve blood circulation and dissolve daily mental tension.",
    href: "/swedish-massage-islamabad",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Therapeutic Body Massage",
    desc: "Targeted posture and muscle pain management tailored to your specific physical tension points.",
    href: "/body-massage",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Couples Wellness Retreat",
    desc: "Relax side-by-side with your partner in our candlelit double suite with custom aromatherapies.",
    href: "/couples-massage-islamabad",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <HomeHero />

      {/* Intro Authority Section */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl space-y-6">
          <div className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Best Massage Center F-7
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light font-playfair text-foreground tracking-tight leading-tight">
            Top Spa &amp; Massage Center in <span className="italic text-primary">F-7, Islamabad</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            At <strong>Belvie Spa and Massage Center</strong>, we combine the healing power of touch with hospital-grade hygiene standards. Whether you need chronic back pain relief from our certified deep tissue specialists, the dynamic flexibility of traditional Thai bodywork, or pure relaxation in our soundproof private suites, our Maqbool Market, F-7/4, Islamabad facility provides an unmatched level of care.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-left">
            {[
              "Certified Therapists",
              "100% Organic Oils",
              "Private Couple Suites",
              "F-7 Location",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-border text-xs sm:text-sm font-medium text-foreground"
              >
                <div className="h-6 w-6 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border/60 pb-6">
            <div className="space-y-2">
              <span className="eyebrow">
                Massage Services Islamabad
              </span>
              <h2 className="text-3xl md:text-5xl font-light font-playfair text-foreground">
                Popular Massage Services <span className="italic text-primary">in Islamabad</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl">
                Therapies designed to release chronic muscular tension, lower cortisol, and restore balance.
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2 text-sm font-medium"
              )}
            >
              View Full Menu & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <article
                key={i}
                className="group bg-white rounded-[32px] overflow-hidden border border-border shadow-sm shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col p-3"
              >
                <div className="h-60 overflow-hidden relative rounded-[24px]">
                  <div className="absolute inset-0 bg-[#4A453E]/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={service.image}
                    alt={`${service.title} in F-7 Islamabad at Belvie Spa`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border">
                    {service.duration}
                  </div>
                </div>

                <div className="px-4 pt-5 pb-3 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-normal font-playfair text-foreground group-hover:text-primary transition-colors">
                      <Link href={service.href}>{service.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-border text-xs">
                    <Link
                      href={service.href}
                      aria-label={`Explore details for ${service.title} in Maqbool Market, F-7/4, Islamabad`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Details</span> <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      aria-label={`Book an appointment for ${service.title}`}
                      className="px-4 py-2 rounded-full bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Massage types by category */}
      <MassageCategories />

      {/* Benefits & Health Value */}
      <BenefitsSection />
      <WhySpaNeeded />

      {/* Testimonials */}
      <ReviewsCarousel />

      {/* FAQ Section */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <span className="eyebrow">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-playfair text-foreground">
              Massage Center Islamabad <span className="italic text-primary">FAQs</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Everything you need to know before visiting the best massage center in F-7, Islamabad.
            </p>
          </div>
          <FAQSection items={homeFaqs} />
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title="Ready for the Best Massage in Islamabad?"
        subtitle="Call 0318 3526306 or message us on WhatsApp to reserve your certified therapist today."
      />

      {/* Location & Map Section */}
      <MapSection />

      {/* Regional Wellness Hub (Internal Links) */}
      <SEOKeywords />
    </div>
  );
}
