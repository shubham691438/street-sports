import { Box, Button, styled, Typography,Stack, Hidden } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import EventsCarousal from '../components/EventsCarousel'
import heroImg from "../assets/images/cricket-tournament.png";
import CustomButton from "../components/CustomButton";
import TournamentsSection from "../components/TournamentsSection";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate=useNavigate();

  const handleClick=()=>{
    window.scrollTo(0, 1200);
  }
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#1adaa7",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "white",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Discover Your Next Challenge
            </Typography>
            <Typography  sx={{color:"#1adaa7",fontWeight:"bold",fontFamily:"sans-serif",fontSize:{lg:"3.5rem",sm:"2rem",xs:"1.5rem"}}}>Compete, Conquer, and Connect</Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "white", my: 4 }}
            >
             We provides a dynamic platform for athletes of all levels
            to come together and compete in a variety of sports tournaments
            </Typography>
            <Stack direction='row' spacing={2} mt={10}>
            <CustomButton
              backgroundColor="#3392FF"
              color="#fff"
              buttonText="Explore Now"
              onClickFunction={handleClick}
            />
            <CustomButton
              backgroundColor="#3392FF"
              color="#fff"
              buttonText="Organise Tournaments"
              onClickFunction={()=>{navigate('/shubh/organise-tournament')}}
            />
            </Stack>
          </Box>

          <Hidden mdDown>    
          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "80%", marginBottom: "2rem" }}
            />
          </Box>
          </Hidden>
        </CustomBox>
      </Container>
      <EventsCarousal/>
      <TournamentsSection/>
    </Box>
  );
};

export default Hero;