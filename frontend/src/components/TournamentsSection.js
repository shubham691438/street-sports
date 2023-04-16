import { Box, Grid,Paper, Stack, TableContainer } from '@mui/material'
import React, { useEffect,useState } from 'react'
import TournamentCard from './TournamentCard'
import TournamentDetail from './TournamentDetail'
import { useAuthContext } from '../hooks/useAuthContext'



const TournamentsSection = () => {

  const [tournaments,setTournaments]=useState([]);
  const [currentTournament,setCurrentTournament]=useState(tournaments[0]);
  const [selected,setSelected]=useState(false)
  const [isRegistered,setIsRegistered]=useState(false)
  const {user}=useAuthContext()

  
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

  

  return (
    <Box sx={{ flexGrow: 1, margin:"45px 45px" }}>
      <Grid container spacing={2}>
        <Grid  xs={6} md={4} flexShrink={1}>
        <TableContainer sx={{ maxHeight: 900 }}>
            {
              tournaments.map((tournament,key)=>{
                return(<TournamentCard tournament={tournament} key={key} setCurrentTournament={setCurrentTournament} setSelected={setSelected}/>)
              })
            }
          </TableContainer>
        </Grid>
        <Grid  xs={6} md={8} flexShrink={2}>
        <TableContainer sx={{ maxHeight: 900 }}>
            {currentTournament&&(<TournamentDetail tournament={currentTournament} selected={selected} isRegistered={isRegistered} setIsRegistered={setIsRegistered}/>)}
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TournamentsSection