"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Cat {
  _id: string;
  name: string;
  slug: string;
  children?: { _id: string; name: string; slug: string }[];
}

export function FeaturedCategories() {
  const [categories, setCategories] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/categories?tree=true")
      .then((r) => r.json())
      .then((data) => {
        const tree = data.categories?.[0];
        if (tree?.children) setCategories(tree.children);
      })
      .catch(() => setCategories([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading || categories.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our comprehensive range of safety equipment and protective gear</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((cat) => (
            <Link
              key={cat._id}
              href={`/category/${cat.slug}`}
              className="group relative rounded-xl border-2 border-gray-200 bg-white p-6 hover:border-safety-blue hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-safety-blue/10 flex items-center justify-center mb-4 group-hover:bg-safety-blue group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-safety-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-safety-blue transition-colors text-sm md:text-base">
                  {cat.name}
                </h3>
                {cat.children?.length ? (
                  <p className="text-xs text-gray-500 mt-2">
                    {cat.children.length}+ products
                  </p>
                ) : null}
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-safety-yellow/0 to-safety-blue/0 group-hover:from-safety-yellow/5 group-hover:to-safety-blue/5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
