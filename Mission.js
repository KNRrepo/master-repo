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
function Mission() {
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
            <p style={{ color: 'goldenrod', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>MISSION </p>
            </div>
          </Grid>
         
          <Grid item xs={2} md={3}>
            <div >
            <Link to="/achievements">
            <p style={{ color: 'dimgray', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>ACHIEVEMENTS</p>
            </Link>
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

 <p style={{ color: 'dimgray', fontSize:20, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>OUR MISSION</p>
       <div class="container">
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>The school endeavours to provide equal opportunities to all learners irrespective of gender, capabilities and background in a stimulating and eco-friendly learning environment to enhance their innate potential to achieve academic excellence so that they stand out with their self-confidence and self-esteem to become active and conscious global citizens.</p>
         </div>
         
      <p style={{ color: 'dimgray', fontSize:20, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>OUR MOTTO</p>
    <div class="container">
            <p  style={{  color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>Reach Out, Reach High, Reach Beyond</p>
         </div>
        
      <p style={{ color: 'dimgray', fontSize:20, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>OUR VISION</p>
    <div class="container">
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>In a learner-centric, engaging and effective environment, integrated with methods assimilating blended learning, inclusive of technology and updated instructional methods, develop inquisitive learners with integrity of character driven by excellence, to actualize their potential in pursuit of being. Life - Long Learners and Global Citizens.</p>
         </div>

  </Container>
        <br/>
        <br/>
        <br/>
     
       
      </div>
      );
    }
  export default Mission;