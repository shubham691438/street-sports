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
              src="https://media.licdn.com/dms/image/v2/D5603AQHLiAyWDB8OAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720979190515?e=1743638400&v=beta&t=3a3b8adtS1NJFeQF1Ni5OdFHtgJrFlicRNdmFxFXtJw"
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
              src="https://media.licdn.com/dms/image/v2/D4D03AQGqui2zPMPNiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703844876797?e=1743638400&v=beta&t=ORYxDrXlebCu-82bmfnkzqwbKSfL59o8A0y_VasKsoQ"
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
