"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "923183526306";
    const message = "Hi! I would like to book an appointment.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden mb-2 w-72 border border-pink-200"
                    >
                        <div className="bg-emerald-600 p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Belvie Spa Support</p>
                                    <p className="text-xs text-emerald-100">Typically replies instantly</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-pink-50/50 h-64 flex flex-col gap-3 overflow-y-auto">
                            <div className="bg-white p-3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-sm text-sm text-stone-700 self-start max-w-[85%] border border-pink-100">
                                Hi there! 👋 <br />Welcome to Belvie Spa and Massage Center. How can we help you relax today?
                            </div>
                        </div>

                        <div className="p-3 bg-white border-t border-pink-100">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Start WhatsApp chat with Belvie Spa and Massage Center customer support"
                                className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-full transition-colors"
                            >
                                <Send className="h-4 w-4" /> Start Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close WhatsApp support chat" : "Open WhatsApp support chat with Belvie Spa and Massage Center"}
                className="h-14 w-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
            </button>
        </div>
    );
}
