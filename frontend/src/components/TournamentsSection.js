import { Box, Grid,Paper } from '@mui/material'
import React from 'react'
import TournamentCard from './TournamentCard'



const TournamentsSection = () => {
  return (
    <Box sx={{ flexGrow: 1, margin:"45px 45px" }}>
      <Grid container spacing={2}>
        <Grid  xs={6} md={4} >
        <TournamentCard/>
        </Grid>
        <Grid  xs={6} md={8}>
        <Paper variant="outlined" sx={{backgroundColor:'blue'}}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TournamentsSection