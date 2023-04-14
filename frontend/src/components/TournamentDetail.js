import { Grid,Button,CardActionArea, Stack ,Chip, IconButton, Divider} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TournamentCup from '../assets/images/tournament-cup.jpg'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CustomButton from './CustomButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const TournamentDetail = ({tournament}) => {
    
  return (
    <Box mx='10px' marginBottom='5px'>
       <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%',objectFit:'fill'}}>
          <CardContent sx={{border:'2px solid black'}}>
              <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"} }}>{tournament.name}</Typography>
              <Typography sx={{fontFamily:"sans-serif" , color:'#808080'}} >
              <IconButton sx={{color:'primary.main'}}><AccountBalanceIcon/></IconButton>{tournament.organizer.name} ,{tournament.district} ,{tournament.state}
              </Typography>
              
              <Stack direction='row'  mt={3} spacing={1} mb='15px'>
                <Chip label={tournament.state} color="primary" variant="outlined"/>
                <Chip label={tournament.sport} color="primary" variant="outlined"/>
                <Chip label={tournament.schedule.start_date.slice(0, 10)} color="primary" variant="outlined"/>
              </Stack>
              <Divider sx={{backgroundColor:'white'}} />
            
            
            <Stack direction='row' spacing={3} mt='15px' justifyContent='flex-end'>
              <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"} }}>Rs {tournament.participation_fee?tournament.participation_fee:0}</Typography>
              <CustomButton
              backgroundColor="#3392FF"
              color="#fff"
              buttonText="Register"
              heroBtn={true}
            />
            </Stack>
            <Stack direction='row' mt={3} justifyContent='space-between'>
                <Stack spacing={1}>
                <Typography color='white'><IconButton><AccessTimeFilledIcon sx={{color:'#1adaa7'}}/></IconButton>Start : {tournament.schedule.start_date.slice(0, 10)}</Typography>
                <Typography color='white'><IconButton><TimelapseIcon sx={{color:'#1adaa7'}}/></IconButton>Duration : {tournament.schedule.duration}</Typography>
                </Stack>
            <Stack  spacing={1}>
                <Typography color='white'><IconButton><SportsGymnasticsIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.participants.total}+ participants</Typography> 
                <Typography color='white'><IconButton><PeopleAltIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.audience.no_of_audience}+ audience</Typography>
            </Stack>
            </Stack>
            
            <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.2rem"} }} mt='35px'>Eligibility</Typography>
            <Typography color='white'>{tournament.eligibility_criteria}</Typography>

            <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.2rem"} }} mt='35px'>All you need to know about {tournament.name}</Typography>
          </CardContent>
      </Card>
    </Box>          
  )
}

export default TournamentDetail