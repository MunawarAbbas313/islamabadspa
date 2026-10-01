import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { ArrowRight, Calendar, Tag, Clock, BookOpen, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Massage & Spa Wellness Blog Islamabad",
  description:
    "Wellness articles from the best massage center in Islamabad: massage benefits, Swedish vs deep tissue, stress relief and self-care tips.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Belvie Spa and Massage Center Wellness Journal",
    description: "Expert articles on massage therapy, stress reduction, and holistic wellness.",
    url: "https://belviespa.com/blog",
  };

  return (
    <div className="min-h-screen py-12 md:py-20 bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Wellness Journal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-tight">
            Massage & Health Articles
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Written by our certified wellness specialists at Belvie Spa and Massage Center. Practical insights into bodywork, stress relief, and restorative living in the Islamabad.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-md flex flex-col lg:flex-row group">
              <div className="lg:w-1/2 min-h-[320px] relative overflow-hidden bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=75"
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  Featured Article
                </div>
              </div>

              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-semibold text-primary">
                    <Tag className="h-3.5 w-3.5" /> {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                  </span>
                  {featuredPost.readingTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featuredPost.readingTime}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:underline underline-offset-4"
                  >
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, i) => (
            <article
              key={i}
              className="bg-card rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col h-full border border-border hover:border-primary/50 group"
            >
              <div className="flex justify-between items-center mb-4 text-xs">
                <span className="font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-3 font-playfair group-hover:text-primary transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-xs">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-primary hover:underline flex items-center gap-1"
                >
                  Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {post.readingTime && (
                  <span className="text-muted-foreground">{post.readingTime}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <CTASection
        title="Ready to Put Wellness Into Practice?"
        subtitle="Schedule your session at Belvie Spa and Massage Center in Maqbool Market, F-7/4, Islamabad today. Call 0318 3526306."
      />
      <SEOKeywords />
    </div>
  );
}
