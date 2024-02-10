import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import { Outlet,Link } from 'react-router-dom';
import {SearchTwoTone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';


const pages = [ 'Western-wear', 'WomenBags','Footwear','acessories'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //const navigate = useNavigate();
  //const history = useHistory();
  return (
    <AppBar color="transparent">
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
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
              <MenuItem  onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                  <Link to='/'>Home</Link>  
                    </Typography>
                </MenuItem> 
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                  <Link to={`/${page}`}>{page}</Link>  
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'black', display: 'block',ml:3 }}>
            <Link to='/'>
            Home
            </Link> 
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',ml:3 }}
              >
             <Link to={`/${page}`}>{page}</Link>  
              </Button>
            ))}
          </Box>
          
              <IconButton>
               <SearchTwoTone/> 
              </IconButton>
             

              <Link to="/signIn">
              <IconButton>
                <PersonTwoToneIcon/>
              </IconButton>
              </Link>

              <Link to="/wishlists">
              <IconButton>
                <FavoriteBorderTwoToneIcon/>
              </IconButton>
</Link>

<Tooltip title="your cart is empty">

<Link to="/Bag">
<IconButton>
                <ShoppingBagTwoToneIcon/>
              </IconButton>
</Link>
</Tooltip>
              
        </Toolbar>
      </Container>
      <Outlet/>
    </AppBar>
  );
}
export default ResponsiveAppBar;