import { Grid,Paper,Button,Box, Typography, Tooltip} from '@mui/material'
import img from '../Images/banner-1.webp'
import img1 from "../Images/banner-2.webp"

import img4 from "../Images/banner-4.webp"

import products from '../Data/products/products'
import Testimonials from './Testimonials'
// import cosmetic from '../Images/cosmetic.avif'
import banner3 from '../Images/banner-3.webp'
import { useNavigate } from 'react-router-dom'
import ProductDetail from './ProductDetail';
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import  { tooltipClasses } from '@mui/material/Tooltip';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
// const useStyles = makeStyles({
//   box:{
//     width:'150px'
//   },
//   // gridview:{
//   //   position:'relative',
//   //   top:'10'
//   // }
// })
const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 300,
  },
});
const longText = 

  <>
<ShoppingCartTwoToneIcon/>
<FavoriteBorderTwoToneIcon/>
</>


;

function Middle() {
  const navigate = useNavigate();
  const[list,setLists] = useState([])
  // const[productlists,setproductslists] = useState([])
  // const classes = useStyles();
// useEffect(()=>{
//   const fetchdata = async()=>{
//     const url = 'https://api.escuelajs.co/api/v1/products';
//     const options = {
//       method: 'GET',
      
//     };
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//   // setproductslists(result)
// 	console.log(result.slice(0,10));
// } catch (error) {
// 	console.error(error);
// }
// }
// fetchdata();
// },[])
function showProductDetail(event,i){
  //console.log(i)
  
  setLists(i)
  navigate('/productdetail')
  
}
return (
    <>
    
    <Grid container  spacing={2} ml={4}  mr={4} mt={4}>
      <Grid item >
   
      <Typography variant='h6'>
      Introducing Fashion Collection
      </Typography>
        <Typography variant='p'>
        We are a global housewares product design company.
        </Typography> 
        <br></br>
<Button >Shop Now</Button>
     
      </Grid>

<Grid item >
<Paper component="img" src={img}width={300} ></Paper>
        </Grid>

        <Grid item >
        <Paper component="img" src={img1} width={400}></Paper>
        </Grid>
      </Grid>
          
    <Grid container spacing={4}  ml={4} mt={3} mr={4}>
<Grid item>
  <Paper component="img" src={img4} width={400}>
  </Paper>
</Grid>
<Grid item>
  <Paper component="img" src={banner3} width={300}>

  </Paper>
</Grid>
<Grid item >
<Box >
      <Typography variant='h6'>
      Introducing Fashion Collection
      </Typography>
        <Typography variant='p'>
        We are a global housewares product design company.
        </Typography> 
        <br></br>
<Button >Shop Now</Button>
      </Box>
      </Grid>
    </Grid>
    <Typography variant='h5' textAlign='center'mt={3}>Top Product</Typography>
    <Grid container justifyContent="center" mt={3}>
      <Grid item>
<Button variant='container'>Feature</Button>
      </Grid>
      <Grid item>
<Button>Latest</Button>
      </Grid>
      <Grid item>
<Button>BestSeller</Button>
      </Grid>
    </Grid>
    <Grid container spacing={3} justifyContent="center" mt={3}>
      {products.map((item,i)=>{
        return(
(
<Grid item key={i}  >
  <CustomWidthTooltip title={longText} >

  <Paper component='img' src={item.image} width="300px" key={item.id} 
  onClick={()=>showProductDetail(item)} sx={{cursor:'pointer'}}>
  </Paper>
  </CustomWidthTooltip>
</Grid>
  ))})
}
    </Grid>
   
    <Testimonials></Testimonials>
    {list? <ProductDetail detail={list} />:null}
    </>
  )
}

export default Middle