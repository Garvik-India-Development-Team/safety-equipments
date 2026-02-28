"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Phone,
  Menu,
  ShoppingCart,
  Heart,
  User,
  Mail,
  Clock,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/quote-store";
import { useSession, signIn, signOut } from "next-auth/react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 9811048483";
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "safetyexpertssales@gmail.com";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

const SEARCH_CATEGORIES = [
  "All Categories",
  "Head Protection",
  "Hand Protection",
  "Fall Protection",
  "Fire Safety",
  "Respiratory",
  "Eye Protection",
  "Foot Protection",
];

export function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All Categories");
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      {/* ═══════════════ TIER 1: DARK TOP BAR ═══════════════ */}
      <div className="bg-safety-charcoal text-gray-400 py-2 text-xs hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-safety-neon-orange" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </span>
              <span className="text-white/40">|</span>
              <span className="text-gray-300">Welcome to Safety Experts!</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-1.5 hover:text-safety-neon-orange transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{EMAIL}</span>
              </a>
              <span className="text-white/40">|</span>
              <a
                href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                className="flex items-center gap-1.5 hover:text-safety-neon-orange transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ TIER 2: MAIN HEADER ═══════════════ */}
      <div
        className={cn(
          "bg-white py-4 transition-all duration-300 z-50",
          scrolled && "sticky top-0 shadow-lg"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/assets/logo.jpeg"
                alt="Safety Experts Industrial Safety Equipment Supplier Delhi"
                className="h-16 w-auto"
              />
            </Link>

            {/* Search Bar with Category Dropdown */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative flex w-full">
                {/* Category Dropdown Button */}
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center gap-2 h-12 px-4 bg-gray-100 border-2 border-r-0 border-gray-300 rounded-l-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap"
                    onClick={() => setShowCatDropdown((v) => !v)}
                    onBlur={() => setTimeout(() => setShowCatDropdown(false), 200)}
                  >
                    {searchCategory}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {showCatDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px]">
                      {SEARCH_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className={cn(
                            "block w-full text-left px-4 py-2.5 text-sm hover:bg-safety-neon-orange/10 hover:text-safety-neon-orange transition-colors",
                            searchCategory === cat && "text-safety-neon-orange font-semibold bg-safety-neon-orange/5"
                          )}
                          onClick={() => {
                            setSearchCategory(cat);
                            setShowCatDropdown(false);
                          }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {/* Search Input */}
                <Input
                  type="search"
                  placeholder="Search for safety equipment..."
                  className="h-12 flex-1 rounded-none rounded-r-none border-2 border-gray-300 focus:border-safety-neon-orange text-sm px-4"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center justify-center h-12 w-14 bg-safety-neon-orange hover:bg-safety-neon-orange/90 text-white rounded-r-lg transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>

            {/* Right Icons: Cart, Wishlist, Account */}
            <div className="hidden md:flex items-center gap-5">
              {/* Wishlist -> Acts as an alternative entry to Cart for now */}
              <button
                type="button"
                onClick={() => useCartStore.getState().open()}
                className="flex flex-col items-center gap-0.5 group bg-transparent border-none cursor-pointer"
                title="Wishlist"
              >
                <div className="relative">
                  <Heart className="h-6 w-6 text-safety-charcoal group-hover:text-safety-neon-orange transition-colors" />
                </div>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  Wishlist
                </span>
              </button>

              {/* Cart */}
              <button
                type="button"
                onClick={() => useCartStore.getState().open()}
                className="flex flex-col items-center gap-0.5 group bg-transparent border-none cursor-pointer"
                title="Request Cart"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-safety-charcoal group-hover:text-safety-neon-orange transition-colors" />
                  {/* Read dynamically from the initialized store */}
                  <span className="absolute -top-2 -right-2 bg-safety-neon-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {(() => {
                      const items = useCartStore((s) => s.items);
                      return items.length;
                    })()}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                  Cart
                </span>
              </button>

              {/* Account / Login */}
              {status === "loading" ? (
                <div className="flex flex-col items-center gap-0.5 w-12 opacity-50">
                  <User className="h-6 w-6 text-safety-charcoal" />
                  <span className="text-[10px] text-gray-500 font-medium">...</span>
                </div>
              ) : session ? (
                <div className="relative group cursor-pointer">
                  <div className="flex flex-col items-center gap-0.5" title={session.user?.name || "Account"}>
                    {session.user?.image ? (
                      <img src={session.user.image} alt="User Profile" className="h-6 w-6 rounded-full border border-gray-300" />
                    ) : (
                      <User className="h-6 w-6 text-safety-charcoal group-hover:text-safety-neon-orange transition-colors" />
                    )}
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide truncate max-w-[50px]">
                      {session.user?.name?.split(' ')[0] || "Account"}
                    </span>
                  </div>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[150px] overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800 truncate">{session.user?.name}</p>
                      <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => signIn("google")}
                  className="flex flex-col items-center gap-0.5 group bg-transparent border-none cursor-pointer"
                  title="Sign In"
                >
                  <User className="h-6 w-6 text-safety-charcoal group-hover:text-safety-neon-orange transition-colors" />
                  <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                    Sign In
                  </span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* ═══════════════ TIER 3: NAVIGATION BAR ═══════════════ */}
      <nav
        className={cn(
          "bg-safety-neon-orange text-white hidden md:block transition-all duration-300 z-40",
          scrolled && "sticky top-[80px] shadow-md"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-5 py-5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/20 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            {/* Phone CTA on the right of nav */}
            <a
              href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-safety-hivis-yellow transition-colors py-5"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════ MOBILE MENU ═══════════════ */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 bg-safety-charcoal">
              <img
                src="/assets/logo.jpeg"
                alt="Safety Experts Industrial Safety Equipment Supplier Delhi"
                className="h-10 w-auto bg-white p-1 rounded"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 h-10"
                />
              </div>
            </form>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3.5 text-sm font-bold text-gray-800 hover:bg-safety-neon-orange/10 hover:text-safety-neon-orange border-b border-gray-100 transition-colors uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="p-4 space-y-3 border-t">
              <a
                href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm text-gray-700 px-2 py-2"
              >
                <Phone className="h-5 w-5 text-safety-neon-orange" />
                <span className="font-medium">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-gray-700 px-2 py-2"
              >
                <Mail className="h-5 w-5 text-safety-neon-orange" />
                <span className="font-medium">{EMAIL}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white text-center mt-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
