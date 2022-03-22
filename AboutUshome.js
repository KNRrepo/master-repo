import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Typography from './modules/components/Typography';
import Button from './modules/components/Button';
import { Class } from '@material-ui/icons';



function AboutUshome() 
{
    return (
   <div >
    <img
        width={1550} height={350}
        src="https://www.vcsedu.org/school/cypress-creek-elementary/sites/cypress-creek-elementary/files/styles/page_header_extra_small/public/header-images/cypress%20creek%20school%20info%20banner.jpg?itok=bTvA4hft"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to Home
      </Typography>
      <br/>

      <Typography color="inherit" align="center" variant="h5" >
        Reach OUT, Reach Beyond, Reach High
      </Typography>

      <Container>
          <br/>
            <br/>
           <Grid container spacing={3} >
          <Grid item xs={10} md={2}>
            <br/>
            <br/>
              </Grid>
              <br/>
            <Grid item xs={2} md={3}>
              <Link to="/jrsh">
              <Button
              
        color="#3c3c3c"
        variant="contained"
        size= "large"
        align="left"
        component="a"
      >
        Junior School
      </Button> 
     
      </Link>
      <br/>
      <br/>
      </Grid>
      
            <Grid item xs={2} md={3}>
            <Link to="/midsh">
            <br/>
      <Button
        color="#ee82ee"
        variant="contained"
        size="large"
        component="a"
      >
        Middle School
      </Button>
      </Link>
          </Grid>
           <br/>
          
            <Grid item xs={2} md={3}>
            <Link to="/hish">

              <br/>
       <Button
       
        backgroundcolor='Blue'
        variant="contained"
        size= "large"
        
        component="a"
      >
        High School
      </Button>
      </Link>
      </Grid>
      </Grid>
      </Container>

     
   <Container>
      <br/>
      <br/>

        <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            <div Class="container">
               <img
        width={400} height={200} 
        src="data:image/jpeg;base64,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"
       
           />
            <Typography>
              <button>Events</button>
            </Typography>
            </div>
            </Grid>
          <Grid item xs={2} md={5}>
           <div Class="container">
               <img
        width={400} height={200} 
        src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/sites/default/files/masters/2021-09/35693941723_b69de07291_k-crop.jpg"
       
        
           />
            <Typography>
              <button>Clubs</button>
            </Typography>
            </div>
          </Grid>
          </Grid>
   </Container>
<br/>
<br/>
<h2 style={{ color: 'darkSlategray' ,fontSize:40, padding: 10, fontFamily:'Georgia, serif ' }}>MESSAGES</h2>
<hr
      style={{
        backgroundColor: 'darkslategray',
        height: 3,
        width: 180
      }}
    />
<br/>

   <Container style={{
        backgroundColor:'seashell',
        
      }}> 
<br/>
<br/>

        <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={3}>
            <div>
              <Link to="/Kpg">
            <img 
            width={200} height={200}
            src="https://npstj.com/images/nps-chairman.jpg"
            />
            <br/>
            <br/>
            <p style={{ color: 'darkolivegreen',  fontSize:21,  padding: 10 }}>Dr.K P GOPALAKRISHNA</p>
            <h5>Chairman, NPS Group</h5>
            <Typography>
              <button>Read More</button>
            </Typography>
            </Link>
            </div>
            
            </Grid>
            <Grid item xs={2} md={3}>
            <div>
              <Link to="/shivs">
            <img 
            width={200} height={200}
            src="https://www.npsypr.com/images/dean.jpg"
            />
            <br/>
            <br/>
            <p style={{ color: 'darkolivegreen',  fontSize:21,  padding: 10 }}>Dr.SHIVASHANKAR</p>
            <h5>Chairman, NPS Yeshwanthpur</h5>
            <Typography>
              <button>Read More</button>
            </Typography>
            </Link>
            </div>
            </Grid>
            <Grid item xs={2} md={3}>
            <div>
              <Link to="/shem">
            <img 
            width={200} height={200}
            src="https://www.npsypr.com/images/principal_administration_ms_sheeja_manoj.jpg"
            />
            <br/>
            <br/>
            <p style={{ color: 'darkolivegreen',  fontSize:21,  padding: 10 }}>Ms. SHEEJA MANOJ</p>
            <h5>Principal Admission</h5>
            <Typography>
              <button>Read More</button>
            </Typography>
            </Link>
            </div>
            </Grid>
            <Grid item xs={2} md={3}>
            <div>
              <Link to="/niks">
            <img 
            width={200} height={200}
            src="https://www.npsypr.com/images/nikitaa_kalro_principal_academics.jpeg"
            />
            <br/>
            <br/>
            <p style={{ color: 'darkolivegreen',  fontSize:21,  padding: 10 }}>Ms. NIKITAA KAROL</p>
            <h5>Principal Academics</h5>
            <Typography>
              <button>Read More</button>
            </Typography>
            </Link>
            </div>
            </Grid>
          </Grid>
   </Container>
   <br/>
   <br/>
   <h2>NEWS</h2>

<Container>

    <img
    width={1300} height={250}
     src="https://limousineuara.com/wp-content/uploads/2018/01/news-limousine-uara.jpg"/>
</Container>
<br/>
<br/>
<br/>

<Container style={{
        backgroundColor:'Beige',
        
      }}> 
  <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={4}>
            <div Class="container">
            <img
              width={300} height={200} 
              src="https://www.ecoleglobale.com/blog/wp-content/uploads/2020/03/importance-of-school-transportation.jpg"></img>
<h2>TRANSPORTATION</h2>
<p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',  }}>The purpose of the school transport is to support transport for; Children who reside remote from their nearest Primary and Post Primary school and; Children with Special Educational Needs</p>
 <Typography>
              <button>Read More</button>
            </Typography>
            </div>
  </Grid>
  <br/>
  <br/>
   <Grid item xs={2} md={4}>
 <div Class="container">
            <img
              width={300} height={200} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1ZagkJQx4UxHQgHu-aHiyrVp_2O1XPJmliwRh5FoQ_V0e1xolvViOCvLIlLxwDpKjpA&usqp=CAU"></img>
              <h2>FACILITIES</h2>
              <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',  }}>The classrooms are large and well ventilated with white/green boards and bulletin boards. Other facilities available include Art and Craft Room, Audio Visual Room</p>
              <Typography>
              <button>Read More</button>
            </Typography>
              </div>
   </Grid>
   <br/>
   <br/>
   <Grid item xs={2} md={4}>
<div Class="container">
            <img
              width={300} height={200} 
              src="https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Nov-24-How-to-Use-Self-Directed-Learning-in-Your-Class_web.jpg"></img>
              <h2>SELF LEARNING</h2>
              <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',  }}>A positive academic enrolment begins with sage families and sage communities and statistically schools continue to be one of the most secure places for our children.</p>
              <Typography>
              <button>Read More</button>
            </Typography>
              </div>


   </Grid>
  </Grid>
</Container>
    </div>

  );
}
export default AboutUshome;