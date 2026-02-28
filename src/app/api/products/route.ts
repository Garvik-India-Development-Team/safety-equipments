import { NextResponse } from "next/server";
import { SEED_PRODUCTS } from "@/lib/seed-products";
import { CATEGORY_TREE } from "@/lib/seed-categories";

// Helper to flatten categories locally
function flattenCategories(tree: any[], parentId: string | null = null) {
  let flat: any[] = [];
  tree.forEach((node) => {
    flat.push({ _id: node.slug, slug: node.slug, parentId });
    if (node.children) {
      flat = flat.concat(flattenCategories(node.children, node.slug));
    }
  });
  return flat;
}

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

    const flatCats = flattenCategories(CATEGORY_TREE);

    // Create a mutable copy of our array to filter
    let filteredProducts = [...SEED_PRODUCTS].map(p => ({
      ...p,
      _id: p.slug, // Use slug as deterministic ID
    }));

    if (categorySlug) {
      filteredProducts = filteredProducts.filter(p => p.categorySlug === categorySlug);
    }
    if (subcategorySlug) {
      filteredProducts = filteredProducts.filter(p => p.subcategorySlug === subcategorySlug);
    }
    if (search) {
      const s = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(s) ||
        p.description.toLowerCase().includes(s)
      );
    }

    // Cast types locally for static seed records since these optional properties might not exist on all items
    if (certification) {
      filteredProducts = filteredProducts.filter((p: any) => p.certifications?.includes(certification));
    }
    if (material) {
      filteredProducts = filteredProducts.filter((p: any) => p.material === material);
    }
    if (industryUse) {
      filteredProducts = filteredProducts.filter((p: any) => p.industryUse?.includes(industryUse));
    }
    if (protectionType) {
      filteredProducts = filteredProducts.filter((p: any) => p.protectionType === protectionType);
    }
    if (brand) {
      // Use brandName for static data
      filteredProducts = filteredProducts.filter((p: any) => p.brandName === brand);
    }

    const total = filteredProducts.length;
    const paginatedProducts = filteredProducts.slice(skip, skip + limit);

    return NextResponse.json({
      products: paginatedProducts,
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
  // Static site - No product creation allowed via API
  return NextResponse.json({ error: "Method not allowed on static architecture" }, { status: 405 });
}
