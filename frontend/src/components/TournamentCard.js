import { Grid,Button,CardActionArea, Stack ,Chip, IconButton} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TournamentCup from '../assets/images/tournament-cup.jpg'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const TournamentCard = ({tournament,setCurrentTournament}) => {
  const [selected,setSelected]=useState(false)

  const handleClick=()=>{
    setSelected(true)
    setCurrentTournament(tournament);
  }
  return (
    <Box mx='10px' marginBottom='5px' style={{ border: selected ? '2px solid white' : 'none' }}>
       <Card onClick={handleClick} onBlur={()=>{setSelected(false)}} sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%',objectFit:'fill'}}>
          <CardActionArea>
          <CardContent>
              <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"} }}>{tournament.name}</Typography>
              <Typography sx={{fontFamily:"sans-serif" , color:'#808080'}} >
              {tournament.organizer.name} ,{tournament.district} ,{tournament.state}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={TournamentCup}
                alt="cup"
                sx={{objectFit:'fill',marginTop:"10px"}}
                
              />
              <Stack direction='row'  mt={3} spacing={1} flexWrap='wrap'>
                <Chip label={tournament.state} color="primary" variant="outlined"/>
                <Chip label={tournament.sport} color="primary" variant="outlined"/>
                <Chip label={tournament.schedule.start_date.slice(0, 10)} color="primary" variant="outlined"/>
              </Stack>
              <Stack direction='row'  mt={3} spacing={2}>
                   <Typography color='white'><IconButton><MilitaryTechIcon sx={{color:'#1adaa7'}}/></IconButton>Rs {tournament.prize_pool.first_place+tournament.prize_pool.second_place+tournament.prize_pool.third_place}</Typography> 
                   <Typography color='white'><IconButton><SportsGymnasticsIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.participants.total}+ participants</Typography> 
                   <Typography color='white'><IconButton><PeopleAltIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.audience.no_of_audience}+ audience</Typography>
              </Stack>
          </CardContent>
          </CardActionArea>
      </Card>
    </Box>                
  )
}

export default TournamentCard