import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { MASSAGE_CATEGORIES, massageTypes, getMassageTypesByCategory } from "@/lib/massage-types";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/shared/CTASection";
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Types of Massage in Islamabad – 20 Massage Therapies",
  description:
    "Explore 20 types of massage at the best massage center in Islamabad: Swedish, deep tissue, Thai, hot stone, aromatherapy, cupping, reflexology and more. Belvie Spa F-7/4.",
  keywords: [
    "types of massage Islamabad",
    "massage types",
    "best massage center in Islamabad",
    "massage center F-7",
    "spa services Islamabad",
  ],
  alternates: { canonical: "/massage-types" },
};

const faqs = [
  {
    question: "Which type of massage is best for me?",
    answer:
      "For pure relaxation choose Swedish, aromatherapy or hot stone. For knots and stiffness choose deep tissue, trigger point or sports massage. If you prefer no oil, try Thai or shiatsu. Our therapists will happily recommend the best option at your consultation.",
  },
  {
    question: "Which massage is best for back pain?",
    answer:
      "Deep tissue, trigger point therapy and focused back, neck & shoulder massage are popular choices for everyday back tension. For pain after an injury, please consult a doctor first.",
  },
  {
    question: "Which massages are done without oil?",
    answer: "Thai massage, shiatsu and assisted stretching are performed fully clothed without oil.",
  },
  {
    question: "Where can I get these massages in Islamabad?",
    answer: `All treatments are available at Belvie Spa, ${SITE.address.full}. ${SITE.hours.long}.`,
  },
];

export default function MassageTypesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Types of Massage at Belvie Spa Islamabad",
    itemListElement: massageTypes.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.name,
      url: `${SITE.url}/${m.slug}`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-accent blur-3xl opacity-60 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl relative space-y-6">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> 20 Therapies · 4 Categories
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-playfair leading-[1.1]">
            Types of Massage at the <span className="italic text-primary">Best Massage Center</span> in Islamabad
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            From classic Swedish relaxation to traditional Thai stretching, every massage at Belvie Spa F-7/4 is performed by certified therapists in a private suite. Explore each therapy&apos;s history, benefits and what to expect.
          </p>
          <nav aria-label="Massage categories" className="flex flex-wrap justify-center gap-2 pt-2">
            {MASSAGE_CATEGORIES.map((c) => (
              <a
                key={c.name}
                href={`#${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="text-xs font-medium text-foreground bg-white border border-border hover:border-primary hover:text-primary rounded-full px-4 py-2 transition-colors"
              >
                {c.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories */}
      {MASSAGE_CATEGORIES.map((cat, ci) => (
        <section
          key={cat.name}
          id={cat.name.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={`py-14 md:py-20 scroll-mt-28 ${ci % 2 === 0 ? "bg-secondary border-y border-border" : ""}`}
        >
          <div className="container mx-auto px-4 md:px-8 space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-3xl md:text-4xl font-light font-playfair">
                {cat.name} <span className="italic text-primary">in Islamabad</span>
              </h2>
              <p className="text-muted-foreground">{cat.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {getMassageTypesByCategory(cat.name).map((m) => (
                <Link
                  key={m.slug}
                  href={`/${m.slug}`}
                  className="group bg-white rounded-[28px] border border-border p-2.5 flex flex-col hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-44 rounded-[20px] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[11px] font-medium text-foreground inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary" /> {m.duration}
                    </span>
                  </div>
                  <div className="p-3 flex flex-col flex-grow gap-2">
                    <h3 className="text-xl font-playfair group-hover:text-primary transition-colors">{m.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{m.tagline}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border text-xs">
                      <span className="font-semibold text-foreground">{m.price ?? "Call for rates"}</span>
                      <span className="text-primary font-medium inline-flex items-center gap-1">
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-3">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-light font-playfair">Choosing the Right Massage</h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection />
      <MapSection />
    </div>
  );
}
