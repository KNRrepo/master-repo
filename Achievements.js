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
import { FormatAlignCenter } from '@material-ui/icons';
function Achievements() {
    return (
      <div >
      <br/>
      <Container style={{
        backgroundColor:'seashell',
        width:'100%'
      }}>
         
        <p style={{ color: 'darkslategray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>About Us</p>
        <hr
      style={{
        backgroundColor: 'darkslategray',
        height: 3,
        width: 130
      }}
    />
   
    
    <Container>
    <Grid container spacing={2} >
    <Grid item xs={2} md={2}>
            <div >
           <br/>
            </div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div >
            <Link to="/aboutUs">
            <p style={{ color: 'dimgray', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>OVERVIEW</p>
            </Link>
             </div>
          </Grid>
          <Grid item xs={2} md={2}>
            <div >
            <Link to="/mission">
            <p style={{ color: 'dimgray', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>MISSION </p>
            </Link>
            </div>
          </Grid>
         
          <Grid item xs={2} md={3}>
            <div >
            <p style={{ color: 'goldenrod', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>ACHIEVEMENTS</p>
            </div>
          </Grid>
          <Grid item xs={2} md={3}>
            <div >
            <Link to="/faculty">
            <p style={{ color: 'dimgray', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>FACULTY</p>
            </Link>
            </div>
          </Grid>
          </Grid>
     </Container>
     </Container>
     <br/>
        <br/>
     <Container>
     
 <p style={{ color: 'darkslategray',  fontSize:30, fontFamily:'Brush Script MT' }}>"We care, we share, for the future we prepare"</p>
 <br/>


 <Grid container spacing={2} columns={3}>
          <Grid item xs={2} md={6}>       
     <div class="container">
     <br/>     
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>
          <Grid item xs={2} md={6}>
            <div class="container">
            <p style={{ color: 'dimgrey', fontSize:25, padding: 10 }}>NATIONAL PUBLIC SCHOOL</p>
            <p style={{ color: 'dimgrey', fontSize:23, padding: 10 }}>Yeshwanthpur, Bengaluru</p>
            <p style={{ color: 'dimgrey', fontSize:21, padding: 10, }}>AISSCE RESULT 2021</p>
            <p style={{ color: 'dimgrey', fontSize:19, padding: 10 }}>The Trailblazers of NPS YPR</p>
            <p style={{ color: 'dimgrey', fontSize:17, padding: 10 }}>SCHOOL TOPPER</p></div>
          </Grid>
          </Grid>
  </Container>
        <br/>
        <br/>
        <br/>
     
       
      </div>
      );
    }
  export default Achievements;