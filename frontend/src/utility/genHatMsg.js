const genHatMsg = (weatherDescription, windSpeed) => {
  if (weatherDescription === "Clear") {
    return "Nice weather today, you might not need a hat today.";
  } else if (
    weatherDescription === "Rain" ||
    weatherDescription === "Drizzle"
  ) {
    return "Rain is expected today, consider bringing a waterproof hat.";
  } else if (windSpeed > 15) {
    return "Windy conditions are expected, a hat or cap can help.";
  } else {
    return "You might consider a hat today but its not mandatory.";
  }
};

export default genHatMsg;
