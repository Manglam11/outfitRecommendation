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

    const getRecommendations = () => {
        return recommendationData.filter(item => {
            switch (item.type) {
                case 'hat':
                    return weatherDescription.includes('rain') || temperature < 10 || temperature > 25;
                case 'accessory':
                    return weatherDescription.includes('rain') || weatherDescription.includes('sun') || temperature > 25;
                case 'shoes':
                    return rainIntensity > 0 || temperature < 5 || temperature > 30;
                case 'outerwear':
                    return temperature < 20 || windSpeed > 20 || rainIntensity > 0;
                case 'clothing':
                    return temperature < 10 || temperature > 25 || humidity > 70;
                default:
                    return false;
            }
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