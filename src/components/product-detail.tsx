"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";
import { FileDown, MessageCircle, Phone } from "lucide-react";
import { useQuoteStore } from "@/store/quote-store";
import { cn } from "@/lib/utils";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";
const PHONE = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98765 43210";

interface ProductDetailProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    images: string[];
    availability: string;
    brandName?: string;
    certifications: string[];
    specifications: { name: string; value: string }[];
    certificationsDetail?: string;
    applicationsIndustries?: string;
    shippingSupplyCapacity?: string;
    datasheetUrl?: string;
    categorySlug?: string;
    subcategorySlug?: string;
  };
  categorySlug: string;
  subcategorySlug: string;
}

export function ProductDetail({
  product,
  categorySlug,
  subcategorySlug,
}: ProductDetailProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const openQuote = useQuoteStore((s) => s.open);
  const availabilityText =
    product.availability === "made_to_order" ? "Made to Order" : "In Stock";

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${categorySlug}`} className="hover:text-foreground">
          {categorySlug.replace(/-/g, " ")}
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/category/${categorySlug}/${subcategorySlug}`}
          className="hover:text-foreground"
        >
          {subcategorySlug.replace(/-/g, " ")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            {product.images?.[imageIndex] ? (
              <Image
                src={product.images[imageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>
          {product.images?.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={cn(
                    "relative h-16 w-16 shrink-0 overflow-hidden rounded border",
                    i === imageIndex ? "ring-2 ring-primary" : ""
                  )}
                  onClick={() => setImageIndex(i)}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold md:text-3xl">{product.name}</h1>
          {product.brandName && (
            <p className="mt-1 text-sm text-muted-foreground">Brand: {product.brandName}</p>
          )}
          <p className="mt-2 text-sm text-muted-foreground">{availabilityText}</p>
          {product.certifications?.length > 0 && (
            <p className="mt-2 text-sm">
              Certifications: {product.certifications.join(", ")}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="safety"
              size="lg"
              className="text-safety-black"
              onClick={() => openQuote({ productId: product._id, productName: product.name })}
            >
              Request Quote
            </Button>
            <a
              href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in: ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${WHATSAPP.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
            >
              <Phone className="h-4 w-4" />
              Call Supplier
            </a>
            {product.datasheetUrl && (
              <a
                href={product.datasheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
              >
                <FileDown className="h-4 w-4" />
                Download Datasheet
              </a>
            )}
          </div>
        </div>
      </div>

      <Tabs.Root defaultValue="description" className="mt-12">
        <Tabs.List className="flex border-b gap-4 mb-4">
          <Tabs.Trigger
            value="description"
            className="pb-3 px-1 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:font-medium"
          >
            Description
          </Tabs.Trigger>
          <Tabs.Trigger
            value="specs"
            className="pb-3 px-1 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:font-medium"
          >
            Technical Specifications
          </Tabs.Trigger>
          <Tabs.Trigger
            value="certifications"
            className="pb-3 px-1 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:font-medium"
          >
            Certifications
          </Tabs.Trigger>
          <Tabs.Trigger
            value="applications"
            className="pb-3 px-1 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:font-medium"
          >
            Applications / Industries
          </Tabs.Trigger>
          <Tabs.Trigger
            value="shipping"
            className="pb-3 px-1 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:font-medium"
          >
            Shipping & Supply
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="description" className="prose prose-sm max-w-none">
          {product.description || <p className="text-muted-foreground">No description available.</p>}
        </Tabs.Content>
        <Tabs.Content value="specs">
          {product.specifications?.length > 0 ? (
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-2 text-left font-medium">Specification</th>
                  <th className="border border-border p-2 text-left font-medium">Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={i}>
                    <td className="border border-border p-2">{spec.name}</td>
                    <td className="border border-border p-2">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted-foreground">No specifications listed.</p>
          )}
        </Tabs.Content>
        <Tabs.Content value="certifications">
          {product.certificationsDetail || (
            <p>
              {product.certifications?.length
                ? product.certifications.join(", ")
                : "No certification details."}
            </p>
          )}
        </Tabs.Content>
        <Tabs.Content value="applications">
          {product.applicationsIndustries || (
            <p className="text-muted-foreground">No applications/industries listed.</p>
          )}
        </Tabs.Content>
        <Tabs.Content value="shipping">
          {product.shippingSupplyCapacity || (
            <p className="text-muted-foreground">Contact us for shipping and supply capacity.</p>
          )}
        </Tabs.Content>
      </Tabs.Root>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.images,
            brand: product.brandName
              ? { "@type": "Brand", name: product.brandName }
              : undefined,
          }),
        }}
      />
    </div>
  );
}
