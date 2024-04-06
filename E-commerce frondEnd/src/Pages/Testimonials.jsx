import { Typography,Box,Grid,Paper, Card, CardMedia, Rating } from '@mui/material'
//import reviewer from '../Images/reviewer.webp'
//import { makeStyles } from '@mui/styles'
import discover from '../Images/discover.jpg'
 import Footer from './Footer';
import Carousel from 'react-material-ui-carousel';
import { NavigateNextTwoTone,NavigateBeforeTwoTone } from '@mui/icons-material';
import { useState } from 'react';
// const boxSX = {
//     "&:hover": {
//         background:'#249268',
//         color:'#E0EBDC'
//     },
//   };
// const styles = makeStyles({
    
//     btn:{
//         position:"relative",
//         top:"5px",
//         color:'#648558',
// border:'4px solid #E0EBDC'
//     },
//     icon:{
//         color:'#648558'
//     }
// })
function Testimonials(reviews) {
    const [value, setValue] = useState(2);
    //console.log(reviews)
    // const classes = styles();
    return (
      <>
      {/* <Grid sx={{'position':'relative'}}> */}
<Typography variant='h5' textAlign={'center'} mt={5} color="#436850" sx={{fontWeight:'bold'}}>Testimonials</Typography>
{/* <Box sx={{border:'2px solid #E0EBDC'}}> */}
<Grid sx={{border:'2px solid #ADBC9F'}} maxWidth='500px' m="auto">
<Carousel autoPlay slide  fullHeightHover={true} NextIcon={<NavigateNextTwoTone/>} PrevIcon={<NavigateBeforeTwoTone/>} indicators >     
{
    reviews?.reviews.map((item ,i)=>{
        return(
            <Grid container  mt={2} spacing={2}  gap={10} key={i} justifyContent='center'>
                <Grid item > 
                <Paper component="img" src={item.image} width="90"></Paper>   
                    </Grid>
            <Grid item>
<Typography variant='h6'>{item.name}</Typography>
            <Typography variant='p' >{item.comment}</Typography>
            <br></br>
            <Rating
            name="read-only"  value={value} onChange={(event, newValue) => {
                setValue(newValue);
              }} readOnly>
            </Rating>
        </Grid>  
</Grid>)})}
</Carousel>
</Grid>
{/* </Box> */}
<Grid container mt={6}>
        <Grid item >
            <Box ml={0} mr={0}>
            <Card>
            <CardMedia component="img" src={discover}></CardMedia>
            </Card>
            </Box>
        </Grid>
     </Grid>
<Footer></Footer>
{/* </Grid> */}
</>
  )
}

export default Testimonials