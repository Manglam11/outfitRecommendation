import React, { useState } from 'react';
import axios from 'axios';

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const apiKey = '05baa93e8a6fe998324abef258422816'; // Add your OpenWeather API key here

    const getWeather = async (cityName) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            );
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('City not found');
            setWeatherData(null);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            getWeather(city);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Search for Weather</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="border-2 border-gray-300 p-2 w-full rounded-lg mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {weatherData && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">
                        {weatherData.name}, {weatherData.sys.country}
                    </h3>
                    <p>
                        <span className="font-bold">Temperature:</span>{' '}
                        {weatherData.main.temp}°C
                    </p>
                    <p>
                        <span className="font-bold">Visibility:</span> {weatherData.visibility} meters
                    </p>
                    <p>
                        <span className="font-bold">Latitude:</span> {weatherData.coord.lat}
                    </p>
                    <p>
                        <span className="font-bold">Longitude:</span> {weatherData.coord.lon}
                    </p>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
