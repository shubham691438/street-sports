import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import StreetSportsLogo from '../assets/icons/streetSportsLogo.png'
import { Stack } from '@mui/system'

const NavBar = () => {
  return (
    <AppBar>
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <IconButton>
                <img src={StreetSportsLogo} width="250px" alt="street sports logo"/>
            </IconButton>

            <Stack direction="row" spacing={1} alignContent="center">
                <Button color="inherit">Home</Button>
                <Button color="inherit">Tournaments</Button>
                <Button color="inherit">Learn</Button>
                <Button color="inherit">Sports News</Button>
                <Button color="inherit">About Us</Button>
            </Stack>

            <Button color="primary" variant='contained'><Typography variant='h5'>Sign Up</Typography></Button>
            
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar