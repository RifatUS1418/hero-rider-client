import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Package = ({ service }) => {
    const { _id, name, price, img } = service;
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
                <Link to={`/payment/${_id}`}><Button sx={{ margin: "20px" }} variant="contained">Payment</Button></Link>
            </Card>
        </Grid>
    );
};

export default Package;