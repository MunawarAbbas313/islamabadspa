"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, ArrowRight, Star, MapPin } from "lucide-react";

const heroCategories = [
  { label: "Massage Center F-7", href: "/massage-center-f-7-islamabad" },
  { label: "Top Spa in Islamabad", href: "/spa-f-7-islamabad" },
  { label: "Full Body Massage", href: "/full-body-massage" },
  { label: "Body Massage", href: "/body-massage" },
  { label: "Spa Services", href: "/spa-services" },
];

export function HomeHero() {
  return (
    <section className="relative lg:min-h-[90vh] flex items-center bg-[#FDFBF7] overflow-hidden pt-28 pb-16">
      {/* Soft warm glow */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#F9ECE5] blur-3xl opacity-70 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">

        {/* Left Content */}
        <div className="w-full lg:flex-1 space-y-7 z-10">
          <div className="eyebrow">
            <MapPin className="h-3.5 w-3.5 text-[#D56236]" />
            <span>Top Spa in F-7, Islamabad</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-playfair text-[#4A453E] leading-[1.1]">
            The Best <span className="italic text-[#D56236]">Massage Center</span>
            <br className="hidden sm:block" /> in Islamabad
          </h1>

          <p className="text-xl md:text-2xl font-playfair italic text-[#8C7A6B]">
            Find your inner peace in Maqbool Market, F-7/4.
          </p>

          <p className="text-[#7A7369] text-lg max-w-xl leading-relaxed font-light">
            Belvie Spa is Islamabad&apos;s top-rated spa and massage center. We offer full body massage, deep tissue, Thai, and Swedish therapy with certified male and female therapists, 100% private suites, and hospital-grade hygiene.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="bg-[#D56236] hover:bg-[#C2542B] text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+923183526306"
              className="text-[#5C554B] hover:text-[#D56236] px-6 py-4 rounded-full font-medium transition-colors flex items-center gap-2 border border-[#E8E1D5] bg-white/50 hover:bg-white"
            >
              <Phone className="h-4 w-4" /> 0318 3526306
            </a>
          </div>

          {/* Category keywords */}
          <nav aria-label="Popular massage categories in Islamabad" className="flex flex-wrap gap-2 pt-2">
            {heroCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="text-xs font-medium text-[#5C554B] bg-white/70 border border-[#E8E1D5] hover:border-[#D56236] hover:text-[#D56236] rounded-full px-3.5 py-1.5 transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </nav>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-[#7A7369]">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-current text-[#C9A46A]" />
              <span>Certified Therapists</span>
            </div>
            <span className="h-4 w-px bg-[#E8E1D5]" />
            <span>Private Suites</span>
            <span className="h-4 w-px bg-[#E8E1D5]" />
            <span>Open Till Midnight</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:flex-1 shrink-0 relative h-[420px] sm:h-[550px] lg:h-[700px] flex justify-end">
          <div className="w-full lg:w-[90%] h-full rounded-[40px] md:rounded-[80px] overflow-hidden relative shadow-2xl shadow-[#D56236]/10 border border-[#E8E1D5]">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
              alt="Best massage center in Islamabad – Belvie Spa private massage suite in F-7"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 lg:bottom-12 -left-2 sm:left-4 lg:-left-12 bg-white p-5 rounded-3xl shadow-xl shadow-black/5 border border-[#F3EFE9] flex items-center gap-4 max-w-[280px]">
            <div className="h-12 w-12 rounded-full bg-[#FDFBF7] flex items-center justify-center shrink-0 text-[#D56236]">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[#4A453E] font-bold text-sm">Open 7 Days a Week</p>
              <p className="text-[#8C7A6B] text-xs">11 AM – 12 AM, every day</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
