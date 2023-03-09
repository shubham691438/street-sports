import React from 'react'
import { AppBar, Button, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import StreetSportsLogo from '../assets/icons/streetSportsLogo.png'
import { Stack } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'


const NavBar = () => {
  return (
    <AppBar position="sticky">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <IconButton>
                <img src={StreetSportsLogo} width="250px" alt="street sports logo"/>
            </IconButton>

            <Hidden mdDown>
              <Stack direction="row" spacing={{xs:0,lg:2}} alignContent="center" >
                  <Button color="inherit">Home</Button>
                  <Button color="inherit">Tournaments</Button>
                  <Button color="inherit">Learn</Button>
                  <Button color="inherit">Sports News</Button>
                  <Button color="inherit">About Us</Button>
              </Stack>

              <Button sx={{backgroundColor:"#3392FF"}} variant='contained'><Typography  >Login</Typography></Button>
            </Hidden>
            <Hidden mdUp>
              <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <IconButton  {...bindTrigger(popupState)}>
                    <MenuIcon fontSize='large'></MenuIcon>
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Home</MenuItem>
                    <MenuItem onClick={popupState.close}>Tournaments</MenuItem>
                    <MenuItem onClick={popupState.close}>Learn</MenuItem>
                    <MenuItem onClick={popupState.close}>Sports News</MenuItem>
                    <MenuItem onClick={popupState.close}>Login</MenuItem>
                  </Menu>
                </>
              )}
            </PopupState>
            </Hidden>
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar