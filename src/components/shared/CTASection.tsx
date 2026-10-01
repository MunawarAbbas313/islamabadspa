import Link from "next/link";
import { Phone, MessageCircle, Calendar, MapPin, Clock } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready for the Best Massage in Islamabad?",
  subtitle = `Reserve your private suite with a certified therapist at ${SITE.address.short}. ${SITE.hours.long}.`,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 bg-espresso text-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center max-w-4xl space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#EAB094] text-xs font-medium uppercase tracking-widest border border-white/10">
            <Clock className="h-3.5 w-3.5" /> {SITE.hours.short}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-playfair leading-tight text-white">
            {title}
          </h2>
          <p className="text-[#D6CCBD] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white font-medium h-13 px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Calendar className="h-5 w-5" /> Book Appointment
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            aria-label={`Call Belvie Spa at ${SITE.phoneDisplay}`}
            className="border border-white/25 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="h-5 w-5 text-[#EAB094]" /> {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/25 hover:bg-white/10 text-white font-medium px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="h-5 w-5 text-[#EAB094]" /> WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#A99C8B]">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-[#EAB094]" /> {SITE.address.full}
          </span>
          <span>Private single & couple suites</span>
        </div>
      </div>
    </section>
  );
}
