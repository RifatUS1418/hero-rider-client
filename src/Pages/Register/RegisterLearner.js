import { TextField, Button, Input, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const RegisterLearner = () => {

    const navigate = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [nidImage, setNIDImage] = useState(null);


    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (password !== rePassword) {
            alert('Your password did not match');
            return;
        }

        registerUser(email, password, name, navigate);


        if (!nidImage) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('age', age);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('vehicle', vehicle);
        formData.append('password', password);
        formData.append('rePassword', rePassword);
        formData.append('profileImage', profileImage);
        formData.append('nidImage', nidImage);
        console.log(formData);

        fetch('http://localhost:5000/learnerUser', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("learner added successfully");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }
    return (
        <div>
            {
                !isLoading && <form onSubmit={handleRegisterSubmit}>
                    <TextField
                        sx={{ width: "50%" }}
                        label="Name"
                        name="name"
                        required
                        onChange={e => setName(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Email"
                        required
                        name="email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Age"
                        name="age"
                        onChange={e => setAge(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Address"
                        name="address"
                        onChange={e => setAddress(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Phone"
                        name="phone"
                        onChange={e => setPhone(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Vahicle"
                        name="vehicle"
                        onChange={e => setVehicle(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Password"
                        required
                        name="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        variant="filled" />
                    <br />
                    <TextField
                        sx={{ width: "50%" }}
                        label="Re-password"
                        required
                        name="password2"
                        type="password"
                        onChange={e => setRePassword(e.target.value)}
                        variant="filled" />
                    <br />
                    <Input
                        sx={{ width: "50%" }}
                        accept="image/*"
                        type="file"
                        onChange={e => setProfileImage(e.target.files[0])}
                    />
                    <br />
                    <Input
                        sx={{ width: "50%" }}
                        accept="image/*"
                        type="file"
                        onChange={e => setNIDImage(e.target.files[0])}
                    />
                    <br />
                    <Button
                        sx={{ width: "50%", margin: "20px" }}
                        variant="contained"
                        type="submit">
                        Register
                    </Button>
                </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </div>
    );
};

export default RegisterLearner;