import { Grid,Box, Typography,Button } from '@mui/material'
import Navbar from './Navbar'

function Wishlisting() {
  return (
    <>
    <Navbar></Navbar>
   <Grid container sx={{position:'absolute',top:'90px', justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
<Box 
     sx={{
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height:'350px'
    }} >
<Typography variant='h5'>PLEASE LOG IN</Typography>
<Typography variant='p'>Login to view items in your wishlist.
</Typography>
<Button variant='contained'>LOGIN</Button>
</Box>
   </Grid>
    </>
  )
}

export default Wishlisting