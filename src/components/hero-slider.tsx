"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  _id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  order: number;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    _id: "1",
    title: "Personal Protective Equipment (PPE)",
    subtitle:
      "Complete head-to-toe protection solutions. Hard hats, safety gloves, protective eyewear, and more.",
    image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg",
    link: "/category/ppe",
    order: 0,
  },
  {
    _id: "2",
    title: "Fall Protection Equipment",
    subtitle:
      "Safety harnesses, lanyards, and fall arrest systems. Certified for maximum protection.",
    image: "/assets/hero-background/Fall Protection Equipment.jpg",
    link: "/category/fall-protection",
    order: 1,
  },
  {
    _id: "3",
    title: "Fire & Chemical Safety Equipment",
    subtitle:
      "Fire extinguishers, chemical suits, and emergency response equipment.",
    image: "/assets/hero-background/Fire & Chemical Safety Equipment.jpg",
    link: "/category/fire-safety",
    order: 2,
  },
  {
    _id: "4",
    title: "Workplace Safety Signage & Barriers",
    subtitle:
      "Warning signs, barrier tapes, and safety markers for your facility.",
    image: "/assets/hero-background/Workplace Safety Signage & Barriers.jpg",
    link: "/category/signage",
    order: 3,
  },
];

export function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>(DEFAULT_SLIDES);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/hero")
      .then((r) => r.json())
      .then((data) => {
        if (data.slides?.length) setSlides(data.slides);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[index] ?? slides[0];
  if (!slide) return null;

  return (
    <section className="relative w-full overflow-hidden bg-safety-charcoal" style={{ minHeight: "700px" }}>
      {/* Background Image */}
      {slide.image &&
        (slide.image.startsWith("http") || slide.image.startsWith("/")) ? (
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority={index === 0}
          sizes="100vw"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1E1E1E 0%, #0f172a 100%)",
          }}
        />
      )}

      {/* Gradient Overlay — darker left for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[1]" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-12 text-white" style={{ minHeight: "700px" }}>
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-safety-neon-orange text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.2em]">
              Featured Category
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl mb-4 leading-[1.05] uppercase">
            {slide.title}
          </h1>

          {/* Subtitle */}
          {slide.subtitle && (
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-normal">
              {slide.subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {slide.link && (
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.link}
                className="inline-flex items-center gap-2 bg-safety-neon-orange hover:bg-safety-neon-orange/90 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all hover:shadow-[0_0_30px_rgba(255,102,0,0.4)] hover:scale-105"
              >
                Explore More
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/bulk-quote"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all"
              >
                Request Quote
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-safety-neon-orange text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
            onClick={() =>
              setIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-safety-neon-orange text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-3 rounded-full transition-all duration-300",
                  i === index
                    ? "bg-safety-neon-orange w-10"
                    : "bg-white/50 hover:bg-white/80 w-3"
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
