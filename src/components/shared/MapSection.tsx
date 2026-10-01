import Link from "next/link";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export function MapSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[32px] overflow-hidden border border-border shadow-sm">
          {/* Map */}
          <div className="relative w-full lg:w-1/2 min-h-[320px] lg:min-h-[440px] bg-muted">
            <iframe
              title="Belvie Spa location – Maqbool Market, F-7/4 Islamabad"
              src={SITE.mapEmbed}
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-foreground font-medium px-3 py-1.5 rounded-full text-xs shadow-md border border-border flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{SITE.address.short}</span>
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="eyebrow">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Find Us in F-7
              </span>
              <h2 className="text-3xl md:text-4xl font-light font-playfair">
                Visit the Best Massage Center in <span className="italic text-primary">F-7/4, Islamabad</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Belvie Spa is in <strong>Maqbool Market, F-7/4</strong> – a short drive from F-6, F-8, E-7, G-7 and Blue Area. A calm, private escape in the heart of Islamabad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-secondary border border-border space-y-1">
                  <p className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> Address
                  </p>
                  <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                    {SITE.address.full}
                  </address>
                </div>
                <div className="p-4 rounded-2xl bg-secondary border border-border space-y-1">
                  <p className="flex items-center gap-2 text-xs font-semibold text-foreground uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5 text-primary" /> Opening Hours
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monday – Sunday<br />11:00 AM – 12:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 transition-colors"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="border border-border bg-white hover:border-primary hover:text-primary rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" /> {SITE.phoneDisplay}
              </a>
              <Link href="/location" className="text-sm text-primary hover:underline font-medium sm:ml-auto">
                Location guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
