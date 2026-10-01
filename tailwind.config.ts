import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                rose: {
                    50: '#FDF8F5',
                    100: '#F9ECE5',
                    200: '#F1D4C6',
                    300: '#EABCA4',
                    400: '#E4A07F',
                    500: '#DD825C',
                    600: '#D56236',
                    700: '#B24B25',
                    800: '#4D423D',
                    900: '#2E2A25',
                    950: '#1A1815'
                },
                emerald: {
                    50: '#FDF8F5',
                    100: '#F9ECE5',
                    200: '#F1D4C6',
                    300: '#EABCA4',
                    400: '#E4A07F',
                    500: '#DD825C',
                    600: '#D56236',
                    700: '#B24B25',
                    800: '#4D423D',
                    900: '#2E2A25',
                    950: '#1A1815'
                },
                background: "rgb(var(--background))",
                foreground: "rgb(var(--foreground))",
                card: {
                    DEFAULT: "rgb(var(--card))",
                    foreground: "rgb(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "rgb(var(--popover))",
                    foreground: "rgb(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "rgb(var(--primary))",
                    foreground: "rgb(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "rgb(var(--secondary))",
                    foreground: "rgb(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "rgb(var(--muted))",
                    foreground: "rgb(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "rgb(var(--accent))",
                    foreground: "rgb(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "rgb(var(--destructive))",
                    foreground: "rgb(var(--destructive-foreground))",
                },
                border: "rgb(var(--border))",
                input: "rgb(var(--input))",
                ring: "rgb(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-poppins)"],
                serif: ["var(--font-playfair)"],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
