import { NextResponse } from "next/server";
import { SEED_PRODUCTS } from "@/lib/seed-products";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const subcategorySlug = searchParams.get("subcategory");

    let products = [...SEED_PRODUCTS] as any[];

    if (categorySlug) {
      products = products.filter((p) => p.categorySlug === categorySlug);
    }
    if (subcategorySlug) {
      products = products.filter((p) => p.subcategorySlug === subcategorySlug);
    }

    const certifications = [...new Set(products.flatMap((p) => p.certifications || []))].sort();
    const materials = [...new Set(products.map((p) => p.material).filter(Boolean))].sort();
    const industryUse = [...new Set(products.flatMap((p) => p.industryUse || []))].sort();
    const protectionTypes = [...new Set(products.map((p) => p.protectionType).filter(Boolean))].sort();
    const brandNames = [...new Set(products.map((p) => p.brandName).filter(Boolean))].sort();

    // Map the string brand names back to the Id structure expected by the frontend
    const brandList = brandNames.map((b) => ({ id: b, name: b }));

    return NextResponse.json({
      certification: certifications,
      material: materials,
      industryUse,
      protectionType: protectionTypes,
      brand: brandList,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
