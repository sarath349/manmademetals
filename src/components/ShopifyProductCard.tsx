"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShopifyProduct, formatPrice, isOnSale, getDiscountPercentage } from "@/lib/shopify";
import { useCart } from "@/context/CartContext";

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export default function ShopifyProductCard({ product }: ShopifyProductCardProps) {
  const { addToCart } = useCart();
  const firstImage = product.images.edges[0]?.node;
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const compareAtPrice = parseFloat(product.compareAtPriceRange.minVariantPrice.amount);
  const onSale = isOnSale(product);
  const discount = getDiscountPercentage(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: parseInt(product.id.replace(/\D/g, "").slice(-8)),
      name: product.title,
      price: price,
      image: firstImage?.url || "/placeholder.jpg",
      variant: product.variants.edges[0]?.node.id,
    });
  };

  return (
    <Link href={`/products/${product.handle}`} className="group product-card block">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#111] overflow-hidden mb-4">
        {firstImage ? (
          <Image
            src={firstImage.url}
            alt={firstImage.altText || product.title}
            fill
            className="object-cover product-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#333]">
            No Image
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.tags.includes("new") && (
            <span className="bg-[#d4af37] text-black text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              New
            </span>
          )}
          {product.tags.includes("bestseller") && (
            <span className="bg-white text-black text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {onSale && (
            <span className="bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Out of Stock */}
        {!product.availableForSale && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white text-sm tracking-wider uppercase">
              Sold Out
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        {product.availableForSale && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-[#d4af37] text-black py-3 text-xs font-semibold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-[#888] text-xs tracking-wider uppercase mb-1">
          {product.productType || "Metal Product"}
        </p>
        <h3 className="text-sm font-medium tracking-wide uppercase mb-2 group-hover:text-[#d4af37] transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-center gap-2">
          {onSale && (
            <span className="text-[#666] text-sm line-through">
              {formatPrice(compareAtPrice.toString())}
            </span>
          )}
          <span className={`text-sm ${onSale ? "text-[#d4af37]" : "text-[#888]"}`}>
            {formatPrice(price.toString())}
          </span>
        </div>
      </div>
    </Link>
  );
}

