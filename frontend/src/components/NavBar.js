import React from 'react'
import { AppBar,Box, Button, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import StreetSportsLogo from '../assets/icons/streetSportsLogo.png'
import { Stack } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import CustomButton  from '../components/CustomButton'

const NavBar = () => {
  const {logout} = useLogout()
  const {user}= useAuthContext()
  const navigate=useNavigate()

  return (
    <AppBar position="sticky">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <IconButton>
                <Box component='img' src={StreetSportsLogo} width={{xs:"175px",sm:"250px"}} alt="street sports logo"/>
            </IconButton>

            <Hidden mdDown>
              <Stack direction="row" spacing={{xs:0,lg:2}} alignContent="center" >
                  <NavLink to='/'   style={{color: "inherit",textDecoration:"none"}}><Button color="inherit" >Home</Button></NavLink>
                  <NavLink to='/tournaments' style={{color: "inherit",textDecoration:"none"}}><Button color="inherit">Tournaments</Button></NavLink>
                  <NavLink to='/learn ' style={{color: "inherit",textDecoration:"none"}}><Button color="inherit">Learn</Button></NavLink>
                  <NavLink to='/sports-news' style={{color: "inherit",textDecoration:"none"}}><Button color="inherit">Sports News</Button></NavLink>
                  <NavLink to='/about-us' style={{color: "inherit",textDecoration:"none"}}><Button color="inherit">About Us</Button></NavLink>
              </Stack>

              {!user && <NavLink to='/login' style={{color: "inherit",textDecoration:"none"}}><Button sx={{backgroundColor:"#3392FF"}} variant='contained'><Typography  >Login</Typography></Button></NavLink>}
              
              {user &&
              <Stack direction='row' spacing={2}>
                <NavLink to='profile' style={{color: "inherit",textDecoration:"none"}}><CustomButton
                  backgroundColor="#3392FF"
                  color="#fff"
                  buttonText={user.name}
                  
            /></NavLink>
                <Button onClick={()=>{logout(); navigate('/')}} sx={{backgroundColor:"#3392FF"}} variant='contained' style={{color: "inherit",textDecoration:"none"}}><Typography  >Log Out</Typography></Button>
              </Stack>}

          
              
            </Hidden>
            <Hidden mdUp>
              <Stack direction='row' spacing={2}>
              {
                user &&
                <Link to='/profile' style={{color: "inherit",textDecoration:"none"}}>
                  <CustomButton
                      backgroundColor="#3392FF"
                      color="#fff"
                      buttonText={user.name}
                    />
                </Link>
              }
            
              <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <IconButton  {...bindTrigger(popupState)}>
                    <MenuIcon fontSize='large'></MenuIcon>
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <Link to='' style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Home</MenuItem></Link>
                    <Link to='/tournaments' style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Tournaments</MenuItem></Link>
                    <Link to='/learn' style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Learn</MenuItem></Link>
                    <Link to='/sports-news' style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Sports News</MenuItem></Link>
                    <Link to='/about-us' style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>About Us</MenuItem></Link>
                    {
                      user && <Link onClick={()=>{logout(); navigate('/')}} style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Logout</MenuItem></Link>
                    }
                    {
                      !user && <Link to='/login'style={{color: "inherit",textDecoration:"none"}}><MenuItem onClick={popupState.close}>Login</MenuItem></Link>
                    }
                    
                  </Menu>
                </>
              )}
            </PopupState>
            </Stack>
            </Hidden>
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar