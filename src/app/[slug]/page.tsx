import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Gauge,
  History,
  Info,
  Phone,
  Sparkles,
  Tag,
} from "lucide-react";
import { massageTypes, getMassageType } from "@/lib/massage-types";
import { SITE, providerSchema } from "@/lib/site";
import { FAQSection } from "@/components/ui/accordion";
import { CTASection } from "@/components/shared/CTASection";
import { MapSection } from "@/components/shared/MapSection";

export const dynamicParams = false;

export function generateStaticParams() {
  return massageTypes.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getMassageType(slug);
  if (!m) return {};

  return {
    title: { absolute: m.metaTitle },
    description: m.metaDescription,
    keywords: [
      m.keyword,
      `${m.name} F-7`,
      `${m.name} near me`,
      `best ${m.name.toLowerCase()} in Islamabad`,
      `${m.name} price in Islamabad`,
      `benefits of ${m.name.toLowerCase()}`,
      "massage center F-7 Islamabad",
    ],
    alternates: { canonical: `/${m.slug}` },
    openGraph: {
      type: "website",
      title: m.metaTitle,
      description: m.metaDescription,
      url: `${SITE.url}/${m.slug}`,
      images: [{ url: m.image, alt: m.imageAlt }],
    },
  };
}

export default async function MassageTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getMassageType(slug);
  if (!m) notFound();

  const related = m.related
    .map((s) => getMassageType(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${m.name} in Islamabad`,
      serviceType: m.name,
      description: m.metaDescription,
      image: m.image,
      url: `${SITE.url}/${m.slug}`,
      areaServed: { "@type": "City", name: "Islamabad" },
      provider: providerSchema,
      ...(m.price && /^PKR [\d,]+$/.test(m.price)
        ? {
            offers: {
              "@type": "Offer",
              price: m.price.replace(/[^\d]/g, ""),
              priceCurrency: "PKR",
              availability: "https://schema.org/InStock",
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: m.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Massage Types", item: `${SITE.url}/massage-types` },
        { "@type": "ListItem", position: 3, name: m.name, item: `${SITE.url}/${m.slug}` },
      ],
    },
  ];

  const facts = [
    { icon: Clock, label: "Duration", value: m.duration },
    { icon: Gauge, label: "Pressure", value: m.pressure },
    { icon: Tag, label: "Price", value: m.price ?? "Call for rates" },
  ];

  return (
    <div className="bg-background">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 md:pt-16 pb-16">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-accent blur-3xl opacity-70 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/massage-types" className="hover:text-primary">Massage Types</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{m.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> {m.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-playfair leading-[1.1]">
                {m.h1}
              </h1>
              <p className="text-xl font-playfair italic text-[#8C7A6B]">{m.tagline}</p>
              {m.intro.map((p, i) => (
                <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                  {p}
                </p>
              ))}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="h-4 w-4" /> Book {m.name}
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="border border-border bg-white/60 hover:bg-white text-foreground hover:text-primary px-7 py-3.5 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[320px] sm:h-[440px] lg:h-[520px] rounded-[40px] md:rounded-[64px] overflow-hidden border border-border shadow-2xl shadow-primary/10">
                <Image src={m.image} alt={m.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 lg:absolute lg:-bottom-8 lg:left-6 lg:right-6 lg:mt-0">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white rounded-2xl border border-border p-3 sm:p-4 shadow-lg shadow-black/5">
                    <Icon className="h-4 w-4 text-primary mb-1.5" />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground leading-snug">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History + How it works */}
      <section className="py-16 md:py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <article className="space-y-5">
            <span className="eyebrow">
              <History className="h-3.5 w-3.5 text-primary" /> History & Origins
            </span>
            <h2 className="text-3xl md:text-4xl font-light font-playfair">
              The History of <span className="italic text-primary">{m.name}</span>
            </h2>
            {m.history.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </article>

          <article className="bg-white rounded-[32px] border border-border p-6 md:p-10 space-y-5">
            <h2 className="text-2xl md:text-3xl font-light font-playfair">
              How {m.name} Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">{m.howItWorks}</p>
            <h3 className="text-lg font-playfair pt-2">Key techniques</h3>
            <ul className="space-y-2.5">
              {m.techniques.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-foreground">
                  <span className="h-6 w-6 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow">Benefits</span>
            <h2 className="text-3xl md:text-5xl font-light font-playfair">
              Benefits of <span className="italic text-primary">{m.name}</span>
            </h2>
            <p className="text-muted-foreground">
              Why clients across Islamabad book {m.name.toLowerCase()} at our F-7 massage center.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {m.benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-white rounded-[28px] border border-border p-6 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-playfair italic text-3xl text-primary/40">0{i + 1}</span>
                <h3 className="text-xl font-playfair mt-2 mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for + What to expect */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[32px] border border-border p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-light font-playfair mb-6">Who Is {m.name} For?</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {m.idealFor.map((t) => (
                <li key={t} className="flex gap-2.5 items-start p-3 rounded-2xl bg-secondary text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-espresso text-[#E8E1D5] rounded-[32px] p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-light font-playfair mb-6 text-white">What to Expect at Belvie Spa</h2>
            <ol className="space-y-4">
              {m.expect.map((t, i) => (
                <li key={t} className="flex gap-4 text-sm leading-relaxed">
                  <span className="h-7 w-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span className="pt-1">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-[32px] border border-border bg-accent/60 p-6 md:p-10 grid md:grid-cols-[auto_1fr] gap-6">
            <Info className="h-8 w-8 text-primary" />
            <div className="space-y-3">
              <h2 className="text-2xl font-playfair">When to Avoid or Adapt {m.name}</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground">
                {m.avoidIf.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">
                Massage is a wellness service and not a substitute for medical diagnosis or treatment. If you have a health condition, please consult your doctor and tell your therapist before your session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-3">
            <span className="eyebrow">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-light font-playfair">
              {m.name} in Islamabad – FAQs
            </h2>
          </div>
          <FAQSection items={m.faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-light font-playfair">
              You May Also <span className="italic text-primary">Enjoy</span>
            </h2>
            <Link href="/massage-types" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:underline">
              All 20 massage types <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group bg-white rounded-[28px] border border-border p-2.5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 rounded-[20px] overflow-hidden">
                  <Image src={r.image} alt={r.imageAlt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.category}</p>
                  <h3 className="text-lg font-playfair group-hover:text-primary transition-colors">{r.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Book ${m.name} in F-7, Islamabad`}
        subtitle={`Call ${SITE.phoneDisplay} or WhatsApp us to reserve your private suite. ${SITE.hours.long}.`}
      />
      <MapSection />

    </div>
  );
}
