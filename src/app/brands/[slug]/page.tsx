import { notFound } from "next/navigation";
import Link from "next/link";
import { BrandProducts } from "@/components/brand-products";
import { getDb } from "@/lib/db";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBrand(slug: string) {
  try {
    const db = await getDb();
    const coll = db.collection("brands");
    const brand = await coll.findOne({ slug });
    if (!brand) return null;
    return { ...brand, _id: brand._id.toString() } as any;
  } catch (e) {
    return null;
  }
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
