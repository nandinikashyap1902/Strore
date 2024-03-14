

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React, { useState } from 'react';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

const apiUrl = import.meta.env.VITE_API_URL
export default function Signup() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
  const navigate = useNavigate();
  const navigateHome =()=>{
    navigate('/')
  }
  
 const handleSubmit = async (event) => {
    event.preventDefault();
    let data= new FormData(event.currentTarget);
    // console.log(data)
    // console.log({
    //   email: data.get('email'),
    // });
   // navigate('/signin');
    const response = await fetch(`${apiUrl}/api/signup`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.get('email'),
          password: data.get('password')
        })
      });
      const data1 = await response.json();
      // data.get('email')=""
      // data.get('password')=""
     //console.log(data1)
   data.set('email','')
    data.set('password','')
    console.log(FormData)
  };
  const boxSX = {
    "&:hover": {
      background:'#436859',
      color:'#FBFADA'
    },
  };
  
  return (
    <>
    <Navbar>

</Navbar>
  <Container component="main"  sx={{width:600}} >
    
    <Card
      sx={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height:'350px'
      }}
    >
      <Typography component="h1" variant="h5" color="#12372A">
        Sign in or Sign up
      </Typography>
      <AccountCircleTwoToneIcon fontSize='large'sx={{mt:3}}/>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
         fullWidth
          id="email"
          label="email"
          name="email"
          autoComplete="email"
          autoFocus
         value={FormData.currentTarget}/>
  <Input
        
          required
         fullWidth
          id="password"
          label="Password"
          name="password"
         
          autoFocus
          type='password'
         value={FormData.currentTarget}/>
        <Button
          type="submit"
          
          variant="outlined"
        
          sx={boxSX}
       onSubmit={()=>handleSubmit()} >
          Countinue
        </Button>
      </Box>
    </Card>
  </Container>
    </>
    
   
  );
}