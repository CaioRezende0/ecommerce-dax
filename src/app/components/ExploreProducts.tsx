"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Breed Dry Dog Food",
    price: 100,
    image: "/produtos/bolsa.png",
    rating: 4,
    reviews: 35,
  },
  {
    id: "2",
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "/produtos/cadeira.png",
    rating: 5,
    reviews: 95,
  },
  {
    id: "3",
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "/produtos/controle.png",
    rating: 5,
    reviews: 325,
  },
  {
    id: "4",
    name: "Curology Product Set",
    price: 500,
    image: "/produtos/cooler.png",
    rating: 4,
    reviews: 145,
  },
  {
    id: "5",
    name: "Kids Electric Car",
    price: 960,
    image: "/produtos/estante.png",
    rating: 5,
    reviews: 85,
    isNew: true,
    hasColors: true,
  },
  {
    id: "6",
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "/produtos/jaqueta.png",
    rating: 5,
    reviews: 35,
    hasColors: true,
  },
  {
    id: "7",
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "/produtos/jbl-boombox.png",
    rating: 5,
    reviews: 55,
    isNew: true,
    hasColors: true,
  },
  {
    id: "8",
    name: "Quilted Satin Jacket",
    price: 660,
    image: "/produtos/monitor.png",
    rating: 5,
    reviews: 55,
    hasColors: true,
  },
];

export function ExploreProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-red-600 font-semibold text-sm">
            Our Products
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            Explore Our Products
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border hover:bg-gray-100 transition">
            ←
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/produto/${product.id}`}
            className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm relative group overflow-hidden hover:shadow-md transition block"
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

            {product.isNew && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                NEW
              </span>
            )}

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
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mt-1 text-xs">
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

            {product.hasColors && (
              <div className="flex gap-2 mt-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              </div>
            )}
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
          View All Products
        </button>
      </div>
    </section>
  );
}
