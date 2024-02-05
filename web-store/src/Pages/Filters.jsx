import * as React from 'react';
 import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Navbar from './Navbar'
import {Typography } from '@mui/material';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import WesternWear from './WesternWear';
import Grid from '@mui/material/Grid';
 import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles';
// import { Margin } from '@mui/icons-material';
// import Checkbox from '@mui/material';
// import { Divider,Container } from '@mui/material';
const useStyles = makeStyles({
box:{
display:'grid'
}

})
function Filters() {
  const classes = useStyles();
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  return (
    <>
<Navbar></Navbar>
<Box sx={{position:'relative',top:'90px',height:700,overflow:'hidden'}}>
<Typography variant='p'>Filters</Typography>
<Divider></Divider>

<Grid container >
  <Grid item sx={{width:'250px'}} xs={12}>
  <Box>
<Card sx={{margin:'4px'}}> 
<List >
  <ListItem sx={{padding:'0'}}>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem sx={{padding:'0'}}>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
  <ListItem sx={{padding:'0'}}>
<ListItemButton>
<ListItemText primary="Inbox" />
</ListItemButton>
  </ListItem>
</List>
</Card>

<Card sx={{margin:'4px'}}> 

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
</List>
</Card>

<Card sx={{margin:'4px'}}> 

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
</List>
</Card>
</Box>
  </Grid>
  
  <Grid item xs={12}>

<Box sx={{position:'relative',bottom:580,left:260}}>

  <WesternWear></WesternWear>
</Box>
  </Grid>
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