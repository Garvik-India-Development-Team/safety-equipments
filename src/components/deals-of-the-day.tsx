"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, ArrowLeftRight, Heart } from "lucide-react";

/*
 * ═══════════════════════════════════════════════════════════
 * DEALS OF THE DAY — Gaion-style product deals with
 * countdown timer, sale badges, and hover action overlays.
 *
 * TODO: Replace PLACEHOLDER_DEALS with your real product data
 * from your database or API endpoint.
 * ═══════════════════════════════════════════════════════════
 */

interface DealProduct {
    id: string;
    name: string;
    image: string;
    oldPrice: string;
    newPrice: string;
    discount: number;
    link: string;
}

const PLACEHOLDER_DEALS: DealProduct[] = [
    {
        id: "d1",
        name: "3M™ H-700 Series Hard Hat",
        image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg",
        oldPrice: "₹2,499",
        newPrice: "₹1,899",
        discount: 24,
        link: "/category/ppe",
    },
    {
        id: "d2",
        name: "Karam PN-361 Safety Harness",
        image: "/assets/hero-background/Fall Protection Equipment.jpg",
        oldPrice: "₹4,999",
        newPrice: "₹3,749",
        discount: 25,
        link: "/category/fall-protection",
    },
    {
        id: "d3",
        name: "Honeywell P100 Respirator",
        image: "/assets/hero-background/Fire & Chemical Safety Equipment.jpg",
        oldPrice: "₹3,200",
        newPrice: "₹2,399",
        discount: 25,
        link: "/category/fire-safety",
    },
    {
        id: "d4",
        name: "Uvex Pheos Safety Glasses",
        image: "/assets/hero-background/Workplace Safety Signage & Barriers.jpg",
        oldPrice: "₹1,800",
        newPrice: "₹1,299",
        discount: 28,
        link: "/category/ppe",
    },
];

function CountdownTimer() {
    const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                let { hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (n: number) => n.toString().padStart(2, "0");

    return (
        <div className="flex items-center gap-2">
            {[
                { label: "HRS", value: pad(time.hours) },
                { label: "MIN", value: pad(time.minutes) },
                { label: "SEC", value: pad(time.seconds) },
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className="bg-safety-charcoal text-safety-neon-orange font-black text-lg w-12 h-12 rounded flex items-center justify-center countdown-box">
                        {item.value}
                    </div>
                    <span className="text-[9px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                        {item.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

export function DealsOfTheDay() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
                            <span className="text-safety-neon-orange text-sm font-bold uppercase tracking-[0.2em]">
                                Limited Time
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-safety-charcoal uppercase tracking-tight">
                            Deals of the Day
                        </h2>
                    </div>
                    <CountdownTimer />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PLACEHOLDER_DEALS.map((deal) => (
                        <div
                            key={deal.id}
                            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-safety-neon-orange"
                        >
                            {/* Sale Badge */}
                            <div className="absolute top-3 left-3 z-10 bg-safety-neon-orange text-white text-xs font-bold px-3 py-1 rounded-sm uppercase">
                                -{deal.discount}%
                            </div>

                            {/* Wishlist Button */}
                            <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-safety-neon-orange hover:text-white transition-colors text-gray-400">
                                <Heart className="h-4 w-4" />
                            </button>

                            {/* Product Image */}
                            <Link href={deal.link} className="block relative aspect-square bg-safety-light-gray overflow-hidden">
                                <Image
                                    src={deal.image}
                                    alt={deal.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />

                                {/* Hover Action Overlay */}
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
                                <Link href={deal.link}>
                                    <h3 className="font-bold text-sm text-safety-charcoal hover:text-safety-neon-orange transition-colors line-clamp-2 mb-3">
                                        {deal.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-400 line-through text-sm">
                                        {deal.oldPrice}
                                    </span>
                                    <span className="text-safety-neon-orange font-black text-lg">
                                        {deal.newPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
