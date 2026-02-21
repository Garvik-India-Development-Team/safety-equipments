import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const subcategorySlug = searchParams.get("subcategory");
    const featured = searchParams.get("featured") === "true";
    const search = searchParams.get("q") || "";
    const certification = searchParams.get("certification");
    const material = searchParams.get("material");
    const industryUse = searchParams.get("industryUse");
    const protectionType = searchParams.get("protectionType");
    const brand = searchParams.get("brand");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(24, Math.max(8, parseInt(searchParams.get("limit") || "12", 10)));
    const skip = (page - 1) * limit;

    const db = await getDb();
    const productsColl = db.collection("products");
    const categoriesColl = db.collection("categories");

    const filter: Record<string, unknown> = {};

    if (featured) filter.featured = true;
    if (categorySlug) {
      const cat = await categoriesColl.findOne({ slug: categorySlug });
      if (cat) filter.categoryId = cat._id.toString();
    }
    if (subcategorySlug) {
      const sub = await categoriesColl.findOne({ slug: subcategorySlug });
      if (sub) filter.subcategoryId = sub._id.toString();
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (certification) filter.certifications = certification;
    if (material) filter.material = material;
    if (industryUse) filter.industryUse = industryUse;
    if (protectionType) filter.protectionType = protectionType;
    if (brand) filter.brandId = brand;

    const [products, total] = await Promise.all([
      productsColl.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).toArray(),
      productsColl.countDocuments(filter),
    ]);

    const withStrings = products.map((p) => ({
      ...p,
      _id: p._id.toString(),
      categoryId: p.categoryId?.toString(),
      subcategoryId: p.subcategoryId?.toString(),
      brandId: p.brandId?.toString(),
    }));

    return NextResponse.json({
      products: withStrings,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = await getDb();
    const productsColl = db.collection("products");
    const doc = {
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const result = await productsColl.insertOne(doc);
    return NextResponse.json({
      _id: result.insertedId.toString(),
      ...doc,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
