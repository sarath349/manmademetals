import React from "react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#111] border-b border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <nav className="text-sm text-[#888] mb-4">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-[#d4af37] transition-colors">
              Collections
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display',serif] uppercase tracking-wider">
            {category.name}
          </h1>
          <p className="text-[#888] mt-2">{products.length} Products</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#888] text-lg mb-6">
                No products found in this collection.
              </p>
              <Link href="/products" className="btn">
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Collections */}
      <section className="py-16 bg-[#111] border-t border-[#2a2a2a]">
        <div className="container mx-auto px-5">
          <h2 className="section-title">Other Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {categories
              .filter((c) => c.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}`}
                  className="text-center p-4 border border-[#2a2a2a] hover:border-[#d4af37] transition-colors group"
                >
                  <h3 className="text-sm font-medium tracking-wider uppercase group-hover:text-[#d4af37] transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

