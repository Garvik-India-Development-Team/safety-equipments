"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Brand {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
}

export function BrandsSection() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/brands")
      .then((r) => r.json())
      .then((data) => setBrands(data.brands ?? []))
      .catch(() => setBrands([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || brands.length === 0) return null;

  return (
    <section className="bg-white py-16 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Trusted Brands</h2>
          <p className="text-gray-600">Authorized dealers of leading safety equipment manufacturers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.slice(0, 12).map((brand) => (
            <Link
              key={brand._id}
              href={`/brands/${brand.slug}`}
              className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-6 py-8 hover:border-safety-blue hover:shadow-lg transition-all card-hover group"
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              ) : (
                <span className="font-semibold text-gray-700 group-hover:text-safety-blue transition-colors">{brand.name}</span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="border-2 border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white font-semibold">
            <Link href="/brands">
              View All Brands
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
