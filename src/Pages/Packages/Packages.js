import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Package from './Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://hidden-refuge-17971.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    packages.map(service => <Package
                        key={service.name}
                        service={service}
                    ></Package>)
                }
            </Grid>
        </div>
    );
};

export default Packages;