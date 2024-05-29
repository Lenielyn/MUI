import React, { useState } from 'react';
import { Container, Paper, Typography, Box, TextField, Button, MenuItem, IconButton, InputAdornment } from '@mui/material';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import '../Styles/login.css'; // Ensure the path to your CSS file is correct

export default function SignupPage() {
    const [isError, setIsError] = useState({
        firstName: false,
        lastName: false,
        password: false,
        confirmPassword: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            password: !formData.password,
            confirmPassword: formData.password !== formData.confirmPassword
        };

        setIsError(errors);

        const noErrors = Object.values(errors).every(error => !error);

        if (noErrors) {
            console.log('Form data:', formData);
            // Proceed with form submission or further processing
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <Container
                maxWidth="xs"
                component={Paper}
                sx={{
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h5" gutterBottom>Sign Up</Typography>
                <Box width="100%" mb={2}>
                    <TextField
                        error={isError.firstName}
                        helperText={isError.firstName ? "Invalid First Name" : ""}
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </Box>
                <Box width="100%" mb={2}>
                    <TextField
                        error={isError.lastName}
                        helperText={isError.lastName ? "Invalid Last Name" : ""}
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </Box>
                <Box width="100%" mb={2}>
                    <TextField
                        fullWidth
                        select
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </TextField>
                </Box>
                <Box width="100%" mb={2}>
                    <TextField
                        error={isError.password}
                        helperText={isError.password ? "Invalid Password" : ""}
                        fullWidth
                        label="Password"
                        variant='outlined'
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Box width="100%" mb={2}>
                    <TextField
                        error={isError.confirmPassword}
                        helperText={isError.confirmPassword ? "Passwords do not match" : ""}
                        fullWidth
                        label="Confirm Password"
                        variant='outlined'
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Box width="100%" mt={2}>
                    <Button
                        fullWidth
                        onClick={validate}
                        variant="contained"
                        endIcon={<PersonAddAltRoundedIcon />}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
