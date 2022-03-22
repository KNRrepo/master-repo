import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



function DigitalClassroom() {
  return (
    <div >
     <br/> 
     <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
     <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>Digital Classroom</p>
     <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 250
    }}
  />
  </Container>
  <Container>
<Grid item xs>
  <div class="container">
  <img  style={{
      height: 200,
      width: 600
    }}
    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMGNsYXNzcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="digitalClassroom"
      />

</div>
</Grid>
        </Container>
     <section >
      <Container>
      <br/>
      <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>The world of education is constantly changing and evolving. In fact, one of the only constants of education is change itself. One of the biggest driving factors affecting the changes in education today is technology. Our students are part of a new generation – a generation that is constantly connected and surrounded with technology, and so it only makes sense to fully incorporate technology into our teaching practices. As educators, we are the ones who need to evolve and adapt our teaching practices in order to accommodate, foster, and expand our students’ use of technology. We need to create a learning environment that supports 21st century learning.The solution is pretty obvious: schools need to implement digital classrooms.</p>
      
      <p  style={{ color: 'dimgrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>In education from K-12 and in the post-secondary years, the digital classroom has come to mean a wide range of initiatives and processes, and may include digital tools and gadgets as a part of the learning space or environment.A digital classroom has the potential to be entirely personalized for each student to connect with the right content, peer, or audience at the right time—and ‘scale’ insofar as that potential can be replicated for every student every day without the direct and persistent ‘programming’ of a teacher. It’s easier to put students, student progress, and student work on display in a digital classroom. Digital classroom is the most iconic: the technology. Whether hardware or software, Wi-Fi or LANs, operating systems or social media channels, the technology of a digital classroom is the most visible part for many, and thus can seem the most crucial. How it’s different than traditional classrooms: It never stops changing. The workflow in a digital classroom provides more opportunities for creative feedback, critical evaluation, authentic ‘real-world’ contexts, psychological support, etc.</p>
                
      </Container>
      <Container >
      
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>
            
            
     <div class="container">
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1515603403036-f3d35f75ca52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXNlbnRhdGlvbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <img
        width={500} height={200}
        src="https://images.unsplash.com/photo-1560523159-fbe43c0b465f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByZXNlbnRhdGlvbiUyMGNsYXNzcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        
      alt="ourSchool"
      />
         </div>
          </Grid>
          </Grid>
    </Container>
   


  
        <br/>
       <br/>
       <br/>
       <br/>
    </section> 
    </div>  
  
  );
}

export default DigitalClassroom;