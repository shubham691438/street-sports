import { Grid,Button,CardActionArea, Stack ,Chip, IconButton, Divider, Paper} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
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
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const TournamentDetail = ({tournament,selected,isRegistered,setIsRegistered}) => {
  const {user}=useAuthContext()
  const navigate=useNavigate()
  

  useEffect(()=>{
    const checkRegistrationStatus=async()=>{
      const response = await fetch('/api/tournaments/registration-status', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          tournament_id:tournament._id,
          email:user.email,
        })
      })
      const json = await response.json()
      console.log(json)

      if(json.msg=="isRegistered")
        setIsRegistered(true)
      else
      {
        setIsRegistered(false)
      }  
    }

    if(user)
    {
      checkRegistrationStatus()
    }

  },[selected])

  const handleRegistration= ()=>{

    // {console.log(user)}
    const register=async()=>{
      const response = await fetch('/api/tournaments/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name:user.name,
          email:user.email,
          tournament_id:tournament._id
        })
      })
      const json = await response.json()
      // console.log(json)
      setIsRegistered(true)
    }

    if(user){
      register();
    }
    else
    {
      navigate('/login')
    }
    
  }
    
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
              buttonText={isRegistered?"You are Registered":"Register"}
              heroBtn={true}
              onClickFunction={handleRegistration}
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
            <Typography color='white'>{tournament.description}</Typography>

            <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.2rem"} }} mt='35px'>Rules</Typography>
            {
                tournament.rules.map((rule,key)=>(
                    <Typography color='white'><IconButton><ArrowRightTwoToneIcon sx={{color:'#1adaa7'}}/></IconButton>{rule}</Typography>
                ))
            }
            
            <Divider sx={{backgroundColor:'white'}} />
            <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.2rem"} }} mt='35px'>Contact Person</Typography>
            <Typography color='white'><IconButton><PersonIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.organizer.contact_person}</Typography>
            <Typography color='white'><IconButton><LocalPhoneIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.organizer.phone}</Typography>
            <Typography color='white'><IconButton><EmailIcon sx={{color:'#1adaa7'}}/></IconButton>{tournament.organizer.email}</Typography>

            <Divider sx={{backgroundColor:'white'}} />
            <Typography sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.2rem"} }} mt='35px'>Reward And Prizes</Typography>
            <Stack spacing={1} mt={3}>
                <Paper elevation={3}  sx={{backgroundColor:'inherit',width:'100%', height:'100px'}}>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography color='white' margin='5px 10px'><IconButton><MilitaryTechTwoToneIcon fontSize='large'  sx={{color:'#1adaa7'}}/></IconButton>Winner</Typography>
                      <Chip  label={"Rs "+tournament.prize_pool.first_place} sx={{marginTop:'20px', marginRight:'20px'}} color="primary" />
                    </Stack>
                </Paper>
                <Paper elevation={3} sx={{backgroundColor:'inherit',width:'100%', height:'100px'}}>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography color='white' margin='5px 10px'><IconButton><MilitaryTechTwoToneIcon fontSize='large'  sx={{color:'#1adaa7'}}/></IconButton>First Runner Up</Typography>
                      <Chip  label={"Rs "+tournament.prize_pool.second_place} sx={{marginTop:'20px', marginRight:'20px'}} color="primary" />
                    </Stack>
                </Paper>
                <Paper elevation={3} sx={{backgroundColor:'inherit',width:'100%', height:'100px'}}>
                    <Stack direction='row' justifyContent='space-between'>
                      <Typography color='white' margin='5px 10px'><IconButton><MilitaryTechTwoToneIcon fontSize='large'  sx={{color:'#1adaa7'}}/></IconButton>Second Runner Up</Typography>
                      <Chip  label={"Rs "+tournament.prize_pool.third_place} sx={{marginTop:'20px', marginRight:'20px'}} color="primary" />
                    </Stack>
                </Paper>
            </Stack>
          </CardContent>
      </Card>
    </Box>          
  )
}

export default TournamentDetail