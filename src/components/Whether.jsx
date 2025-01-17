import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TbFaceIdError } from "react-icons/tb";
import { TbCloudSearch } from "react-icons/tb";

const Whether = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [weekName, setWeekName] = useState("");
  const [error, setError] = useState(null);
  const inputRef = useRef();

  const fetchWeatherData = async (city) => {
    try {
      setError(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios.get(url);

      setWeatherData({
        humidity: data.main.humidity,
        temp: Math.floor(data.main.temp),
        windSpeed: data.wind.speed,
        location: data.name,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const dateString = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const dayName = now.toLocaleDateString("en-US", { weekday: "long" });

      setCurrentTime(timeString);
      setCurrentDate(dateString);
      setWeekName(dayName);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeatherData("Harij");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const city = inputRef?.current?.value.trim();
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    fetchWeatherData(city);
  };

  return (
    <div
      className="flex flex-col md:flex-row font-popins h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('temp2.jpg')` }}
    >
      {/* Left Section */}
      <div className="w-full md:w-8/12 hidden md:flex flex-col md:flex-row justify-between items-center md:items-end bg-black bg-opacity-20 text-gray-200 p-6 md:px-14 md:py-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-4xl md:text-5xl lg:text-6xl ">{currentTime}</div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="text-xl md:text-2xl lg:text-3xl">{currentDate}</div>
            <div className="text-2xl md:text-3xl lg:text-4xl">{weekName}</div>
          </div>
        </div>
        <div className="text-5xl md:text-6xl lg:text-7xl">
          {weatherData && `${weatherData.temp}°C`}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-full md:w-4/12 p-6 flex flex-col items-center bg-black bg-opacity-70">
        <div className="text-white text-6xl md:text-9xl mb-8 mt-4 md:mt-0 md:mb-4">
          {weatherData ? (
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather Icon"
              className="w-32 lg:w-44 h-32 lg:h-44 md:h-40 md:w-40"
            />
          ) : (
            <TbFaceIdError className="w-32 lg:w-44 h-32 lg:h-44 md:h-40 md:w-40"/>
          )}
        </div>

        <form onSubmit={handleSearch} className="w-full max-w-md">
          <div className="relative flex mb-4">
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter city..."
              className="w-full px-2 pb-2 text-lg md:text-xl lg:text-2xl text-gray-300 bg-transparent border-b-2 border-gray-300 outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="py-2 px-4 text-lg md:text-xl lg:text-2xl right-0 text-gray-300 absolute hover:text-gray-400"
            >
              <TbCloudSearch />
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weatherData && (
          <div className="w-full max-w-md px-2 mt-12">
            <h1 className="text-2xl lg:text-3xl font-bold mb-10 md:mb-12 flex items-center justify-center md:justify-end gap-1 text-gray-200">
              <SlLocationPin className="inline text-xl lg:text-2xl" />
              {weatherData.location}
            </h1>
            <ul className="text-gray-300 text-lg lg:text-xl space-y-4">
              <li className="flex items-center justify-between pb-2">
                <span className="font-semibold">Temperature</span>
                <span>{weatherData.temp}°C</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="font-semibold">Humidity</span>
                <span>{weatherData.humidity}%</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="font-semibold">Wind Speed</span>
                <span>{weatherData.windSpeed} m/s</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whether;
