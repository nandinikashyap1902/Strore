//import { Grid,Box, Typography,Button } from '@mui/material'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Grid, Typography,Paper,Box,Button,Card } from '@mui/material';
import { useProductData } from './ProductDetail';
function Wishlisting() {
  const {Item} = useProductData()
  // const location = useLocation();
  // const {product} = location.state;
  console.log(Item)
  return (
    <>
    <Navbar></Navbar>
    
    {/* <Grid container sx={{position:'absolute',top:'90px', justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
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
   </Grid> */}
   <Grid container sx={{position:'relative',top:'90px', justifyContent:'center',alignItems:'center',overflow:'hidden',direction:'row'}}>
<Typography>My wishlist</Typography>
<Grid container m={6} >
<Box>
<Card>
{/* <Paper component='img' src={product.product.image} width={200}></Paper>
<Typography>{product.product.title}</Typography> */}
<Button>Move To Bag</Button>
</Card>
</Box>
</Grid>
   </Grid>
    </>
  )
}

export default Wishlisting