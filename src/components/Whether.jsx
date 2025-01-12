import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Whether = () => {
  const [whetherData, setWhetherData] = useState(null);
  const inputRef = useRef();

  const handleSearch = async () => {
    const city = inputRef?.current?.value;
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios.get(url);

      if (data.cod !== 200) {
        alert("City not found. Please check the city name.");
        setWhetherData(null); // Reset weather data on error
        return;
      }

      setWhetherData({
        humidity: data.main.humidity,
        temp: Math.floor(data.main.temp),
        windSpeed: data.wind.speed,
        location: data.name,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("something went wrong. Please try again.");
      setWhetherData(null); // Reset weather data on error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-600 to-teal-100 font-fontFamily-sans">
      <div className="w-full max-w-md p-6 bg-slate-300 shadow-lg rounded-xl">
        {/* Search Input */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter city..."
            className="w-full p-3 border rounded-3xl px-4 shadow-sm outline-none focus:ring-1 "
          />
          <button
            onClick={handleSearch}
            className="p-3 bg-white text-teal-800 rounded-3xl hover:bg-gray-100 focus:ring-1 "
          >
            <IoIosSearch size={24} />
          </button>
        </div>

        {/* Weather Info */}
        {whetherData && (
          <div className="text-center">
            {/* Weather Icon */}
            <div className="flex justify-center mb-4">
              <img
                src={`https://openweathermap.org/img/wn/${whetherData.icon}@2x.png`}
                // src={`${whetherData.icon}.png`}
                alt="Weather Icon"
                className="w-20 h-20"
              />
            </div>

            {/* Weather Details */}
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              {whetherData.location}
            </h1>
            <p className="text-5xl font-bold text-teal-600 mb-2">
              {whetherData.temp}°C
            </p>
            <div className="text-gray-600 space-y-1 mt-10 flex justify-between">
              <div className="humidity flex items-center gap-2">
              <img className="h-14 text-black" src="humidity.png" alt="" />
                <p className="text-md">{whetherData.humidity}% <br /> <span className="text-sm">Humidity</span></p>
              </div>
              <div className="wind flex items-center gap-2">
                <img className="h-14" src="wind.png" alt="" />
                <p className="text-md"> {whetherData.windSpeed} m/s <br /> <span className="text-sm"> Wind Speed</span></p>
              </div>
            </div>
          </div>
        )}

        {/* If no weather data */}
        {!whetherData && !inputRef.current?.value && (
          <p className="text-center text-gray-600 mt-4">
            Enter a city to get the weather information.
          </p>
        )}
      </div>
    </div>
  );
};

export default Whether;
