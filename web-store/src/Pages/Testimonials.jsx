import { Typography,Box,Grid,Paper, Card, CardMedia,Input,Button } from '@mui/material'
import reviewer from '../Images/reviewer.webp'
import { makeStyles } from '@mui/styles'
import discover from '../Images/discover.jpg'
 import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
const styles = makeStyles({
    background:{
        background:"blue"
    },
    btn:{
        position:"relative",
        top:"3px"
    }
})
function Testimonials() {
    const classes = styles();
    return (
      <>
      {/* <Grid sx={{'position':'relative'}}> */}

    <Typography variant='h5'  mt={6} textAlign="center">Testimonials</Typography>
    
    <Grid container alignItems="center" justifyContent="center" mt={6} >
        
        <Grid item  > 
<Paper component="img" src={reviewer} width="90">
    
        </Paper>
        
       
</Grid>
<Grid item lg={9} xs={9}>
<Typography variant='p' >A paragraph is a series of 
        sentences that are organized and 
        coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.</Typography>
    <Typography variant='h6'>lara den</Typography>
    <Typography variant='h6'>Developer</Typography>    

</Grid>
       

    </Grid>
   
     <Grid container mt={6}>
        <Grid item >
            <Box ml={0} mr={0}>
            <Card>
            <CardMedia component="img" src={discover}></CardMedia>
            </Card>
            </Box>
        </Grid>
     </Grid>




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
         
        
            

       
          
      {/* </Grid> */}
    </>
  )
}

export default Testimonials