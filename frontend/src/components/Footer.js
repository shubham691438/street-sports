import { Grid,IconButton,Link,Typography } from '@mui/material'
import { Box,Stack } from '@mui/system'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import StreetSportsLogo from '../assets/icons/streetSportsLogo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box  sx={{backgroundColor:'#3c3f4a'}} mt='50px'>
        <Grid container justifyContent='space-around'>
            <Grid item xs={10} sm={10} lg={2}   sx={{mt:'30px'}} >
                <Stack alignItems='center'>
                
                    <Box component='img' src={StreetSportsLogo} width={{xs:"175px",sm:"250px"}} alt="street sports logo"/>
                    {/* <Typography sx={{color:"#1adaa7",fontWeight:"bold"}}>Experience the Thrill of Local Sports with Us</Typography> */}
                    
                    <Stack direction='row' color='white' fontSize={20} spacing={2}>
                        <Stack direction='row' color='white' fontSize={20}><CopyrightIcon fontSize='small'/><Typography >{new Date().getFullYear()} Street-Sports</Typography></Stack>
                        <Typography color='white' fontWeight='bold' ><Link href="#" color='inherit' underline='none'>Terms</Link></Typography>
                        <Typography color='white' fontWeight='bold'><Link href="#" color='inherit' underline='none'>Privacy</Link></Typography>
                    </Stack>
                
                </Stack>
            </Grid>
            <Grid item xs={10} sm={3} lg={2}   sx={{mt:'30px'}}>
                <Stack alignItems='center'>
                   <Typography fontWeight='bold' fontSize={25} color='#1adaa7'>Features</Typography> 
                   <Typography color='white'>Tournaments</Typography> 
                   <Typography color='white'>Learn</Typography> 
                   <Typography color='white'>Sports News</Typography>
                   
                </Stack>
            </Grid>
            <Grid item xs={10} sm={3} lg={2}   sx={{mt:'30px'}}>
                <Stack alignItems='center'>
                   <Typography fontWeight='bold' fontSize={25} color='#1adaa7'>Company</Typography> 
                   <Typography color='white'>About</Typography> 
                   <Typography color='white'>Contact Us</Typography> 
                   <Typography color='white'>FAQ</Typography>
                   
                </Stack>
            </Grid>
            <Grid item xs={10} sm={3} lg={2}   sx={{mt:'30px'}}>
            <Stack alignItems='center'>
                   <Typography fontWeight='bold' fontSize={25} color='#1adaa7'>Social</Typography> 
                   <Typography color='white'><IconButton><TwitterIcon sx={{color:'#1adaa7'}}/></IconButton>{" "}Twitter{"  "}</Typography> 
                   <Typography color='white'><IconButton><FacebookIcon sx={{color:'#1adaa7'}}/></IconButton>Facebook</Typography> 
                   <Typography color='white'><IconButton><InstagramIcon sx={{color:'#1adaa7'}}/></IconButton>Instagram</Typography>
            </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer