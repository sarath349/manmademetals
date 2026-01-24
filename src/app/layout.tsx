import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Man Made Metals | Premium Handcrafted Jewelry",
  description: "Discover bold, premium handcrafted jewelry. Sterling silver rings, chains, pendants, bracelets and more. Free shipping on orders above ₹999.",
  keywords: "jewelry, rings, chains, pendants, bracelets, sterling silver, stainless steel, mens jewelry, India",
  openGraph: {
    title: "Man Made Metals | Premium Metal Products",
    description: "Discover premium quality handcrafted metal products.",
    url: "https://manmademetals.in",
    siteName: "Man Made Metals",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
