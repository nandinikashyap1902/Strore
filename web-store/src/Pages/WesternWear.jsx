import React from 'react'
import { Box,Grid,Paper } from '@mui/material'
import products from '../Data/products/products'
function WesternWear() {
  return (
    <>
    <Grid  container spacing={4}>
    {products.map((item,i)=>{
        return(
(
<Grid item key={i}  >
  <Paper component='img' src={item.image} width="280px" key={item.id}></Paper>
</Grid>
  ))})
}
    </Grid>
    </>

  )
}

export default WesternWear