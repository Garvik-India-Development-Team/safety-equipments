import Link from "next/link";
import { HeroSlider } from "@/components/hero-slider";
import { CategoryQuicklinks } from "@/components/category-quicklinks";
import { DealsOfTheDay } from "@/components/deals-of-the-day";
import { ValueProps } from "@/components/value-props";
import { TabbedProducts } from "@/components/tabbed-products";
import { BrandsSection } from "@/components/brands-section";
import { Shield, Award, Clock, Truck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ═══════ 1. HERO SLIDER ═══════ */}
      <HeroSlider />

      {/* ═══════ 2. CATEGORY QUICKLINKS ═══════ */}
      <CategoryQuicklinks />

      {/* ═══════ 3. DEALS OF THE DAY ═══════ */}
      <DealsOfTheDay />

      {/* ═══════ 4. VALUE PROPOSITIONS ═══════ */}
      <ValueProps />

      {/* ═══════ 5. TABBED FEATURED PRODUCTS ═══════ */}
      <TabbedProducts />

      {/* ═══════ 6. BRANDS SECTION (existing) ═══════ */}
      <BrandsSection />

      {/* ═══════ 7. INDUSTRIES WE SERVE ═══════ */}
      <section className="bg-gradient-to-br from-safety-charcoal via-safety-charcoal/95 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
            <span className="text-safety-neon-orange text-sm font-bold uppercase tracking-[0.2em]">
              Sectors
            </span>
            <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
            Providing comprehensive safety solutions across multiple sectors — from manufacturing to mining, we&apos;ve got you covered.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10">
            {[
              "Manufacturing",
              "Construction",
              "Oil & Gas",
              "Mining",
              "Chemicals",
              "Power",
              "Logistics",
            ].map((ind) => (
              <div
                key={ind}
                className="rounded-lg bg-white/5 backdrop-blur-sm px-4 py-4 text-sm font-bold hover:bg-safety-neon-orange hover:text-white transition-all border border-white/10 hover:border-safety-neon-orange hover:scale-105 cursor-pointer uppercase tracking-wide"
              >
                {ind}
              </div>
            ))}
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-safety-neon-orange hover:bg-safety-hivis-yellow text-white hover:text-safety-charcoal font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-xl"
          >
            Explore Industries
          </Link>
        </div>
      </section>

      {/* ═══════ 8. WHY CHOOSE US ═══════ */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
              <span className="text-safety-neon-orange text-sm font-bold uppercase tracking-[0.2em]">
                Our Advantage
              </span>
              <div className="w-10 h-1 bg-safety-neon-orange rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-safety-charcoal uppercase tracking-tight">
              Why Choose SafetyPro?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Assured",
                desc: "All products meet international safety standards and certifications",
                color: "safety-neon-orange",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Trusted Brands",
                desc: "Authorized dealers of leading safety equipment manufacturers",
                color: "safety-hivis-yellow",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Quick Response",
                desc: "24-hour quote turnaround for bulk and custom orders",
                color: "safety-neon-orange",
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Nationwide Delivery",
                desc: "Fast and reliable shipping across the country",
                color: "safety-hivis-yellow",
              },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-${item.color} text-${item.color} mb-4 group-hover:bg-${item.color} group-hover:text-white transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-base text-safety-charcoal mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 9. CTA BANNER ═══════ */}
      <section className="bg-safety-neon-orange py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase tracking-tight">
                Need a Custom Quote?
              </h2>
              <p className="text-white/80 text-lg">
                Send us your requirements. We respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-safety-charcoal hover:bg-black text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="/bulk-quote"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-safety-charcoal border-2 border-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all"
              >
                Request Bulk Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
