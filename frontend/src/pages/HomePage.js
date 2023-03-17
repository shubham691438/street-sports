import React from 'react'
import {Box, Typography} from '@mui/material'
import NavBar from '../components/NavBar'
import IntroSection from '../components/IntroSection'
import EventsCarousel from '../components/EventsCarousel'
import Features from '../components/Features'


const HomePage = () => {
  return (
    <Box sx={{ backgroundColor:"#25272e"}}>
    <NavBar/>
    <IntroSection/>
    <EventsCarousel/>
    <Features/>
    </Box>
  )
}

export default HomePage