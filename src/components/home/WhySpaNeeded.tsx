"use client";

import { Heart, Brain, Zap, ShieldCheck } from "lucide-react";

export function WhySpaNeeded() {
    return (
        <section className="py-24 bg-card">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-wide uppercase text-sm">Health & Wellness</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-playfair mt-2 mb-6">Why You Need a Spa Day in Islamabad</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Massage therapy is not just a luxury; it is a vital part of a healthy lifestyle.
                        In a world typically defined by stress and screen time, your body needs a reset.
                        Here is how regular spa visits can transform your health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex gap-6 items-start">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
                            <Heart className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-playfair">Improve Heart Health</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Massage therapy improves venous return and blood flow, which can lower blood pressure
                                and improve overall cardiovascular function. It is a natural way to boost circulation
                                and reduce the strain on your heart.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
                            <Brain className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-playfair">Mental Clarity & Stress Relief</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Chronic stress releases cortisol, the &quot;stress hormone&quot;. Spa treatments have been proven
                                to decrease cortisol levels and increase dopamine and serotonin—the body&apos;s natural
                                happiness chemicals—fighting anxiety and depression.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
                            <Zap className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-playfair">Boost Immunity</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Regular massage boosts the activity of white blood cells that fight viruses.
                                By reducing stress hormones that suppress your immune system, a spa day literally
                                makes you stronger against illness.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="p-4 bg-primary/10 rounded-2xl text-primary shrink-0">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold font-playfair">Pain Management</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Whether it is back pain from sitting at a desk or soreness from a workout,
                                deep tissue massage targets the root cause of pain. It breaks down knots
                                and improves flexibility, preventing future injuries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
