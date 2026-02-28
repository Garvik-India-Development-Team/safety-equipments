import { NextResponse } from "next/server";
import { SEED_PRODUCTS } from "@/lib/seed-products";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const product = SEED_PRODUCTS.find(p => p.slug === slug);
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({
      ...product,
      _id: product.slug, // Use slug as deterministic ID
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
