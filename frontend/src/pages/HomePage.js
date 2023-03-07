import React from 'react'
import {Box, Typography} from '@mui/material'
import NavBar from '../components/NavBar'
import IntroSection from '../components/IntroSection'


const HomePage = () => {
  return (
    <Box sx={{minHeight: "100vh", backgroundColor:"#25272e"}}>
    <NavBar/>
    <IntroSection/>
    </Box>
  )
}

export default HomePage