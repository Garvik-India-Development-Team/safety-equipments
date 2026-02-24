"use client";

import { useState, useEffect, useCallback } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface Filters {
  certification?: string[];
  material?: string[];
  industryUse?: string[];
  protectionType?: string[];
  brand?: { id: string; name: string }[];
}

export function CategoryListing({
  categorySlug,
  subcategorySlug,
}: {
  categorySlug: string;
  subcategorySlug?: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<Filters>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const limit = 12;

  const fetchFilters = useCallback(() => {
    const params = new URLSearchParams();
    if (categorySlug) params.set("category", categorySlug);
    if (subcategorySlug) params.set("subcategory", subcategorySlug);
    fetch(`/api/products/filters?${params}`)
      .then((r) => r.json())
      .then(setFilterOptions)
      .catch(() => {});
  }, [categorySlug, subcategorySlug]);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (categorySlug) params.set("category", categorySlug);
    if (subcategorySlug) params.set("subcategory", subcategorySlug);
    params.set("page", String(page));
    params.set("limit", String(limit));
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    fetch(`/api/products?${params}`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.products ?? []);
        setTotal(data.total ?? 0);
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [categorySlug, subcategorySlug, page, selectedFilters]);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const totalPages = Math.ceil(total / limit);
  const hasFilters =
    (filterOptions.certification?.length ?? 0) > 0 ||
    (filterOptions.material?.length ?? 0) > 0 ||
    (filterOptions.industryUse?.length ?? 0) > 0 ||
    (filterOptions.protectionType?.length ?? 0) > 0 ||
    (filterOptions.brand?.length ?? 0) > 0;

  const setFilter = (key: string, value: string) => {
    setSelectedFilters((prev) => {
      const next = { ...prev };
      if (value) next[key] = value;
      else delete next[key];
      return next;
    });
    setPage(1);
  };

  return (
    <div className="flex gap-8">
      {hasFilters && (
        <aside className="w-56 shrink-0 space-y-4">
          <h3 className="font-semibold text-sm">Filters</h3>
          {filterOptions.certification?.length ? (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Certification</p>
              <div className="space-y-2">
                {filterOptions.certification.map((c) => (
                  <label key={c} className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={selectedFilters.certification === c}
                      onCheckedChange={(checked) =>
                        setFilter("certification", checked ? c : "")
                      }
                    />
                    <span className="text-sm">{c}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
          {filterOptions.material?.length ? (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Material</p>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={selectedFilters.material ?? ""}
                onChange={(e) => setFilter("material", e.target.value)}
              >
                <option value="">All</option>
                {filterOptions.material.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          ) : null}
          {filterOptions.brand?.length ? (
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Brand</p>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={selectedFilters.brand ?? ""}
                onChange={(e) => setFilter("brand", e.target.value)}
              >
                <option value="">All</option>
                {filterOptions.brand.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>
          ) : null}
        </aside>
      )}

      <div className="flex-1 min-w-0">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No products found.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  categorySlug={categorySlug}
                  subcategorySlug={subcategorySlug}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </Button>
                <span className="flex items-center px-4 text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
