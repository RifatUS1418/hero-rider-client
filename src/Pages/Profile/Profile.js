import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Navber from '../../Shared/Navber/Navber';
import ShowPackage from '../Packages/ShowPackage/ShowPackage';
import { Container } from '@mui/material';

const Profile = () => {
    const { user } = useAuth();
    const [userDetail, setUserDetail] = useState({})
    // console.log(userDetail);
    useEffect(() => {
        fetch(`https://hidden-refuge-17971.herokuapp.com/learnerUser/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data))
    }, [])

    useEffect(() => {
        fetch(`https://hidden-refuge-17971.herokuapp.com/driverUser/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data.user))
    }, [])
    return (
        <div>
            <Navber></Navber>
            <Container>
                <div>
                    <img style={{ width: "200px", borderRadius: "50%" }} src={`data:image/png;base64,${userDetail?.profileImage}`} alt="" />
                    <div>
                        <h2>{user.displayName}</h2>
                        <p>{user.email}</p>
                        <p>{userDetail?.vehicle}</p>
                    </div>
                </div>
            </Container>
            <ShowPackage></ShowPackage>
        </div>
    );
};

export default Profile;