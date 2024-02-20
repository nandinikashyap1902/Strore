import * as React from 'react';
 import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import {Paper} from '@mui/material';
import Navbar from './Navbar'
import {Checkbox, Typography,Button, Divider } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';
//import products from '../Data/products/products';
import {FormControl,InputLabel,Select,MenuItem,Input} from '@mui/material';
// import { Margin } from '@mui/icons-material';
// import Checkbox from '@mui/material';
// import { Divider,Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Sheet } from '@mui/joy';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import Footer from './Footer';

const useStyles = makeStyles({
box:{
display:'grid'
},
btn:{
  position:"relative",
  top:"3px"
}
})

function Filters(products) {
  console.log(products)
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
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
<Grid  container spacing={3}>
{products?.products.items.map((item, i) => (
  <Grid item key={i}>
    <Paper component='img' src={item.image} width="300px" key={item.id}></Paper>
    <Typography variant='h6'>{item.title}</Typography>
    <Typography variant='p'>{item.price}</Typography>
  </Grid>
))
}

    </Grid>
</Grid>


</Grid>
<Divider></Divider>
<Footer></Footer>
</Box> 
    </>
  )
}

Filters.prototype={
  products:PropTypes.array.isRequired
}
export default Filters

