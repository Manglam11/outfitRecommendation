const genAccessories = (weatherDescription, humidity) => {
  if (weatherDescription === "Clear") {
    return "Consider wearing sunglasses and carry some water. Have a great day!";
  } else if (
    weatherDescription === "Rain" ||
    weatherDescription === "Drizzle"
  ) {
    return "Rain expected, an umbrella or raincoat is recommended today. Have a great day!";
  } else if (humidity > 70) {
    return "Humid weather, consider a light hat or scarf today. Have a great day!";
  } else {
    return " Carry a light scarf today. Have a great day!";
  }
};

export default genAccessories;
