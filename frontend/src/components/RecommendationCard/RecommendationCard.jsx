import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecommendationCard = ({ title, description, imageUrl }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
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