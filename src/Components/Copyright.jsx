import { Typography, Link } from '@mui/material'
import React from 'react'

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Login/Signup
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  )
}
