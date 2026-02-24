import { HardHat, Factory, Flame, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Industries We Serve",
  description: "We supply industrial safety equipment to manufacturing, construction, oil & gas, mining, and more.",
};

const INDUSTRIES = [
  {
    name: "Manufacturing",
    description: "PPE and safety solutions for factory floors, assembly lines, and warehousing.",
    icon: Factory,
  },
  {
    name: "Construction",
    description: "Hard hats, fall protection, high-vis gear, and site safety equipment.",
    icon: HardHat,
  },
  {
    name: "Oil & Gas",
    description: "Flame-resistant clothing, chemical protection, and hazardous environment PPE.",
    icon: Flame,
  },
  {
    name: "Mining",
    description: "Respiratory protection, head and eye protection, and durable workwear.",
    icon: HardHat,
  },
  {
    name: "Chemicals & Pharma",
    description: "Chemical-resistant gloves, respirators, and containment safety.",
    icon: Flame,
  },
  {
    name: "Logistics & Warehousing",
    description: "Safety footwear, reflective vests, and material handling PPE.",
    icon: Truck,
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-safety-blue via-safety-blue/95 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We supply B2B safety equipment and PPE across multiple sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="rounded-xl border-2 border-gray-200 bg-white p-8 hover:border-safety-blue hover:shadow-xl transition-all card-hover group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-safety-blue to-safety-blue/80 text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
                    <ind.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{ind.name}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{ind.description}</p>
                  <Button asChild className="bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-semibold w-full">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Safety Equipment for Your Industry?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for customized safety solutions tailored to your industry requirements
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-safety-blue hover:bg-safety-blue/90 text-white font-semibold px-8">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white font-semibold px-8">
              <Link href="/category/ppe">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
