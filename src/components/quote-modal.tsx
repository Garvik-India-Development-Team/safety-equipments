"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/quote-store";
import { MessageCircle, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919811048483";

export function QuoteModal() {
  const { isOpen, close, items, updateQuantity, removeItem, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = `Hello, I would like to request a quotation for the following bulk order:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.productName}*\n`;
      if (item.sku) message += `   SKU: ${item.sku}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });

    message += `Please let me know the pricing, bulk discounts, and estimated delivery time.`;

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Optional: Clear cart after successful handoff to WhatsApp
    // clearCart(); 
    close();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Your Request Cart
          </DialogTitle>
          <DialogDescription>
            Review the items you want to request a quote for.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 max-h-[60vh] overflow-y-auto pr-2 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground placeholder:">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.productId} className="flex gap-4 items-center bg-accent/30 p-3 rounded-lg border border-border">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-foreground truncate">{item.productName}</h4>
                  {item.sku && <p className="text-xs text-muted-foreground mt-0.5">SKU: {item.sku}</p>}
                </div>

                <div className="flex items-center gap-2 bg-background border border-border rounded-md px-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-none"
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="text-xs font-medium w-6 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-none"
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:bg-destructive/10"
                  onClick={() => removeItem(item.productId)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          <Button
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 shadow-lg flex items-center gap-2"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            <MessageCircle className="w-5 h-5" />
            Send Request via WhatsApp
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={close}>
              Continue Browsing
            </Button>
            {items.length > 0 && (
              <Button variant="ghost" className="text-destructive hover:bg-destructive/10" onClick={clearCart}>
                Clear Cart
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
