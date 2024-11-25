"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50" id="about-us">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Sobre Nós
        </h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">

          <div className="space-y-4 text-gray-600 text-justify">
            <p>
              Somos apaixonados por criar experiências de viagem inesquecíveis. Com anos de experiência no setor, nossa missão é conectar pessoas aos destinos dos seus sonhos, oferecendo suporte e serviços de alta qualidade.
            </p>
            <p>
              Acreditamos que viajar é mais do que visitar lugares, é sobre criar memórias, descobrir culturas e viver aventuras únicas. Nossa equipe trabalha incansavelmente para planejar cada detalhe, garantindo que sua viagem seja tranquila e extraordinária.
            </p>
            <p>
              Junte-se a nós nessa jornada e descubra o mundo de uma maneira totalmente nova!
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/about-us.png"
              alt="Equipe de Viagem"
              className="rounded-lg shadow-lg w-2/3 h-auto"
            />
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossa Filosofia</h3>
          <div className="grid gap-6 md:grid-cols-3 ">
            <div>
              <h4 className="text-xl font-semibold text-cyan-700 mb-2">Missão</h4>
              <p>
                Oferecer experiências de viagem memoráveis, conectando pessoas aos destinos mais incríveis, com conforto e segurança.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-700 mb-2">Visão</h4>
              <p>
                Ser reconhecidos como líderes no mercado de turismo, proporcionando experiências únicas e inspiradoras.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-700 mb-2">Valores</h4>
              <p>
                Excelência, inovação, sustentabilidade e paixão por transformar sonhos em realidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
