import React, { useState } from 'react';
import { Container, Typography, Grid, CardContent, CircularProgress, Card, Box, TextField, Button } from '@mui/material';
import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi';
import Recommendations from '../Recommendations/Recommendations';
import sky1 from "../../assets/sky1.jpg";

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleSearch = async () => {
        if (!city) return;

        setLoading(true);
        setError('');
        setWeatherData(null);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05baa93e8a6fe998324abef258422816&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

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

                {weatherData && (
                    <Grid container spacing={3} mt={4}>
                        <Grid item xs={12}>
                            <Card variant="outlined" sx={{
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
                                            <WiThermometer /> {Math.round(weatherData.main.temp)}°C
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="body1"><WiThermometer /> Feels like: {Math.round(weatherData.main.feels_like)}°C</Typography>
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
                                <Card variant="outlined" sx={{
                                    mt: 2,
                                    p: 2,
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