

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'


export default function SignIn() {
 
  const navigate = useNavigate();
  const navigateHome =()=>{
    navigate('/')
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
     
    });
    navigate('/')
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
          label="Phone no."
          name="email"
          autoComplete="email"
          autoFocus
        />
  
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