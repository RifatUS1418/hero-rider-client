import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Package = ({ service }) => {
    const { name, price, img } = service;
    return (
        <Grid item xs={4} sm={4} md={6} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 1 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
                <Button sx={{ margin: "20px" }} variant="contained">Payment</Button>
            </Card>
        </Grid>
    );
};

export default Package;