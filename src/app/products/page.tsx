import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, HeartPulse, HardHat, Footprints, Flame, Construction, Lock } from "lucide-react";

export const CATEGORIES = [
    {
        title: "PPE",
        subtitle: "Personal Protective Equipment",
        slug: "ppe",
        description: "Helmets, goggles, ear muffs, and masks for full-body worker safety.",
        icon: HardHat,
        image: "/images/cat_ppe.png",
        badge: "Crucial"
    },
    {
        title: "Safety Clothing & Footwear",
        subtitle: "Industrial Apparel",
        slug: "safety-clothing-footwear",
        description: "High-visibility vests, chemical suits, shoes, and gumboots.",
        icon: Shield,
        image: "/images/cat_clothing.png",
        badge: "Wear"
    },
    {
        title: "Fall Protection",
        subtitle: "Working at Heights",
        slug: "fall-protection",
        description: "Safety harnesses, lanyards, and lifelines to prevent severe injuries.",
        icon: Construction,
        image: "/images/cat_fall.png",
        badge: "Essential"
    },
    {
        title: "Fire & Chemical Safety",
        subtitle: "Emergency Prep",
        slug: "fire-chemical-safety",
        description: "Fire extinguishers, blankets, and chemical spill kits for rapid response.",
        icon: Flame,
        image: "/images/cat_fire.png",
        badge: "Critical"
    },
    {
        title: "Emergency Response & First Aid",
        subtitle: "Workplace First Aid",
        slug: "emergency-response-first-aid",
        description: "Stretchers, comprehensive first aid kits, and rescue equipment.",
        icon: HeartPulse,
        image: "/images/cat_firstaid.png",
        badge: "Required"
    },
    {
        title: "Workplace Safety Signage",
        subtitle: "Site Management",
        slug: "workplace-safety-signage-barriers",
        description: "Safety signs, traffic cones, barricades, and warning boards.",
        icon: Construction,
        image: "/images/cat_signs.png",
        badge: "Standard"
    },
    {
        title: "Lockout Tagout",
        subtitle: "Equipment Safety",
        slug: "lockout-tagout",
        description: "Kits and padlocks to securely de-energize equipment during maintenance.",
        icon: Lock,
        image: "/images/cat_signs.png",
        badge: "Safety"
    },
    {
        title: "Gas Detection & Confined Space",
        subtitle: "Hazard Monitoring",
        slug: "gas-detection-confined-space",
        description: "Portable gas detectors and ventilation systems for hazardous spaces.",
        icon: Shield,
        image: "/images/cat_gas.png",
        badge: "Crucial"
    },
    {
        title: "Electrical Safety Equipment",
        subtitle: "Arc Flash & Shock",
        slug: "electrical-safety-equipment",
        description: "Insulated tools, voltage detectors, and arc flash gear.",
        icon: Flame,
        image: "/images/cat_electrical.png",
        badge: "High-Risk"
    },
];

export default function ProductsPage() {
    return (
        <div className="flex flex-col bg-background">
            <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-12 pb-24">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined !text-[16px]">chevron_right</span>
                    <span className="text-foreground font-medium">Categories</span>
                </div>

                {/* Title Section */}
                <div className="mb-12 text-center relative max-w-3xl mx-auto">
                    <span className="inline-block w-16 h-1 bg-yellow-500 mb-4 rounded-full"></span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        Explore Our <span className="text-yellow-500">Safety Gear</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Browse our comprehensive range of industrial safety equipment designed to protect your workforce in hazardous environments.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={cat.slug}
                                className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-[400px]"
                            >
                                <div className="absolute inset-0">
                                    {cat.image && (
                                        <Image
                                            src={cat.image}
                                            alt={cat.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <Icon className="w-4 h-4 text-yellow-500" />
                                        <span className="text-yellow-500 font-bold uppercase text-xs tracking-widest">{cat.badge}</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 uppercase leading-tight">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
                                        {cat.description}
                                    </p>
                                    <Link
                                        href={`/product/${cat.slug}`}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-black font-bold uppercase text-sm tracking-wider rounded-md hover:bg-yellow-400 transition-colors w-full"
                                    >
                                        Explore Category <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Banner */}
                <div className="mt-20 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-2 uppercase">Can't find what you need?</h3>
                        <p className="text-muted-foreground">Our catalog is vast. Contact our sales team to inquire about specific industrial requirements.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
