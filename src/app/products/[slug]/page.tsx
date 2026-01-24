"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-['Playfair_Display',serif] mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="btn">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      });
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-[#2a2a2a]">
        <div className="container mx-auto px-5 py-4">
          <nav className="text-sm text-[#888]">
            <Link href="/" className="hover:text-[#d4af37] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#d4af37] transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="aspect-square bg-[#111] overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 bg-[#111] overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? "border-[#d4af37]"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.new && (
                  <span className="bg-[#d4af37] text-black text-xs font-bold tracking-wider uppercase px-3 py-1">
                    New
                  </span>
                )}
                {product.bestseller && (
                  <span className="bg-white text-black text-xs font-bold tracking-wider uppercase px-3 py-1">
                    Bestseller
                  </span>
                )}
              </div>

              <p className="text-[#888] text-sm tracking-[0.2em] uppercase mb-2">
                {product.material}
              </p>
              <h1 className="text-3xl md:text-4xl font-['Playfair_Display',serif] mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-[#666] text-xl line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-2xl font-medium">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-[#888] leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-[#2a2a2a]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-1"
                >
                  Add to Cart
                </button>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#111] border border-[#2a2a2a] p-6 mb-8">
                <div className="space-y-3 text-sm">
                  {[
                    "✓ 100% Genuine Product",
                    "✓ Free Shipping Above ₹999",
                    "✓ 7-Day Easy Returns",
                    "✓ Secure Payment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-[#d4af37]">{item.split(" ")[0]}</span>
                      <span className="text-[#888]">{item.slice(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t border-[#2a2a2a] pt-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-[#888] capitalize">{key}: </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-16 pt-16 border-t border-[#2a2a2a]">
            <h3 className="text-xl font-['Playfair_Display',serif] mb-6">
              Product Description
            </h3>
            <p className="text-[#888] leading-relaxed max-w-3xl">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#111] border-t border-[#2a2a2a]">
          <div className="container mx-auto px-5">
            <h2 className="section-title">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

