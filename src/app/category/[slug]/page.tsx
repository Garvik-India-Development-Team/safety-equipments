import { notFound } from "next/navigation";
import Link from "next/link";
import { CategoryListing } from "@/components/category-listing";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getCategory(slug: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/categories?slug=${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const isRoot = category.level === 0;
  const hasChildren = category.children?.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>

      {hasChildren && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Subcategories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.children.map((sub: { _id: string; name: string; slug: string }) => (
              <Link
                key={sub._id}
                href={`/category/${slug}/${sub.slug}`}
                className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow font-medium"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <CategoryListing categorySlug={slug} subcategorySlug={undefined} />
      </section>
    </div>
  );
}
