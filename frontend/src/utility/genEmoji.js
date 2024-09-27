const genEmoji = (icon) => {
  return {
    "01d": "☀️", // clear sky day
    "01n": "🌕", // clear sky night
    "02d": "⛅️", // few clouds day
    "02n": "🌙", // few clouds night
    "03d": "🌥️", // scattered clouds day
    "03n": "🌥️", // scattered clouds night
    "04d": "☁️", // broken clouds day
    "04n": "☁️", // broken clouds night
    "09d": "🌧️", // shower rain day
    "09n": "🌧️", // shower rain night
    "10d": "🌦️", // rain day
    "10n": "🌧️", // rain night
    "11d": "⛈️", // thunderstorm day
    "11n": "⛈️", // thunderstorm night
    "13d": "🌨️", // snow day
    "13n": "🌨️", // snow night
    "50d": "🌫️", // mist day
    "50n": "🌫️", // mist night
  }[icon];
};

export default genEmoji;
