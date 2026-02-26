"use client";

import { cn } from "@/lib/utils";

const PARTNERS = [
    "Karam",
    "Acme Safety Shoes",
    "PIP Global Safety",
    "Honeywell",
    "Freefall",
    "Magnum",
    "Ultima Industrial",
    "Bata Industrials",
    "3M",
    "Duckback",
    "Venus",
    "Liberty",
];

export function PartnersSection() {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Channel Partners &amp; Authorised Dealers</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {PARTNERS.map((partner) => (
                    <div
                        key={partner}
                        className="flex items-center justify-center text-center rounded-xl bg-[#111] border border-gray-800 px-6 py-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <span className="font-bold text-lg text-gray-400 group-hover:text-primary transition-colors uppercase tracking-wide">
                            {partner}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
