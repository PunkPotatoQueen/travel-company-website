import React from "react";

const CurrentData = ({ season, temperature, feelsLike, timezone }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4 shadow-md flex flex-col sm:flex-row sm:justify-around items-center space-y-4 sm:space-y-0">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-500">{season}</p>
      </div>

      <div className="text-center">
        <p className="text-2xl font-bold text-cyan-700">
          {temperature ? `${temperature}°C` : "N/A"}
        </p>
        <p className="text-sm text-gray-600">Temperatura Atual</p>
      </div>

      <div className="text-center">
        <p className="text-2xl font-bold text-blue-500">
          {feelsLike ? `${feelsLike}°C` : "N/A"}
        </p>
        <p className="text-sm text-gray-600">Sensação Térmica</p>
      </div>
    </div>
  );
};

export default CurrentData;
