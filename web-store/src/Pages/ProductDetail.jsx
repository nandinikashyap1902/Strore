
import { Sheet } from '@mui/joy';
import Navbar from './Navbar'
import { Box,Typography,Divider } from '@mui/material'
import PropTypes from 'prop-types'
import Grid from '@mui/material';
import Paper from '@mui/material';
import products from '../Data/products/products';
function ProductDetail() {
    // console.log(product[0].id)
  //  console.log('hiii')
  // console.log(product)
  return (
    <>
    <Navbar></Navbar>
    <Box sx={{position:'relative',top:'90px'}}>
<Sheet variant='p'>BreadCrum</Sheet>
<Divider></Divider>
</Box>
<Box>
  <Grid container>
    <Grid item>
<Paper component='img' src={products[0].image} width="300px"></Paper>
    </Grid>
    <Grid item>
<Paper>
    </Grid>
</Grid>
</Box>
    </>
  )
}
 ProductDetail.propTypes = {
  product: PropTypes.array.isRequired // or PropTypes.array.isRequired
};
export default ProductDetail