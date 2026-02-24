"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, ArrowLeftRight, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * ═══════════════════════════════════════════════════════════
 * TABBED PRODUCTS — Gaion-style featured products section
 * with interactive category tabs that filter the product grid.
 *
 * TODO: Replace PLACEHOLDER_PRODUCTS with data from your
 * /api/products endpoint, grouped by category.
 * ═══════════════════════════════════════════════════════════
 */

interface TabbedProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    category: string;
    link: string;
    badge?: string;
}

const TABS = [
    "All",
    "Head Protection",
    "Hand Protection",
    "Fall Protection",
    "Fire Safety",
    "Respiratory",
];

const PLACEHOLDER_PRODUCTS: TabbedProduct[] = [
    { id: "t1", name: "Industrial Hard Hat - Class E", image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg", price: "₹1,299", category: "Head Protection", link: "/category/ppe", badge: "New" },
    { id: "t2", name: "Cut-Resistant Gloves Level 5", image: "/assets/hero-background/Fall Protection Equipment.jpg", price: "₹899", category: "Hand Protection", link: "/category/ppe" },
    { id: "t3", name: "Full Body Safety Harness", image: "/assets/hero-background/Fall Protection Equipment.jpg", price: "₹3,499", category: "Fall Protection", link: "/category/fall-protection", badge: "Hot" },
    { id: "t4", name: "Fire Extinguisher ABC 4kg", image: "/assets/hero-background/Fire & Chemical Safety Equipment.jpg", price: "₹1,999", category: "Fire Safety", link: "/category/fire-safety" },
    { id: "t5", name: "N95 Particulate Respirator", image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg", price: "₹499", category: "Respiratory", link: "/category/ppe" },
    { id: "t6", name: "Welding Face Shield", image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg", price: "₹2,199", category: "Head Protection", link: "/category/ppe" },
    { id: "t7", name: "Chemical Resistant Gloves", image: "/assets/hero-background/Fire & Chemical Safety Equipment.jpg", price: "₹749", category: "Hand Protection", link: "/category/ppe", badge: "Sale" },
    { id: "t8", name: "Retractable Fall Limiter 6ft", image: "/assets/hero-background/Fall Protection Equipment.jpg", price: "₹5,999", category: "Fall Protection", link: "/category/fall-protection" },
];

export function TabbedProducts() {
    const [activeTab, setActiveTab] = useState("All");
    const [animating, setAnimating] = useState(false);

    const filteredProducts =
        activeTab === "All"
            ? PLACEHOLDER_PRODUCTS
            : PLACEHOLDER_PRODUCTS.filter((p) => p.category === activeTab);

    const handleTabChange = (tab: string) => {
        setAnimating(true);
        setActiveTab(tab);
        setTimeout(() => setAnimating(false), 300);
    };

    return (
        <section className="bg-safety-light-gray py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
                        <span className="text-safety-neon-orange text-sm font-bold uppercase tracking-[0.2em]">
                            Our Products
                        </span>
                        <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-safety-charcoal uppercase tracking-tight">
                        Featured Products
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={cn(
                                "px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-300",
                                activeTab === tab
                                    ? "bg-safety-neon-orange text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:text-safety-neon-orange hover:shadow-md border border-gray-200"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div
                    className={cn(
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300",
                        animating ? "opacity-0" : "opacity-100"
                    )}
                >
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-safety-neon-orange"
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className={cn(
                                    "absolute top-3 left-3 z-10 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase",
                                    product.badge === "Sale" ? "bg-red-500" : product.badge === "Hot" ? "bg-safety-neon-orange" : "bg-safety-charcoal"
                                )}>
                                    {product.badge}
                                </div>
                            )}

                            {/* Wishlist */}
                            <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-safety-neon-orange hover:text-white transition-colors text-gray-400">
                                <Heart className="h-4 w-4" />
                            </button>

                            {/* Product Image */}
                            <Link
                                href={product.link}
                                className="block relative aspect-square bg-safety-light-gray overflow-hidden"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Hover Actions */}
                                <div className="gaion-product-overlay absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    <button
                                        className="w-10 h-10 bg-safety-neon-orange hover:bg-safety-charcoal text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                                        title="Add to Cart"
                                    >
                                        <ShoppingCart className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="w-10 h-10 bg-white hover:bg-safety-neon-orange text-safety-charcoal hover:text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                                        title="Quick View"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </button>
                                    <button
                                        className="w-10 h-10 bg-white hover:bg-safety-neon-orange text-safety-charcoal hover:text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
                                        title="Compare"
                                    >
                                        <ArrowLeftRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </Link>

                            {/* Product Info */}
                            <div className="p-4">
                                <p className="text-xs text-safety-neon-orange font-semibold uppercase tracking-wider mb-1">
                                    {product.category}
                                </p>
                                <Link href={product.link}>
                                    <h3 className="font-bold text-sm text-safety-charcoal hover:text-safety-neon-orange transition-colors line-clamp-2 mb-3">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-between">
                                    <span className="text-safety-neon-orange font-black text-lg">
                                        {product.price}
                                    </span>
                                    <button className="text-xs font-bold text-gray-500 hover:text-safety-neon-orange uppercase tracking-wider transition-colors">
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Link
                        href="/category/ppe"
                        className="inline-flex items-center gap-2 bg-safety-neon-orange hover:bg-safety-charcoal text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-xl"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
