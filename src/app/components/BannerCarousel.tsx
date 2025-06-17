"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    image: "/images/iphone.png",
    logo: "/images/apple.png",
  },
  {
    title: "Smart Watches",
    description: "Exclusive Deals this Week",
    image: "/images/iphone.png",
    logo: "/images/apple.png",
  },
  {
    title: "Laptops 2024",
    description: "Descontos imperdíveis",
    image: "/images/iphone.png",
    logo: "/images/apple.png",
  },
];

export function BannerCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="overflow-hidden rounded-lg relative" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full bg-black text-white px-10 py-14 flex items-center justify-between"
          >
            {/* Texto */}
            <div className="max-w-md space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Image src={slide.logo} alt="Logo" width={20} height={20} />
                <span className="opacity-70">{slide.title}</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                {slide.description}
              </h2>
              <button className="mt-4 text-white underline underline-offset-4 hover:text-gray-300">
                Shop Now →
              </button>
            </div>

            {/* Imagem */}
            <div className="hidden lg:block">
              <Image
                src={slide.image}
                alt={slide.title}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === selectedIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
