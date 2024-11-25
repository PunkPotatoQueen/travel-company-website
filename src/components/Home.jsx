import React from 'react';

const Home = () => {
  return (
    <section className="relative h-screen w-full">

      <div className="w-full h-full">
        <img
          src="/images/bgImage.png"
          alt="Viaje.com logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-20 text-left">
        <div className="max-w-xl"> 
          <h1 className="lg:text-6xl text-4xl font-semibold text-cyan-500 leading-snug">
            Conheça o mundo
          </h1>
          <h1 className="lg:text-6xl text-4xl font-semibold leading-snug">
            com o menor preço!
          </h1>
          <p className="text-lg lg:text-xl text-gray-400 mt-6">
            Explore destinos incríveis e transforme seus sonhos em realidade. Com a gente, você encontra as melhores
            ofertas de viagens, pacotes exclusivos e toda a comodidade para planejar sua próxima aventura. Descubra o
            mundo de forma acessível e sem preocupações!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
