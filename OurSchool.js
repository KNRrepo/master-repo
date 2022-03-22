import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Classrooms from './Classrooms';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './modules/components/Button';
import Typography from './modules/components/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DigitalClassroom from './DigitalClassroom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Playground from './Playground';
import Labs from './Labs';

function OurSchool() {
  return (
    
    <div >
    <br/>
    <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}>
       
      <p style={{ color: 'Darkcyan',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>OUR SCHOOL</p>
      <hr
    style={{
      backgroundColor: 'Darkcyan',
      height: 3,
      width: 160
    }}
  />
  <p style={{ color: 'cadetblue',  fontSize:30, fontFamily:'Brush Script MT' }}>“A university is just a group of buildings gathered around a library.”― Shelby Foote</p>
  
  
  </Container>
  <br/>
  <section >
      <Container >
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            
            
     <div class="container">
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsYXNzcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
             />
      <Typography color="inherit" align="center" variant="h5"  >
      <Link to="/digitalClassroom">
      <button  backgroundcolor='Blue'
        variant="contained"
        size= "large"
        component="a">Digital Classroom</button>
      </Link>         
</Typography>
</div>   
          </Grid>
          <Grid item xs={2} md={6}>
            <div class="container">
            <img
            width={500} height={200}
             src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwc3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        
             alt="playground"
            />
  <Typography color="inherit" align="center" variant="h5" >
      <Link to="/playground">
      <button color='cadetblue' fontFamily="Optima, sans-serif" fontSize='25px'>Play Ground</button>
      </Link>
  </Typography>
            </div>
          </Grid>
          </Grid>
      </Container>
     
  <br/>
  <br/>
  <br/>
      <Container >
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div class="container" >
            <img
        width={500} height={300}
        src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsYXNzcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

      alt="classroom"
      />
      <Typography color="inherit" align="center" variant="h5" >
      <Link to="/classrooms">
      <button color='cadetblue' fontFamily="Optima, sans-serif" fontSize='25px'>Class Room</button>
      </Link>
   </Typography>



            </div>
          </Grid>
          <Grid item xs={2} md={6}>
            <div class="container">
            <img
        width={500} height={300} opacity= "0.5"
        src="https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhYnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

      alt="Labs"
      />
       <Typography color="inherit" align="center" variant="h5" >
      
      <Link to="/labs">
      <button color='cadetblue' fontFamily="Optima, sans-serif" fontSize='25px'>Labs</button>
      </Link>
  </Typography>
            </div>
          </Grid>
          </Grid>

      </Container>
      <br/>
      <br/>
      <br/>
    </section>
     
    </div>
  
  );
}

export default OurSchool;