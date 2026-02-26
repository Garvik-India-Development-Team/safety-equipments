import { getDb } from "./db";
import { ObjectId } from "mongodb";

export const SEED_PRODUCTS = [
    {
        name: "ProGuard Safety Helmet Type 1",
        slug: "proguard-safety-helmet-type-1",
        categorySlug: "ppe",
        subcategorySlug: "head-protection",
        description: "High-density polyethylene (HDPE) helmet providing excellent impact protection. Features a 6-point suspension system and adjustable headband for maximum comfort. Vented design for high-temperature work environments.",
        price: "$24.99",
        sku: "PG-SH-100",
        availability: "In Stock",
        brandName: "ProGuard Safety",
        certifications: ["ANSI Z89.1", "CE EN 397"],
        applications: ["Construction", "Manufacturing", "Oil & Gas"],
        images: ["https://images.unsplash.com/photo-1542010589005-d1eacc3910f2?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "UltraVision Anti-Fog Safety Goggles",
        slug: "ultravision-anti-fog-safety-goggles",
        categorySlug: "ppe",
        subcategorySlug: "eye-face-protection",
        description: "Premium safety goggles with dual-pane polycarbonate lens. Advanced anti-fog coating ensures clear vision in humid conditions. Soft PVC frame provides a comfortable seal against dust and chemical splashes.",
        price: "$18.50",
        sku: "UV-AG-200",
        availability: "In Stock",
        brandName: "VisionTech",
        certifications: ["ANSI Z87.1+", "EN 166"],
        applications: ["Chemical Handling", "Laboratory", "Woodworking"],
        images: ["https://images.unsplash.com/photo-1584445584469-65e1ebd6d9dc?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "AeroBreath N95 Particulate Respirator",
        slug: "aerobreath-n95-respirator",
        categorySlug: "ppe",
        subcategorySlug: "respiratory-protection",
        description: "NIOSH-approved N95 mask with cool-flow exhalation valve. Designed for hot, dusty work settings. Adjustable nose clip and braided headbands ensure a secure, custom fit.",
        price: "$2.50",
        sku: "AB-N95-500",
        availability: "Out of Stock",
        brandName: "AeroBreath",
        certifications: ["NIOSH N95", "FDA Cleared"],
        applications: ["Healthcare", "Grinding", "Sanding", "Sweeping"],
        images: ["https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "TitanGrip Cut-Resistant Kevlar Gloves",
        slug: "titangrip-cut-resistant-kevlar-gloves",
        categorySlug: "ppe",
        subcategorySlug: "hand-body-protection",
        description: "Level 5 cut-resistant gloves made from reinforced Kevlar and stainless steel core. Nitrile micro-foam palm coating provides excellent grip in oily or wet conditions.",
        price: "$14.75",
        sku: "TG-CRG-305",
        availability: "In Stock",
        brandName: "TitanGrip",
        certifications: ["ANSI Cut Level A5", "EN 388:2016"],
        applications: ["Metal Fabrication", "Glass Handling", "Automotive"],
        images: ["https://images.unsplash.com/photo-1584347895123-57351ff73827?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "Lumina Reflective Safety Vest Class 2",
        slug: "lumina-reflective-safety-vest-class-2",
        categorySlug: "ppe",
        subcategorySlug: "hand-body-protection",
        description: "High-visibility mesh safety vest with 2-inch silver reflective tape. Lightweight and breathable fabric. Features front zipper closure and multiple utility pockets.",
        price: "$12.00",
        sku: "LM-SV-C2",
        availability: "In Stock",
        brandName: "Lumina Wear",
        certifications: ["ANSI/ISEA 107-2015 Class 2"],
        applications: ["Road Work", "Surveying", "Warehousing", "Emergency Response"],
        images: ["https://images.unsplash.com/photo-1628102491629-77858ab215b2?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "SecureTread Steel Toe Work Boots",
        slug: "securetread-steel-toe-work-boots",
        categorySlug: "ppe",
        subcategorySlug: "hand-body-protection",
        description: "Heavy-duty leather work boots with composite steel toe protection. Slip-resistant rubber outsole prevents falls on slick surfaces. Electrical hazard (EH) rated.",
        price: "$89.99",
        sku: "ST-WB-901",
        availability: "In Stock",
        brandName: "SecureTread",
        certifications: ["ASTM F2413-18", "Slip Resistance Certified"],
        applications: ["Construction", "Mining", "Heavy Equipment Operation"],
        images: ["https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "SoundShield Earmuffs 30dB NRR",
        slug: "soundshield-earmuffs-30db-nrr",
        categorySlug: "ppe",
        subcategorySlug: "hearing-protection",
        description: "Premium over-the-head earmuffs offering 30dB Noise Reduction Rating. Padded headband and ultra-soft foam ear cushions provide all-day comfort. Foldable design for easy storage.",
        price: "$28.00",
        sku: "SS-EM-300",
        availability: "In Stock",
        brandName: "SoundShield",
        certifications: ["ANSI S3.19", "CE EN 352-1"],
        applications: ["Manufacturing", "Aviation", "Landscaping"],
        images: ["https://plus.unsplash.com/premium_photo-1661608752119-035bba68d6ff?q=80&w=600&auto=format&fit=crop"],
    },
    {
        name: "Guardian Fall Protection Harness Kit",
        slug: "guardian-fall-protection-harness-kit",
        categorySlug: "ppe",
        subcategorySlug: "fall-protection-equipment",
        description: "Complete fall protection kit including a full-body harness with pass-through buckles, 6-foot shock-absorbing lanyard, and a durable carrying bag. High-strength webbing supports up to 310 lbs.",
        price: "$145.00",
        sku: "GF-HK-700",
        availability: "In Stock",
        brandName: "Guardian Fall",
        certifications: ["OSHA 1910.140", "ANSI Z359.11"],
        applications: ["Roofing", "Scaffolding", "Tower Climbing"],
        images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop"],
    }
];

export async function seedProducts() {
    const db = await getDb();
    const productsColl = db.collection("products");

    // Clear existing products to avoid duplicates during seed
    await productsColl.deleteMany({});

    for (const p of SEED_PRODUCTS) {
        const doc: any = { ...p };
        doc._id = new ObjectId();
        await productsColl.insertOne(doc);
    }
    return { ok: true, count: SEED_PRODUCTS.length };
}
