import { NextResponse } from "next/server";
import { SEED_PRODUCTS } from "@/lib/seed-products";

export async function GET() {
  try {
    const brandNames = [...new Set(SEED_PRODUCTS.map((p) => p.brandName).filter(Boolean))].sort();

    return NextResponse.json({
      brands: brandNames.map((name) => ({
        _id: name,
        name: name,
        slug: name?.toLowerCase().replace(/\s+/g, '-'),
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
