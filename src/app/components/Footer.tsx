"use client";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Exclusive</h3>
          <p className="mb-1">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off your first order
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black w-full rounded-full px-4 py-2 text-sm focus:outline-none shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:text-gray-800">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Suporte */}
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>111 Bijoy sarani, Dhaka, Bangladesh</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* Conta */}
        <div>
          <h4 className="font-semibold mb-3">Account</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">
              Login / Register
            </li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-semibold mb-3">Quick Link</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms Of Use</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* App & redes sociais */}
        <div>
          <h4 className="font-semibold mb-3">Download App</h4>
          <p className="text-xs text-gray-400 mb-3">
            Save $3 with App New User Only
          </p>

          <div className="flex gap-4 text-gray-400">
            <Facebook className="hover:text-white cursor-pointer" size={18} />
            <Twitter className="hover:text-white cursor-pointer" size={18} />
            <Instagram className="hover:text-white cursor-pointer" size={18} />
            <Linkedin className="hover:text-white cursor-pointer" size={18} />
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
