import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import genHatMsg from "../../utility/genHatMsg";
import genShoesMsg from "../../utility/genShoesMsg";
import genAccessories from "../../utility/genAccessories";
import genClothing from "../../utility/genClothing";
import genCoatMsg from "../../utility/genCoatMsg";

const Recommendations = ({ weatherData }) => {
    if (!weatherData) return null;

    const { main, weather, wind } = weatherData;
    const lowestTemp = main.temp_min;
    const windSpeed = wind.speed;
    const weatherDescription = weather[0].description;
    const humidity = main.humidity;
    const rain = weatherData.rain;
    const rainIntensity = rain ? rain["1h"] || rain["3h"] || 0 : 0;

    return (
        <Grid sx={{ mt: 4 }} style={{ display: "flex", justifyContent: "center" }}>
            <Card
                sx={{ maxWidth: 500, backgroundColor: "transparent", boxShadow: "none" }}
            >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Recommendations:
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Hat: {genHatMsg(weatherDescription, windSpeed)}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Clothes: {genClothing(lowestTemp, windSpeed, rainIntensity)}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Jackets: {genCoatMsg(rainIntensity)}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Accessories: {genAccessories(weatherDescription, humidity)}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Shoes: {genShoesMsg(weatherDescription, lowestTemp)}
                </Typography>
            </Card>
        </Grid>
    );
};

export default Recommendations;