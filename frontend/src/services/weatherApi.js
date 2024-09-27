// services/weatherApi.js

const API_KEY = "05baa93e8a6fe998324abef258422816";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
export const fetchWeatherData = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
