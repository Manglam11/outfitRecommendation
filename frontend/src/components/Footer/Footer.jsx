import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const teamMembers = [
    {
        name: 'Manglam Dubey',
        github: 'https://github.com/Aryan-Singh02',
        linkedin: 'https://linkedin.com/in/aryan-singh-235a36241/'
    },
    {
        name: 'Aryan Singh',
        github: 'https://github.com/Aryan-Singh02',
        linkedin: 'https://linkedin.com/in/aryan-singh-235a36241/'
    },
    {
        name: 'Lekhendra Kumar Sahu',
        github: 'https://github.com/Aryan-Singh02',
        linkedin: 'https://linkedin.com/in/aryan-singh-235a36241/'
    },
    {
        name: 'Anubhav Singh',
        github: 'https://github.com/Aryan-Singh02',
        linkedin: 'https://linkedin.com/in/aryan-singh-235a36241/'
    },

];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.87)',
                color: 'white',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Hack the Space - MLH Hackathon Project
                        </Typography>
                        <Typography variant="body2">
                            Created with passion by our team of four aspiring developers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom>
                            Our Team
                        </Typography>
                        <Grid container spacing={2}>
                            {teamMembers.map((member, index) => (
                                <Grid item xs={6} key={index}>
                                    <Typography variant="body2">{member.name}</Typography>
                                    <Box>
                                        <Link href={member.github} target="_blank" rel="noopener noreferrer" color="inherit" sx={{ mr: 1 }}>
                                            <GitHub fontSize="small" />
                                        </Link>
                                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" color="inherit">
                                            <LinkedIn fontSize="small" />
                                        </Link>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} Weather Outfit Recommender. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>

    );
};

export default Footer;
