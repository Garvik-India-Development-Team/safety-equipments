"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "Personal Protective Equipment",
    description: "Complete worker safety solutions from head to toe.",
    image: "/images/hero_ppe.png",
    link: "/product/ppe"
  },
  {
    title: "Safety Clothing & Footwear",
    description: "High-visibility and flame-resistant gear for all environments.",
    image: "/images/hero_clothing.png",
    link: "/product/safety-clothing-footwear"
  },
  {
    title: "Fall Protection",
    description: "Crucial harnesses and lifelines for working at heights.",
    image: "/images/hero_fall.png",
    link: "/product/fall-protection"
  },
  {
    title: "Fire & Chemical Safety",
    description: "Emergency prep and hazardous spill rapid response gear.",
    image: "/images/hero_fire.png",
    link: "/product/fire-chemical-safety"
  },
  {
    title: "Emergency Response & First Aid",
    description: "Trauma kits, eyewash stations, and life-saving medical supplies.",
    image: "/images/hero_firstaid.png",
    link: "/product/emergency-response-first-aid"
  },
  {
    title: "Workplace Safety Signage",
    description: "Visual communication and barriers for hazard management.",
    image: "/images/cat_signs.png",
    link: "/product/workplace-safety-signage-barriers"
  },
  {
    title: "Lockout Tagout",
    description: "Secure hazardous energy and LOTO devices.",
    image: "/images/cat_signs.png",
    link: "/product/lockout-tagout"
  },
  {
    title: "Gas Detection & Confined Space",
    description: "Breathe easier with advanced air purification and detection.",
    image: "/images/hero_gas.png",
    link: "/product/gas-detection-confined-space"
  },
  {
    title: "Electrical Safety Equipment",
    description: "Arc flash gear and insulated tools for high-voltage environments.",
    image: "/images/hero_electrical.png",
    link: "/product/electrical-safety-equipment"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-16 group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-2xl transform transition-transform duration-700 translate-y-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black bg-yellow-500 rounded uppercase">
                Featured Categories
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg drop-shadow">
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-yellow-500/30"
              >
                Explore Category
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-black/50 hover:bg-yellow-500 text-white hover:text-black backdrop-blur-sm transition-colors border border-white/20 hover:border-transparent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full bg-black/50 hover:bg-yellow-500 text-white hover:text-black backdrop-blur-sm transition-colors border border-white/20 hover:border-transparent"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-yellow-500 w-8" : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
