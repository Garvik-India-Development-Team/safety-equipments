import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();
    const slides = await db
      .collection("hero_slides")
      .find({})
      .sort({ order: 1 })
      .toArray();
    if (slides.length === 0) {
      return NextResponse.json({ slides: [] });
    }
    return NextResponse.json({
      slides: slides.map((s) => ({
        ...s,
        _id: s._id.toString(),
      })),
    });
  } catch {
    return NextResponse.json({ slides: [] });
  }
}
