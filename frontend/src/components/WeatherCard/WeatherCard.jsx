import React, { useState } from 'react';
import { Container, Typography, Grid, CardContent, CircularProgress, Card, Box, TextField, Button } from '@mui/material';
import { fetchWeatherData } from '../../services/weatherApi';
import Recommendations from '../Recommendations/Recommendations';
import sky1 from "../../assets/sky1.jpg";

const WeatherCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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

    return (
        <div style={{
            backgroundImage: `url(${sky1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            transition: "background-image 0.5s ease-in-out",
        }}>
            <Container>
                <Box>
                    <form onSubmit={handleSearch}>
                        <TextField
                            fullWidth
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name"
                            variant="outlined"
                            sx={{ mb: 2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Search
                        </Button>
                    </form>

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
                                <Card variant="outlined"
                                    sx={{
                                        p: 2,
                                        mb: 2,
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        color: 'black',
                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                    }}>
                                    <CardContent>
                                        <Typography variant="h6">{weatherData.name}, {weatherData.sys.country}</Typography>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                p: 2,
                                                mb: 2,
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                color: 'black',
                                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                            }} >
                                            <Typography variant="h6">Weather Data:</Typography>
                                            <Typography variant="body2">{`Temperature: ${weatherData.main.temp}°C`}</Typography>
                                            <Typography variant="body2">{`Humidity: ${weatherData.main.humidity}%`}</Typography>
                                            <Typography variant="body2">{`Wind Speed: ${weatherData.wind.speed} km/h`}</Typography>
                                            <Typography variant="body2">{weatherData.weather[0].description}</Typography>
                                        </Card>
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
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Container>
        </div>
    );
};

export default WeatherCard;