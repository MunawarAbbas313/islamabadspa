import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { MassageCategories } from "@/components/home/MassageCategories";
import { Clock, Tag, ArrowRight, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Massage Services & Prices in Islamabad",
  description:
    "Full massage menu and prices at the best massage center in Islamabad: full body, Swedish, Thai, deep tissue, hot stone and couples massage in F-7.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "full-body",
    name: "Full Body Massage",
    price: "PKR 5,500",
    duration: "60 / 90 Min",
    description:
      "A complete restorative treatment combining rhythmic Swedish effleurage, warming aromatherapy balms, and continuous muscle relaxation from shoulders to feet.",
    benefits: "Reduces whole-body cortisol, alleviates muscle tension, improves deep sleep quality",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=75",
    href: "/full-body-massage",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Therapy",
    price: "PKR 6,000",
    duration: "60 Min",
    description:
      "Concentrated pressure applied across deep fascial layers and chronic trigger points. Highly effective for persistent lower back pain, stiff neck, and post-workout soreness.",
    benefits: "Dismantles myofascial knots, breaks scar tissue, restores joint mobility",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=75",
    href: "/deep-tissue-massage-islamabad",
  },
  {
    id: "thai",
    name: "Traditional Thai Massage",
    price: "PKR 5,500",
    duration: "60 / 90 Min",
    description:
      "Dry, oil-free bodywork incorporating assisted yoga stretching, joint mobilizations, and rhythmic sen line acupressure. Clients remain comfortably clothed in loose attire.",
    benefits: "Dramatically improves spinal flexibility, posture, and natural energy flow",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=600&q=75",
    href: "/thai-massage-islamabad",
  },
  {
    id: "swedish",
    name: "Classic Swedish Relaxation",
    price: "PKR 5,000",
    duration: "60 Min",
    description:
      "The classic European wellness standard. Uses long, flowing gliding strokes (effleurage) and gentle kneading to induce profound mental and physical calm.",
    benefits: "Relieves everyday anxiety, soothes fatigued nervous system, enhances lymph flow",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=75",
    href: "/swedish-massage-islamabad",
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Bliss",
    price: "PKR 6,500",
    duration: "60 Min",
    description:
      "Combines therapeutic Swedish massage with pure steam-distilled essential oils including French Lavender, Eucalyptus, and Sweet Orange chosen for your mood.",
    benefits: "Alleviates mental stress, clears respiratory pathways, deeply nourishes skin",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=75",
    href: "/aromatherapy-massage-islamabad",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Therapy",
    price: "PKR 7,000",
    duration: "75 Min",
    description:
      "Smooth volcanic basalt stones are heated in water and strategically placed along energetic meridians while warm stones are used to massage tense muscles.",
    benefits: "Penetrates deep into tight fascia without painful pressure; melts stress",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=75",
    href: "/hot-stone-massage-islamabad",
  },
  {
    id: "reflexology",
    name: "Foot Reflexology Therapy",
    price: "PKR 3,500",
    duration: "45 Min",
    description:
      "Targeted acupressure applied to reflex zones on the feet and lower legs to relieve tired, aching feet and promote deep relaxation.",
    benefits: "Alleviates foot fatigue, improves blood circulation, promotes deep relaxation",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=75",
    href: "/foot-reflexology-islamabad",
  },
  {
    id: "couples",
    name: "Couples Wellness Suite",
    price: "PKR 12,000",
    duration: "60 Min",
    description:
      "Share an unforgettable relaxing experience with your partner in our private, candlelit double suite. Includes two Swedish or Aromatherapy massages.",
    benefits: "Synchronized relaxation, private suite, complimentary organic herbal tea",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=75",
    href: "/couples-massage-islamabad",
  },
];

const serviceFaqs = [
  {
    question: "Can I customize the pressure of my massage?",
    answer:
      "Yes, our certified therapists always consult with you before starting to adjust pressure levels (light, medium, or deep) and focus on your specific problem areas.",
  },
  {
    question: "Are male and female therapists available for all services?",
    answer:
      "Yes, we have certified male and female therapists on staff. You can request your preferred therapist when scheduling.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book instantly by calling +92 318 3526306 or messaging us on WhatsApp. We recommend booking in advance for weekend slots.",
  },
  {
    question: "Where are the treatments performed?",
    answer:
      "All services are performed in fully private, climate-controlled, and soundproof suites at our Maqbool Market, F-7/4, Islamabad facility in Islamabad.",
  },
];

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.description,
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
      },
    })),
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            <Tag className="h-3.5 w-3.5" /> Transparent Pricing & Authentic Modalities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground">
            Massage Services & Spa Menu in Islamabad
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience healing touch from certified wellness therapists in <strong>Maqbool Market, F-7/4, Islamabad</strong>. Transparent pricing in PKR with zero hidden charges.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href="tel:+923183526306"
              className={cn(buttonVariants({ variant: "primary" }), "rounded-full gap-2 px-6 font-semibold")}
            >
              <Phone className="h-4 w-4" /> Call: 0318 3526306
            </a>
            <a
              href="https://wa.me/923183526306?text=Hi!+I+would+like+to+book+a+massage+service."
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2 px-6 font-semibold border-emerald-500/50 text-emerald-700 dark:text-emerald-400")}
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group flex flex-col sm:flex-row gap-6 bg-card p-6 md:p-8 rounded-3xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full sm:w-44 h-48 sm:h-auto shrink-0 overflow-hidden rounded-2xl relative">
                  <Image
                    src={service.image}
                    alt={`${service.name} Islamabad Maqbool Market, F-7/4, Islamabad`}
                    fill
                    sizes="(max-width: 640px) 100vw, 176px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-foreground border border-border z-10">
                    {service.duration}
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h2 className="text-xl font-bold font-playfair text-foreground">
                        {service.name}
                      </h2>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-2">
                      {service.description}
                    </p>
                    <div className="flex items-start gap-1.5 text-xs text-foreground/80 bg-muted/40 p-2.5 rounded-xl">
                      <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{service.benefits}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-border/60 text-xs">
                    <Link
                      href={service.href}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                      Book This Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Need Clarity?</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">Services & Pricing FAQ</h2>
          </div>
          <FAQSection items={serviceFaqs} />
        </div>
      </section>

      <MassageCategories />

      <CTASection
        title="Ready to Reserve Your Treatment?"
        subtitle="Call +92 318 3526306 or connect with us on WhatsApp for fast reservation confirmation."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
