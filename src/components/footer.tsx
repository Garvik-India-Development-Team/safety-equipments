"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CreditCard,
} from "lucide-react";

/*
 * ═══════════════════════════════════════════════════════════
 * FOOTER — Gaion-style dark footer with newsletter signup,
 * 4-column layout, and payment method icons.
 * ═══════════════════════════════════════════════════════════
 */

const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98765 43210";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@safetypro.com";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Integrate with your newsletter API endpoint
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-safety-charcoal text-white">
      {/* ═══════ NEWSLETTER BAR ═══════ */}
      <div className="bg-safety-dark-bg border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black uppercase tracking-wide mb-1">
                Get news about{" "}
                <span className="text-safety-neon-orange">safety</span>
              </h3>
              <p className="text-sm text-gray-400">
                Get the latest news and offers from SafetyPro.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-5 bg-white/10 border border-white/20 rounded-l-sm text-sm text-white placeholder-gray-500 focus:outline-none newsletter-input transition-all"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-safety-neon-orange hover:bg-safety-neon-orange/90 text-white font-bold text-sm uppercase tracking-wider rounded-r-sm transition-colors flex items-center gap-2"
              >
                {subscribed ? (
                  "Subscribed ✓"
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ═══════ MAIN FOOTER GRID ═══════ */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <span className="font-black text-2xl text-white">
                SAFETY<span className="text-safety-neon-orange">PRO</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Your trusted partner for industrial safety equipment and PPE
              solutions. Quality certified products for maximum protection.
            </p>
            <div className="flex gap-3">
              {/* Social Icons */}
              {[
                {
                  name: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  name: "Twitter",
                  path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
                {
                  name: "Instagram",
                  path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-safety-neon-orange flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: General Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">
              General Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/bulk-quote", label: "Bulk Quotation" },
                { href: "/category/ppe", label: "All Categories" },
                { href: "/brands", label: "Our Brands" },
                { href: "/industries", label: "Industries" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-safety-neon-orange transition-colors flex items-center gap-2"
                  >
                    <span className="text-safety-neon-orange text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">
              Direct Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", label: "Payment" },
                { href: "#", label: "Return Policy" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Sitemap" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-safety-neon-orange transition-colors flex items-center gap-2"
                  >
                    <span className="text-safety-neon-orange text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Information */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">
              Store Information
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-safety-neon-orange flex-shrink-0 mt-0.5" />
                <span>
                  {/* TODO: Replace with your actual address */}
                  Serving Industries Nationwide, India
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-safety-neon-orange transition-colors"
                >
                  <Mail className="h-5 w-5 text-safety-neon-orange flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${WHATSAPP.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-safety-neon-orange transition-colors"
                >
                  <Phone className="h-5 w-5 text-safety-neon-orange flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#25D366] hover:text-[#20bd5a] transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════ BOTTOM BAR ═══════ */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SafetyPro. All rights reserved.
            </p>

            {/* Payment Method Icons (placeholder SVGs) */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 uppercase tracking-wider mr-2">
                Accepted Payments:
              </span>
              {["Visa", "Mastercard", "UPI", "Net Banking"].map((method) => (
                <div
                  key={method}
                  className="flex items-center gap-1 bg-white/10 rounded px-3 py-1.5 text-xs text-gray-400 border border-white/5"
                >
                  <CreditCard className="h-3 w-3" />
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
