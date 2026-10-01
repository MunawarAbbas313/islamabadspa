import Link from "next/link";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const footerMassageTypes = [
  { name: "Swedish Massage", href: "/swedish-massage-islamabad" },
  { name: "Deep Tissue Massage", href: "/deep-tissue-massage-islamabad" },
  { name: "Thai Massage", href: "/thai-massage-islamabad" },
  { name: "Hot Stone Massage", href: "/hot-stone-massage-islamabad" },
  { name: "Aromatherapy Massage", href: "/aromatherapy-massage-islamabad" },
  { name: "Couples Massage", href: "/couples-massage-islamabad" },
  { name: "Foot Reflexology", href: "/foot-reflexology-islamabad" },
  { name: "All 20 Massage Types", href: "/massage-types" },
];

const footerLocal = [
  { name: "Best Massage Center Islamabad", href: "/massage-center-islamabad" },
  { name: "Massage Center F-7", href: "/massage-center-f-7-islamabad" },
  { name: "Top Spa in F-7", href: "/spa-f-7-islamabad" },
  { name: "Massage in F-7", href: "/massage-f-7-islamabad" },
  { name: "Full Body Massage", href: "/full-body-massage" },
  { name: "Body Massage", href: "/body-massage" },
  { name: "Spa Services & Packages", href: "/spa-services" },
];

const footerInfo = [
  { name: "Services & Prices", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Location & Directions", href: "/location" },
  { name: "Wellness Blog", href: "/blog" },
  { name: "Book Appointment", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const linkCls = "hover:text-[#EAB094] transition-colors";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-[#D6CCBD] pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-playfair text-lg font-bold italic">
                B
              </span>
              <span className="text-2xl font-playfair text-white">Belvie Spa</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#A99C8B] max-w-sm">
              The best massage center in Islamabad – a top spa in F-7/4 offering certified, professional massage therapy in calm, private suites.
            </p>

            <ul className="space-y-3 text-sm pt-2">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#EAB094] shrink-0 mt-0.5" />
                <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {SITE.address.full}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#EAB094] shrink-0" />
                <a href={`tel:${SITE.phone}`} className={linkCls}>{SITE.phoneIntl}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#EAB094] shrink-0" />
                <a href={`mailto:${SITE.email}`} className={linkCls}>{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#EAB094] shrink-0 mt-0.5" />
                <span>Monday – Sunday: 11:00 AM – 12:00 AM</span>
              </li>
            </ul>

            <div className="flex gap-3 pt-2">
              {[
                { href: whatsappLink(), label: "WhatsApp", Icon: MessageCircle },
                { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
                { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Belvie Spa on ${label}`}
                  className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:text-[#EAB094] hover:border-[#EAB094]/50 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Massage Types", links: footerMassageTypes },
            { title: "Islamabad & F-7", links: footerLocal },
            { title: "Information", links: footerInfo },
          ].map((col) => (
            <div key={col.title} className="lg:col-span-3 space-y-4">
              <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase font-sans">{col.title}</h3>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A99C8B]">
          <p>© {currentYear} Belvie Spa and Massage Center, F-7/4 Islamabad. All rights reserved.</p>
          <p>Professional, non-medical wellness massage services.</p>
        </div>
      </div>
    </footer>
  );
}
