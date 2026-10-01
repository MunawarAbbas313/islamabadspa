"use client";

import { CheckCircle2 } from "lucide-react";

const benefits = [
    {
        title: "Expert Therapists",
        description: "Our team consists of certified professionals with years of experience in various massage modalities."
    },
    {
        title: "Eco-Friendly Products",
        description: "We use only premium, organic, and cruelty-free oils and lotions for your safety and comfort."
    },
    {
        title: "Private Suites",
        description: "Enjoy complete privacy in our soundproof, luxuriously appointed treatment rooms."
    },
    {
        title: "Hygienic Environment",
        description: "We follow hospital-grade sterilization protocols to ensure a clean and safe sanctuary."
    }
];

export function BenefitsSection() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why We&apos;re the Top Spa in Islamabad</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We don't just offer massages; we offer a transformation. Here is why we are the top-rated choice in the city.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-2xl shadow-sm border border-border">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
