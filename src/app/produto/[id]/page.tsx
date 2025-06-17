// app/produto/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Star, Heart } from "lucide-react";
import RelatedProducts from "@/app/components/RelatedProducts";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

const mockProduct = {
  id: "1",
  name: "Havic HV G-92 Gamepad",
  description:
    "Controle de alta qualidade com textura confortável, resposta precisa e design moderno. Ideal para sessões intensas de gameplay.",
  price: 192.0,
  oldPrice: 250.0,
  discount: 23,
  rating: 4.5,
  reviews: 50,
  stock: true,
  images: [
    "/produtos/controle.png",
    "/produtos/controle.png",
    "/produtos/controle.png",
    "/produtos/controle.png",
  ],
};

export default function ProductPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(mockProduct.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12 text-white font-sans ">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          Home / Gaming /{" "}
          <span className="text-gray-300">{mockProduct.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Galeria lateral + imagem grande */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:flex-col gap-4">
              {mockProduct.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-lg border-2 p-1 transition ${
                    selectedImage === img
                      ? "border-[#686868]"
                      : "border-transparent hover:border-gray-600"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`thumb-${index}`}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain w-16 h-16"
                  />
                </button>
              ))}
            </div>

            <div className="w-full bg-gray-50 border border-gray-200 shadow-md rounded-xl p-6 flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Imagem principal"
                width={500}
                height={500}
                className="object-contain max-h-[400px] w-full"
              />
            </div>
          </div>

          {/* Detalhes do Produto */}
          <div>
            <h1 className="text-3xl font-semibold mb-2 text-white">
              {mockProduct.name}
            </h1>

            <div className="flex items-center gap-2 mb-4 text-yellow-400 text-sm">
              <Star className="w-4 h-4" />
              {mockProduct.rating}{" "}
              <span className="text-gray-400">
                ({mockProduct.reviews} avaliações)
              </span>
              {mockProduct.stock && (
                <span className="ml-4 text-green-400 font-bold text-xs bg-gray-900 px-2 py-0.5 rounded-full">
                  Em estoque
                </span>
              )}
            </div>

            <div className="mb-6">
              <div className="text-2xl font-bold text-white">
                R$ {mockProduct.price.toFixed(2)}
              </div>
              <div className="flex gap-2 text-sm text-gray-400">
                <span className="line-through">
                  R$ {mockProduct.oldPrice.toFixed(2)}
                </span>
                <span className="text-[#EF4444] font-semibold">
                  -{mockProduct.discount}% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{mockProduct.description}</p>

            {/* Quantidade + Botões */}
            <div className="flex items-center gap-4 mt-6 mb-8">
              <div className="flex items-center border border-gray-600 rounded-md px-4 py-1 bg-[#212121]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-xl px-2"
                >
                  −
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-xl px-2"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-[#00BFFF] hover:bg-[#009edb] text-white py-3 rounded-lg font-semibold transition">
                Comprar Agora
              </button>

              <button className="text-gray-300 hover:text-[#EF4444] transition">
                <Heart />
              </button>
            </div>

            {/* Benefícios */}
            <div className="space-y-3 border-t border-gray-700 pt-5 text-sm text-gray-400">
              <div className="flex gap-2">
                🚚 Entrega grátis para todo o Brasil
              </div>
              <div className="flex gap-2">
                🔁 Devolução gratuita em até 7 dias
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts />
      </main>
      <Footer />
    </>
  );
}
