import { Grid,Button,CardActionArea } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FeatureCard from './FeatureCard'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TournamentCupImage from '../assets/images/tournament-cup.jpg'
import CoachImage from '../assets/images/coach-image.png'
import OrganiseSportImage from '../assets/images/organise-sport.jpg'
import SportsNewsImage from '../assets/images/sports+news.jpg'

const Features = () => {
  return (
    <Box sx={{margin:"5% 5%"}}  mt="100px">
        <Grid container spacing={5} >
            <Grid item xs={12} sm={4}> 
                <Box  >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white'}}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={TournamentCupImage}
                        alt='tournament-cup'
                        sx={{maxHeight:"360px"}}
                        
                        />
                        <CardContent>
                            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Participate in upcomming Sports Tournaments!</Typography>
                            <Typography sx={{fontFamily:"sans-serif"}} >
                            Discover and join sports tournaments for all skill levels through our platform.<br/>
                             Meet new people, challenge your skills, or cheer on your favorite teams and 
                             athletes. Don't miss out on the excitement of live sports and connect with other fans.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained">Share</Button>
                            <Button size="small" variant="contained">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Box>
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white'}}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={OrganiseSportImage}
                        alt='organise-sports'
                        sx={{maxHeight:"300px"}}
                        />
                        <CardContent>
                            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Organize Your Sports Event with Ease on Our Platform</Typography>
                            <Typography sx={{fontFamily:"sans-serif"}} >
                            Our platform provides a unique opportunity for organizers to connect with players 
                            and audiences and promote their sports events.Whether you're planning a local tournament,a charity game, or a national competition, our platform offers a streamlined process for event 
                             registration and promotion. 
                             With our easy-to-use interface, you can create event easily.
                        
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained">Learn more</Button>
                            <Button size="small" variant="contained">Organise Now</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
           <Grid item xs={12} sm={4}>
            <Box >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white'}} >
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={SportsNewsImage}
                        alt='sports-news'
                        sx={{maxHeight:"300px"}}
                        
                        />
                        <CardContent>
                            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Stay Up-to-Date with the Latest Sports News</Typography>
                            <Typography sx={{fontFamily:"sans-serif"}} >
                            Our platform is your one-stop-source for all the latest sports news and updates,
                            with a strong emphasis on local sports coverage and in-depth analysis on the sports
                            teams and events in local community along with National and International news.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained">Share</Button>
                            <Button size="small" variant="contained">Latest News</Button>
                        </CardActions>
                    </Card>

                </Box>
            </Grid>
            {/* <Grid item xs={12} sm={12}> 
                <Box  >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white'}}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={CoachImage}
                        alt='Coach-image'
                        />
                        <CardContent>
                            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Learn Any Sports from Registered Coaches</Typography>
                            <Typography sx={{fontFamily:"sans-serif"}} >
                            Our platform provides access to registered coaches across a variety of sports, making it easy
                             for players to learn and improve in any discipline. Whether you're looking to improve your 
                             basketball skills or perfect your tennis serve, our coaches 
                             have the experience and expertise to help you achieve your goals
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" variant="contained">share</Button>
                            <Button size="small" variant="contained">Start Learning Today</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid> */}
        </Grid>
    </Box>
  )
}

export default Features