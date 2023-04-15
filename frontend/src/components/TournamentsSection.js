import { Box, Grid,Paper, Stack, TableContainer } from '@mui/material'
import React, { useEffect,useState } from 'react'
import TournamentCard from './TournamentCard'
import TournamentDetail from './TournamentDetail'
import { Outlet } from 'react-router-dom'



const TournamentsSection = () => {

  const [tournaments,setTournaments]=useState([]);
  const [currentTournament,setCurrentTournament]=useState(tournaments[0]);

 

  useEffect(()=>{
    const fetchTournaments=async()=>{
      const res= await fetch('/api/tournaments',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
  
      const json= await res.json();
      setTournaments(json)
      console.log(json[0])
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
                return(<TournamentCard tournament={tournament} key={key} setCurrentTournament={setCurrentTournament}/>)
              })
            }
          </TableContainer>
        </Grid>
        <Grid  xs={6} md={8} flexShrink={2}>
        <TableContainer sx={{ maxHeight: 900 }}>
            <TournamentDetail tournament={currentTournament} />
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TournamentsSection