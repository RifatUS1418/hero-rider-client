import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Packages from '../Packages';

const ShowPackage = () => {
    const { user } = useAuth();
    console.log(user);
    const [showPackage, setShowPackage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/learnerUser/${user.email}`)
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