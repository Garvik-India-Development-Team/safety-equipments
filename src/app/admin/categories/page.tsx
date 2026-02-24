"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Cat {
  _id: string;
  name: string;
  slug: string;
  level: number;
  children?: Cat[];
}

export default function AdminCategoriesPage() {
  const [tree, setTree] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetch("/api/categories?tree=true")
      .then((r) => r.json())
      .then((data) => {
        const root = data.categories?.[0];
        setTree(root?.children ?? []);
      })
      .catch(() => setTree([]))
      .finally(() => setLoading(false));
  }, []);

  const runSeed = () => {
    setSeeding(true);
    fetch("/api/seed", { method: "POST" })
      .then((r) => r.json())
      .then(() => {
        window.location.reload();
      })
      .finally(() => setSeeding(false));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Categories</h1>
      <Link href="/admin" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
      <p className="text-muted-foreground mb-4">
        PPE category tree. Seed once to create the full hierarchy.
      </p>
      <Button onClick={runSeed} disabled={seeding} variant="outline" size="sm" className="mb-4">
        {seeding ? "Seeding…" : "Seed Categories"}
      </Button>
      {loading ? (
        <p className="text-muted-foreground">Loading…</p>
      ) : (
        <ul className="space-y-2 list-disc list-inside">
          {tree.map((main) => (
            <li key={main._id}>
              <strong>{main.name}</strong>
              {main.children?.length ? (
                <ul className="ml-4 mt-1 space-y-0.5 list-disc list-inside">
                  {main.children.map((sub) => (
                    <li key={sub._id}>{sub.name}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
