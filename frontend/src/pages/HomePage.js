import React from 'react'
import {Box, Typography} from '@mui/material'
import NavBar from '../components/NavBar'
import IntroSection from '../components/IntroSection'
import CarouselCard from '../components/CarouselCard'


const HomePage = () => {
  return (
    <Box sx={{minHeight: "100vh", backgroundColor:"#25272e"}}>
    <NavBar/>
    <IntroSection/>
    <CarouselCard/>
    </Box>
  )
}

export default HomePage