import React from 'react'
import {Box, Typography} from '@mui/material'
import NavBar from '../components/NavBar'


const HomePage = () => {
  return (
    <Box sx={{padding:"30px 90px" ,minHeight: "100vh", backgroundColor:"#25272e"}}>
    <NavBar/>
    </Box>
  )
}

export default HomePage