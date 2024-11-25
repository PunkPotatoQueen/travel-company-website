import React from 'react'
import { useState } from 'react'

const descDefault = "Cusco, antiga capital do Império Inca, é a porta de entrada para Machu Picchu. A cidade oferece uma mistura de história inca e colonial, com pontos turísticos como a Plaza de Armas e Sacsayhuamán. A culinária local e a beleza das montanhas andinas tornam Cusco um destino cultural e inesquecível."

export const cityNames = [
    {
      title: 'Tokyo',
      description: 'Tóquio é uma fusão única de tradição e modernidade. Desde o histórico templo Senso-ji até os bairros futuristas como Shinjuku, a cidade encanta com suas opções culturais e gastronômicas. A culinária japonesa, os mercados de eletrônicos e os jardins tranquilos oferecem uma experiência inesquecível. Tóquio é uma cidade vibrante e cheia de surpresas.'
    },
    {
      title: 'Edinburgh',
      description: 'Edimburgo combina história e natureza de forma única. A cidade é famosa pelo Castelo de Edimburgo, pela Royal Mile e por seus festivais culturais. Explore suas ruas antigas e aprecie a paisagem de Arthur’s Seat. Com sua atmosfera acolhedora e pubs tradicionais, Edimburgo é um destino encantador e cheio de charme.'
    },
    {
      title: 'Madrid',
      description: 'Madrid é a vibrante capital da Espanha, conhecida por sua rica história e cultura. A cidade é repleta de atrações, como o Museu do Prado e o Palácio Real. Além disso, oferece uma cena gastronômica incrível, com tapas e vinhos locais. À noite, Madrid se transforma com uma vida noturna animada e bairros charmosos como Malasaña e La Latina.'
    },
    {
      title: 'Orlando',
      description: 'Orlando, na Flórida, é o destino perfeito para quem busca diversão. Famosa parques como Disney World e Universal Studios, a cidade também oferece opções de compras, gastronomia variada e belas paisagens naturais. Com clima ensolarado durante a maior parte do ano, Orlando é um lugar onde magia, entretenimento e relaxamento se encontram.'
    } ,
    {
      title: 'Cusco',
      description: 'Cusco, antiga capital do Império Inca, é a porta de entrada para Machu Picchu. A cidade oferece uma mistura de história inca e colonial, com pontos turísticos como a Plaza de Armas e Sacsayhuamán. A culinária local e a beleza das montanhas andinas tornam Cusco um destino cultural e inesquecível.'
    }
  ]

  const Description = ({ city }) => {
    if (!city) {
      return <p>{descDefault}</p>;
    }
  
    return (
      <div className='description'>
        <p>{city.description}</p>
      </div>
    );
  };
  
  
  export default Description 