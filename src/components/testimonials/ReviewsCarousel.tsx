"use client";

import { useState, useMemo } from "react";
import { Star, Quote, User, Send, Filter, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const initialReviews = [
    { name: "Fatima Ali", text: "Finally found a calm, professional spa in F-7. The ambiance is so peaceful, totally loved it.", rating: 5, location: "F-7, Islamabad", service: "Aromatherapy", date: "2024-02-15" },
    { name: "Ahmed Khan", text: "Certified therapists who actually know what they are doing. My back pain is gone.", rating: 5, location: "Islamabad", service: "Deep Tissue", date: "2024-02-10" },
    { name: "Bilal Waris", text: "Took my wife for a couples massage. The 20% off deal was a great bonus!", rating: 4, location: "Islamabad", service: "Couples Massage", date: "2024-01-20" },
    { name: "Hina Malik", text: "Hygiene is 10/10. Fresh towels and very clean rooms. Belvie Spa near me.", rating: 5, location: "Islamabad", service: "Facial", date: "2024-01-15" },
    { name: "Usman Gondal", text: "Deep tissue massage was intense but relief was instant. Highly recommended!", rating: 5, location: "Islamabad", service: "Deep Tissue", date: "2024-01-10" },
    { name: "Kashif Mehmood", text: "Expert staff. They focus on your pressure points perfectly.", rating: 5, location: "Islamabad", service: "Thai Massage", date: "2024-03-01" },
    { name: "Amna Ilyas", text: "Best ladies spa services. Very private and secure.", rating: 5, location: "F-7, Islamabad", service: "Mani-Pedi", date: "2024-02-28" },
];

const services = ["All", "Swedish", "Deep Tissue", "Thai Massage", "Aromatherapy", "Couples Massage", "Facial"];

export function ReviewsCarousel() {
    const [reviews, setReviews] = useState(initialReviews);
    const [activeFilter, setActiveFilter] = useState("All");
    const [isPaused, setIsPaused] = useState(false);
    const [showForm, setShowForm] = useState(false);

    // Form State
    const [formData, setFormData] = useState({ name: "", text: "", rating: 5, location: "", service: "Swedish" });
    const [submitted, setSubmitted] = useState(false);

    const filteredReviews = useMemo(() => {
        return activeFilter === "All"
            ? reviews
            : reviews.filter(r => r.service === activeFilter);
    }, [reviews, activeFilter]);

    // Handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.text) return;

        const newReview = {
            ...formData,
            date: new Date().toISOString().split('T')[0]
        };

        setReviews([newReview, ...reviews]);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setShowForm(false);
            setFormData({ name: "", text: "", rating: 5, location: "", service: "Swedish" });
        }, 3000);
    };

    return (
        <section className="py-24 overflow-hidden relative bg-gradient-to-br from-pink-50 via-white to-pink-100">

            <div className="container px-4 md:px-6 mx-auto mb-12 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-playfair text-rose-900 mb-4">
                        Voices of Relaxation
                    </h2>
                    <p className="text-lg text-rose-800 max-w-2xl mx-auto mb-8 font-normal">
                        Discover why locals call us the <span className="font-bold text-rose-900 underline decoration-rose-400">Belvie Spa in Islamabad</span>.
                        Real stories, real relief.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {services.map((service) => (
                            <button
                                key={service}
                                onClick={() => setActiveFilter(service)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeFilter === service
                                        ? "bg-rose-600 text-white border-rose-600 shadow-lg"
                                        : "bg-white/50 text-rose-900 border-rose-200 hover:bg-white hover:border-rose-400"
                                )}
                            >
                                {service}
                            </button>
                        ))}
                    </div>

                    <Button
                        onClick={() => setShowForm(!showForm)}
                        variant="outline"
                        className="border-rose-300 text-rose-700 hover:bg-rose-50"
                    >
                        {showForm ? "Close Form" : "Write a Review"}
                    </Button>
                </div>

                {/* Review Submission Form */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-12 max-w-2xl mx-auto"
                        >
                            <div className="bg-white/70 backdrop-blur-md border border-rose-200 p-8 rounded-3xl shadow-xl">
                                {submitted ? (
                                    <div className="text-center py-10 space-y-4">
                                        <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto" />
                                        <h3 className="text-2xl font-bold text-rose-900">Thank You!</h3>
                                        <p className="text-rose-700">Your review has been submitted and added to the list.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                required
                                                placeholder="Your Name"
                                                className="p-3 rounded-xl border border-rose-200 bg-white/50 focus:ring-2 focus:ring-rose-400 outline-none w-full"
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <input
                                                placeholder="Location (e.g. Maqbool Market, F-7/4, Islamabad)"
                                                className="p-3 rounded-xl border border-rose-200 bg-white/50 focus:ring-2 focus:ring-rose-400 outline-none w-full"
                                                value={formData.location}
                                                onChange={e => setFormData({ ...formData, location: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <select
                                                className="p-3 rounded-xl border border-rose-200 bg-white/50 focus:ring-2 focus:ring-rose-400 outline-none w-full"
                                                value={formData.service}
                                                onChange={e => setFormData({ ...formData, service: e.target.value })}
                                            >
                                                {services.filter(s => s !== "All").map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                            <div className="flex items-center gap-2 p-3 bg-white/50 border border-rose-200 rounded-xl">
                                                <span className="text-rose-900 text-sm">Rating:</span>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            className={cn(
                                                                "h-6 w-6 cursor-pointer transition-colors",
                                                                formData.rating >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                            )}
                                                            onClick={() => setFormData({ ...formData, rating: star })}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <textarea
                                            required
                                            placeholder="Share your experience..."
                                            rows={3}
                                            className="w-full p-3 rounded-xl border border-rose-200 bg-white/50 focus:ring-2 focus:ring-rose-400 outline-none"
                                            value={formData.text}
                                            onChange={e => setFormData({ ...formData, text: e.target.value })}
                                        />
                                        <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-6 rounded-xl text-lg">
                                            Submit Review <Send className="ml-2 h-5 w-5" />
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Infinite Marquee */}
            <div
                className="relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className={cn(
                        "flex gap-6 w-max",
                        !isPaused && "animate-marquee"
                    )}
                >
                    {/* Render triple for smoother loop logic on wide screens */}
                    {[...filteredReviews, ...filteredReviews, ...filteredReviews].map((review, i) => (
                        <div
                            key={`${review.name}-${i}`}
                            className="w-[320px] md:w-[400px] p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex-shrink-0 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, j) => (
                                        <Star
                                            key={j}
                                            className={cn(
                                                "h-4 w-4 fill-current",
                                                j < review.rating ? "text-yellow-400" : "text-gray-200"
                                            )}
                                        />
                                    ))}
                                </div>
                                <div className="bg-rose-100 text-rose-900 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider border border-rose-200">
                                    {review.service}
                                </div>
                            </div>

                            <p className="text-rose-950/90 italic text-lg leading-relaxed mb-6 font-medium line-clamp-4">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 border-t border-rose-100/50 pt-4">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-700 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-rose-950 text-base">{review.name}</p>
                                    <div className="flex items-center gap-1 text-xs text-rose-800 font-semibold">
                                        <span className="opacity-90">Verified Customer</span> • {review.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12">
                <Link href="/contact" className={cn(
                    "inline-flex h-12 items-center justify-center rounded-full bg-rose-600 px-8 py-2 font-bold text-white shadow-xl hover:bg-rose-700 transition-all hover:scale-105"
                )}>
                    Book Your Session Now
                </Link>
                <p className="text-sm text-rose-800/60 mt-4">Join thousands of happy customers in Islamabad</p>
            </div>
        </section>
    );
}
