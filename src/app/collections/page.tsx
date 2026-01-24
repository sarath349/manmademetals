import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export const metadata = {
  title: "Collections | Man Made Metals",
  description: "Browse our collections of premium metal products by category.",
};

export default function CollectionsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#111] border-b border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">
            Browse By
          </p>
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display',serif] uppercase tracking-wider">
            Collections
          </h1>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
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
                  <h2 className="text-2xl md:text-3xl font-['Playfair_Display',serif] uppercase tracking-wider mb-2">
                    {category.name}
                  </h2>
                  <p className="text-[#888] text-sm mb-4">
                    {category.count} Products
                  </p>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                    Shop Now
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
            alt="Featured Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
            Limited Edition
          </p>
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif] uppercase tracking-wider mb-6">
            Heritage Collection
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Discover our exclusive Heritage Collection featuring timeless designs
            inspired by classic architectural hardware from around the world.
          </p>
          <Link href="/products" className="btn btn-primary">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

