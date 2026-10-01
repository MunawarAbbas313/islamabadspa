import Link from "next/link";
import { ArrowRight, Flower2, HandHeart, Leaf, Target } from "lucide-react";
import { MASSAGE_CATEGORIES, getMassageTypesByCategory } from "@/lib/massage-types";

const icons = [Flower2, HandHeart, Leaf, Target];

export function MassageCategories() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div className="space-y-3 max-w-2xl">
            <span className="eyebrow">Massage by Category</span>
            <h2 className="text-3xl md:text-5xl font-light font-playfair">
              20 Massage Types at Our <span className="italic text-primary">F-7 Spa</span>
            </h2>
            <p className="text-muted-foreground">
              Every treatment explained – its history, benefits and what to expect – so you can choose the right massage in Islamabad.
            </p>
          </div>
          <Link
            href="/massage-types"
            className="self-start md:self-auto border border-border bg-white/60 hover:border-primary hover:text-primary rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2 transition-colors"
          >
            Explore all types <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {MASSAGE_CATEGORIES.map((cat, i) => {
            const Icon = icons[i];
            return (
              <div key={cat.name} className="bg-white rounded-[28px] border border-border p-6 flex flex-col gap-4">
                <div className="h-12 w-12 rounded-full bg-accent text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                </div>
                <ul className="space-y-1.5 border-t border-border pt-4 text-sm">
                  {getMassageTypesByCategory(cat.name).map((m) => (
                    <li key={m.slug}>
                      <Link href={`/${m.slug}`} className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {m.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
