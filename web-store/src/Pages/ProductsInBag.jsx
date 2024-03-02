//import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { Sheet } from '@mui/joy';
import { Box } from '@mui/material';
import {Table,TableBody,TableCell,TableContainer} from '@mui/material';
import{TableHead,TableRow,Paper} from '@mui/material'
import {Button} from '@mui/material';
import PropTypes from 'prop-types'
function ProductsInBag({...product}) {
  //const location = useLocation()
 //const item = {...product.product}
  //const {product} = location.state;
  //console.log(product)
const Image = product.product.image;
console.log(Image)
const Title = product.product.title;
console.log(Title)
const price = product.product.price;
console.log(price)
const Total= product.product.price;
console.log(Total)
  function createData(image, title, price, total) {
    return { image, title, price, total};
  }
  const rows = [
    createData(Image, Title, price,Total),
  ];
  console.log(rows)
  return (
    <>
    <Navbar></Navbar>
    <Box sx={{position:'relative',top:'80px',overflow:'hidden'}}>
    <Sheet>Bread</Sheet>
<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
      <TableCell>Product</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Price</TableCell>
      {/* <TableCell>Quantity</TableCell> */}
      <TableCell>Total</TableCell>
      <TableCell>Remove</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
{/* {product.map(()=>{
  <TableRow>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
<TableCell></TableCell>
  </TableRow>
})} */}
{
rows.map((item,i)=>{
    return(

        <TableRow key={i}>
          <TableCell >
            <Paper component="img" src={item.image} width={80}>
              </Paper></TableCell>
          <TableCell >{item.title}</TableCell>
          <TableCell >{item.price}</TableCell>
          {/* <TableCell >Quantity</TableCell> */}
          <TableCell >{item.total}</TableCell>
          <TableCell ><Button>delete</Button></TableCell>
        </TableRow>     
    )
  })}
    </TableBody>
  </Table>
</TableContainer>
    </Box>
    </>
  )
}
ProductsInBag.prototype={
  product:PropTypes.object.isRequired
}
export default ProductsInBag