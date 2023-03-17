import React from 'react'
import { Box } from '@mui/system'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

const FeatureCard = () => {
  return (
    <Box backgroundColor='#1976d2' color='white'>
        <Card>
            <CardMedia >

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h4' >Tournaments</Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    </Box>
  )
}

export default FeatureCard