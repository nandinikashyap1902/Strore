import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Divider,Grid,Paper, Typography,InputLabel,MenuItem,FormControl,Select, Button,Card, CardMedia, Rating } from '@mui/material'
import { Sheet, ThemeProvider } from '@mui/joy'
import {Input} from '@mui/material'
//import products from '../Data/products/products'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { createTheme } from '@mui/material'
import ProductsInBag from './ProductsInBag'
import testimonials from '../Data/products/Testimonials'
import { Scrollbar } from 'react-scrollbars-custom'
import Wishlisting from './Wishlisting'
const boxSX = {
  "&:hover": {
    background:'#436850',
    color:'#FBFADA'
  },
};
// const theme = createTheme({
//   palette: {
//     ochre: {
//       main: '#E3D026',
//       light: '#E9DB5D',
//       dark: '#A29415',
//       contrastText: '#242105',
//     },
//   },
// });
const theme = createTheme({
  palette: {
    primary: {
     //light: '#009688',
      main: '#ADBC9F',
     // dark: '#002884',
     // contrastText: '#fff',
    },
  },
});
const styles = makeStyles({
  background:{
      background:"blue"
  },
  btn:{
      position:"relative",
      top:"3px"
  }
})
function ProductDetail() {
  const [dataToSend, setDataToSend] = useState(null);
  const navigate= useNavigate();
  const location = useLocation();
  const { product } = location.state;
  // console.log(product)
  //const[Item,setItem] = useState('');
  const [age, setAge] = React.useState('');
  const classes = styles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function addToCart(product){
    //setItem(product)
    //navigate('/cart',{state:{product:product}})
    //console.log(product)
    setDataToSend(product);
  }
  function addToWishlist(product){
    //setItem(product)
  // navigate('/wishlists',{state:{product:product}})
  return(

    <Wishlisting product={product}></Wishlisting>
  )
  }
  return (
    <>
    <Navbar></Navbar>
    
    <Box sx={{position:'relative',top:'80px',overflow:'hidden'}}>
<Sheet>BreadCrum</Sheet>
<Divider></Divider>
<Grid container m={4} sx={{alignItems:'center',justifyContent:'center'}} spacing={2}>
  <Grid item md={4} xs={12} sm={4} >
<Paper component="img" src={product.image} width="440" ></Paper>
  </Grid>

  <Grid item md={4} xs={12} sm={4} >
    <Box  padding={2} sx={{width:400 }}>
  <Typography variant='h5'>{product.title}</Typography>
  <Divider></Divider>
  <Typography variant='p'>{product.description}</Typography>
<Divider></Divider>
<Typography>Rating</Typography>
<Divider></Divider>

<Box className="price">
<label>Price:</label>
<span> Rs.{product.price}</span>
</Box>
<Box className="Type">
<label>Size:</label>
{/* <span>{product.size}</span> */}
</Box>

<Box className="availablity">
<label>Availability:</label>
<span> In Stock</span>
</Box>

<Box className="price">
<label>Quantity:</label>


<FormControl variant='standard' size="small" sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-label" >Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
         sx={{width:80}}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

</Box>

<Button variant='outlined'onClick={()=>addToCart(product)} >Add To Cart</Button>
<Button variant='outlined'onClick={()=>addToWishlist(product)} sx={{m:2}}>Add To WishList</Button>


</Box>
  </Grid>
</Grid>
{/* <Box sx={{width:500,position:'relative',left:'20%'}} >
<Sheet>Reviews</Sheet>
{
  testimonials.map((item,i)=>{
    return(
      

    <Card key={i} >
      

  <CardMedia component="img" src={item.image} sx={{width:'80px'}}></CardMedia>
  <Rating ></Rating>
  <Typography variant='p'>{item.comment}</Typography>
  <br></br>
  <Typography variant="p">{item.name}</Typography>
      
</Card>
      
    )
    
  })
}
</Box> */}

         <Footer></Footer>
    </Box>
   {
    dataToSend!==null?
    <ProductsInBag product={dataToSend}></ProductsInBag>
    :''
  } 
    </>
  )
}

export default ProductDetail