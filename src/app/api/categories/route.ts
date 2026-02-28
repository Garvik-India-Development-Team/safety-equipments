import { NextResponse } from "next/server";
import { CATEGORY_TREE } from "@/lib/seed-categories";

// Flattens the tree into a simple array with parent IDs for backward compatibility
function flattenCategories(tree: any[], parentId: string | null = null, level = 1, orderOffset = 0) {
  let flat: any[] = [];
  tree.forEach((node, index) => {
    const id = node.slug; // Use slug as deterministic ID
    const current = {
      _id: id,
      name: node.name,
      slug: node.slug,
      parentId,
      level,
      order: orderOffset + index,
    };
    flat.push(current);
    if (node.children) {
      flat = flat.concat(flattenCategories(node.children, id, level + 1, orderOffset + index * 10));
    }
  });
  return flat;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const parentSlug = searchParams.get("parent");
    const tree = searchParams.get("tree") === "true";

    const flatCategories = flattenCategories(CATEGORY_TREE);

    // Root category mock
    const root = { _id: "root-catalog", name: "Catalog", slug: "catalog", parentId: null, level: 0, order: 0 };
    flatCategories.unshift(root);

    if (tree) {
      const main = flatCategories.filter(c => c.parentId === root._id || c.level === 1);
      const withChildren = main.map(m => {
        const children = flatCategories.filter(c => c.parentId === m._id);
        return {
          ...m,
          children
        };
      });

      return NextResponse.json({
        categories: [
          {
            ...root,
            children: withChildren,
          },
        ],
      });
    }

    if (slug) {
      const cat = flatCategories.find(c => c.slug === slug);
      if (!cat) return NextResponse.json({ error: "Not found" }, { status: 404 });
      const children = flatCategories.filter(c => c.parentId === cat._id);
      return NextResponse.json({
        ...cat,
        children
      });
    }

    if (parentSlug) {
      const parent = flatCategories.find(c => c.slug === parentSlug);
      if (!parent) return NextResponse.json({ categories: [] });
      const list = flatCategories.filter(c => c.parentId === parent._id);
      return NextResponse.json({ categories: list });
    }

    return NextResponse.json({ categories: flatCategories });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
