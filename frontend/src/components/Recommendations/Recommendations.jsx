import React from "react";
import { Grid, Typography } from "@mui/material";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import recommendationData from "../../data/recommendationData";

const Recommendations = ({ weatherData }) => {
    if (!weatherData) return null;

    const { main, weather, wind } = weatherData;
    const temperature = main.temp;
    const windSpeed = wind.speed;
    const weatherDescription = weather[0].description.toLowerCase();
    const humidity = main.humidity;
    const rain = weatherData.rain;
    const rainIntensity = rain ? rain["1h"] || rain["3h"] || 0 : 0;

    const getWeatherTags = () => {
        const tags = [];

        // Temperature-based tags
        if (temperature < 0) tags.push("very-cold");
        else if (temperature < 10) tags.push("cold");
        else if (temperature < 20) tags.push("cool");
        else if (temperature < 25) tags.push("mild");
        else if (temperature < 30) tags.push("warm");
        else tags.push("hot");

        // Weather condition tags
        if (weatherDescription.includes("rain")) {
            tags.push("rain");
            if (rainIntensity > 7.6) tags.push("heavy-rain");
            else if (rainIntensity > 2.5) tags.push("moderate-rain");
            else tags.push("light-rain");
        }
        if (weatherDescription.includes("snow")) tags.push("snow");
        if (weatherDescription.includes("sun") || weatherDescription.includes("clear")) tags.push("sun");
        if (weatherDescription.includes("cloud")) tags.push("cloudy");

        // Wind-based tags
        if (windSpeed > 10.8) tags.push("windy");

        // Humidity-based tags
        if (humidity > 70) tags.push("humid");

        return tags;
    };

    const getRecommendations = () => {
        const weatherTags = getWeatherTags();
        console.log("Weather Tags:", weatherTags);

        return recommendationData.filter(item => {
            const itemTags = item.tags || [];
            return itemTags.some(tag => weatherTags.includes(tag));
        });
    };

    const recommendations = getRecommendations();

    console.log('Weather Data:', weatherData);
    console.log('Recommendations:', recommendations);

    if (recommendations.length === 0) {
        return <Typography>No specific recommendations for this weather.</Typography>;
    }

    return (
        <Grid container spacing={2}>
            {recommendations.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <RecommendationCard
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Recommendations;