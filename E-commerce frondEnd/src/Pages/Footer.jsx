import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid,Typography,Input,Button, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles'
import {createTheme} from '@mui/material';
const boxSX = {
        "&:hover": {
            background:'#249268',
            color:'#E0EBDC'
        },
      };
const styles = makeStyles({
    btn:{
        position:"relative",
        top:"5px",
//         color:'#648558',
// border:'3px solid #E0EBDC'
    },
    
    textColor:{
        //color:'#648558'
        color:'#436850'
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
function Footer() {
    const classes = styles();
  return (
   <>
   <Grid container mt={6} ml={1} className={classes.textColor} justifyContent="center" gap={2}>
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
          <Grid container ml={1}  justifyContent="center" textAlign="center">
<Grid item lg={12} sm={4} xs={3} md={12}>

<Typography variant='h6' className={classes.textColor} >Newsletter</Typography>
<Typography variant='p' className={classes.textColor} >You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</Typography>
</Grid>
<Grid item lg={12} sm={4} xs={2} md={12}>

<Input placeholder='Email address'></Input>
<br></br>
<ThemeProvider theme={theme}>

<Button variant="outlined"  className={classes.btn} >Subscribe</Button>
</ThemeProvider>
</Grid>
           
</Grid>
   </>
  )
}

export default Footer
