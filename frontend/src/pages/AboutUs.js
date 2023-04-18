import { Box } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <Box color='white'>
        <div class="container">
 
 <div class="row">

             <div className="col-md-12 text-center">

                   <h2 className="section-title">The Team Behind Street Sports</h2>

                   <p className="section-subtitle">{message}</p>
                   
             </div> 
      
     <div className="col-sm-6 col-md-4">

           <div className="team-item">
           
               <img src="https://media.licdn.com/dms/image/C5603AQFxFx4ALwrtWA/profile-displayphoto-shrink_400_400/0/1667883049367?e=1687392000&v=beta&t=WRd9wo2xhRZ3SuhPoD-JJ3COtAiH4iV518WWGDXTgLY" class="team-img" alt="pic" />                   
               <h3>SHUBHAM SINGH</h3>            
               <div className="team-info"><p>MERN Stack Developer</p></div>
               <p className="paracolor">Shubham Singh is our  co-founder and has developed Home page and Tournament Sections.</p>
           
              
               
           
         </div>
     </div> 
       
     <div className="col-sm-6 col-md-4">

           <div className="team-item">
           
               <img src="https://media.licdn.com/dms/image/D4D03AQG24btu7xgzCg/profile-displayphoto-shrink_400_400/0/1668298046876?e=1687392000&v=beta&t=Y94fr4mlSBbwXIx3_4RLM1MLQriwEKVnWeqmqM8Pkk8" class="team-img" alt="pic" />
              
               <h3>KISHAN KUMAR</h3>
               
               <div className="team-info"><p>Frontend Developer</p></div>

               <p className="paracolor">Kishan Kumar is our co-founder and has developed Sports News page and About Us section.</p>
           
               
               
           </div>

     </div> 
     <div className="col-sm-6 col-md-4">

           <div className="team-item">
           
               <img src="https://media.licdn.com/dms/image/C4D03AQHDXuBaUJjdrw/profile-displayphoto-shrink_400_400/0/1658673828384?e=1687392000&v=beta&t=0ONXe-ODseYPdAB3dRujQM-9HBRd_Sx_Cmui1Yi6iEA" class="team-img" alt="pic" />
              
               <h3>ANISH KUMAR</h3>
               
               <div className="team-info"><p>Frontend Developer</p></div>

               <p className="paracolor">Anish Kumar is our co-founder and has developed styling part of the page.</p>
           
               
               
           </div>

     </div> 
 
 </div> 

</div>
    </Box>
  )
}

export default AboutUs