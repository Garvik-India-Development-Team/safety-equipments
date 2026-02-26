"use client";

import Image from "next/image";
import Link from "next/link";
import { FileDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteStore } from "@/store/quote-store";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    images: string[];
    categorySlug?: string;
    subcategorySlug?: string;
    availability: string;
    datasheetUrl?: string;
    categoryId?: string;
  };
  categorySlug?: string;
  subcategorySlug?: string;
  className?: string;
}

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";

export function ProductCard({
  product,
  categorySlug = "ppe",
  subcategorySlug,
  className,
}: ProductCardProps) {
  const openQuote = useQuoteStore((s) => s.open);
  const catSlug = product.categorySlug || categorySlug;
  const subSlug = product.subcategorySlug || subcategorySlug;
  const href = subSlug
    ? `/category/${catSlug}/${subSlug}/${product.slug}`
    : `/category/${catSlug}/${product.slug}`;

  const availabilityText =
    product.availability === "made_to_order" ? "Made to Order" : "In Stock";

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-all hover:border-safety-blue hover:shadow-xl card-hover",
        className
      )}
    >
      <Link href={href} className="relative block aspect-square bg-gray-100 overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-gray-100 to-gray-200">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <span className={cn(
            "inline-block px-3 py-1 text-xs font-semibold rounded-full",
            product.availability === "made_to_order"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          )}>
            {availabilityText}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        {product.categorySlug && (
          <p className="text-xs text-safety-blue font-medium uppercase tracking-wider mb-2">
            {product.categorySlug.replace(/-/g, " ")}
          </p>
        )}
        <Link href={href}>
          <h3 className="font-bold text-gray-900 line-clamp-2 hover:text-safety-blue transition-colors text-sm md:text-base mb-3">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto pt-3 space-y-2">
          <Button
            size="sm"
            className="w-full bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-semibold shadow-md"
            onClick={(e) => {
              e.preventDefault();
              openQuote({
                productId: product._id,
                productName: product.name,
              });
            }}
          >
            Request Quote
          </Button>
          <div className="flex gap-2">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hello I want quotation for ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-md border-2 border-[#25D366] bg-[#25D366] px-3 py-2 text-xs font-bold text-white hover:bg-[#20bd5a] hover:border-[#20bd5a] transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-1.5" />
              WhatsApp Quote
            </a>
            {product.datasheetUrl && (
              <a
                href={product.datasheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border-2 border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:border-safety-blue transition-all"
                title="Download datasheet"
              >
                <FileDown className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
