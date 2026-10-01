import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Flower2, Phone, MessageCircle, Home, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
          <Flower2 className="h-12 w-12" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            404 — Page Not Found
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-playfair text-foreground">
            Looking for Relaxation?
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base leading-relaxed">
            The page you are looking for may have moved or no longer exists. Let us guide you back to serenity at Belvie Spa and Massage Center.
          </p>
        </div>

        {/* Quick recovery links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-md mx-auto">
          <Link
            href="/services"
            className="p-3 rounded-xl bg-background border border-border hover:border-primary/50 text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Compass className="h-4 w-4 text-primary" /> View Massage Menu
          </Link>
          <Link
            href="/massage-center-f-7-islamabad"
            className="p-3 rounded-xl bg-background border border-border hover:border-primary/50 text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Flower2 className="h-4 w-4 text-primary" /> F-7 Spa
          </Link>
          <Link
            href="/full-body-massage"
            className="p-3 rounded-xl bg-background border border-border hover:border-primary/50 text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Compass className="h-4 w-4 text-primary" /> Full Body Massage
          </Link>
          <Link
            href="/location"
            className="p-3 rounded-xl bg-background border border-border hover:border-primary/50 text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Compass className="h-4 w-4 text-primary" /> Directions & Map
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-border">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "primary" }), "rounded-full gap-2 px-6")}
          >
            <Home className="h-4 w-4" /> Return to Homepage
          </Link>
          <a
            href="tel:+923183526306"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2 px-6")}
          >
            <Phone className="h-4 w-4 text-emerald-600" /> Call Reception
          </a>
        </div>
      </div>
    </div>
  );
}
