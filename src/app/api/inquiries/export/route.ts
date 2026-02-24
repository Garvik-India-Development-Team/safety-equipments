import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const db = await getDb();
  const list = await db
    .collection("inquiries")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const header = "Date,Name,Company,Phone,Email,Product,Quantity,Message,Type,Status\n";
  const rows = list.map((i) => {
    const date = i.createdAt || "";
    const name = (i.name || "").replace(/"/g, '""');
    const company = (i.company || "").replace(/"/g, '""');
    const phone = (i.phone || "").replace(/"/g, '""');
    const email = (i.email || "").replace(/"/g, '""');
    const product = (i.productName || "").replace(/"/g, '""');
    const quantity = (i.quantity || "").replace(/"/g, '""');
    const message = (i.message || "").replace(/"/g, '""').replace(/\n/g, " ");
    const type = i.type || "";
    const status = i.status || "";
    return `"${date}","${name}","${company}","${phone}","${email}","${product}","${quantity}","${message}","${type}","${status}"`;
  });
  const csv = header + rows.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=inquiries.csv",
    },
  });
}
