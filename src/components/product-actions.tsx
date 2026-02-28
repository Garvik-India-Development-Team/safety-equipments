"use client";

import { MessageCircle, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/quote-store";
import { Button } from "@/components/ui/button";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";

interface ProductActionsProps {
    product: {
        _id: string;
        name: string;
        sku?: string;
    };
}

export function ProductActions({ product }: ProductActionsProps) {
    const addToCart = useCartStore((s) => s.addItem);
    const openCart = useCartStore((s) => s.open);

    const handleAddToCart = () => {
        addToCart({
            productId: product._id,
            productName: product.name,
            sku: product.sku,
        });
        openCart();
    };

    return (
        <>
            <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-bold h-12 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
            >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
            </Button>
            <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Hello I want a quotation for *${product.name}* (SKU: ${product.sku || 'N/A'})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
                <MessageCircle className="w-5 h-5 fill-current" />
                Buy Now
            </a>
        </>
    );
}
