import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: process.env.SMTP_SECURE === "true",
  auth:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
});

export async function sendInquiryEmail(data: {
  name: string;
  company: string;
  phone: string;
  email: string;
  productName?: string;
  quantity?: string;
  message?: string;
  type: string;
}) {
  const to = process.env.ADMIN_EMAIL || "admin@example.com";
  const subject = `Quotation Request: ${data.productName || "Bulk/General"} - ${data.company}`;
  const text = [
    `Type: ${data.type}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    data.productName ? `Product: ${data.productName}` : "",
    data.quantity ? `Quantity: ${data.quantity}` : "",
    data.message ? `Message: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (!process.env.SMTP_HOST) {
    console.log("[Email not configured] Would send:", subject, text);
    return;
  }
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject,
    text,
  });
}
