import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const subcategorySlug = searchParams.get("subcategory");

    const db = await getDb();
    const productsColl = db.collection("products");
    const categoriesColl = db.collection("categories");

    const filter: Record<string, unknown> = {};
    if (categorySlug) {
      const cat = await categoriesColl.findOne({ slug: categorySlug });
      if (cat) filter.categoryId = cat._id.toString();
    }
    if (subcategorySlug) {
      const sub = await categoriesColl.findOne({ slug: subcategorySlug });
      if (sub) filter.subcategoryId = sub._id.toString();
    }

    const products = await productsColl.find(filter).toArray();
    const certifications = [...new Set(products.flatMap((p) => p.certifications || []))].sort();
    const materials = [...new Set(products.map((p) => p.material).filter(Boolean))].sort();
    const industryUse = [...new Set(products.flatMap((p) => p.industryUse || []))].sort();
    const protectionTypes = [...new Set(products.map((p) => p.protectionType).filter(Boolean))].sort();
    const brandIds = [...new Set(products.map((p) => p.brandId).filter(Boolean))];
    const brandsColl = db.collection("brands");
    const validIds = brandIds.filter((id) => ObjectId.isValid(id));
    const brands = validIds.length
      ? await brandsColl.find({ _id: { $in: validIds.map((id) => new ObjectId(id)) } }).toArray()
      : [];
    const brandList = brands.map((b) => ({ id: b._id.toString(), name: b.name }));

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
