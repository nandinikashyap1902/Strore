import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Divider,Grid,Paper, Typography,InputLabel,MenuItem,FormControl,Select, Button,Card } from '@mui/material'
import { Sheet } from '@mui/joy'
import {Input} from '@mui/material'
//import products from '../Data/products/products'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

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
    navigate('/cart',{state:{product:product}})
  }
  function addToWishlist(product){
    //setItem(product)
    navigate('/wishlists',{state:{product:product}})
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
<span>Rs.{product.price}</span>
</Box>

<Box className="Type">
<label>Type:</label>
<span> {product.type}</span>
</Box>

<Box className="availablity">
<label>Availability:</label>
<span>In Stock</span>
</Box>

<Box className="price">
<label>Quantity:</label>
<span>

<FormControl >
        <InputLabel id="demo-simple-select-label" >Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
         sx={{width:80}}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</span>
</Box>
<Button variant='contained'onClick={()=>addToCart(product)}>Add To Cart</Button>
<Button variant='contained'onClick={()=>addToWishlist(product)}>Add To WishList</Button>

</Box>
  </Grid>
</Grid>
<Box sx={{width:500}} >
<Sheet>Reviews</Sheet>
<Divider></Divider>
<Card>

</Card>
</Box>
<Grid container mt={6} ml={1}>
        <Grid item >
                   <TwitterIcon/> 
          </Grid>
                
                <Grid item>

                   <FacebookTwoToneIcon/>
                </Grid>
            
            <Grid item>

                   <InstagramIcon/>
            </Grid>
          </Grid>
          <Grid  ml={1}>

<Typography variant='h6'>Newsletter</Typography>
<Typography variant='p'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</Typography>
<br></br>
<Input placeholder='Email address'></Input>
<Button variant="contained"  className={classes.btn}>Subscribe</Button>
           
</Grid>
    </Box>
    
    </>
  )
}

export default ProductDetail