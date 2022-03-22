import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { Functions } from '@material-ui/icons';

function Midsh() {
  return (
    <div >
      <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
      <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>MIDDLE SCHOOL</p>
      <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 170
    }}
  />
  </Container>
    <img
    width={350} height={250}  
    src="https://media.istockphoto.com/photos/group-portrait-of-preadolescent-school-kids-smiling-in-front-of-the-picture-id1217088681?k=20&m=1217088681&s=612x612&w=0&h=Uo6Q2pY3_l6jUlx0nMfUfbYQ-fycU0vO_9IzCZv-Fo4="></img>
<br/>
<h2>ACADEMIA</h2>
    <p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>We nurture and encourage students, recognising that students have differing abilities, interests and goals. Our formal curriculum is demanding yet sufficiently flexible to allow for different rates of development and learning.</p>
 <h3>MIDDLE SCHOOL</h3>
    <br/>
<p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>The Transition Years

The Middle School curriculum is broad and diverse, guided by, but not limited to, the content outlined in the Australian Curriculum. All boys study English and History, Mathematics, Science and Geography, Art, Personal and Social Development (PSD), ICT (much of which is embedded in the curriculum) and Languages: Mandarin in Year 6, Mandarin, French, Latin and Indonesian in Year 7, with students selecting two of these languages to continue with in Year 8. All boys participate in Physical Education and Christian Education throughout their years in the Middle School.
</p>
<p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>Music is taught to all boys in Year 6, the first year of Middle School, and in Year 7, all students participate in Music in Semester 1, with Drama introduced as an elective for non-musicians in Semester 2. Electives options expand in Year 8 to include Music Ensemble, Music Technology (both Composition and Recording), Drama, Film, Robotics and Coding, and Visual Communication and Design.
</p>
<p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>Data collected from a range of sources, both internal and external, allows teachers to identify individual needs and offer support and extension as required, so that students are able to optimise their learning and progress in their studies, no matter where they are in their learning.
</p>
<p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>There are opportunities to perform in the Middle School Production, sing in the Choir, participate in Debating, represent the School in sporting activities and play in the Orchestra. Students are involved in fund-raising projects, social events with other schools, and numerous excursions. There are leadership opportunities, including designing learning activities and having a voice in decision-making relating to the Middle School.
</p>
<p  style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>A smaller group of teachers, transition activities at each year level, and the opportunity, through the PSD program, for Form Teachers to explore key issues facing boys at this stage of their development – issues such as being responsible and safe in their physical and virtual worlds, negotiating relationships, developing emotional intelligence and resilience, and making healthy choices – are key pillars of our broader curriculum.

</p>


    </div>
  )
}
export default Midsh;