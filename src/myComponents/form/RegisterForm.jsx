import React, { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';
// import { Link } from "react-router-dom"

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, message);
    }

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>SEND A MESSAGE</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                />
                <TextField
                    multiline
                    rows={4}
                    variant='outlined'
                    color='secondary'
                    label="Message"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    fullWidth
                    required
                    sx={{ mb: 4 }}
                />
                <Button variant="outlined" color="secondary" type="submit">Submit</Button>
            </form>
            
        </React.Fragment>
    )
}

export default RegisterForm;
