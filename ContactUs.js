import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



function ContactUs() {
  return (
    
    <div >
    <img
        width={350} height={250}
        src="http://www.seeds2leads.com.au/wp-content/uploads/2016/12/1476994814.jpg"
        alt="contactUs"
      />
      <br/>
      
      <p style={{ color: 'DodgerBlue',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>CONTACT LIST</p>
      <hr
    style={{
      backgroundColor: 'dodgerblue',
      height: 3,
      width: 160
    }}
  />
 
   <section >
      <Container>
       <br/>
  <br/>
  <Container style={{
      backgroundColor:'lightcyan',
      width:'100%'
    }}>
        <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div >
            <h4>GENERAL ENQUIRIES</h4>
              <h5>+91 80 23571220</h5>
              <h5><a href="info@npsypr.com">NPS INFO</a> </h5>
            </div>
          </Grid>
          <Grid item xs={2} md={6}>
            <div >
            <h4>STUDENT ENROLLMENT</h4>
              <h5><a href="admission@npsypr.com">admission@npsypr</a> </h5>
            </div>
          </Grid>
          </Grid>
         </Container> 
         <br/>
       

          <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div >
            <h4>ONLINE RECRUITMENT</h4>
            <h5><a href="procurement@npsypr.com">www.npsypr</a> </h5>
           
            </div>
          </Grid>
          <Grid item xs={2} md={5}>
            <div >
            <h4>PARENT'S ASSOCIATION</h4>
            <h5><a href="account@npsypr.com">account@npsypr</a> </h5>
            </div>
          </Grid>
          <Grid item xs={2} md={5}>
            <div >
            <h4>PARENT'S ASSOCIATION</h4>
            <h5><a href="account@npsypr.com">account@npsypr</a> </h5>
            </div>
          </Grid>
          </Grid>
          
          <br/>


         <Container style={{
      backgroundColor:'lightcyan',
      width:'100%'
    }}>    
          <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div >
            <h4>EMPLOYMENT ENQUIRIES</h4>
            <h5><a href="procurement@npsypr.com">procurement@npsypr</a> </h5>
            </div>
          </Grid>
          <Grid item xs={2} md={5}>
            <div >
            <h4>MAPS</h4>
            <h5><a href="https://www.google.com/maps?ll=13.031399,77.544543&z=15&t=m&hl=en-US&gl=IN&mapclient=embed&cid=12380657123368250479">Open on Maps</a> </h5>
            </div>
          </Grid>
          </Grid>
          </Container>
          <br/>


          <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div >
            
              <h4>ADDRESS</h4>
              <h5>NATIONAL PUBLIC SCHOOL</h5>
              <h5> #9/1, Pipeline Road, Raghavendra Layout</h5> 
              <h5>(Behind RNS Motors), Yeshwanthpur,</h5>
              <h5>Bangalore, 560 022</h5>
            </div>
          </Grid>
          <Grid item xs={2} md={5}>
            <div >
            <h4>PHONE</h4>
              <h5>080 23571221</h5>
              <h5>080 29051184</h5>
            </div>
          </Grid>
          </Grid>

          <Container style={{
      backgroundColor:'lightcyan',
      width:'100%'
    }}>  <br/> 
    <br/> 
     </Container>
    <br/>


      </Container>
    </section>
     
    </div>
  
  );
}

export default ContactUs;