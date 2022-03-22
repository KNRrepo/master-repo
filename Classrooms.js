import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



function Classrooms() {
  return (
    <div >
     <br/>
     <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
      <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>Class Rooms</p>
      <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 175
    }} 
  />
  
  </Container>
     <section >
      <Container>
      
      <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>The classrooms are large and well ventilated with white/green boards and bulletin boards inside and outside the classrooms.Strength of each class is kept at manageable level with comfortable furniture which adds to the ambience of the class room.In school buildings, almost every operational concern, from social-distancing-friendly class schedules to cleaning times, has implications for instruction. Some teachers may have to adapt courses from daily 45-minute periods to 90-minute blocks every other day; others will need to figure out how to plan small-group work so that it lines up with staggered bus arrivals. </p>

      <p  style={{ color: 'dimgrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>“Fair is not always equal”, this is especially true in a classroom setting when you are dealing with a group of students with different reading levels and academic skillsets. And then there are other things to consider like their home life, educational background, and emotional needs. All students do not need the exact same support in order to be successful in a classroom setting, and that is where differentiation becomes critical.</p>
                
      </Container>
      <Container >
      
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            
            
     <div class="container">
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3Nyb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <img
        width={500} height={200}
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsYXNzcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        
      alt="ourSchool"
      />
         </div>
          </Grid>
          </Grid>

         
      <br/>
    </Container>
    </section> 
    </div>  
  
  );
}

export default Classrooms;