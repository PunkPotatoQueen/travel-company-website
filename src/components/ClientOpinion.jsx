"use client";
import React from "react";

const ClientOpinion = () => {
  const testimonials = [
    {
      name: "Ana Souza",
      role: "Viajante Frequente",
      image: "/images/person1.png",
      feedback:
        "Foi uma experiência incrível! Todos os detalhes da viagem foram bem planejados, e os destinos eram maravilhosos. Recomendo a todos!",
    },
    {
      name: "Carlos Oliveira",
      role: "Explorador de Aventura",
      image: "/images/person2.png",
      feedback:
        "Eu amei a organização e o suporte durante toda a viagem. Definitivamente, uma das melhores viagens da minha vida!",
    },
    {
      name: "Mariana Lima",
      role: "Fotógrafa Amadora",
      image: "/images/person3.png",
      feedback:
        "Os destinos eram perfeitos para capturar fotos incríveis. A equipe foi atenciosa e me ajudou em tudo que precisei. Já estou planejando minha próxima viagem com vocês!",
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="client-opinion">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center" >
            O que nossos clientes dizem:
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-500"
              />
              <h3 className="text-lg font-bold text-gray-700">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientOpinion;
