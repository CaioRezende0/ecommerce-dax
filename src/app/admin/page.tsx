"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AdminPage() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    preco: "",
    imagem: "",
    estoque: "",
  });

  const fetchProdutos = async () => {
    const res = await fetch("/api/produtos");
    const data = await res.json();
    setProdutos(data);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/produtos", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        preco: parseFloat(form.preco),
        estoque: parseInt(form.estoque),
      }),
    });
    setForm({ nome: "", descricao: "", preco: "", imagem: "", estoque: "" });
    fetchProdutos();
  };

  const deletarProduto = async (id: string) => {
    await fetch(`/api/produtos/${id}`, { method: "DELETE" });
    fetchProdutos();
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Cadastro de Produtos
        </h1>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 space-y-5 mb-10 border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Nome do Produto
              </label>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Preço</label>
              <input
                type="number"
                step="0.01"
                value={form.preco}
                onChange={(e) => setForm({ ...form, preco: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Imagem (URL)
              </label>
              <input
                type="text"
                value={form.imagem}
                onChange={(e) => setForm({ ...form, imagem: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Estoque
              </label>
              <input
                type="number"
                value={form.estoque}
                onChange={(e) => setForm({ ...form, estoque: e.target.value })}
                className="w-full mt-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="w-full mt-1 border border-gray-300 rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Adicionar Produto
          </button>
        </form>

        {/* Lista de produtos */}
        <div className="space-y-4">
          {produtos.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold text-gray-800">{p.nome}</p>
                <p className="text-sm text-gray-500">{p.descricao}</p>
                <p className="text-sm text-gray-700 mt-1">
                  R$ {p.preco.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => deletarProduto(p.id)}
                className="text-red-500 hover:underline text-sm"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
