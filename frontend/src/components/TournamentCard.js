import { Grid,Button,CardActionArea, Stack ,Chip, IconButton} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ChessTournament from '../assets/images/chess-tournament.jpg'

const TournamentCard = () => {
  return (
    <Box >
       <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%',objectFit:'fill'}}>
          <CardActionArea>
          <CardContent>
              <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"} }}>Citywide Chess Championship</Typography>
              <Typography sx={{fontFamily:"sans-serif" , color:'#808080'}} >
              Chess Federation,Jamshedpur, Jharkhand
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={ChessTournament}
                alt="Chess"
                sx={{objectFit:'fill',marginTop:"10px"}}
                
              />
              <Stack direction='row'  mt={3} spacing={2}>
                <Chip label="Jharkhand" color="primary" variant="outlined"/>
                <Chip label="Chess" color="primary" variant="outlined"/>
                <Chip label="single" color="primary" variant="outlined"/>
              </Stack>
              <Stack direction='row'  mt={3} spacing={2}>
                   <Typography color='white'><IconButton><MilitaryTechIcon sx={{color:'#1adaa7'}}/></IconButton>RS 10,000</Typography> 
                   <Typography color='white'><IconButton><PeopleAltIcon sx={{color:'#1adaa7'}}/></IconButton>30 Registered</Typography> 
                   <Typography color='white'><IconButton><AccessTimeFilledIcon sx={{color:'#1adaa7'}}/></IconButton>4 Days Left</Typography>
              </Stack>
          </CardContent>
          </CardActionArea>
      </Card>
    </Box>                
  )
}

export default TournamentCard