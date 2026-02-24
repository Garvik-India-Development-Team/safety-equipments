import { AdminGuard } from "@/components/admin-guard";

export const metadata = {
  title: "Admin",
  description: "Admin dashboard",
};

export default function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-muted/30">
        <header className="border-b bg-background px-4 py-3">
          <a href="/admin" className="font-semibold text-safety-blue">SafetyPro Admin</a>
          <nav className="mt-2 flex gap-4 text-sm">
            <a href="/admin" className="hover:underline">Dashboard</a>
            <a href="/admin/inquiries" className="hover:underline">Inquiries</a>
            <a href="/admin/products" className="hover:underline">Products</a>
            <a href="/admin/categories" className="hover:underline">Categories</a>
          </nav>
        </header>
        <div className="container mx-auto p-4">{children}</div>
      </div>
    </AdminGuard>
  );
}
