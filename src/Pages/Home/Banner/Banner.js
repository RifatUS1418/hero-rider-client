import { Container, Grid } from '@mui/material';
import React from 'react';
// import banner from '../../../images/banner.jpg'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Banner = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Box style={{ position: 'relative' }}>
                    <img src='https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" style={{ width: "100%", filter: "brightness(30%)" }} />
                    <div style={{ width: "100%", position: 'absolute', top: "40%" }}>
                        <Typography style={{ color: 'white' }} variant="h1" component="div" gutterBottom>
                            HERO RIDER
                        </Typography>
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Banner;