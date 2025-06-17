"use client";
import Link from "next/link";
import { Heart, Search, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-medium text-gray-800">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black tracking-wide">
          Exclusive
        </Link>

        {/* Navegação */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            href="/"
            className="hover:text-black transition-colors duration-200 border-b-2 font-bold border-black pb-1"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition-colors font-bold duration-200"
          >
            Contato
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 transition-colors font-bold duration-200"
          >
            Sobre
          </Link>
          <Link
            href="/signup"
            className="hover:text-gray-600 transition-colors font-bold duration-200"
          >
            Login
          </Link>
        </nav>

        {/* Busca + Ícones */}
        <div className="flex items-center gap-5">
          {/* Input de busca */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Oque você procura?"
              className="pl-4 pr-10 py-2 rounded-md bg-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Ícones */}
          <Link href="/wishlist">
            <Heart className="w-5 h-5 hover:text-black transition-colors duration-200" />
          </Link>
          <Link href="/carrinho">
            <ShoppingCart className="w-5 h-5 hover:text-black transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </header>
  );
}
