import { massageTypesA } from "./massage-types-a";
import { massageTypesB } from "./massage-types-b";

export type MassageCategory =
  | "Relaxation Massage"
  | "Therapeutic & Pain Relief"
  | "Eastern & Traditional"
  | "Targeted & Specialty";

export interface MassageType {
  slug: string;
  name: string;
  category: MassageCategory;
  /** Primary search phrase this page targets */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  image: string;
  imageAlt: string;
  duration: string;
  /** Only set where the price is published elsewhere on the site */
  price?: string;
  pressure: "Light" | "Light–Medium" | "Medium" | "Medium–Firm" | "Firm" | "Adjustable";
  history: string[];
  howItWorks: string;
  techniques: string[];
  benefits: { title: string; text: string }[];
  idealFor: string[];
  expect: string[];
  avoidIf: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const MASSAGE_CATEGORIES: { name: MassageCategory; description: string }[] = [
  {
    name: "Relaxation Massage",
    description: "Gentle, flowing treatments to calm the nervous system, lower stress and help you sleep better.",
  },
  {
    name: "Therapeutic & Pain Relief",
    description: "Focused bodywork for muscle knots, stiffness, posture strain and active recovery.",
  },
  {
    name: "Eastern & Traditional",
    description: "Time-honoured techniques from Thailand, Japan, Bali, India and the Middle East.",
  },
  {
    name: "Targeted & Specialty",
    description: "Treatments for a specific area or need – feet, head, back, couples and more.",
  },
];

export const massageTypes: MassageType[] = [...massageTypesA, ...massageTypesB];

export function getMassageType(slug: string) {
  return massageTypes.find((m) => m.slug === slug);
}

export function getMassageTypesByCategory(category: MassageCategory) {
  return massageTypes.filter((m) => m.category === category);
}

export { IMG } from "./massage-images";
