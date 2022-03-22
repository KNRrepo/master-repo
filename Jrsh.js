import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import { Functions } from '@material-ui/icons';

function Jrsh() { 
  return (
    <div >
      <Container  style={{
      backgroundColor:'beige',
      width:'100%'
    }}> 
      <p style={{ color: 'dimgray',  fontSize:40, fontFamily:'Stencil Std, fantasy' }}>JUNIOR SCHOOL</p>
      <hr
    style={{
      backgroundColor: 'dimgray',
      height: 3,
      width: 170
    }}
    />
    <br/>
    </Container>
      <img 
         width={350} height={250} 
        src="https://d2rdy13jtquiv5.cloudfront.net/resized/generalimages/5250/Students-reading-together-2018_bea5758d45024feaddfe6179a912daf4_aa2d99f064f02ed737137ecdf2924363.jpg">
          </img>
    <br/>
     <h2>ACADEMIA</h2>
    <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign: 'justify',}}>We nurture and encourage students, recognising that students have differing abilities, interests and goals. Our formal curriculum is demanding yet sufficiently flexible to allow for different rates of development and learning.</p>
    <h3>JUNIOR SCHOOL</h3>
    <br/>
    <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify',}}>letting the Foundation

From Preparatory to Year 5, teachers deliver an innovative, cohesive and sequential curriculum that reflects an understanding of how boys learn.
</p>
<p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify'}}>The curriculum is organised into core subject areas comprising English, Health and Physical Education, Language in addition to English Mandarin Chinese, Mathematics, Music, Technologies including Digital technologies and Visual Art. Integrated Studies is the area of Humanities and Social Sciences, which includes History, Geography, Science, and Civics and Citizenship (Years 3 to 5) and Economics and Business (Year 5). Students develop skills, values and concepts through the powerful medium of an inquiry-based approach to these Integrated Studies.</p>
    
    <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify'}}>Enrichment and support in the Junior School takes many forms with much occurring in the classroom as teachers differentiate for the range of abilities of boys in the various subject areas. The Student Support Unit program provides literacy support and extension, numeracy support and extension and EAL (English as an Additional language).
</p>
    <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify'}}>Opportunities for extension and enrichment are provided through programs such as Science Talent Search, Maths Olympiad, Chess Clubs and Music groups.</p>
        
    <p style={{ color: 'dimgrey', fontSize:16, padding: 10, textAlign:'justify'}}>In Junior School, our focus is on knowing and nurturing the students during these critical formative years, providing a solid foundation for future learning.

</p>
    </div>
  )
}
export default Jrsh;