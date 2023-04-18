import { Typography,Button} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import HeroImage from '../assets/images/heroImage.png'
import { Link } from 'react-router-dom'

const IntroSection = () => {
  return (
    <Box sx={{margin:"45px 45px"}}>
        <Stack direction="row"  spacing={3} justifyContent="space-between" flexWrap={{xs:"wrap-reverse", md:'nowrap'}}>
            <Stack mx='auto'>
                <Typography sx={{color:"red",mt:"100px"}}>Discover and Join Local Sports Tournaments</Typography>
                
                <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{lg:"3.5rem",sm:"2rem",xs:"1.5rem"}}}>From Fans to Players </Typography>
                <Typography  sx={{color:"white",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{lg:"3.5rem",sm:"2rem",xs:"1.5rem"}}}> Your Local Sports <br/>Community Awaits!  </Typography>
                <Link to='/shubh/signup' style={{color: "inherit",textDecoration:"none"}}>
                  <Button variant="contained" sx={{mt:"70px"}}>
                <Typography variant='h5' fontWeight="500">SignUp Now</Typography>
                </Button></Link>
            </Stack>
            <Box component='img'  src={HeroImage} width='100%' height="auto" maxWidth={{xs:"400px",md:"600px"}}  alt='hero'/>
        </Stack>
    </Box>
  )
}

export default IntroSection