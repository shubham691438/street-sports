import { Box } from '@mui/material'
import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box sx={{ backgroundColor:"#25272e"}}>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </Box>
  )
}

export default Layout