"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryItem {
  _id: string;
  name: string;
  slug: string;
  children?: { _id: string; name: string; slug: string }[];
}

interface TreeCategory {
  _id: string;
  name: string;
  slug: string;
  children?: CategoryItem[];
}

export function MegaSidebar() {
  const [categories, setCategories] = useState<TreeCategory[]>([]);
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

  if (loading) {
    return (
      <aside className="w-64 shrink-0 border-r bg-muted/30 p-4">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        <ul className="mt-4 space-y-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="h-8 animate-pulse rounded bg-muted" />
          ))}
        </ul>
      </aside>
    );
  }

  return (
    <aside className="w-64 shrink-0 border-r bg-muted/30 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Categories
      </h2>
      <nav className="mt-4">
        <ul className="space-y-0.5">
          {categories.map((main) => (
            <li key={main._id} className="group relative">
              <Link
                href={`/category/${main.slug}`}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <span>{main.name}</span>
                {main.children?.length ? (
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                ) : null}
              </Link>
              {main.children?.length ? (
                <ul className="ml-2 mt-0.5 border-l border-border pl-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all absolute left-full top-0 min-w-[200px] bg-background border rounded-md shadow-lg py-1 z-10">
                  {main.children.map((sub) => (
                    <li key={sub._id}>
                      <Link
                        href={`/category/${main.slug}/${sub.slug}`}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
