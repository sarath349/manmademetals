export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  categorySlug: string;
  material: string;
  inStock: boolean;
  featured: boolean;
  new: boolean;
  bestseller: boolean;
  specifications: {
    material: string;
    finish: string;
    dimensions?: string;
    weight?: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Serpent Silver Ring",
    slug: "serpent-silver-ring",
    price: 3499,
    originalPrice: 4299,
    description: "Embrace the mystique with our Serpent Silver Ring, meticulously handcrafted from 925 sterling silver. This stunning piece features an intricately detailed snake design that wraps elegantly around your finger, symbolizing transformation and eternal renewal. The oxidized finish highlights every scale and detail, making this ring a true statement piece for those who dare to stand out.",
    shortDescription: "925 Sterling Silver snake design ring with oxidized finish",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800",
    ],
    category: "Rings",
    categorySlug: "rings",
    material: "Sterling Silver",
    inStock: true,
    featured: true,
    new: false,
    bestseller: true,
    specifications: {
      material: "925 Sterling Silver",
      finish: "Oxidized",
      dimensions: "Available in sizes 6-13",
      weight: "12g",
    },
  },
  {
    id: 2,
    name: "Cuban Link Chain",
    slug: "cuban-link-chain",
    price: 5999,
    description: "Our signature Cuban Link Chain is the epitome of bold, masculine elegance. Crafted from premium stainless steel with 18K gold plating, this chain features perfectly interlocking links that lay flat against the chest for maximum impact. Built to last, this piece transitions seamlessly from day to night.",
    shortDescription: "18K Gold plated stainless steel Cuban link chain",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    ],
    category: "Chains",
    categorySlug: "chains",
    material: "Stainless Steel",
    inStock: true,
    featured: true,
    new: true,
    bestseller: true,
    specifications: {
      material: "316L Stainless Steel",
      finish: "18K Gold Plated",
      dimensions: "20 inches / 8mm width",
      weight: "85g",
    },
  },
  {
    id: 3,
    name: "Skull King Ring",
    slug: "skull-king-ring",
    price: 2999,
    originalPrice: 3799,
    description: "Rule your realm with the Skull King Ring. This bold statement piece features a highly detailed skull design crowned with intricate engravings, crafted from solid 925 sterling silver. The heavy weight and substantial feel make this ring perfect for those who command attention.",
    shortDescription: "Heavy sterling silver skull ring with crown detail",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    ],
    category: "Rings",
    categorySlug: "rings",
    material: "Sterling Silver",
    inStock: true,
    featured: true,
    new: false,
    bestseller: true,
    specifications: {
      material: "925 Sterling Silver",
      finish: "Antique Silver",
      dimensions: "Available in sizes 7-14",
      weight: "28g",
    },
  },
  {
    id: 4,
    name: "Thor's Hammer Pendant",
    slug: "thors-hammer-pendant",
    price: 2499,
    description: "Channel the power of the Norse gods with our Thor's Hammer Pendant. This Mjolnir-inspired piece is crafted from solid stainless steel, featuring authentic Viking-era engravings and symbols. Comes with a matching 24-inch rope chain. A perfect blend of mythology and modern style.",
    shortDescription: "Stainless steel Mjolnir pendant with Viking engravings",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
    ],
    category: "Pendants",
    categorySlug: "pendants",
    material: "Stainless Steel",
    inStock: true,
    featured: true,
    new: true,
    bestseller: false,
    specifications: {
      material: "316L Stainless Steel",
      finish: "Brushed Silver",
      dimensions: "45mm x 30mm pendant",
      weight: "35g",
    },
  },
  {
    id: 5,
    name: "Rope Bracelet",
    slug: "rope-bracelet",
    price: 1899,
    description: "Our Rope Bracelet combines nautical inspiration with urban edge. Made from twisted stainless steel wire with a secure magnetic clasp, this bracelet adds texture and interest to any wrist stack. Hypoallergenic and waterproof - wear it everywhere.",
    shortDescription: "Twisted stainless steel rope bracelet with magnetic clasp",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    ],
    category: "Bracelets",
    categorySlug: "bracelets",
    material: "Stainless Steel",
    inStock: true,
    featured: false,
    new: false,
    bestseller: true,
    specifications: {
      material: "316L Stainless Steel",
      finish: "Polished Silver",
      dimensions: "8.5 inches adjustable",
      weight: "45g",
    },
  },
  {
    id: 6,
    name: "Onyx Signet Ring",
    slug: "onyx-signet-ring",
    price: 4299,
    description: "Make your mark with our Onyx Signet Ring. This classic gentleman's ring features a genuine black onyx stone set in a substantial 925 sterling silver band. The timeless design pays homage to traditional signet rings while maintaining a contemporary edge.",
    shortDescription: "Sterling silver signet ring with genuine black onyx",
    images: [
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800",
    ],
    category: "Rings",
    categorySlug: "rings",
    material: "Sterling Silver",
    inStock: true,
    featured: true,
    new: false,
    bestseller: false,
    specifications: {
      material: "925 Sterling Silver with Black Onyx",
      finish: "High Polish",
      dimensions: "Available in sizes 8-13",
      weight: "18g",
    },
  },
  {
    id: 7,
    name: "Figaro Chain",
    slug: "figaro-chain",
    price: 3999,
    originalPrice: 4999,
    description: "The Figaro Chain is a timeless classic reimagined for the modern man. This Italian-inspired design features alternating link patterns in premium stainless steel. Lightweight yet durable, it's the perfect everyday chain that elevates any look.",
    shortDescription: "Classic Figaro pattern chain in stainless steel",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    ],
    category: "Chains",
    categorySlug: "chains",
    material: "Stainless Steel",
    inStock: true,
    featured: false,
    new: true,
    bestseller: false,
    specifications: {
      material: "316L Stainless Steel",
      finish: "Silver",
      dimensions: "22 inches / 5mm width",
      weight: "42g",
    },
  },
  {
    id: 8,
    name: "Cross Pendant",
    slug: "cross-pendant",
    price: 1999,
    description: "Our Cross Pendant combines faith with fashion in a bold, modern design. Crafted from solid stainless steel with subtle textured details, this piece makes a statement while honoring tradition. Includes a 24-inch box chain.",
    shortDescription: "Textured stainless steel cross pendant with chain",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
    ],
    category: "Pendants",
    categorySlug: "pendants",
    material: "Stainless Steel",
    inStock: true,
    featured: false,
    new: false,
    bestseller: true,
    specifications: {
      material: "316L Stainless Steel",
      finish: "Brushed & Polished",
      dimensions: "50mm x 30mm pendant",
      weight: "25g",
    },
  },
  {
    id: 9,
    name: "Leather Wrap Bracelet",
    slug: "leather-wrap-bracelet",
    price: 1499,
    description: "Our Leather Wrap Bracelet combines rugged genuine leather with sleek stainless steel accents. The multi-strand design wraps twice around the wrist, secured with a sturdy magnetic clasp. Perfect for adding texture to your wrist stack.",
    shortDescription: "Genuine leather multi-wrap bracelet with steel accents",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    ],
    category: "Bracelets",
    categorySlug: "bracelets",
    material: "Leather & Steel",
    inStock: true,
    featured: false,
    new: true,
    bestseller: false,
    specifications: {
      material: "Genuine Leather & Stainless Steel",
      finish: "Brown Leather / Silver Steel",
      dimensions: "Adjustable 7-8.5 inches",
      weight: "28g",
    },
  },
  {
    id: 10,
    name: "Anchor Pendant",
    slug: "anchor-pendant",
    price: 2299,
    description: "Stay grounded with our Anchor Pendant. This nautical-inspired piece is crafted from solid sterling silver, featuring intricate rope detailing wrapped around a substantial anchor design. A symbol of stability and strength.",
    shortDescription: "Sterling silver anchor pendant with rope detail",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
    ],
    category: "Pendants",
    categorySlug: "pendants",
    material: "Sterling Silver",
    inStock: true,
    featured: true,
    new: false,
    bestseller: false,
    specifications: {
      material: "925 Sterling Silver",
      finish: "Oxidized",
      dimensions: "40mm x 25mm pendant",
      weight: "15g",
    },
  },
  {
    id: 11,
    name: "Hoop Earrings",
    slug: "hoop-earrings",
    price: 1299,
    description: "Classic meets contemporary in our Hoop Earrings. These medium-sized hoops are crafted from hypoallergenic stainless steel, featuring a sleek polished finish. Lightweight and comfortable for all-day wear. Sold as a pair.",
    shortDescription: "Polished stainless steel hoop earrings - pair",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800",
    ],
    category: "Earrings",
    categorySlug: "earrings",
    material: "Stainless Steel",
    inStock: true,
    featured: false,
    new: false,
    bestseller: true,
    specifications: {
      material: "316L Stainless Steel",
      finish: "High Polish",
      dimensions: "25mm diameter",
      weight: "8g per pair",
    },
  },
  {
    id: 12,
    name: "Viking Rune Ring",
    slug: "viking-rune-ring",
    price: 2799,
    description: "Carry ancient wisdom with our Viking Rune Ring. This substantial band features authentic Elder Futhark runes engraved around the entire circumference, symbolizing protection and guidance. Crafted from solid sterling silver with an antique finish.",
    shortDescription: "Sterling silver band with Elder Futhark rune engravings",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    ],
    category: "Rings",
    categorySlug: "rings",
    material: "Sterling Silver",
    inStock: true,
    featured: false,
    new: true,
    bestseller: false,
    specifications: {
      material: "925 Sterling Silver",
      finish: "Antique Oxidized",
      dimensions: "8mm band width, sizes 7-14",
      weight: "14g",
    },
  },
];

export const categories = [
  {
    name: "Rings",
    slug: "rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
    description: "Bold statement rings crafted from premium metals",
    count: 15,
  },
  {
    name: "Chains",
    slug: "chains",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
    description: "From Cuban links to rope chains - find your signature",
    count: 12,
  },
  {
    name: "Pendants",
    slug: "pendants",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",
    description: "Meaningful symbols and bold designs to wear close",
    count: 18,
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
    description: "Stack them up or wear them solo",
    count: 10,
  },
  {
    name: "Earrings",
    slug: "earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
    description: "Studs, hoops, and drops for every style",
    count: 8,
  },
  {
    name: "New Arrivals",
    slug: "new-arrivals",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
    description: "Fresh drops and latest designs",
    count: 6,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "new-arrivals") {
    return products.filter((p) => p.new);
  }
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.new);
}
