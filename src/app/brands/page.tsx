import Link from "next/link";
import { BrandsList } from "@/components/brands-list";

export const metadata = {
  title: "Brands",
  description: "Industrial safety equipment brands we supply. Request a quote for any brand.",
};

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Our Brands</h1>
      <p className="text-muted-foreground mb-8">
        We partner with leading manufacturers of PPE and safety equipment.
      </p>
      <BrandsList />
    </div>
  );
}
