import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";

interface PageProps {
  params: Promise<{ slug: string; slug2: string; slug3: string }>;
}

async function getProduct(slug: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/products/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: PageProps) {
  const { slug3 } = await params;
  const product = await getProduct(slug3);
  if (!product) return { title: "Product" };
  const description =
    product.description?.slice(0, 160) ||
    `Industrial safety equipment: ${product.name}. Request a quote.`;
  return {
    title: product.name,
    description,
    openGraph: {
      title: product.name,
      description,
      images: product.images?.[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug, slug2, slug3 } = await params;
  const product = await getProduct(slug3);
  if (!product) notFound();

  return (
    <ProductDetail
      product={product}
      categorySlug={slug}
      subcategorySlug={slug2}
    />
  );
}
