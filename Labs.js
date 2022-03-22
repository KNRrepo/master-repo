import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { FormatAlignJustify } from '@material-ui/icons';



function Labs() {
  return (
    <div >
     <br/> 
     <Container style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
      <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>LABS</p>
      <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 85
    }}
  />
  </Container>
     <section >
      
      

      <Container>
         <p style={{  fontSize:16, padding: 10, textAlign:'justify',  }}>Set in a picturesque environment, away from the hustle and bustle of the city, the campus creates the right ambience essential for your child’s growth and development. The beautifully landscaped campus has is well equipped with everything a student needs to learn and experiment. Our students have easy access to all the amenities. The campus equipped with all the modern facilities and state-of-the-art infrastructure provides all the right ingredients for your child’s all-round development.We provide laboratory facilities that provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed. The main purpose of laboratory work is to provide students with conceptual and theoretical knowledge to help them learn scientific concepts, and through scientific methods, to understand the nature of science</p>
         </Container>
      
      <Container >
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>Science Lab</p>
      <Grid container spacing={3} columns={3}>
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
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>Science laboratory is central to scientific instructions and it forms essential component of science education. It is in this place that various kinds of practical works are carried out by the students. Students learn to handle various apparatus and to think independently in the laboratory, because of which it is considered to be one of an important place. When students carry out various kinds of experiments, then they draw conclusions from their studies, which raise their level of self confidence and develop scientific attitude among them.We have seperate laboraties for Biology, Chemistry and Physics each with various experimental set-ups.</p>
         </div>
          </Grid>
          </Grid>
    </Container>


    <Container >
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>Computer Lab</p>
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>       
     <div class="container">
     <br/>     
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <p  style={{  color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>Computers are used in almost every walk of life. Actually we live in a time where everything is largely dependent on the use of the computers. They have a wide variety of applications in science, education, defense, business and many other sectors. Computer education in school helps the children to get access to the extensive world of information. Students can find any information that they desire with the help of a computer. Almost every school nowadays has a computer lab of their own. Such labs are quite imperative in educating the children about the wise and efficient use of the computer.We have suffiient computers equpped with the recent technologies</p>
         </div>
          </Grid>
          </Grid>
    </Container>



    <Container >
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>Math Lab</p>
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>       
     <div class="container">
     <br/>     
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>The mathematics laboratory is a place where anybody can experiment and explore patterns and ideas. It is a place where one can find a collection of games, puzzles, and other teaching and learning material. The materials are meant to be used both by the students on their own and with their teacher to explore the world of mathematics, to discover, to learn and to develop an interest in mathematics. The activities create interest among students or in anybody who wants to explore, and test some of their ideas, beliefs about mathematics.The activities in the maths lab should be appealing to a wide range of people, of different ages and varying mathematical proficiency. </p>
         </div>
          </Grid>
          </Grid>
    </Container>


    <Container >
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>Library</p>
      <Grid container spacing={3} columns={3}>
          <Grid item xs={2} md={6}>       
     <div class="container">
     <br/>     
     <img
        width={500} height={200} 
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

      alt="ourSchool"
      />
      </div>  
          </Grid>

          <Grid item xs={2} md={6}>
            <div class="container">
            <p  style={{ color: 'darkslategrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>Our library is a collection of books, audio-visual material and other content that serves common use to meet the educational, informative and recreational needs of the users. The chief objective of libraries is to meet the academic needs of the particular educational institution which it serves. Besides serving students in their studies and teachers in their research school, libraries aim at creating interest in reading amongst the students who get the best of resources and environment here.The types of books we can have access to in school libraries are fiction books, non-fiction books, reference books, literature books, biographies, General Knowledge books, Fables and folktales, cookbooks and craft books, poetry books, and books in a series.  </p>
         </div>
          </Grid>
          </Grid>
    </Container>


    </section> 
    </div>  
  
  );
}

export default Labs;