
import { Grid,Paper, Typography } from '@mui/material'
import products from '../Data/products/products'
function WesternWear() {
  return (
    <>
    <Grid  container spacing={3}>
    {products.map((item,i)=>{
        return(
(
<Grid item key={i}  >
  <Paper component='img' src={item.image} width="300px" key={item.id}></Paper>
  <Typography variant='h6'>{item.title}</Typography>
  <Typography variant='p'>{item.price}</Typography>
</Grid>
  ))})
}
    </Grid>
    </>

  )
}

export default WesternWear