"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Clock, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Massage Types", href: "/massage-types" },
  { name: "Prices", href: "/services" },
  { name: "F-7 Massage", href: "/massage-center-f-7-islamabad" },
  { name: "Islamabad", href: "/massage-center-islamabad" },
  { name: "Why Us", href: "/why-choose-us" },
  { name: "Location", href: "/location" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-espresso text-[#E8E1D5] text-xs py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex items-center justify-between gap-6">
          <span className="hidden lg:inline tracking-wide text-[#D6CCBD]">
            Best Massage Center in F-7 Islamabad &middot; Maqbool Market, F-7/4
          </span>
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-[#EAB094]" />
              <span>Open Daily: 11 AM – 12 AM</span>
            </div>
            <a href="tel:+923183526306" className="flex items-center gap-1.5 hover:text-[#EAB094] transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#EAB094]" />
              <span>Call: 03183526306</span>
            </a>
            <a
              href="https://wa.me/923183526306?text=Hi!+I+would+like+to+book+an+appointment+at+Belvie+Spa+Islamabad."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#EAB094] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#EAB094]" />
              <span>WhatsApp: 03183526306</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "transition-all duration-300 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E1D5]",
          scrolled ? "shadow-[0_8px_30px_rgba(74,69,62,0.08)] py-3" : "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Belvie Spa – Best Massage Center in Islamabad">
            <div className="h-10 w-10 rounded-full bg-[#D56236] flex items-center justify-center text-white font-playfair text-lg font-bold italic shadow-sm shadow-[#D56236]/30">
              B
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-playfair font-semibold tracking-tight text-[#4A453E]">
                Belvie Spa
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#8C7A6B] font-semibold">
                Massage Center &middot; Islamabad
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Pill Shaped */}
          <nav className="hidden xl:flex items-center bg-white/70 rounded-full px-1.5 py-1.5 border border-[#E8E1D5]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-medium transition-all px-3 2xl:px-4 py-2 rounded-full relative whitespace-nowrap",
                    isActive
                      ? "text-white bg-[#D56236] shadow-sm"
                      : "text-[#5C554B] hover:text-[#D56236] hover:bg-[#F6F1EA]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+923183526306"
              className="xl:hidden 2xl:flex h-10 w-10 rounded-full bg-white border border-[#E8E1D5] flex items-center justify-center text-[#D56236] hover:bg-[#F6F1EA] transition-colors"
              aria-label="Call Belvie Spa"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="bg-[#D56236] hover:bg-[#C2542B] text-white rounded-full px-6 py-2.5 font-medium text-sm transition-colors shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="tel:+923183526306"
              className="md:hidden h-9 w-9 rounded-full bg-white border border-[#E8E1D5] flex items-center justify-center text-[#D56236]"
              aria-label="Call Belvie Spa"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              className="p-2 text-[#4A453E] hover:bg-[#F6F1EA] rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#FDFBF7] border-b border-[#E8E1D5] shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium py-3 px-4 rounded-xl transition-colors",
                    pathname === link.href
                      ? "text-[#D56236] bg-[#F9ECE5] border border-[#F1D4C6]"
                      : "text-[#5C554B] hover:bg-[#F6F1EA] hover:text-[#D56236]"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-[#E8E1D5] flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full bg-[#D56236] hover:bg-[#C2542B] text-white py-3 rounded-full font-semibold text-center text-sm"
                >
                  Book Appointment
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+923183526306"
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E8E1D5] text-[#4A453E] font-medium text-xs"
                  >
                    <Phone className="h-4 w-4 text-[#D56236]" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/923183526306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-white border border-[#E8E1D5] text-[#4A453E] font-medium text-xs"
                  >
                    <MessageCircle className="h-4 w-4 text-[#D56236]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
