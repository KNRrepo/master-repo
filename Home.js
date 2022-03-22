import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import UserSignIn from './UserSignIn.js';
import Dashb from './Dashb';
import { Contacts, Dashboard, FirstPage } from '@material-ui/icons';
import history from './history';
import Admin from './Admin';
import User from './User';
import FirstScreen from './FirstScreen';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Learning from './Learning';
import OurSchool from './OurSchool';
import Classrooms from './Classrooms';
import Playground from './Playground';
import Labs from './Labs';
import DigitalClassroom from './DigitalClassroom';
import AboutUshome from './AboutUshome';
import Mission from './Mission';
import Achievements from './Achievements';
import Faculty from './Faculty';
function Index() {
  return (
    <React.Fragment>
      
      <Router history={history}>
      <AppAppBar exact path="" />
      <Route exact path="/" component={FirstScreen} />
      <Route exact path="/home" component={Dashb} />
      <Route exact path="/Signin" component={SignIn} />
      <Route exact path="/userSignin" component={UserSignIn} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/user" component={User} />
      <Route exact path="/contacts" component={ContactUs} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/learning" component={Learning} />
      <Route exact path="/ourSchool" component={OurSchool} />
      <Route exact path="/classrooms" component={Classrooms} />
      <Route exact path="/playground" component={Playground} />
      <Route exact path="/labs" component={Labs} />
      <Route exact path="/digitalClassroom" component={DigitalClassroom} />
      <Route exact path="/aboutUshome" component={AboutUshome} />
      <Route exact path="/mission" component={Mission} />
      <Route exact path="/achievements" component={Achievements} />
      <Route exact path="/faculty" component={Faculty} />
      </Router>
    {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default withRoot(Index);