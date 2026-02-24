import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Award, Clock, HeadphonesIcon, BadgeCheck } from "lucide-react";
import { FeaturedProducts } from "@/components/featured-products";
import { FeaturedCategories } from "@/components/featured-categories";
import { BrandsSection } from "@/components/brands-section";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSlider />

      {/* Features Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-safety-blue to-safety-blue/80 text-white group-hover:scale-110 transition-transform shadow-lg">
                <Truck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Bulk orders delivered on time, nationwide shipping available.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-safety-yellow to-yellow-500 text-safety-black group-hover:scale-110 transition-transform shadow-lg">
                <BadgeCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Certified Quality</h3>
                <p className="text-sm text-gray-600">ISI, CE, ANSI compliant safety products guaranteed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-safety-green to-green-600 text-white group-hover:scale-110 transition-transform shadow-lg">
                <HeadphonesIcon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">24/7 Support</h3>
                <p className="text-sm text-gray-600">Expert assistance for all your safety equipment needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCategories />

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our top-rated safety equipment and PPE products</p>
          </div>
          <FeaturedProducts />
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="default" className="bg-safety-blue hover:bg-safety-blue/90 text-white px-8">
              <Link href="/category/ppe">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <BrandsSection />

      {/* Industries Section */}
      <section className="bg-gradient-to-br from-safety-blue via-safety-blue/95 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Providing comprehensive safety solutions across multiple sectors - from manufacturing to mining, we've got you covered.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
            {["Manufacturing", "Construction", "Oil & Gas", "Mining", "Chemicals", "Power", "Logistics"].map(
              (ind) => (
                <div
                  key={ind}
                  className="rounded-lg bg-white/10 backdrop-blur-sm px-4 py-3 text-sm font-medium hover:bg-white/20 transition-all border border-white/20 hover:scale-105"
                >
                  {ind}
                </div>
              )
            )}
          </div>
          <Button asChild size="lg" className="bg-safety-yellow hover:bg-safety-yellow/90 text-safety-black font-semibold shadow-xl px-8">
            <Link href="/industries">Explore Industries</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose SafetyPro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your trusted partner for industrial safety equipment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-blue/10 text-safety-blue mb-4 group-hover:bg-safety-blue group-hover:text-white transition-all">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">All products meet international safety standards and certifications</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-yellow/10 text-safety-yellow mb-4 group-hover:bg-safety-yellow group-hover:text-safety-black transition-all">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Trusted Brands</h3>
              <p className="text-sm text-gray-600">Authorized dealers of leading safety equipment manufacturers</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-green/10 text-safety-green mb-4 group-hover:bg-safety-green group-hover:text-white transition-all">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">24-hour quote turnaround for bulk and custom orders</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-safety-orange/10 text-safety-orange mb-4 group-hover:bg-safety-orange group-hover:text-white transition-all">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Nationwide Delivery</h3>
              <p className="text-sm text-gray-600">Fast and reliable shipping across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-safety-yellow to-yellow-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-safety-black mb-2">Need a Custom Quote?</h2>
              <p className="text-safety-black/80 text-lg">Send us your requirements. We respond within 24 hours.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-safety-blue hover:bg-safety-blue/90 text-white font-semibold px-8 shadow-xl">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-50 text-safety-black border-2 border-safety-black font-semibold px-8">
                <Link href="/bulk-quote">Request Bulk Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
