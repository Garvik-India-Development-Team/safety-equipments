import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const db = await getDb();
    const product = await db.collection("products").findOne({ slug });
    if (!product)
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({
      ...product,
      _id: product._id.toString(),
      categoryId: product.categoryId?.toString(),
      subcategoryId: product.subcategoryId?.toString(),
      brandId: product.brandId?.toString(),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
