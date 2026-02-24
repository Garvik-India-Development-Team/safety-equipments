"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
  productCount?: number;
}

export function BrandsList() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/brands")
      .then((r) => r.json())
      .then((data) => setBrands(data.brands ?? []))
      .catch(() => setBrands([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-24 rounded-lg bg-muted animate-pulse" />
        ))}
      </div>
    );
  }

  if (brands.length === 0) {
    return (
      <p className="text-muted-foreground">No brands listed yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {brands.map((brand) => (
        <Link
          key={brand._id}
          href={`/brands/${brand.slug}`}
          className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
        >
          {brand.logo ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={60}
              className="object-contain"
            />
          ) : (
            <span className="font-semibold text-center">{brand.name}</span>
          )}
          {brand.productCount != null && (
            <span className="text-xs text-muted-foreground mt-2">
              {brand.productCount} products
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
