import { Container, Box, Paper, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import { Login } from "@mui/icons-material";
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import '../Styles/login.css';

export default function LoginPage() {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        setIsError(false);  // Adjust this as needed to reflect actual validation logic
        navigate("/dashboard");
    };

    return (
        <Container 
            maxWidth="xs" 
            component={Paper} 
            sx={{
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100vh'
            }}
        >
            <Typography sx={{ mb: 2, fontSize: '1.5rem', fontWeight: 'bold' }}>Login</Typography>
            <Box sx={{ mb: 2, width: '100%' }}>
                <TextField 
                    error={isError} 
                    helperText={isError ? "Invalid Email" : ""} 
                    fullWidth 
                    label="Email"
                />
            </Box>
            <Box sx={{ mb: 2, width: '100%' }}>
                <TextField 
                    error={isError} 
                    helperText={isError ? "Invalid Password" : ""} 
                    fullWidth 
                    label="Password" 
                    variant='outlined' 
                    type={showPassword ? 'text' : 'password'}
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
            <Box sx={{ mb: 2, width: '100%' }}>
                <Button 
                    fullWidth 
                    onClick={validate} 
                    variant="contained" 
                    endIcon={<Login />}
                > 
                    Login
                </Button>
            </Box>
            <Typography align="center" sx={{ my: 2 }}>or</Typography>
            <Box sx={{ width: '100%' }}>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Button 
                        size="large" 
                        fullWidth 
                        variant="contained" 
                        endIcon={<PersonAddAltTwoToneIcon />}
                    >
                        Sign Up
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
