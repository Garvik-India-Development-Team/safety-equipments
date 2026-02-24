import { Truck, BadgeCheck, Zap } from "lucide-react";

/*
 * ═══════════════════════════════════════════════════════════
 * VALUE PROPOSITIONS — Gaion-style 3-column icon strip
 * Delivered with Care · Excellent Quality · Faster Delivery
 * ═══════════════════════════════════════════════════════════
 */

const PROPS = [
    {
        icon: <Truck className="h-8 w-8" />,
        title: "Delivered with Care",
        description:
            "Each product item is carefully checked before shipping to ensure it arrives in perfect condition.",
    },
    {
        icon: <BadgeCheck className="h-8 w-8" />,
        title: "Excellent Quality",
        description:
            "All these products are under the brand reputation, with clear origins and ISI/CE certifications.",
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Faster Delivery",
        description:
            "Bulk orders processed and shipped within 48 hours. Nationwide delivery network for quick turnaround.",
    },
];

export function ValueProps() {
    return (
        <section className="bg-safety-light-gray py-12 border-y border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROPS.map((prop, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-5 group"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-safety-neon-orange bg-white flex items-center justify-center text-safety-neon-orange group-hover:bg-safety-neon-orange group-hover:text-white transition-all duration-300 shadow-sm">
                                {prop.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base text-safety-charcoal mb-1 uppercase tracking-wide">
                                    {prop.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {prop.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
