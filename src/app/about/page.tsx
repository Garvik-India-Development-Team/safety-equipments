import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Target } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "SafetyPro - Industrial safety equipment supplier. Quality PPE and B2B solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-safety-blue via-safety-blue/95 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SafetyPro</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your Trusted Partner for Industrial Safety Equipment and PPE Solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                We are a B2B supplier of industrial safety equipment and personal protective equipment (PPE).
                Our catalog includes head protection, eye and face protection, hearing protection, respiratory
                protection, hand and body protection, fall protection, fire and chemical safety products, and
                workplace signage and barriers.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                We work with certified manufacturers and supply to industries including manufacturing,
                construction, oil & gas, mining, chemicals, and logistics. All products meet relevant
                standards (ISI, CE, ANSI) where applicable.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                We operate on a quotation basis—no online cart or checkout. Browse our catalog, request a
                quote for the products you need, and we will respond with pricing and availability. For
                bulk orders, use our bulk quotation form or contact us via WhatsApp or email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-blue text-white mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">All products certified to international safety standards</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-yellow text-safety-black mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Trusted Brands</h3>
              <p className="text-gray-600 text-sm">Authorized dealers of leading manufacturers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-green text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated team to assist with all your needs</p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-orange text-white mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Industry Focus</h3>
              <p className="text-gray-600 text-sm">Serving diverse sectors across the nation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for quotes and product inquiries
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-semibold px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white font-semibold px-8">
              <Link href="/category/ppe">View Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
