import Navbar from './Navbar';
import { Grid, Card, CardMedia,Container, ListItemButton, ListItemIcon, ListItemText,Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';

import img from '../Images/slider-1.webp';
import Middle from './Middle';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import { useNavigate } from 'react-router-dom';
//import SignIn from './SignIn';
const useStyles = makeStyles({
  // card: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
    
  // },
  image: {
    marginTop:"81px",
    maxWidth:"100%",
    minWidth:"100%",
  },
  container:{
    width:"100%"
  },
  positioning:{
    margin:'20px',
    display:"flex"
  }
});
function Home() {
  
  const classes = useStyles();

  return (
  <>
  
    <Navbar />
     <Box style={{
      'height': '1000','position':'absolute','overflow':'hidden','left':'0'}} >
    {/* //  <div style={{
    //     'height': '9181','position':'relative','overflow':'hidden','marginLeft':'0px','marginRight':'0px'}}> 
   */}
       {/* <Grid container> */}
        <Grid item lg={12} >

        <Card>
          <CardMedia component="img" 
          image={img} className={classes.image}/>
        </Card>
        </Grid>
      {/* </Grid> */}

      <Grid container sx={{margin:'20px'}}>
        <Grid item md={3} xs={12} sm={6} >
         <ListItemButton style={{'border':'12px'}}>
          <ListItemIcon>
<SendTwoToneIcon/>
          </ListItemIcon>
          <ListItemText primary="Free Shipping Worldwide" />
         </ListItemButton>
</Grid>
<Grid item md={3} xs={12} sm={6}>
         <ListItemButton>
          <ListItemIcon>
<SupportAgentTwoToneIcon/>
          </ListItemIcon>
          <ListItemText primary="24/7 Dedicated Support" />
         </ListItemButton>
</Grid>

<Grid item md={3} xs={12} sm={6}>
         <ListItemButton>
          <ListItemIcon>
<CurrencyRupeeTwoToneIcon/>
          </ListItemIcon>
          <ListItemText primary="Money Back Gaurantee" />
         </ListItemButton>
</Grid>

<Grid item md={3} xs={12} sm={6}>
         <ListItemButton>
          <ListItemIcon>
<CardGiftcardTwoToneIcon/>
          </ListItemIcon>
          <ListItemText primary="Member Discount" />
         </ListItemButton>
        </Grid> 
</Grid>
<Middle></Middle>   
{/* <SignIn></SignIn> */}
        </Box> 
        {/* //  </div> */}
        </>
  );
}

export default Home;
