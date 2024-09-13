import { Box } from '@mui/material';
import React from 'react';

const AboutUs = () => {
  const message = "Meet the dedicated team behind Street Sports";

  return (
    <Box sx={{ color: 'white'  }}>
      <div className="cards-container">
        <div className="text-center">
          <h2 className="section-title">The Team Behind Street Sports</h2>
          <p className="section-subtitle">{message}</p>
        </div>

        <div className="cards">
          <div className="team-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHLiAyWDB8OAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720979190515?e=1731542400&v=beta&t=dLW3Mc52ZdeC4BYuIiFYulJvR3lDZuHqit7VFMnuapo"
              className="team-img"
              alt="Shubham Singh"
            />
            <h3>SHUBHAM SINGH</h3>
            <div className="team-info">
              <p>MERN Stack Developer</p>
            </div>
            <p className="paracolor">Shubham Singh is our co-founder.</p>
          </div>

          <div className="team-card">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGqui2zPMPNiw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703844876797?e=1731542400&v=beta&t=dh5ShV_Ov1clloZUa7k1IY9VSpck0kOVDMBev-5UCJI"
              className="team-img"
              alt="Kishan Kumar"
            />
            <h3>KISHAN KUMAR</h3>
            <div className="team-info">
              <p>MERN Stack Developer</p>
            </div>
            <p className="paracolor">Kishan Kumar is our co-founder.</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AboutUs;
