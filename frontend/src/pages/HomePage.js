import React from 'react'
import {Box, Typography} from '@mui/material'
import NavBar from '../components/NavBar'
import IntroSection from '../components/IntroSection'
import EventsCarousel from '../components/EventsCarousel'


const HomePage = () => {
  return (
    <Box sx={{ backgroundColor:"#25272e"}}>
    <NavBar/>
    <IntroSection/>
    <EventsCarousel/>
    </Box>
  )
}

export default HomePage