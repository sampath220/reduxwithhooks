import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../authenication/authenication.action'
import { Redirect } from 'react-router-dom';
import { TextField, Box, Button, Container, Typography } from '@material-ui/core'
const Authentication = () => {
    const [user, setuser] = useState({ email: '', password: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginuser(user));
        setuser({ email: '', password: '' })
    }
    let login = useSelector((state) => state.user.login)
    return (
        <Container maxWidth={false}>
            {login ? <Redirect to="/" /> :
                <Container maxWidth={false} style={{ textAlign: 'center' }}>
                    <Typography variant="h4">
                        Enter your login details
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box class={"margin"}><TextField variant="outlined" color="primary" label="Email" size="small" name="email" type="email" required value={user.email} onChange={handleChange} /></Box>
                        <Box class={"margin"}><TextField variant="outlined" color="primary" label="Password" size="small" name="password" type="password" required value={user.password} onChange={handleChange} /></Box>
                        <Box class={"margin"}><Button color="primary" variant="contained" type="submit">Login</Button></Box>
                    </form>
                </Container>
            }
        </Container>
    )
}
export default Authentication;
