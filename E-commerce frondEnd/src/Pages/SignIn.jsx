import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import React from 'react';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Card } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const apiUrl = import.meta.env.VITE_API_URL;

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
    },
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch(`${apiUrl}/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      navigate('/');
    } else {
      console.error('Signin failed');
    }
  };

  const boxSX = {
    "&:hover": {
      background: '#436859',
      color: '#FBFADA'
    },
  };

  return (
    <>
      <Navbar />
      <Container component="main" sx={{ width: 600 }}>
        <Card
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '350px'
          }}
        >
          <Typography component="h1" variant="h5" color="#12372A">
            Sign in or Sign up
          </Typography>
          <AccountCircleTwoToneIcon fontSize='large' sx={{ mt: 3 }} />
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
                />
              )}
            />
            <Button
              type="submit"
              variant="outlined"
              sx={boxSX}
            >
              Continue
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}
