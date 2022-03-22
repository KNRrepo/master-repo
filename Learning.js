import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



function Learning() {
  return (
    <div >
      <br/>
  <Container style={{
      backgroundColor:'lemonchiffon',
      width:'100%'
    }}> 
     <p style={{ color: 'brown',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>LEARNING</p>
     <hr
    style={{
      backgroundColor: 'brown',
      height: 3,
      width: 130
    }}
  />
  </Container>

  <img  style={{
      height: 200,
      width: 500
    }}
    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="learning"
      />
     <section >
       <br/>
      <Container>
      
      <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify' }}>National Public School, Yeshwanthpur has grown into one of the progressive premier educational institutions since its inception in the year 2013. The strength of each section is limited to 33 to facilitate individual attention and care. The main focus of the school is to provide each student a stimulating and eco-friendly environment to strengthen their self-confidence and self-esteem to be a global citizen of the 21 century. We believe that the greatest wealth of the country is its healthy and contributing citizens. The school has formulated guidelines safeguarding students from cyber-crime, handling emergencies and disasters, retaining their physical, emotional and personal safety.</p>
      
      <p  style={{ color: 'lightslategrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>The uniqueness of each student is nurtured by providing exposure and opportunities in both scholastic and co- curricular areas with an emphasis on character building. The curriculum is also enhanced to reinforce integration across academic disciplines, helping students make connections within and outside the classroom. The school is consistently striving to be an institution of global excellence and ensures to make the process of learning enriching, effective and experiential.</p>
      
      <p style={{ color: 'dimgrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>We encourage Parents' involvement in the development of their ward through regular interaction. The Orientation Programmes conducted for parents at the beginning of the academic year apprise them of the school policies and acquaints them with the educational pattern followed. In addition, regular circulars and online updates through Thursday Folders are issued to the parents informing them about the upcoming school events and the school policies.</p>
          
      </Container>


      <Container  style={{
      backgroundColor:'lemonchiffon',
      width:'100%'
    }} >
      <p style={{ color: 'brown', fontSize:30, padding: 10, fontFamily:'Geneva, Verdana, sans-serif' }}>EARLY LEARNING PROGRAMMES</p>
      </Container>
      <Container >
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>MONTESSORI PROGRAMME</p>
       <div class="container">
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>Montessori environments focus on self-directed activities and promote learning with hands on experience. Students perform different kinds of activities that appeal to their hands and senses as they go through the process of experiential learning. Individual and social development is fostered in each child by a unique way where mixed age groups are in the same environment i.e. of 3-6 years old children. Each level has an age appropriate curriculum. The activities presented to the beginners are preliminary and basic that helps them to settle down, familiarise themselves and to understand the norms of the environment. The four areas of work in the Montessori method encompasses the basic ability of the young students to improve their motor co-ordination and to enhance sensorial impressions, along with strengthening concepts in Language and Arithmetic. The sensorial activities are presented to the students which provide an opportunity to become aware of the different colours, shapes, sounds, textures and their different intensities. The Language activities begin at very early by way of conversation and enrichment of vocabulary. Sound recognition in a word enables children to understand that words are made of articulate sounds. Arithmetic activities begin around the age of 3.5 years as children at this age want to know 'how much', or 'how big'.</p>
         </div>
         
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>KINDERGARTEN PROGRAMME</p>
    <div class="container">
            <p  style={{  color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>At Pre-primary, the educational experience is focussed towards developing a sense of curiosity and inquisitiveness in a child. We believe in the collaborative approach to education. Each child's individual contributions are valued and cherished in a stimulating and safe environment fostering them to explore and to express their ideas with confidence. Kindergarten is a two year programme. The medium of instruction is English and students are taught English language through the phonetic method. They get an exposure to the basic mathematical concepts. Integrated learning is an integral part of teaching. Along with motor refinement during outdoor activities, cognitive development is instilled through field trips and story narration sessions. Teachers monitor the progress of students using innovative teaching aids as resource materials.</p>
         </div>
        
      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>PRIMARY LEARNING PROGRAMME</p>
    <div class="container">
            <p  style={{ color: 'darkslategrey', fontSize:16,  padding: 10, textAlign:'justify' }}>The Primary Learning programme is committed to imparting a strong foundation to students of classes 1-5, in various disciplines such as English, Mathematics, Social Science, Life Science, Language Studies, Environment Science and Information Technology. We provide a challenging academic curriculum, coupled with a very supportive group of facilitators who value the strengths and talents of the individual student and inculcate in them the spirit of enquiry. The curriculum builds on the spirit of exploration. Emphasis is laid on acquiring sound language skills, clarity of mathematical concepts and the discovery and understanding of scientific principles. Here the focus is to develop confidence, to build self-esteem, to expose students to different aspects of learning and to enhance their communication skills. Evaluation of each student's progress is done through Monthly Reviews. In order to remove the tedium in classroom, a wide range of classroom techniques of teaching are used - such as, group discussions, projects and several unique resources like 'do and learn' technique. This makes the entire learning process a thoroughly enjoyable one. Students start using Maths Lab from Class 1 which will help them sharpen their analytical skills and Junior Science Lab providing hands on experience in learning. Additional Languages Kannada/Sanskrit is introduced in Class 5.</p>
         </div>

      <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>MIDDLE SCHOOL LEARNING PROGRAMME</p>
      <div class="container">
            <p  style={{ color: 'darkslategrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>The Middle School years, has the added responsibility of grooming up the personality of each student. The emphasis is on investigation and conceptualization through sharpening their analytical and writing skills. In Classes 6-8 the programme is designed as per CBSE curriculum with focus on interactive and hands on experience sessions. During these years, students are prepared to tackle different subjects along with learning the challenges of an additional Language. English, Mathematics, Social Science and Science are the core subjects. Apart from these, Subject Enrichment Activities, educational field trips, presentations of projects and class discussions are conducted to strengthen their awareness. Activities and experiments are conducted in the Junior Science Lab, Junior Computer Lab and the Maths Lab. The students get adequate exposure to remain updated in this tech savvy world.</p>
         </div>

         <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>SENIOR SCHOOL LEARNING PROGRAMME</p>
      <div class="container">
            <p  style={{ color: 'darkslategrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>We offer a broad and balanced curriculum which is designed to match the educational needs of the students within the requirements of the CBSE. Our objective is to equip the students with knowledge, skills and values which will enable them to face the Board Examination with confidence and at ease. Students gain experience in life skills for their personal and professional development that enable them to grow into young adults who are socially aware of their responsibilities towards the society. A carefully planned academic syllabus ensures that the student enjoys the years spent in learning and acquires a sound understanding of concepts in Mathematics, Social Science, Science, Computer Science and Languages. Activities and experiments are conducted in the Science Labs, the Maths Lab and the Computer Lab strengthening their practical knowledge. The syllabus is enriched by teacher designed worksheets and subject integrated projects. Emphasis is placed on learning through curriculum related field trips, talks by invited eminent speakers and presentations. Apart from these, Subject Enrichment Activities are also conducted. The school updates its curriculum annually to keep challenges of tomorrow pace with the advancements in technology and modification in CBSE syllabus. These strategies make students computer literate and empower them with comprehensive training, clearly defined learning objectives, exciting and relevant projects which are age specific. Technology not only deepens student learning in the content areas but also empowers them with life skills which help them meet the challenges in life.</p>
         </div>

           <p style={{ color: 'dimgray', fontSize:30, padding: 10,  textAlign:'left', fontFamily:'Geneva, Verdana, sans-serif' }}>SENIOR SECONDARY SCHOOL LEARNING PROGRAMME</p>
           <div class="container">
            <p  style={{ color: 'darkslategrey',  fontSize:16,  padding: 10, textAlign:'justify' }}>The course is intended to provide students a high level of competence through extensive exposure in the different subjects through practical experiments, presentations, discussions and interaction with renowned resource personnel. Practical Classes organised in the different Labs provide students good exposure to practise the theoretical concepts. We focus in developing proficiency, competence and analytical ability in each subject along with inculcating a taste for research and extra reading with discernment and delight, promoting each child's receptive and productive skills. By the time a child completes the two years of the senior school, he will be prepared to face academic challenges along with emotional balance and acumen to step into the competitive world outside. This wing grooms the students to excel academically and to perform well in Board Exams. The students are exposed to different career options to help them decide a niche for themselves in this competitive world.</p>
         </div>
         </Container>

    </section> 
    </div>
  
  );
}

export default Learning;