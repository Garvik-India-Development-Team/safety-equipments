import { NextResponse } from "next/server";
import { seedCategories } from "@/lib/seed-categories";

export async function POST() {
  try {
    await seedCategories();
    return NextResponse.json({ ok: true, message: "Categories seeded" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
