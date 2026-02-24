import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href="/admin/inquiries"
          className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="font-semibold text-lg">Quotation Requests</h2>
          <p className="text-sm text-muted-foreground mt-1">View and export inquiry submissions.</p>
        </Link>
        <Link
          href="/admin/products"
          className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="font-semibold text-lg">Products</h2>
          <p className="text-sm text-muted-foreground mt-1">Add and edit products.</p>
        </Link>
        <Link
          href="/admin/categories"
          className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
        >
          <h2 className="font-semibold text-lg">Categories</h2>
          <p className="text-sm text-muted-foreground mt-1">Categories are seeded. View tree.</p>
        </Link>
      </div>
    </div>
  );
}
