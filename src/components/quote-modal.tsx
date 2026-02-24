"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuoteStore } from "@/store/quote-store";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  product: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function QuoteModal() {
  const { isOpen, close, product } = useQuoteStore();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      product: product?.productName ?? "",
    },
  });

  const onOpenChange = (open: boolean) => {
    if (!open) {
      close();
      reset();
      setSubmitStatus("idle");
    }
  };

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          productId: product?.productId,
          productName: data.product || product?.productName,
          quantity: data.quantity,
          message: data.message,
          type: product?.productId ? "single" : "bulk",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitStatus("success");
      setTimeout(() => onOpenChange(false), 1500);
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill in your details and we will get back to you with pricing and availability.
          </DialogDescription>
        </DialogHeader>
        {submitStatus === "success" ? (
          <p className="py-4 text-center text-green-600">Thank you. We will contact you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" {...register("name")} placeholder="Your name" />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" {...register("company")} placeholder="Company name" />
                {errors.company && (
                  <p className="text-xs text-destructive">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" {...register("phone")} placeholder="Phone" />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" {...register("email")} placeholder="Email" />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>
            {product?.productName && (
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Input
                  id="product"
                  {...register("product")}
                  defaultValue={product.productName}
                  readOnly
                  className="bg-muted"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" {...register("quantity")} placeholder="e.g. 100 units" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                {...register("message")}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Additional requirements or questions"
              />
            </div>
            {submitStatus === "error" && (
              <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="safety" disabled={submitStatus === "loading"}>
                {submitStatus === "loading" ? "Sending…" : "Submit Request"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
