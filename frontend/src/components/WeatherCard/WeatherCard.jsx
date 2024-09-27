import React, { useState } from 'react';
import { Container, Typography, Grid, CardContent, CircularProgress, Card, Box, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';
import { fetchWeatherData } from '../../services/weatherApi';
import Recommendations from '../Recommendations/Recommendations';
import sky1 from "../../assets/sky1.jpg";

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCelsius, setIsCelsius] = useState(true);
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (city) {
            setLoading(true);
            setError('');
            try {
                const data = await fetchWeatherData(city);
                setWeatherData(data);
            } catch (err) {
                setError('Failed to fetch weather data. Please try again.');
                setWeatherData(null);
            } finally {
                setLoading(false);
            }
        }
    };

    const convertTemp = (temp) => {
        if (isCelsius) return temp;
        return (temp * 9 / 5) + 32;
    };

    const formatTemp = (temp) => {
        const convertedTemp = convertTemp(temp);
        return `${convertedTemp.toFixed(1)}°${isCelsius ? 'C' : 'F'}`;
    };

    const staticOutfits = [
        { type: 'Hot Weather', description: 'Light, breathable clothing such as shorts and a t-shirt.' },
        { type: 'Cold Weather', description: 'Warm layers including a coat, scarf, and gloves.' },
        { type: 'Rainy Weather', description: 'Waterproof jacket, umbrella, and water-resistant shoes.' },
        { type: 'Mild Weather', description: 'Comfortable clothing like jeans and a light sweater.' },
    ];

    return (
        <div style={{
            backgroundImage: `url(${sky1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            color: "white",
            transition: "background-image 0.5s ease-in-out",
            marginTop: '3rem'
        }}>
            <Container style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <Box my={4}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter city name"
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button
                                onClick={handleSearch}
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {loading && (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                )}

                {error && (
                    <Typography color="error" mt={2}>
                        {error}
                    </Typography>
                )}

                {!weatherData && (
                    <Grid container spacing={3} mt={4}>
                        {staticOutfits.map((outfit, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card variant="outlined"
                                    sx={{
                                        p: 2,
                                        mb: 2,
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'black',
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    }}>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>{outfit.type}</Typography>
                                        <Typography variant="body2">{outfit.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}

                {weatherData && (
                    <Grid container spacing={3} mt={4}>
                        <Grid item xs={12}>
                            <Card variant="outlined"
                                sx={{
                                    p: 2,
                                    mb: 2,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'black',
                                    borderColor: 'rgba(255, 255, 255, 0.5)',
                                }}>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>{weatherData.name}, {weatherData.sys.country}</Typography>
                                    <Typography variant="h6">{weatherData.weather[0].description}</Typography>

                                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                                        <Typography variant="h3">
                                            <WiThermometer /> {formatTemp(weatherData.main.temp)}
                                        </Typography>
                                        <FormControlLabel
                                            control={<Switch checked={isCelsius} onChange={() => setIsCelsius(!isCelsius)} />}
                                            label={isCelsius ? "Celsius" : "Fahrenheit"}
                                        />
                                    </Box>

                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="body1"><WiThermometer /> Feels like: {formatTemp(weatherData.main.feels_like)}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="body1"><WiHumidity /> Humidity: {weatherData.main.humidity}%</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="body1"><WiStrongWind /> Wind: {weatherData.wind.speed} m/s</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="body1"><WiBarometer /> Pressure: {weatherData.main.pressure} hPa</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Box mt={2} display="flex" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setShowRecommendations(!showRecommendations)}
                                >
                                    {showRecommendations ? 'Hide Outfit Recommendations' : 'Show Outfit Recommendations'}
                                </Button>
                            </Box>
                            {showRecommendations && (
                                <Card variant="outlined"
                                    sx={{
                                        p: 2,
                                        mb: 2,
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'black',
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    }}>
                                    <Recommendations weatherData={weatherData} />
                                </Card>
                            )}
                        </Grid>
                    </Grid>
                )}
            </Container>
        </div>
    );
};

export default WeatherCard;