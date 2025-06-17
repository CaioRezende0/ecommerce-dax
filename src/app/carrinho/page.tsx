"use client";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      name: "LCD Monitor",
      image: "/produtos/monitor.png",
      price: 650,
      quantity: 1,
    },
    {
      id: "2",
      name: "HI Gamepad",
      image: "/produtos/controle.png",
      price: 550,
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id: string, value: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12 bg-white text-gray-800 font-sans">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          Home / <span className="text-gray-600">Cart</span>
        </nav>

        {/* Tabela de Produtos */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead className="text-left text-sm text-gray-500">
              <tr>
                <th className="pb-2">Product</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border"
                >
                  <td className="flex items-center gap-4 px-4 py-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </td>
                  <td className="text-sm px-4">${item.price}</td>
                  <td className="px-4">
                    <select
                      className="border rounded px-2 py-1 text-sm"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          0{n}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="text-sm px-4">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ações do Carrinho */}
        <div className="flex justify-between flex-wrap gap-4 mt-10">
          <div className="flex gap-2">
            <button className="border border-gray-400 text-sm px-4 py-2 rounded hover:bg-gray-100 transition">
              Return to Shop
            </button>
            <button className="border border-gray-400 text-sm px-4 py-2 rounded hover:bg-gray-100 transition">
              Update Cart
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-400 px-4 py-2 rounded text-sm"
            />
            <button className="bg-red-500 text-white px-4 py-2 text-sm rounded hover:bg-red-600 transition">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Totais */}
        <div className="max-w-sm ml-auto mt-12 border border-gray-300 rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="text-sm text-gray-700 mb-2 flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="text-sm text-gray-700 mb-4 flex justify-between">
            <span>Shipping:</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="text-base font-semibold text-gray-900 mb-4 flex justify-between">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
