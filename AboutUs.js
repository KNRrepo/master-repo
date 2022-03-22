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
import Mission from './Mission';
import Achievements from './Achievements';
import Faculty from './Faculty';
import FooterForFirstPage from './modules/views/FooterForFirstPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Playground from './Playground';
import Labs from './Labs';
import { FormatAlignCenter } from '@material-ui/icons';
function AboutUs() {
    return (
      <div >
      <br/>
      <Container style={{
        backgroundColor:'seashell',
        
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
            <p style={{ color: 'goldenrod', fontSize:26, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>OVERVIEW</p>
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
 <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>NPS Yeshwanthpur is an abode of learning that strives continuously to provide education of the highest academic standards. NPS is dedicated to the development of each student’s potential in a positive environment. The school is an integrated community of parents, teachers and children from all over the country.</p>

 <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>We at NPS, Yeshwanthpur strongly believe that two institutions that play a very important role in nurturing a child-are the family and the educational institution. While family makes the significant decision of choosing the perfect school for their child, an institution makes sure that the child is shaped for the future.</p>

 <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>Environment is the best educator. We at NPS, Yeshwanthpur prepare children to be humanitarian in their approach, innovative and resourceful in times of crisis with global outlook capable of carving a home for themselves in any global grid along with academic excellence.</p>

 <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>NPS, Yeshwanthpur is a progressive child centred school with deep values set in a warm and caring environment, emphasising on individual attention with holistic development of the child.</p>

 <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>The atmosphere of the school encourages a positive attitude towards learning by inculcating in students, the inquiry based method. This helps them to enjoy the learning process and to become lifelong learners</p>
     </Container>
        <br/>
        <br/>
        <br/>
     
       <FooterForFirstPage/>
      </div>
      );
    }
  export default AboutUs;