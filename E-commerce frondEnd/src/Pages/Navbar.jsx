import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { Outlet,Link } from 'react-router-dom';
import {SearchTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {  Tooltip } from '@mui/material';
import '../CSS/Navbar.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import Input from '@mui/material/Input';
import accessory from '../Data/products/Accessories';
import Bags from '../Data/products/Bags';
import footwear from '../Data/products/Footwear';
import { westernWear } from '../Data/products/westernWear';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const allProducts =[...accessory,...Bags,...footwear,...westernWear];
//console.log(allProducts)
const pages = [ 'Western-wear', 'WomenBags','Footwear','acessories'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {  
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    
  },
}));
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
const darkTheme = createTheme({
  palette: {
    primary: {
     //light: '#009688',
      main: '#ADBC9F',
     // dark: '#002884',
     // contrastText: '#fff',
    },
    
  },
});
const useStyles = makeStyles({
link:{
  textDecoration:'none',
  color:'#12372A',
  
  // "&:hover": {
  //   background:'#249268',
  //   color:'#E0EBDC'
  // },
},
btn:{
  // display: 'block'
},
boxColor:{
  background:'#ADBC9F'
}
})
function ResponsiveAppBar() {
  const classes = useStyles();
  // const bg = theme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);
        if (query.trim() === '') {
            setSearchResults([]); // Clear search results if query is empty
        } else {
            const filteredResults = allProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults.slice(0, 6)); // Limit to first 6 items
        }
};
const handleResultClick = (productId) => {
  // Redirect to the product page using React Router or window.location
  console.log(`Redirecting to product with ID: ${productId}`);
};
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //const navigate = useNavigate();
  //const history = useHistory();
  return (
    <>
    <ThemeProvider theme={darkTheme}>

    
    <AppBar id="AppBar" >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, }} className={classes.boxColor}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#12372A"
            >
              <MenuIcon color=''/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
             >
              <MenuItem  onClick={handleCloseNavMenu}  >
                  <Typography textAlign="center">
                  <Link to='/' className={classes.link}>Home</Link>  
                    </Typography>
                </MenuItem> 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                  <Link to={`/${page}`} className={classes.link}>{page}</Link>  
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button className={classes.btn} my={3} ml={3} 
            sx={boxSX}>
            <Link to='/' className={classes.link}>
            Home
            </Link> 
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className={classes.btn} my={2} ml={3} 
            sx={boxSX}
                >
             <Link to={`/${page}`} className={classes.link}>{page}</Link>  
              </Button>
            ))}
          </Box>
          
          <Input onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
                value={searchQuery} className={classes.link}/>
                 
              <IconButton>
               <SearchTwoTone className={classes.link}/> 
              </IconButton>
             
<Tooltip title={<>
<Link to="/signin" color="inherit">
Sign In
</Link>
<br>
</br>
<Link to="/signup" color="inherit">
            Sign Up
          </Link>
</>}>
              <Link to="/signup">
              <IconButton>
                <PersonTwoToneIcon className={classes.link}/>
              </IconButton>
              </Link>
</Tooltip>

              <Link to="/wishlists">
              <IconButton>
                <StyledBadge badgeContent={3} sx={{fontWeight:'bold'}}>

                <FavoriteBorderTwoToneIcon className={classes.link}/>
                </StyledBadge>
              </IconButton>
</Link>

<Tooltip title="your cart is empty">

<Link to="/cart">
<IconButton>
  
<StyledBadge badgeContent={2}>

                <ShoppingBagTwoToneIcon className={classes.link}/>
</StyledBadge>
  
              </IconButton>
</Link>
</Tooltip>
              
        </Toolbar>
      </Container>
      <Outlet/>
    </AppBar>
    <Grid container width={300}  sx={{backgroundColor:'rgb(173, 188, 159)',position:'absolute', top:'70px',left:'45%', zIndex:2}}>
    
    {searchResults.map((product, index) => (
<Grid item key={index} m={-1}>
        <ListItem
            Buttonbase
            onClick={() => handleResultClick(product.id)}
        >
            <ListItemText primary={product.title} />
        </ListItem>
        </Grid>
    ))}
      </Grid>
      </ThemeProvider>
    </>
  );
}
export default ResponsiveAppBar;