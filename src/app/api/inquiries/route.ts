import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendInquiryEmail } from "@/lib/email";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  productId: z.string().optional(),
  productName: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(["single", "bulk"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const db = await getDb();
    const doc = {
      ...parsed.data,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    await db.collection("inquiries").insertOne(doc);
    try {
      await sendInquiryEmail(parsed.data as Parameters<typeof sendInquiryEmail>[0]);
    } catch (emailErr) {
      console.error("Email send failed:", emailErr);
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
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
    return NextResponse.json({
      inquiries: list.map((i) => ({
        ...i,
        _id: i._id.toString(),
      })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
