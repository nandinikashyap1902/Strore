import { Grid,Paper,Button,Box, Typography, Tooltip, Divider} from '@mui/material'
import img from '../Images/banner-1.webp'
import img1 from "../Images/banner-2.webp"
import img4 from "../Images/banner-4.webp"
import products from '../Data/products/products'
import Testimonials from './Testimonials'
// import cosmetic from '../Images/cosmetic.avif'
import banner3 from '../Images/banner-3.webp'
//import { useNavigate } from 'react-router-dom'
//import ProductDetail from './ProductDetail';
//import { useState } from 'react'
import { styled } from '@mui/material/styles';
import  { tooltipClasses } from '@mui/material/Tooltip';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import testimonials from '../Data/products/Testimonials'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
 import  '../CSS/Navbar.css'
 import { makeStyles } from '@mui/styles'
 import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
const useStyles = makeStyles({
  // box:{
  //   width:'150px'
  // },
  // gridview:{
  //   position:'relative',
  //   top:'10'
  // }
  btn:{
    color:'#648558',
border:'3px solid #E0EBDC',
  },
  head:{
    fontSize:'1.5rem',
    fontWeight:'bold',
    color:'#648558'
  }
})
 const theme = createTheme({
  palette: {
    primary: {
      main: '#436850',
      
    },
    // secondary:{
    //   main: '#436850', 
    // }
  }
})
function Middle() {
  const classes = useStyles();
const  navigate = useNavigate();
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
    },
  })
  const longText = 
    <>
  <ShoppingCartTwoToneIcon />
  <FavoriteBorderTwoToneIcon />
  </>
//     const url = 'https://api.escuelajs.co/api/v1/products';
return (
    <>
    <Grid container  spacing={4} m={5}>
      <Grid item>
   
      <Typography variant='h6' color='#436850' sx={{fontSize:'1.5rem',fontWeight:'bold'}}>
      Introducing Fashion Collection
      </Typography>
        <Typography variant='p'color='#648558' sx={{fontSize:'1.1rem'}}>
        We are a global housewares product design company.
        </Typography> 
        <br></br>
        <ThemeProvider theme={theme}>

 <Button variant='outlined'  >Shop Now</Button> 
        </ThemeProvider>
     {/* <Typography variant="p">shop</Typography> */}
      </Grid>
<Grid item >
<Paper component="img" src={img}width={300} id="img1"></Paper>
        </Grid>
        <Grid item>
        <Paper component="img" src={img1} width={600}></Paper>
        </Grid>
      </Grid> 
    <Grid container spacing={4} m={5}>
<Grid item>
  <Paper component="img" src={img4} width={600}>
  </Paper>
</Grid>
<Grid item>
  <Paper component="img" src={banner3} width={300}>

  </Paper>
</Grid>
<Grid item >
<Box >
      <Typography variant='h6'color='#436850' sx={{fontSize:'1.5rem',fontWeight:'bold'}}>
      Introducing Fashion Collection
      </Typography>
        <Typography variant='p' color='#648558' sx={{fontSize:'1.1rem'}}>
        We are a global housewares product design company.
        </Typography> 
        <br></br>
        

        <ThemeProvider theme={theme}>

<Button  variant='outlined' >Shop Now</Button>
</ThemeProvider>
        
      </Box>
      </Grid>
    </Grid>
    <Typography variant='h5' textAlign='center'mt={3} sx={{fontSize:'1.5rem',fontWeight:'bold',color:'#436850'}}>Top Product</Typography>
    <Divider></Divider>
    {/* <Grid container justifyContent="center" mt={3}>
      <Grid item>
<Button variant='container'>Feature</Button>
      </Grid>
      <Grid item>
<Button>Latest</Button>
      </Grid>
      <Grid item>
<Button>BestSeller</Button>
      </Grid>
    </Grid> */}
    <Grid container spacing={3} justifyContent="center" mt={3}>
      {products.map((item,i)=>{
        return(
(
<Grid item key={i}  >
  <CustomWidthTooltip title={longText} sx={{cursor:'pointer'}}>

  <Paper component='img' src={item.image} width="300px" key={item.id} 
  >
  </Paper>
  </CustomWidthTooltip>
</Grid>
  ))})
}
    </Grid>
    <Testimonials reviews={testimonials}></Testimonials>
    </>
  )
}

export default Middle