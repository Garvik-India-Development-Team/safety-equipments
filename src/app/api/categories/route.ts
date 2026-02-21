import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const parentSlug = searchParams.get("parent");
    const tree = searchParams.get("tree") === "true";

    const db = await getDb();
    const coll = db.collection("categories");

    if (tree) {
      const root = await coll.findOne({ level: 0 });
      if (!root) return NextResponse.json({ categories: [] });
      const main = await coll
        .find({ parentId: root._id })
        .sort({ order: 1 })
        .toArray();
      const withChildren = await Promise.all(
        main.map(async (m) => {
          const children = await coll
            .find({ parentId: m._id })
            .sort({ order: 1 })
            .toArray();
          return {
            ...m,
            _id: m._id.toString(),
            parentId: m.parentId?.toString() ?? null,
            children: children.map((c) => ({
              ...c,
              _id: c._id.toString(),
              parentId: c.parentId?.toString() ?? null,
            })),
          };
        })
      );
      return NextResponse.json({
        categories: [
          {
            ...root,
            _id: root._id.toString(),
            parentId: null,
            children: withChildren,
          },
        ],
      });
    }

    if (slug) {
      const cat = await coll.findOne({ slug });
      if (!cat) return NextResponse.json({ error: "Not found" }, { status: 404 });
      const children = cat.level < 2
        ? await coll.find({ parentId: cat._id }).sort({ order: 1 }).toArray()
        : [];
      return NextResponse.json({
        ...cat,
        _id: cat._id.toString(),
        parentId: cat.parentId?.toString() ?? null,
        children: children.map((c) => ({
          ...c,
          _id: c._id.toString(),
          parentId: c.parentId?.toString() ?? null,
        })),
      });
    }

    if (parentSlug) {
      const parent = await coll.findOne({ slug: parentSlug });
      if (!parent) return NextResponse.json({ categories: [] });
      const list = await coll
        .find({ parentId: parent._id })
        .sort({ order: 1 })
        .toArray();
      return NextResponse.json({
        categories: list.map((c) => ({
          ...c,
          _id: c._id.toString(),
          parentId: c.parentId?.toString() ?? null,
        })),
      });
    }

    const all = await coll.find({}).sort({ level: 1, order: 1 }).toArray();
    return NextResponse.json({
      categories: all.map((c) => ({
        ...c,
        _id: c._id.toString(),
        parentId: c.parentId?.toString() ?? null,
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
