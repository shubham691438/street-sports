import { Grid,Button,CardActionArea } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TournamentCupImage from '../assets/images/tournament-cup.jpg'
import CoachImage from '../assets/images/coach-image.png'
import OrganiseSportImage from '../assets/images/organise-sport.jpg'
import SportsNewsImage from '../assets/images/sports+news.jpg'
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <Box sx={{margin:"5% 5%"}}  mt="100px" >
        <Grid container spacing={5} justifyContent="space-between" alignItems="stretch" > 
            <Grid item xs={12} sm={6} lg={3}> 
                <Box >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%',objectFit:'fill'}}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={TournamentCupImage}
                        alt='tournament-cup'
                        height="200px"
                        sx={{objectFit:'fill'}}
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
                        <Link to='/tournaments' style={{color: "inherit",textDecoration:"none"}}>
                            <CustomButton
                                backgroundColor="#3392FF"
                                color="#fff"
                                buttonText="Learn More"
                                
                            />
                        </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Box >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%'}}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={OrganiseSportImage}
                        alt='organise-sports'
                        height="200px"
                        sx={{objectFit:'fill'}}
                        />
                        <CardContent>
                            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Organize Your Sports Event with Ease on Our Platform</Typography>
                            <Typography sx={{fontFamily:"sans-serif"}} >
                            Our platform provides a unique opportunity for organizers to connect with players 
                            and audiences and promote their sports events.ith our easy-to-use interface, you can create and 
                            customize your event page and manage participant registrations.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link to='/organise-tournament' style={{color: "inherit",textDecoration:"none"}}>
                            <CustomButton
                                backgroundColor="#3392FF"
                                color="#fff"
                                buttonText="Organise Tournament"
                                
                            />
                        </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
           <Grid item xs={12} sm={6} lg={3}>
            <Box >
                <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%'}} >
                    <CardActionArea>
                    <CardMedia
                    component='img'
                    image={SportsNewsImage}
                    alt='sports-news'
                    height="200px"
                    sx={{objectFit:'fill'}}
                    />
                    <CardContent>
                        <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{xs:"1.5rem"}}}>Stay Up-to-Date with the Latest Sports News</Typography>
                        <Typography sx={{fontFamily:"sans-serif"}} >
                        Our platform is your one-stop-source for all the latest sports news and updates,
                        with a strong emphasis on local sports coverage and in-depth analysis on the sports
                        teams and events in local community along with National and International news.<br/><br/>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Link to='/sports-news' style={{color: "inherit",textDecoration:"none"}}>
                            <CustomButton
                                backgroundColor="#3392FF"
                                color="#fff"
                                buttonText="Latest News"
                                
                            />
                    </Link>
                    </CardActions>
                </Card>

                </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} > 
                <Box >
                    <Card sx={{backgroundColor:'#3c3f4a',color:'white',height:'100%' }}>
                        <CardActionArea>
                        <CardMedia
                        component='img'
                        image={CoachImage}
                        alt='Coach-image'
                        height="200px"
                        sx={{objectFit:'fill'}}
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
                        <Link to='/learn' style={{color: "inherit",textDecoration:"none"}}>
                            <CustomButton
                                backgroundColor="#3392FF"
                                color="#fff"
                                buttonText="Start Learning Today"
                                
                            />
                        </Link>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Features