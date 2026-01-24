import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getBestsellers, categories } from "@/data/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const bestsellers = getBestsellers();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920"
            alt="Premium Jewelry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Handcrafted Jewelry
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif] uppercase tracking-wider mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Bold.
            <span className="text-[#d4af37]"> Timeless.</span>
            <br />
            Unforgettable.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Discover our collection of premium handcrafted jewelry. Sterling silver,
            stainless steel, and precious stones - designed for those who dare to stand out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link href="/products" className="btn btn-primary">
              Shop Collection
            </Link>
            <Link href="/about" className="btn">
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#111] py-16 border-y border-[#2a2a2a]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: "✦", title: "925 Sterling Silver", text: "Premium quality metals" },
              { icon: "🚚", title: "Free Shipping", text: "Orders above ₹999" },
              { icon: "↩️", title: "Easy Returns", text: "7-day returns" },
              { icon: "💎", title: "Lifetime Warranty", text: "Quality guaranteed" },
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{badge.icon}</div>
                <h4 className="text-sm font-semibold tracking-wider uppercase mb-2">
                  {badge.title}
                </h4>
                <p className="text-[#888] text-xs">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="pt-32 pb-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-5">
          <h2 className="section-title mb-16">Featured Pieces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-20">
            <Link href="/products" className="btn">
              View All Jewelry
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pt-32 pb-24 bg-[#111]">
        <div className="container mx-auto px-5">
          <h2 className="section-title mb-16">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-xl md:text-2xl font-['Playfair_Display',serif] uppercase tracking-wider mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[#888] text-sm">{category.count} Products</p>
                  <span className="mt-4 text-xs tracking-[0.2em] uppercase text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920"
            alt="Craftsmanship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif] max-w-3xl mx-auto mb-6">
            Jewelry That Tells Your Story
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Every piece we create is more than just jewelry - it's a statement of
            who you are. Our artisans pour their expertise into each design,
            combining traditional metalworking techniques with bold, contemporary
            aesthetics.
          </p>
          <Link href="/about" className="btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="pt-32 pb-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-5">
          <h2 className="section-title mb-16">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 pb-32 bg-[#111] border-t border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
            @man.made.metals
          </p>
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display',serif] mb-4">
            Follow Our Journey
          </h2>
          <p className="text-[#888] mb-10 max-w-md mx-auto">
            Join our community for exclusive drops, styling inspiration, and behind-the-scenes content.
          </p>
          <a
            href="https://www.instagram.com/man.made.metals"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow on Instagram
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 pt-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display',serif] mb-4">
            Join the Club
          </h2>
          <p className="text-[#888] mb-10 max-w-md mx-auto">
            Subscribe for early access to new drops, exclusive offers, and 10% off your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-[#2a2a2a] px-5 py-3 text-white placeholder-[#666] focus:border-[#d4af37] focus:outline-none"
              required
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
