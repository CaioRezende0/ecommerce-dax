"use client";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

export function StoreBenefits() {
  const benefits = [
    {
      icon: <Truck size={24} />,
      title: "Rapido e Grátis",
      subtitle: "Entrega rápida e gratuita para todo o Brasil",
    },
    {
      icon: <Headphones size={24} />,
      title: "Assistencia 24/7",
      subtitle: "Atendimento ao cliente 24 horas por dia, 7 dias por semana",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Compra Segura",
      subtitle: "Retorno fácil e seguro em até 30 dias após a compra",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center mb-4 ring-8 ring-gray-300">
              {item.icon}
            </div>
            <h3 className="font-bold text-base text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-[220px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
