"use client";
import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";

const products = [
  {
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    image: "/produtos/jaqueta.png",
    rating: 5,
    reviews: 65,
  },
  {
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    image: "/produtos/bolsa.png",
    rating: 5,
    reviews: 65,
  },
  {
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    image: "/produtos/cooler.png",
    rating: 5,
    reviews: 65,
  },
  {
    name: "Small BookSelf",
    price: 360,
    image: "/produtos/estante.png",
    rating: 5,
    reviews: 65,
  },
];

export function BestSelling() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-red-600 font-semibold text-sm">This Month</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            Best Selling Products
          </h2>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm relative group overflow-hidden hover:shadow-md transition"
          >
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
              {product.oldPrice && (
                <span className="text-gray-400 line-through ml-2">
                  ${product.oldPrice}
                </span>
              )}
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
    </section>
  );
}
