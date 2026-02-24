"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    HardHat,
    Hand,
    Footprints,
    Eye,
    Shield,
    Flame,
    Wind,
    Shirt,
} from "lucide-react";

interface Cat {
    _id: string;
    name: string;
    slug: string;
    children?: { _id: string; name: string; slug: string }[];
}

/* Map category names to icons for visual appeal */
const ICON_MAP: Record<string, React.ReactNode> = {
    head: <HardHat className="h-8 w-8" />,
    hand: <Hand className="h-8 w-8" />,
    foot: <Footprints className="h-8 w-8" />,
    eye: <Eye className="h-8 w-8" />,
    fall: <Shield className="h-8 w-8" />,
    fire: <Flame className="h-8 w-8" />,
    respiratory: <Wind className="h-8 w-8" />,
    body: <Shirt className="h-8 w-8" />,
};

function getIcon(name: string) {
    const key = Object.keys(ICON_MAP).find((k) =>
        name.toLowerCase().includes(k)
    );
    return key ? ICON_MAP[key] : <Shield className="h-8 w-8" />;
}

export function CategoryQuicklinks() {
    const [categories, setCategories] = useState<Cat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/categories?tree=true")
            .then((r) => r.json())
            .then((data) => {
                const tree = data.categories?.[0];
                if (tree?.children) setCategories(tree.children);
            })
            .catch(() => setCategories([]))
            .finally(() => setLoading(false));
    }, []);

    /* Fallback placeholder categories if API returns empty */
    const PLACEHOLDER_CATS = [
        { _id: "p1", name: "Head Protection", slug: "head-protection", children: Array(24).fill({}) },
        { _id: "p2", name: "Hand Protection", slug: "hand-protection", children: Array(18).fill({}) },
        { _id: "p3", name: "Fall Protection", slug: "fall-protection", children: Array(12).fill({}) },
        { _id: "p4", name: "Eye Protection", slug: "eye-protection", children: Array(15).fill({}) },
        { _id: "p5", name: "Fire Safety", slug: "fire-safety", children: Array(9).fill({}) },
        { _id: "p6", name: "Respiratory", slug: "respiratory", children: Array(20).fill({}) },
        { _id: "p7", name: "Body Protection", slug: "body-protection", children: Array(16).fill({}) },
        { _id: "p8", name: "Foot Protection", slug: "foot-protection", children: Array(14).fill({}) },
    ];

    const displayCats = categories.length > 0 ? categories : (loading ? [] : PLACEHOLDER_CATS);

    if (loading) {
        return (
            <section className="bg-white py-6 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex gap-4 overflow-hidden">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex-shrink-0 w-44 h-20 bg-gray-100 rounded-lg animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (displayCats.length === 0) return null;

    return (
        <section className="bg-white py-8 border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {displayCats.map((cat) => (
                        <Link
                            key={cat._id}
                            href={`/category/${cat.slug}`}
                            className="flex-shrink-0 flex items-center gap-4 bg-safety-light-gray hover:bg-safety-neon-orange/10 border border-gray-200 hover:border-safety-neon-orange rounded-lg px-6 py-4 transition-all duration-300 group min-w-[200px]"
                        >
                            <div className="text-safety-charcoal group-hover:text-safety-neon-orange transition-colors">
                                {getIcon(cat.name)}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-safety-charcoal group-hover:text-safety-neon-orange transition-colors whitespace-nowrap">
                                    {cat.name}
                                </h3>
                                {cat.children?.length ? (
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {cat.children.length} products
                                    </p>
                                ) : null}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
