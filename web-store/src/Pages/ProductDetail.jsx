import React from 'react'
import Navbar from './Navbar'
import { Box,Typography,Divider } from '@mui/material'

function ProductDetail({product}) {
    console.log(product)
  return (
    <>
    <Navbar></Navbar>
    <Box sx={{position:'relative',top:'90px'}}>
<Typography variant='p'>Filters</Typography>
<Divider></Divider>
</Box>
    </>
  )
}

export default ProductDetail