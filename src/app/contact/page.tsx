"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <section className="py-16 bg-[#111] border-b border-[#2a2a2a]">
        <div className="container mx-auto px-5 text-center">
          <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display',serif] uppercase tracking-wider">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-['Playfair_Display',serif] mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-[#888] leading-relaxed mb-10">
                Have questions about our products? Need help with an order? Or
                just want to say hello? Reach out to us through any of the
                channels below, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25d366]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#25d366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/919074444745"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888] hover:text-[#25d366] transition-colors"
                    >
                      +91 9074444745
                    </a>
                    <p className="text-[#666] text-sm mt-1">
                      Quick responses during business hours
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#d4af37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:manmademetals1@gmail.com"
                      className="text-[#888] hover:text-[#d4af37] transition-colors"
                    >
                      manmademetals1@gmail.com
                    </a>
                    <p className="text-[#666] text-sm mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E4405F]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#E4405F]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/man.made.metals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888] hover:text-[#E4405F] transition-colors"
                    >
                      @man.made.metals
                    </a>
                    <p className="text-[#666] text-sm mt-1">
                      Follow us for latest updates
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[#888]">Monday - Saturday</p>
                    <p className="text-[#888]">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#111] border border-[#2a2a2a] p-8 md:p-10">
              <h3 className="text-xl font-['Playfair_Display',serif] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#888] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#888] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#888] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-[#888] mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#111]">Select a subject</option>
                      <option value="general" className="bg-[#111]">General Inquiry</option>
                      <option value="order" className="bg-[#111]">Order Status</option>
                      <option value="product" className="bg-[#111]">Product Question</option>
                      <option value="return" className="bg-[#111]">Returns & Exchanges</option>
                      <option value="bulk" className="bg-[#111]">Bulk Order</option>
                      <option value="other" className="bg-[#111]">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-[#888] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border border-[#2a2a2a] px-4 py-3 text-white focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

