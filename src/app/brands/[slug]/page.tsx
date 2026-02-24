import { notFound } from "next/navigation";
import Link from "next/link";
import { BrandProducts } from "@/components/brand-products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBrand(slug: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/brands`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return (data.brands ?? []).find((b: { slug: string }) => b.slug === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps) {
  const brand = await getBrand((await params).slug);
  if (!brand) return { title: "Brand" };
  return { title: brand.name };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = await getBrand(slug);
  if (!brand) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/brands" className="hover:text-foreground">Brands</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{brand.name}</span>
      </nav>
      <h1 className="text-3xl font-bold mb-6">{brand.name}</h1>
      <BrandProducts brandId={brand._id} />
    </div>
  );
}
