"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star } from "lucide-react";

type RelatedProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
};

const relatedProducts: RelatedProduct[] = [
  {
    id: "1",
    name: "HAVIT HV-G92 Gamepad",
    image: "/produtos/controle.png",
    price: 120,
    oldPrice: 160,
    discount: 41,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: "2",
    name: "AK-900 Wired Keyboard",
    image: "/produtos/teclado.png",
    price: 960,
    oldPrice: 1160,
    discount: 16,
    rating: 4,
    reviews: 75,
  },
  {
    id: "3",
    name: "IPS LCD Gaming Monitor",
    image: "/produtos/monitor.png",
    price: 370,
    oldPrice: 400,
    discount: 8,
    rating: 4.7,
    reviews: 99,
  },
  {
    id: "4",
    name: "RGB Liquid CPU Cooler",
    image: "/produtos/cooler.png",
    price: 160,
    oldPrice: 170,
    discount: 6,
    rating: 4.3,
    reviews: 65,
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-semibold text-black mb-6 border-l-4 border-red-500 pl-3">
        Produtos Relacionados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/produto/${product.id}`}
            className="group relative bg-gray-50 p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden block"
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
        </Link>
        ))}
      </div>
    </section>
  );
}
