import { notFound } from "next/navigation";
import Link from "next/link";
import { CategoryListing } from "@/components/category-listing";

interface PageProps {
  params: Promise<{ slug: string; slug2: string }>;
}

async function getCategory(slug: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/categories?slug=${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { slug, slug2 } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const sub = category.children?.find((c: { slug: string }) => c.slug === slug2);
  if (!sub) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${slug}`} className="hover:text-foreground">{category.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{sub.name}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">{sub.name}</h1>
      <CategoryListing categorySlug={slug} subcategorySlug={slug2} />
    </div>
  );
}
