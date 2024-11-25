"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio de formulário
    setStatus("Enviando...");
    setTimeout(() => {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section className="py-12 bg-gray-50" id="contato" >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
      <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center" >
        Entre em contato
      </h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Escreva sua mensagem aqui..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-cyan-700 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </div>
          {status && (
            <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
