import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecommendationCard = ({ title, description, imageUrl }) => {
    return (
        <Card sx={{
            maxWidth: 350,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
                sx={{
                    height: "70%",
                    objectFit: "cover"
                }}
            />
            <CardContent
            sx={{
                height: "30%"
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default RecommendationCard;