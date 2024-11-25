import { useEffect, useState } from 'react';
import React from 'react';
import Description from './Description';
import { cityNames } from './Description';
import CurrentData from './CurrentData';


const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const [selectedImage, setSelectedImage] = useState('/images/cusco.png');
  const [season, setSeason] = useState('Desconhecida');
  const [cityName, setCity] = useState('');

  const imageLinks = [
    { title: 'Cusco', path: '/images/cusco.png', hemisphere: 'southern' },
    { title: 'Edinburgh', path: '/images/edimburgo.png', hemisphere: 'northern' },
    { title: 'Madrid', path: '/images/madrid.png', hemisphere: 'northern' },
    { title: 'Orlando', path: '/images/orlando.png', hemisphere: 'northern' },
    { title: 'Tokyo', path: '/images/tokyo.png', hemisphere: 'northern' },
  ];

  const allIcons = {
    "01d": "http://openweathermap.org/img/wn/01d@2x.png",
    "01n": "http://openweathermap.org/img/wn/01n@2x.png",
    "02d": "http://openweathermap.org/img/wn/02d@2x.png",
    "02n": "http://openweathermap.org/img/wn/02n@2x.png",
    "03d": "http://openweathermap.org/img/wn/03d@2x.png",
    "03n": "http://openweathermap.org/img/wn/03n@2x.png",
    "04d": "http://openweathermap.org/img/wn/04d@2x.png",
    "04n": "http://openweathermap.org/img/wn/04n@2x.png",
    "09d": "http://openweathermap.org/img/wn/09d@2x.png",
    "09n": "http://openweathermap.org/img/wn/09n@2x.png",
    "10d": "http://openweathermap.org/img/wn/10d@2x.png",
    "10n": "http://openweathermap.org/img/wn/10n@2x.png",
    "11d": "http://openweathermap.org/img/wn/11d@2x.png",
    "11n": "http://openweathermap.org/img/wn/11n@2x.png",
    "13d": "http://openweathermap.org/img/wn/13d@2x.png",
    "13n": "http://openweathermap.org/img/wn/13n@2x.png",
    "50d": "http://openweathermap.org/img/wn/50d@2x.png",
    "50n": "http://openweathermap.org/img/wn/50n@2x.png",
  };

  const determineSeason = (hemisphere) => {
    const currentMonth = new Date().getMonth(); 
    let season = 'Desconhecida';

    if (hemisphere === 'northern') {
      if (currentMonth >= 2 && currentMonth <= 4) season = 'Primavera';
      else if (currentMonth >= 5 && currentMonth <= 7) season = 'Verão';
      else if (currentMonth >= 8 && currentMonth <= 10) season = 'Outono';
      else season = 'Inverno';
    } else if (hemisphere === 'southern') {
      if (currentMonth >= 2 && currentMonth <= 4) season = 'Outono';
      else if (currentMonth >= 5 && currentMonth <= 7) season = 'Inverno';
      else if (currentMonth >= 8 && currentMonth <= 10) season = 'Primavera';
      else season = 'Verão';
    }

    return season;
  };

  const search = async (city, hemisphere) => {
    if (!city) {
      alert("Selecione uma cidade");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
  
      console.log("Dados da API de clima:", data); 
  
      if (response.ok) {
        const icon = allIcons[data.weather?.[0]?.icon] || allIcons["01d"];
        setWeatherData({
          temperature: Math.floor(data.main?.temp ?? 0),
          feels_like: Math.floor(data.main?.feels_like ?? 0),
          name: data.name ?? "Cidade desconhecida",
          icon: icon,
          timezone: data.timezone ?? 0, 
        });
        setSeason(determineSeason(hemisphere)); 
      } else {
        alert(`Erro: ${data.message}`);
        setWeatherData(false);
        setSeason('Desconhecida');
      }
    } catch (error) {
      console.error("Erro ao buscar dados do tempo:", error);
      alert("Ocorreu um erro ao buscar os dados. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    search("Cusco", "southern");
  }, []);

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    const cityData = imageLinks.find((image) => image.title === selectedCity);
    const selectedImagePath = cityData?.path || '/images/cusco.png';
    setCity(selectedCity);
    setSelectedImage(selectedImagePath);
    search(selectedCity, cityData?.hemisphere);
  };
  

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center bg-[#e5ecef]" id="planos">
      <br></br><br></br>
 
    <div className="w-full max-w-6xl p-6 text-center">
      <h1 className="text-3xl font-bold text-cyan-700 mb-6" >
        Veja nossos destinos!
      </h1>
      <div className="flex flex-col items-center space-y-4">

      <select
          id="city"
          name="city"
          className="text-lg text-center py-2 px-4 w-2/3 lg:w-1/3 rounded-lg shadow-md bg-white text-gray-700 font-medium"
          onChange={handleCityChange}
        >
          {imageLinks.map((destination) => (
            <option key={destination.title} value={destination.title} className="text-gray-800">
              {destination.title}
            </option>
          ))}
        </select>

      </div>
    </div>

    <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row lg:items-start lg:space-x-6">
      <div className="flex flex-col flex-1 space-y-4 justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {weatherData?.name}
          </h1>
          <p className="text-sm text-gray-500">
            {weatherData?.timezone ? `Fuso horário: UTC${weatherData.timezone >= 0 ? `+${weatherData.timezone / 3600}` : `${weatherData.timezone / 3600}`}` : "Fuso horário: UTC+0"}
          </p>

            <div className="text-justify">
            <Description city={cityNames.find((link) => link.title === cityName)} />
          </div>
        </div>

        <CurrentData 
          season={season} 
          temperature={weatherData?.temperature} 
          feelsLike={weatherData?.feels_like} 
        />



        <button className="flex items-center justify-center lg:w-1/2 align-middle bg-cyan-300 p-4 rounded-lg shadow w-full hover:bg-cyan-600 hover:bg-opacity-55 transition duration-300">
          <p className="text-lg font-bold text-gray-800">Ver pacotes</p>
          <img src="/images/cart.png" alt="carrinho" className="w-8 ml-2" />
        </button>
      </div>

      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <img
          src={selectedImage}
          alt="Destino selecionado"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
  );
};

export default Weather;
