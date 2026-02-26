import { NextResponse } from "next/server";
import { seedCategories } from "@/lib/seed-categories";
import { seedProducts } from "@/lib/seed-products";

export async function POST() {
  try {
    await seedCategories();
    await seedProducts();
    return NextResponse.json({ ok: true, message: "Categories and Products seeded" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
