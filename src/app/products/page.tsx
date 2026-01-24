import React from "react";
import ProductCard from "@/components/ProductCard";
import { products as sampleProducts, categories } from "@/data/products";
import { getAllProducts } from "@/lib/shopify";
import Link from "next/link";

export const metadata = {
  title: "Shop All Products | Man Made Metals",
  description: "Browse our complete collection of premium jewelry including rings, chains, pendants, bracelets and more.",
};

// Transform Shopify product to our format
function transformShopifyProduct(shopifyProduct: any) {
  return {
    id: parseInt(shopifyProduct.id.replace(/\D/g, "").slice(-8)) || Math.random() * 10000,
    name: shopifyProduct.title,
    slug: shopifyProduct.handle,
    price: parseFloat(shopifyProduct.priceRange.minVariantPrice.amount),
    originalPrice: parseFloat(shopifyProduct.compareAtPriceRange?.minVariantPrice?.amount) || undefined,
    description: shopifyProduct.description,
    shortDescription: shopifyProduct.description?.slice(0, 100) + "...",
    images: shopifyProduct.images.edges.map((e: any) => e.node.url),
    category: shopifyProduct.productType || "Jewelry",
    categorySlug: shopifyProduct.productType?.toLowerCase().replace(/ /g, "-") || "jewelry",
    material: shopifyProduct.productType || "Metal",
    inStock: shopifyProduct.availableForSale,
    featured: shopifyProduct.tags?.includes("featured") || false,
    new: shopifyProduct.tags?.includes("new") || false,
    bestseller: shopifyProduct.tags?.includes("bestseller") || false,
    specifications: {
      material: shopifyProduct.productType || "Premium Metal",
      finish: "Polished",
    },
  };
}

export default async function ProductsPage() {
  let products = sampleProducts; // Default to sample data
  let usingShopify = false;

  // Try to fetch from Shopify
  try {
    const shopifyProducts = await getAllProducts(50);
    if (shopifyProducts && shopifyProducts.length > 0) {
      products = shopifyProducts.map(transformShopifyProduct);
      usingShopify = true;
    }
  } catch (error) {
    console.log("Using sample products - Shopify fetch failed or no products");
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-[#111] border-b border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">
            Collection
          </p>
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display',serif] uppercase tracking-wider">
            All Products
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-5 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/products"
                      className="text-[#d4af37] text-sm hover:text-[#d4af37] transition-colors"
                    >
                      All Products
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/collections/${category.slug}`}
                        className="text-[#888] text-sm hover:text-[#d4af37] transition-colors"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {["Sterling Silver", "Stainless Steel", "Gold Plated", "Leather"].map((material) => (
                    <li key={material}>
                      <button className="text-[#888] text-sm hover:text-[#d4af37] transition-colors">
                        {material}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2a2a2a]">
              <p className="text-[#888] text-sm">
                Showing {products.length} products {usingShopify && "(from Shopify)"}
              </p>
              <select className="bg-transparent border border-[#2a2a2a] px-4 py-2 text-sm text-white focus:border-[#d4af37] focus:outline-none">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#888] text-lg mb-4">No products found</p>
                <p className="text-[#666] text-sm">Add products in Shopify Admin to see them here</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
