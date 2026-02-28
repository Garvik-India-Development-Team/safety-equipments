import { NextResponse } from "next/server";
import { SEED_PRODUCTS } from "@/lib/seed-products";

export async function GET() {
  try {
    // Return an initial slice of 4 static products as featured items
    const featured = SEED_PRODUCTS.slice(0, 4);

    return NextResponse.json({
      slides: featured.map((p) => ({
        ...p,
        _id: p.slug, // Map slug as deterministic ID
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
