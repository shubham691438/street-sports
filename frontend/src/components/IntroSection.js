import { Typography,Button} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import HeroImage from '../assets/images/heroImage.png'

const IntroSection = () => {
  return (
    <Box sx={{margin:"45px 45px"}}>
        <Stack direction="row" spacing={3} justifyContent="space-between">
            <Stack>
                <Typography sx={{color:"red",mt:"100px"}}>Discover and Join Local Sports Tournaments</Typography>
                <Typography  sx={{color:"white",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{lg:"3.5rem",xs:"2rem",md:"2.5rem"}}}>
                    From Fans to Players <br/> Your Local Sports <br/>Community Awaits!
                </Typography>
                <Button variant="contained" sx={{mt:"70px"}}>
                 <Typography variant='h5' fontWeight="500">SignUp Now</Typography>
                </Button>
            </Stack>
            <img src={HeroImage} width="50%"
  maxWidth="400px"
  height="auto"/>
        </Stack>
    </Box>
  )
}

export default IntroSection