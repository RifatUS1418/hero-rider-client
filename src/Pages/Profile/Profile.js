import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navber from '../../Shared/Navber/Navber';
import ShowPackage from '../Packages/ShowPackage/ShowPackage';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);
    const [userDetail, setUserDetail] = useState({})
    console.log(userDetail);
    useEffect(() => {
        fetch(`http://localhost:5000/learnerUser/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data))

        fetch(`http://localhost:5000/driverUser/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data))
    }, [])
    return (
        <div>
            <Navber></Navber>
            <h1>Profile</h1>
            <ShowPackage></ShowPackage>
        </div>
    );
};

export default Profile;