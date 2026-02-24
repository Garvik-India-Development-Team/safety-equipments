"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ADMIN_KEY = "admin_secret";

interface Inquiry {
  _id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  productName?: string;
  quantity?: string;
  message?: string;
  type: string;
  status: string;
  createdAt: string;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = typeof window !== "undefined" ? sessionStorage.getItem(ADMIN_KEY) : null;
    if (!key) return;
    fetch("/api/inquiries", {
      headers: { Authorization: `Bearer ${key}` },
    })
      .then((r) => {
        if (r.status === 401) throw new Error("Unauthorized");
        return r.json();
      })
      .then((data) => setInquiries(data.inquiries ?? []))
      .catch(() => setInquiries([]))
      .finally(() => setLoading(false));
  }, []);

  const exportCsv = () => {
    const key = sessionStorage.getItem(ADMIN_KEY);
    if (!key) return;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/inquiries/export");
    xhr.setRequestHeader("Authorization", `Bearer ${key}`);
    xhr.responseType = "blob";
    xhr.onload = () => {
      const blob = xhr.response as Blob;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "inquiries.csv";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    };
    xhr.send();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Quotation Requests</h1>
        <button
          type="button"
          onClick={exportCsv}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Export CSV
        </button>
      </div>
      <Link href="/admin" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
      {loading ? (
        <p className="text-muted-foreground">Loading…</p>
      ) : inquiries.length === 0 ? (
        <p className="text-muted-foreground">No inquiries yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left font-medium">Date</th>
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Company</th>
                <th className="p-3 text-left font-medium">Phone</th>
                <th className="p-3 text-left font-medium">Email</th>
                <th className="p-3 text-left font-medium">Product</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((i) => (
                <tr key={i._id} className="border-t">
                  <td className="p-3">{new Date(i.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">{i.name}</td>
                  <td className="p-3">{i.company}</td>
                  <td className="p-3">{i.phone}</td>
                  <td className="p-3">{i.email}</td>
                  <td className="p-3">{i.productName || "—"}</td>
                  <td className="p-3">{i.type}</td>
                  <td className="p-3">{i.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
