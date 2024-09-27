const genShoesMsg = (weatherDescription, lowestTemp) => {
  if (weatherDescription === "Clear") {
    if (lowestTemp > 25) {
      return "Sandals or breathable shoes are recommended.";
    } else {
      return "Any standard shoes are suitable today.";
    }
  } else if (
    weatherDescription === "Rain" ||
    weatherDescription === "Drizzle"
  ) {
    return "Rain is expected today, waterproof or water-resistant shoes are advised.";
  } else {
    return "Nice weather, You can wear any comfortable shoes today.";
  }
};

export default genShoesMsg;
