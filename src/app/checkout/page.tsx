// app/checkout/page.tsx
"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Billing Details */}
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Billing Details
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Street Address*"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Apartment, floor, etc. (optional)"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Town/City*"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <label className="flex items-center gap-2 mt-2">
                <input type="checkbox" className="accent-red-500 w-4 h-4" />
                <span className="text-sm text-gray-600">
                  Save this information for faster check-out next time
                </span>
              </label>
            </form>
          </section>

          {/* Order Summary */}
          <section className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>

            <div className="space-y-4">
              {/* Product List */}
              {[
                {
                  name: "LCD Monitor",
                  price: "$650",
                  image: "/produtos/monitor.png",
                },
                {
                  name: "H1 Gamepad",
                  price: "$1100",
                  image: "/produtos/controle.png",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt=""
                      className="w-14 h-14 object-contain rounded-lg"
                    />
                    <p className="text-gray-700">{item.name}</p>
                  </div>
                  <span className="font-medium text-gray-800">
                    {item.price}
                  </span>
                </div>
              ))}

              {/* Totals */}
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Bank</span>
                  <img
                    src="/icones/cartoes.png"
                    alt="cards"
                    className="h-5 ml-2"
                  />
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Cash on delivery</span>
                </label>
              </div>

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm">
                  Apply Coupon
                </button>
              </div>

              {/* Order Button */}
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition">
                Place Order
              </button>
            </div>
          </section>
        </div>

        {/* Estilo adicional via Tailwind custom class */}
        <style jsx>{`
          .input-field {
            @apply w-full border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-400 text-gray-800 placeholder-gray-400;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
