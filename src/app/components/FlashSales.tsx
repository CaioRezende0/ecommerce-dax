"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heart, Eye, Star } from "lucide-react";

type Product = {
  name: string;
  price: number;
  oldPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
};

const products: Product[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: "/produtos/controle.png",
    rating: 4.5,
    reviews: 88,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: "/produtos/teclado.png",
    rating: 4,
    reviews: 75,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    image: "/produtos/monitor.png",
    rating: 5,
    reviews: 99,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    image: "/produtos/cadeira.png",
    rating: 5,
    reviews: 99,
  },
];

export function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-red-600 font-semibold text-sm">Today's</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-1">Flash Sales</h2>
        </div>
        <div className="flex gap-6 text-center text-sm font-semibold text-gray-700">
          {Object.entries(timeLeft).map(([unit, value], i) => (
            <div key={i}>
              <div className="text-3xl text-black font-bold">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="group relative bg-gray-50 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              -{product.discount}%
            </div>
            <div className="absolute top-3 right-3 flex gap-2">
              <Heart
                size={18}
                className="text-gray-400 hover:text-red-500 cursor-pointer"
              />
              <Eye
                size={18}
                className="text-gray-400 hover:text-black cursor-pointer"
              />
            </div>

            <Image
              src={product.image}
              alt={product.name}
              width={220}
              height={220}
              className="mx-auto my-6 h-32 object-contain"
            />

            <div className="absolute inset-0 flex items-end justify-center p-4 pointer-events-none">
              <button className="bg-black text-white px-5 py-2 text-sm rounded transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-auto shadow-md">
                Add To Cart
              </button>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <div className="text-sm text-red-600 font-bold">
              ${product.price}
              <span className="text-gray-400 line-through ml-2">
                ${product.oldPrice}
              </span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 mt-2 text-xs">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  fill={
                    j < Math.round(product.rating) ? "currentColor" : "none"
                  }
                  stroke="currentColor"
                />
              ))}
              <span className="text-gray-500 ml-2">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
          View All Products
        </button>
      </div>
    </section>
  );
}
