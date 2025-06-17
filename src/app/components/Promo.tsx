"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Promo() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-black to-green-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Texto + Timer + Botão */}
        <div className="max-w-lg space-y-6">
          <span className="text-green-400 font-semibold uppercase tracking-wide text-sm">
            Categories
          </span>
          <h2 className="text-4xl font-extrabold leading-tight">
            Enhance Your <br /> Music Experience
          </h2>

          {/* Timer */}
          <div className="flex gap-4 text-black mt-6">
            {[
              { label: "Hours", value: timeLeft.hours },
              { label: "Days", value: timeLeft.days },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-full px-5 py-4 text-center shadow-md w-[80px]"
              >
                <div className="text-xl font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-700 font-medium mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Botão */}
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg">
            Buy Now!
          </button>
        </div>

        {/* Imagem do produto */}
        <div className="w-full max-w-xl">
          <Image
            src="/produtos/jbl-boombox.png"
            alt="JBL Box"
            width={600}
            height={600}
            className="w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
