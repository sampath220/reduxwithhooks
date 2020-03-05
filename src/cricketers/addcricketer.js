import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addcricketer, fetchcricketers } from './cricketer.action'
import '../App.css';
import { logout } from '../authenication/authenication.action';
import { Container, CssBaseline, Button, Box, TextField } from '@material-ui/core'
import ViewCricketers from './ViewCricketers';
export default function Addcricketer() {
    let user = useSelector((state) => state.user);
    let cricketers = useSelector((state) => state.cricketerdata.cricketers);
    const [cricketer, setcricketer] = useState({ name: '', country: '' })
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setcricketer({ ...cricketer, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        dispatch(fetchcricketers());
    }, [user.login]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addcricketer(cricketer, user))
        setcricketer({ name: '', country: '' })
    }
    return (
        <Container maxWidth={false} >
            <CssBaseline />
            <Container maxWidth="xl" style={{ backgroundColor: "rgb(239, 241, 243)", height: "100vh", padding: "0.7rem" }}>
                {user.login && <Button color="secondary" style={{
                    "position": "relative",
                    "top": "1rem",
                    "right": "1rem",
                    "float": "right"
                }} variant="contained" onClick={() => dispatch(logout())}>Logout</Button>}
                <br />
                {!user.login ? <Button href="/authentication" color="secondary" variant="contained" >Login</Button> :
                    <Container maxWidth={false} style={{ position: "relative" }}>
                        <Box >
                            <h1>Add your favourite cricketers</h1>
                            <form onSubmit={handleSubmit} style={{ padding: "0.8rem" }}>
                                <Box class={"margin"}><TextField variant="outlined" color="primary" label="Name" size="small" name="name" required value={cricketer.name} onChange={handleChange} /></Box>
                                <Box class={"margin"}><TextField label="Country Name" color="primary" name="country" size="small" variant="outlined" required value={cricketer.country} onChange={handleChange} /></Box>
                                <Box class={"margin"}><Button color="primary" variant="contained" type="submit">Submit</Button></Box>
                            </form>
                        </Box>
                    </Container>
                }
                {/* <Displaycricketers /> */}
                {cricketers.length > 0 ? <Container maxWidth={false}><h2>Cricketers List</h2><ViewCricketers /></Container> : <h1>Cricketers list is empty</h1>}
            </Container>
        </Container>
    )
}
