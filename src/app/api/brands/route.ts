import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();
    const brands = await db.collection("brands").find({}).sort({ name: 1 }).toArray();
    return NextResponse.json({
      brands: brands.map((b) => ({
        ...b,
        _id: b._id.toString(),
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
