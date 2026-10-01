"use client";

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        welcome: "Welcome",
        book_now: "Book Now",
        contact_us: "Contact Us"
    },
    ur: {
        welcome: "خوش آمدید",
        book_now: "ابھی بک کریں",
        contact_us: "ہم سے رابطہ کریں"
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
