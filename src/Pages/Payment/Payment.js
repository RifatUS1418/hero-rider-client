import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JxEDDGdxI9HtUGCTiQQRE754YSs8UP37rJNTxFlf6wGN7BYvxVGOrr6pSF8RgOptZ44O3Bhh5fbbG13w73S8VTf00a35mlhAn');

const Payment = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://hidden-refuge-17971.herokuapp.com/packages/payment/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div>
            <h2>Please Pay for: {service.name}</h2>
            <p>Pay: ${service.price}</p>
            {service.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    service={service}
                />
            </Elements>}
        </div>
    );
};

export default Payment;