"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Contato</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <textarea
            placeholder="Sua mensagem"
            className="w-full border border-gray-300 rounded-lg p-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Enviar mensagem
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
