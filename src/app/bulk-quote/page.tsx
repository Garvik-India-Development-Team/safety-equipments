"use client";

import { useCartStore } from "@/store/quote-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function BulkQuotePage() {
  const openCart = useCartStore((s) => s.open);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Request Cart</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Need volume pricing or a custom list of products? Submit your requirements and we will
        send you a detailed quote. You can also attach a list of product names or SKUs.
      </p>
      <div className="rounded-lg border bg-card p-6 max-w-xl">
        <p className="text-sm text-muted-foreground mb-4">
          Click below to open the quotation form. Include product names, quantities, and any
          special requirements in the message field.
        </p>
        <Button
          size="lg"
          variant="safety"
          className="text-safety-black font-semibold flex items-center gap-2"
          onClick={() => openCart()}
        >
          <ShoppingCart className="w-5 h-5" />
          Open Request Cart
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Or contact us directly:{" "}
          <a
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210").replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            WhatsApp
          </a>{" "}
          |{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact page
          </Link>
        </p>
      </div>
    </div>
  );
}
