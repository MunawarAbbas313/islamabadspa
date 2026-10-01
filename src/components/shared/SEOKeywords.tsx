"use client";

import Link from "next/link";
import { MapPin, Sparkles, ShieldCheck, Clock } from "lucide-react";

export function SEOKeywords() {
  return (
    <section className="py-16 bg-muted/20 border-t border-border/60">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Regional Wellness Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Best Massage Center Serving F-7 &amp; All of Islamabad
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Belvie Spa and Massage Center is centrally located in <strong>Maqbool Market, F-7/4, Islamabad</strong>, offering premium, hygienic, and certified massage therapy services to residents across the region.
            </p>
          </div>

          {/* Quick Hub Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Popular Local Destinations
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/massage-center-f-7-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Center Maqbool Market, F-7/4, Islamabad
                  </Link>
                </li>
                <li>
                  <Link href="/spa-f-7-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Luxury Spa in Maqbool Market, F-7/4, Islamabad
                  </Link>
                </li>
                <li>
                  <Link href="/massage-center-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Center Islamabad
                  </Link>
                </li>
                <li>
                  <Link href="/massage-f-7-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Services in Maqbool Market, F-7/4, Islamabad
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Find Our Location in F-7/4
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Signature Therapies
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/massage-types" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    All 20 Massage Types
                  </Link>
                </li>
                <li>
                  <Link href="/full-body-massage" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Full Body Massage Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/body-massage" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Therapeutic Body Massage
                  </Link>
                </li>
                <li>
                  <Link href="/spa-services" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    View Complete Spa Services Menu
                  </Link>
                </li>
                <li>
                  <Link href="/deep-tissue-massage-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Deep Tissue Muscle Relief
                  </Link>
                </li>
                <li>
                  <Link href="/thai-massage-islamabad" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Traditional Thai Massage
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Trust & Information
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/why-choose-us" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Why Choose Belvie Spa (Standards & Hygiene)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    About Our Certified Therapists
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Wellness Journal & Health Tips
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Book An Appointment / Contact Us
                  </Link>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-foreground/80 pt-2 border-t border-border/50">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Open daily: 11 AM – 12 AM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regional Accessibility and Safe Spa Context */}
          <div className="text-center pt-2 space-y-2">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Looking for a massage center near you in Islamabad?</strong> Belvie Spa in Maqbool Market, F-7/4 is a short drive from F-6, F-8, E-7, G-7, G-6, F-10 and Blue Area – with certified therapists, transparent PKR prices and opening hours from 11 AM to 12 AM, every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
