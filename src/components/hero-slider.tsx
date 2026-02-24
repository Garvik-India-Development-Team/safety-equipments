"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    subtitle: "Complete head-to-toe protection solutions. Hard hats, safety gloves, protective eyewear, and more.",
    image: "/assets/hero-background/Personal Protective Equipment (PPE).jpg",
    link: "/category/ppe",
    order: 0,
  },
  {
    _id: "2",
    title: "Fall Protection Equipment",
    subtitle: "Safety harnesses, lanyards, and fall arrest systems. Certified for maximum protection.",
    image: "/assets/hero-background/Fall Protection Equipment.jpg",
    link: "/category/fall-protection",
    order: 1,
  },
  {
    _id: "3",
    title: "Fire & Chemical Safety Equipment",
    subtitle: "Fire extinguishers, chemical suits, and emergency response equipment.",
    image: "/assets/hero-background/Fire & Chemical Safety Equipment.jpg",
    link: "/category/fire-safety",
    order: 2,
  },
  {
    _id: "4",
    title: "Workplace Safety Signage & Barriers",
    subtitle: "Warning signs, barrier tapes, and safety markers for your facility.",
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
      .catch(() => {});
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const slide = slides[index] ?? slides[0];
  if (!slide) return null;

  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-[1]" />
      {slide.image && (slide.image.startsWith("http") || slide.image.startsWith("/")) ? (
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
          className="absolute inset-0 bg-muted"
          style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)" }}
        />
      )}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-safety-yellow text-safety-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Featured Category
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4 leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {slide.subtitle}
            </p>
          )}
          {slide.link && (
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="safety" className="text-safety-black font-semibold shadow-xl hover:scale-105 transition-transform">
                <Link href={slide.link}>Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-semibold">
                <Link href="/bulk-quote">Request Quote</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <section className="relative h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden bg-gray-900\">
      {slide.link ? (
        <Link href={slide.link} className="block h-full relative">
          {content}
        </Link>
      ) : (
        <div className="h-full relative">{content}</div>
      )}
      {slides.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-xl opacity-80 hover:opacity-100 bg-white/90 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i - 1 + slides.length) % slides.length);
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-xl opacity-80 hover:opacity-100 bg-white/90 backdrop-blur-sm"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % slides.length);
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  i === index ? "bg-safety-yellow w-8" : "bg-white/60 hover:bg-white/80"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
