import { TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Navber from '../../Shared/Navber/Navber';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(loginData)

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, navigate);
        e.preventDefault();
    }

    return (
        <div>
            <Navber></Navber>
            <h1>Please Login</h1>
            <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    label="Your Email"
                    name="email"
                    onBlur={handleOnChange}
                    variant="filled" />
                <br />
                <TextField
                    sx={{ width: '50%', m: 1 }}
                    label="Your Password"
                    type="password"
                    name="password"
                    onBlur={handleOnChange}
                    variant="filled" />
                <br />
                <Button
                    sx={{ width: '50%', m: 1 }} variant="contained"
                    type="submit"
                >Login</Button>
                <br />
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/registerDriver">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
            </form>
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </div>
    );
};

export default Login;