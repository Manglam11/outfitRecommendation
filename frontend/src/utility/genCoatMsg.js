const genCoatMsg = (rainIntensity) => {
  if (rainIntensity > 0.5) {
    return "Heavy rain expected today, bring a waterproof coat or umbrella.";
  } else if (rainIntensity > 0.2) {
    return "Light rain expected today, consider carrying a raincoat or umbrella.";
  } else {
    return "Less chances of rain today, coat is optional.";
  }
};

export default genCoatMsg;
