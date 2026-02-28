import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Mocking Inquiry Submission:", body);

    // We are migrating forms to WhatsApp, so we simulate a database success
    return NextResponse.json({
      _id: "static-" + Date.now().toString(),
      success: true,
      ...body,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ inquiries: [] });
}
