import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import EventsCarousel from '../components/EventsCarousel'
import { Link } from 'react-router-dom'

const Tournaments = () => {
  return (
    <Box color='white' sx={{margin:"5% 5%"}}>
      <Typography fontSize='30px' fontWeight='bold' color='#1adaa7'>Tournaments</Typography>
      <Stack direction="row"  spacing={3} justifyContent="space-between" flexWrap={{xs:"wrap-reverse", md:'nowrap'}}>
            <Stack mx='auto'>
                <Typography sx={{color:"red",mt:"50px"}}>Get in the game and join the excitement at our sports tournament central!"</Typography>
                
                <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{lg:"3.5rem",sm:"2rem",xs:"1.5rem"}}}>Unleash your inner athlete and compete with the best at our sports tournament hub!</Typography>
                <Link to='#' style={{color: "inherit",textDecoration:"none"}}>
                  <Button variant="contained" sx={{mt:"70px"}}>
                <Typography variant='h5' fontWeight="500">Explore Now</Typography>
                <Typography variant='h5' fontWeight="500">Organise Tournaments</Typography>
                </Button></Link>
            </Stack>
            {/* <Box component='img'  src={HeroImage} width='100%' height="auto" maxWidth={{xs:"400px",md:"600px"}}  alt='hero'/> */}
        </Stack>
      <EventsCarousel/>
    </Box>
  )
}

export default Tournaments