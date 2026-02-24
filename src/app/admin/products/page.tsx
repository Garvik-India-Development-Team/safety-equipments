"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<{ _id: string; name: string; slug: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products?limit=100")
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <Link href="/admin" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
      <p className="text-muted-foreground mb-4">
        Product management: use API <code className="text-xs bg-muted px-1 rounded">POST /api/products</code> with
        body (name, slug, description, categoryId, subcategoryId?, images[], availability, certifications[], specifications[], etc.)
        or build a form here. For now you can add products via API or seed script.
      </p>
      {loading ? (
        <p className="text-muted-foreground">Loading…</p>
      ) : products.length === 0 ? (
        <p className="text-muted-foreground">No products. Seed or add via API.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((p) => (
            <li key={p._id} className="flex items-center gap-2">
              <span className="font-medium">{p.name}</span>
              <span className="text-muted-foreground text-sm">({p.slug})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
