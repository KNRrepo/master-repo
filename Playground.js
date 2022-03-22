import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { FormatAlignJustify } from '@material-ui/icons';



function Playground() {
  return (
    <div >
     <br/> 
     <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
      <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>Play Ground</p>
      <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 170
    }}
  />
  </Container>
     <section >
         <Container>
         <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',  }}>Game season and time: We play different games in the playground of different seasons. We play football in the rainy season. In our dry season, we play volleyball and many other sports. We play here every day after school is over. We play from 4 pm onwards till 5 pm. Sometimes we play match-games of football on our playground. The best XI of our school plays with the best XI of the other school. Many people from our area come here to watch football matches. We also organize match games of cricket and volleyball. On such days our playground is full of uproar. We are all happy and cheerful. </p>
         </Container>
      <Container>
      <Grid container spacing={3} columns={3}>
    <Grid item xs={2} md={6}>       
     <div class="container">
     <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify'  }}>Our school playground is very large. It is a beautiful place with green grass all around it. Our schools gardeners keep it clean all the time. It is used for morning assembly. At break time all the students of the classes come out of their classrooms and play there. It is such a big ground that everyone can play any game he likes. Some play cricket while some play football. Some of the students like to play hockey. Some play shooting which is throwing rubber ball at each other. All the activities end with the ringing of bell and all the students rush to the classrooms. I like my school playground because it provides me a place to play.</p>
      </div>  
          </Grid>
          <Grid item xs={2} md={6}>
            <div class="container">
            <img
        width={500} height={200}
        src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNjaG9vbCUyMHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  
      alt="ourSchool"
      />
         </div>
          </Grid>
          </Grid>          
      </Container>

      <Container>
         <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',  }}>Playgrounds are places where kids get fun. Playgrounds make the children develop social skills.  They agree on the rules of the game and how to solve issues. They help to keep the children active. Play hours help to break class monotony . Playing is a vital workout as a famous proverb goes, “All work and no play makes Jack a dull boy.” Playgrounds bring a pool of benefits to children as they grow. It is healthy to allow children to interact and engage in active exercises in a playground.</p>
         </Container>
      
      <Container >
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>       
     <div class="container">
     <br/>     
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sJTIwc3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <p  style={{ color: 'dimgrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>We have very strong teams of players; they practice different games in the playground. Various matches are held on this playground. The P.T. instructor of our school gives us training in the playground. He encourages all the players. Our teams have won many prizes in sports and games. Our school playground has produced many great players. They play at the national level. I am proud of my school playground.The playgrounds are very spacious and outdoors, they are  secluded so that the children (and their parents) feel safe and do not have to consider the outside world. Our playground are allowed for any student (including the teacher) to see all that is going on. </p>
         </div>
          </Grid>
          </Grid>


    </Container>
    </section> 
    </div>  
  
  );
}

export default Playground;