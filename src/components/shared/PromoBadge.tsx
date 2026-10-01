"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PromoBadge() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="fixed left-4 bottom-24 z-40 hidden md:flex"
            >
                <div className="relative group cursor-pointer">
                    {/* Close button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute -top-2 -right-2 bg-white text-rose-600 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X className="h-3 w-3" />
                    </button>

                    <div className="bg-gradient-to-br from-[#D56236] to-[#A44522] text-white p-4 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-2 border-white/50 animate-pulse-slow">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="h-4 w-4 text-yellow-300 animate-spin-slow" />
                            <span className="font-bold text-xs uppercase tracking-wider text-yellow-200">New Year Offer</span>
                        </div>
                        <p className="font-playfair text-2xl font-bold leading-tight">
                            FLAT 20% OFF
                        </p>
                        <p className="text-sm font-medium opacity-90">
                            On All Services!
                        </p>
                        <div className="mt-2 text-xs bg-white/20 px-2 py-1 rounded inline-block">
                            Limited Time Deal
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
