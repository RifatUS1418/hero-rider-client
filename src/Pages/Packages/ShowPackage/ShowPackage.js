import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Packages from '../Packages';

const ShowPackage = () => {
    const { user } = useAuth();
    console.log(user);
    const [showPackage, setShowPackage] = useState({});
    console.log(showPackage);
    useEffect(() => {
        fetch(`https://hidden-refuge-17971.herokuapp.com/learnerUser/${user.email}`)
            .then(res => res.json())
            .then(data => setShowPackage(data))
    }, [])

    return (
        <div>
            {
                showPackage && <Packages></Packages>
            }
        </div>
    );
};

export default ShowPackage;