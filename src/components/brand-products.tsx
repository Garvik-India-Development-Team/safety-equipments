"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "@/components/product-card";

interface Product {
  _id: string;
  name: string;
  slug: string;
  images: string[];
  categorySlug?: string;
  subcategorySlug?: string;
  availability: string;
  datasheetUrl?: string;
  categoryId?: string;
}

export function BrandProducts({ brandId }: { brandId: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products?brand=${encodeURIComponent(brandId)}&limit=50`)
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [brandId]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <p className="text-muted-foreground">No products under this brand yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
