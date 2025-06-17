"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const categories = [
  { name: "Phones", icon: <Smartphone size={28} /> },
  { name: "Computers", icon: <Monitor size={28} /> },
  { name: "SmartWatch", icon: <Watch size={28} /> },
  { name: "Camera", icon: <Camera size={28} /> },
  { name: "HeadPhones", icon: <Headphones size={28} /> },
  { name: "Gaming", icon: <Gamepad2 size={28} /> },
];

export function CategoriesSection() {
  const [selected, setSelected] = useState("Camera");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Header */}
      <div className="mb-10">
        <span className="text-red-600 font-semibold text-sm">Categories</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          Browse By Category
        </h2>
      </div>

      {/* Categorias */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelected(cat.name)}
            className={`w-36 h-36 flex flex-col items-center justify-center gap-2 border rounded-xl text-sm font-medium transition shadow-sm ${
              selected === cat.name
                ? "bg-red-500 text-white border-red-500"
                : "text-gray-800 hover:bg-red-100"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
}
