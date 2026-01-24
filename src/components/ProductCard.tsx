"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <Link href={`/products/${product.slug}`} className="group product-card block">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#111] overflow-hidden mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover product-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.new && (
            <span className="bg-[#d4af37] text-black text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              New
            </span>
          )}
          {product.bestseller && (
            <span className="bg-white text-black text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-[#d4af37] text-black py-3 text-xs font-semibold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
        >
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-[#888] text-xs tracking-wider uppercase mb-1">
          {product.material}
        </p>
        <h3 className="text-sm font-medium tracking-wide uppercase mb-2 group-hover:text-[#d4af37] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          {product.originalPrice && (
            <span className="text-[#666] text-sm line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
          <span className={`text-sm ${product.originalPrice ? "text-[#d4af37]" : "text-[#888]"}`}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </Link>
  );
}

