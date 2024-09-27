const genClothing = (temperature, windSpeed, rainIntensity) => {
  if (temperature < 5) {
    return "It's very cold today, wear a heavy coat and multiple layers.";
  } else if (temperature >= 5 && temperature < 15) {
    if (rainIntensity > 0.5) {
      return "Cool weather with rain, wear a raincoat or waterproof jacket today.";
    } else {
      return "Cool weather today, wear a light jacket or sweater.";
    }
  } else if (temperature >= 15 && temperature < 25) {
    if (windSpeed > 15) {
      return "Breezy conditions today, wear a windbreaker or light jacket.";
    } else {
      return " A T-shirt with light layers is sufficient today.";
    }
  } else {
    return "Hot weather today, wear breathable clothing.";
  }
};

export default genClothing;
