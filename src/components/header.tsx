"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Phone, Menu, ShoppingCart, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98765 43210";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@safetypro.com";

export function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-safety-blue text-white py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-safety-yellow transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>{EMAIL}</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>Serving Industries Nationwide</span>
              </span>
            </div>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-safety-yellow transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-safety-yellow transition-colors">Contact</Link>
              <Link href="/bulk-quote" className="hover:text-safety-yellow transition-colors">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20" 
            : "bg-white/95 backdrop-blur-sm border-b border-gray-200/50"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <div className="flex items-center">
                <span className="font-bold text-2xl text-safety-blue group-hover:scale-105 transition-transform">SAFETY</span>
                <span className="font-bold text-2xl text-safety-yellow group-hover:scale-105 transition-transform">PRO</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                Home
              </Link>
              <Link href="/category/ppe" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                Categories
              </Link>
              <Link href="/brands" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                Brands
              </Link>
              <Link href="/industries" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                Industries
              </Link>
              <Link href="/about" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-safety-blue hover:bg-safety-blue/5 rounded-lg transition-all">
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 w-full rounded-full border-gray-300 bg-white/50 backdrop-blur-sm focus:bg-white transition-all"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-safety-blue transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#20bd5a] transition-all hover:shadow-lg"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-10"
                  />
                </div>
              </form>
              
              <nav className="flex flex-col space-y-1">
                <Link href="/" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/category/ppe" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Categories
                </Link>
                <Link href="/brands" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Brands
                </Link>
                <Link href="/industries" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Industries
                </Link>
                <Link href="/about" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-safety-blue/5 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </nav>

              <div className="pt-3 border-t space-y-2">
                <a
                  href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-sm text-gray-700 px-4 py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: {PHONE_NUMBER}</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
