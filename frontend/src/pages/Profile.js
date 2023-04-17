import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Avatar, Box, Divider, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import ProfileImge from '../assets/images/profile-image.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TournamentCard from '../components/TournamentCard';

const Profile = () => {
  const {user}=useAuthContext()
  const [msg,setMsg]=useState()

  const [tournaments,setTournaments]=useState([]);
  const [currentTournament,setCurrentTournament]=useState(tournaments[0]);
  const [selected,setSelected]=useState(false)
  const [isRegistered,setIsRegistered]=useState(false)
  
  useEffect(()=>{
    const checkRegistrationStatus=async()=>{
      const response = await fetch('/api/tournaments/registration-status', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          tournament_id:currentTournament._id,
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

  },[currentTournament])
 

  useEffect(()=>{
    const fetchTournaments=async()=>{
      const res= await fetch('/api/tournaments',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
  
      const json= await res.json();
      setTournaments(json)
      setCurrentTournament(json[0])
      
    }

    fetchTournaments()
  },[])


  useEffect(()=>{

    const fetchProfile=async()=>{
      const res=await fetch('/api/user/profile',{
        headers:{
          'Authorization':`Bearer ${user.token}`
        }
      })

      const data= await res.json() 
      setMsg(data.msg);

      //  if(res.ok)
      //  {
        
      //  }
      }

    if(user)
    {
      fetchProfile()
    }
    else
    {
      setMsg(null)
    }

  },[user])

  return (
    <Box sx={{margin:{xs:"80px 10%",sm:"10% 10%"}}}  mt="100px">
      <Paper elevation={2} sx={{backgroundColor:'#3c3f4a',padding:"5% 10%", position:"relative"}} >
        <Stack alignItems='center' sx={{position:'relative',bottom:{xs:'15%',sm:'25%'}}}>
        <Avatar
          alt="profile image"
          src={ProfileImge}
          sx={{ width:{xs:'80px',sm:"150px",lg:'200px'}, height: {xs:'80px',sm:"150px",lg:'200px'} , margin:'auto', position:'absolute',top:{lg:"-150px" ,sm:"-100px",xs:"-60px"}}}
        />
        <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem", md:"2rem"}, marginTop:{xs:"20px",sm:"50px"} }}>{user.name}</Typography>
        <Typography sx={{fontFamily:"sans-serif" , color:'white'}} >Jamshedpur, Jharkhand  </Typography>
        </Stack>
        <Paper elevation={8} sx={{backgroundColor:"#25272e", marginTop:"20px"}}>
            <Typography fontWeight={{sm:'bold'}} sx={{fontFamily:"sans-serif" , color:'white', padding:"15px"}}>I have a deep passion for sports and thrive on the thrill of competition. Over the years, I have participated in several
               cricket tournaments at the city and state level, and I am proud to have been the captain of my school's cricket team. My dedication
                and hard work have helped me achieve success on the field, and I am always eager to take on new challenges and push myself to 
                be the best athlete I can be.
            </Typography>
        </Paper>
      </Paper>

      <Paper elevation={2} sx={{backgroundColor:'#3c3f4a',padding:"5% 5%", marginTop:'30px'}}  >
      <Stack>
       <Box>
      <Typography component='span' color='#1adaa7' fontSize='20px' fontWeight='bold'>Gender</Typography><IconButton><ArrowRightAltIcon sx={{color:'#1adaa7'}} fontSize='large'/></IconButton>
      <Typography component='span' color='white' fontWeight='bold'>Male</Typography>
      </Box> 

      <Box>
      <Typography component='span' color='#1adaa7' fontSize='20px' fontWeight='bold'>Age</Typography><IconButton><ArrowRightAltIcon sx={{color:'#1adaa7'}} fontSize='large'/></IconButton>
      <Typography component='span' color='white' fontWeight='bold'>19 Years</Typography>
      </Box>

      <Box>
      <Typography component='span' color='#1adaa7' fontSize='20px' fontWeight='bold'>Email</Typography><IconButton><ArrowRightAltIcon sx={{color:'#1adaa7'}} fontSize='large'/></IconButton>
      <Typography component='span' color='white' fontWeight='bold'>ayush@gmail.com</Typography>
      </Box>

      <Box>
      <Typography component='span' color='#1adaa7' fontSize='20px' fontWeight='bold'>phone:</Typography><IconButton><ArrowRightAltIcon sx={{color:'#1adaa7'}} fontSize='large'/></IconButton>
      <Typography component='span' color='white' fontWeight='bold'>8875284384</Typography>
      </Box>

      </Stack>  
      </Paper>
      <Paper  elevation={2} sx={{backgroundColor:'#3c3f4a',padding:"5% 5%", marginTop:'30px'}}>
      <Typography  color='#1adaa7' fontSize='30px' fontWeight='bold'>Current Tournament Participation</Typography>
      <Divider sx={{backgroundColor:'white'}} />
        <Grid container spacing={2} sx={{marginTop:"10px"}}>
          
          {
              tournaments.slice(3,5).map((tournament,key)=>{
                return(<Grid item md={6} xs={12}><TournamentCard tournament={tournament} key={key} setCurrentTournament={setCurrentTournament} setSelected={setSelected}/></Grid>)
              })
            }
          
          
        </Grid>
      </Paper>
      <Paper  elevation={2} sx={{backgroundColor:'#3c3f4a',padding:"5% 5%", marginTop:'30px'}}>
      <Typography  color='#1adaa7' fontSize='30px' fontWeight='bold'>Tournament Participation History</Typography>
      <Divider sx={{backgroundColor:'white'}} />
        <Grid container spacing={2} sx={{marginTop:"10px"}}>
          
          {
              tournaments.slice(0,4).map((tournament,key)=>{
                return(<Grid item md={6} xs={12}><TournamentCard tournament={tournament} key={key} setCurrentTournament={setCurrentTournament} setSelected={setSelected}/></Grid>)
              })
            }
          
          
        </Grid>
      </Paper>    

    </Box>
  )
}

export default Profile