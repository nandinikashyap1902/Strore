import * as React from 'react';
 import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Navbar from './Navbar'
import {Checkbox, Typography,Button, Divider } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles'
import WesternWear from './WesternWear';
import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';

import {FormControl,InputLabel,Select,MenuItem,Input} from '@mui/material';
// import { Margin } from '@mui/icons-material';
// import Checkbox from '@mui/material';
// import { Divider,Container } from '@mui/material';
import { useState } from 'react';
import { Sheet } from '@mui/joy';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
const useStyles = makeStyles({
box:{
display:'grid'
},
btn:{
  position:"relative",
  top:"3px"
}
})
function Filters() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <>
<Navbar></Navbar>
<Box sx={{position:'relative',top:'90px',overflow:'hidden'}}>
  <Sheet>BreadCrum</Sheet>

<Box m={2}>
<Typography variant='p'>Filters</Typography>
<span>
  <FormControl sx={{float:'right'}}>
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
      </FormControl></span>
</Box>
<Grid container width={2000} >
  <Grid item>

  
<Box className='color' m={3} >

<Card sx={{width:'300px'}} >
  <label>COLOR</label>
<List>
  <ListItem sx={{padding:'0'}}>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>
  <ListItem sx={{padding:'0'}}>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>

  <ListItem sx={{padding:'0'}}>
    <CheckBox></CheckBox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>
</List>
</Card>
 
  
<Card sx={{width:'300px'}}>
  <label>COLOR</label>
<List sx={{padding:'0'}}>
  <ListItem>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>

  <ListItem>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>
  
  <ListItem>
    <CheckBox></CheckBox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>

</List>
</Card>
  
<Card sx={{width:'300px'}}>
  <label>COLOR</label>
<List>
  <ListItem>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>
  <ListItem>
    <Checkbox></Checkbox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>

  <ListItem>
    <CheckBox></CheckBox>
    <Link>
    <span>YELLOW</span>
    </Link>
  </ListItem>
</List>
</Card>
</Box>
</Grid>

<Grid item width={1000}  m={4}>
<WesternWear></WesternWear>
</Grid>


</Grid>
<Divider></Divider>
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

export default Filters

//sx={{position:'relative',top:'70px',height:'10px',width:'100px'}}
{/* <Container sx={{position:'relative',top:'70px',float:'right'}}>
<Box>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{maxWidth:'100px',float:'right'}} >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box>
    <Divider></Divider>
<h1>hii</h1>
    </Box>
    <Card>
hi
    </Card>
</Container> */}

{/* <Grid Container>
<Box container sx={{float:'right'}}>

<WesternWear></WesternWear>
</Box>
<Grid item>
<Box sx={{maxWidth:'200px',Height:'800px',position:'relative',top:'70px'}}>
  <Card>

 
FILTER
<List>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <Divider></Divider>
</List>
</Card>
<Box>
  Price
<List>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <Divider></Divider>
</List>
</Box>

<Box>
Side
<List>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <Divider></Divider>
</List>
</Box>
</Box>
</Grid>
</Grid>
 */}