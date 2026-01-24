import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Man Made Metals",
  description: "Learn about Man Made Metals - our story, craftsmanship, and commitment to creating bold, premium jewelry.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920"
            alt="Jewelry Craftsmanship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display',serif] uppercase tracking-wider">
            About Us
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
                Born to Stand Out
              </p>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] mb-6">
                Jewelry for the Bold
              </h2>
              <div className="space-y-4 text-[#888] leading-relaxed">
                <p>
                  Man Made Metals was born from a simple belief: jewelry should
                  be more than decoration—it should be a statement of who you are.
                  We create pieces for those who refuse to blend in, who understand
                  that true style comes from authenticity.
                </p>
                <p>
                  Every ring, chain, and pendant in our collection is designed
                  to command attention. We work with premium materials—925 sterling
                  silver, 316L stainless steel, genuine leather, and natural
                  stones—because quality is non-negotiable.
                </p>
                <p>
                  Our designs draw inspiration from mythology, street culture,
                  and timeless masculine aesthetics. From intricate skull rings
                  to bold Cuban link chains, each piece tells a story and becomes
                  part of yours.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-[#111] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800"
                alt="Our Jewelry"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif]">
              Our Promise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "💎",
                title: "Premium Quality",
                description:
                  "We use only the finest materials—925 sterling silver, hypoallergenic stainless steel, and genuine stones. Every piece is built to last a lifetime.",
              },
              {
                icon: "✦",
                title: "Bold Design",
                description:
                  "Our pieces aren't for everyone—and that's the point. We create jewelry for those who want to make a statement, not fade into the background.",
              },
              {
                icon: "🤝",
                title: "Customer First",
                description:
                  "From easy returns to responsive WhatsApp support, we're here to make sure you're completely satisfied with your purchase.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold tracking-wider uppercase mb-3">
                  {value.title}
                </h3>
                <p className="text-[#888] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4">
              Crafted With Care
            </p>
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif]">
              Our Materials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "925 Sterling Silver",
                description: "92.5% pure silver, hallmarked for authenticity",
              },
              {
                name: "316L Stainless Steel",
                description: "Surgical grade, hypoallergenic, and rust-proof",
              },
              {
                name: "18K Gold Plating",
                description: "Thick plating for lasting shine without tarnish",
              },
              {
                name: "Natural Stones",
                description: "Black onyx, turquoise, and genuine gemstones",
              },
            ].map((material, index) => (
              <div
                key={index}
                className="p-6 border border-[#2a2a2a] text-center hover:border-[#d4af37] transition-colors"
              >
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-2">
                  {material.name}
                </h3>
                <p className="text-[#888] text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Customers" },
              { number: "100+", label: "Unique Designs" },
              { number: "4.9★", label: "Average Rating" },
              { number: "24/7", label: "WhatsApp Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#d4af37] mb-2">
                  {stat.number}
                </div>
                <p className="text-[#888] text-sm tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] mb-6">
            Ready to Make a Statement?
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto mb-8">
            Explore our collection of bold, premium jewelry designed for those
            who refuse to blend in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn btn-primary">
              Shop Collection
            </Link>
            <Link href="/contact" className="btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
