import React from 'react'
import { Paper, Button } from '@mui/material'
import { Box } from '@mui/system'

const CarouselCard = (props) => {
  return (
    <Paper >
         <Box component='img' src={props.item.banner}  width='100%' height="auto" maxHeight='350px' loading='lazy'></Box>
    </Paper>
  )
}

export default CarouselCard