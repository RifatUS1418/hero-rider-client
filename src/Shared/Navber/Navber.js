import React from 'react';
import useAuth from '../../hooks/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    const { user, admin, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hero Rider
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>
                    {admin && <Box>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/makeAdmin'}><Button color="inherit">Make Admin</Button></Link>

                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/driver'}><Button color="inherit">Driver</Button></Link>


                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/learner'}><Button color="inherit">Learner</Button></Link>
                    </Box>}
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/profile">
                                    <Button color="inherit">Profile</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navber;