"use client";

import { BannerCarousel } from "./BannerCarousel";

export function HeroSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-6">
        {/* Sidebar de Categorias */}
        <aside className="w-1/4 hidden md:block border-r border-gray-200 pr-6">
          <ul className="space-y-3 text-gray-800 font-medium">
            <li className="hover:text-black transition-colors cursor-pointer">
              Moda Feminina
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Moda Masculina
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Eletrônicos
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Casas & Acessórios
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Medicina & Saúde
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Esportes & Lazer
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Brinquedos & Bebês
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Computadores & Acessórios
            </li>
            <li className="hover:text-black transition-colors cursor-pointer">
              Beleza & Cuidados Pessoais
            </li>
          </ul>
        </aside>

        <div className="w-full md:w-3/4">
          <BannerCarousel />
        </div>
      </div>
    </section>
  );
}
