import React from 'react';
import '../styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import Home  from '../views/Home'
import About from '../views/About'
import Reading from '../views/Reading'
import Portfolio from '../views/Portfolio'

import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const sections = [
  {title: 'Home', route:'/home', component: <Home />}, 
  {title: 'About', route:'/about', component: <About />}, 
  {title: 'Reading', route:'/reading', component: <Reading />}, 
  {title: 'Portfolio', route:'/portfolio', component: <Portfolio />},
];

function App(props) {
    return (
      <Container className="App">
        {useLocation().pathname !== '/home' ? <NavBar sections={sections} /> : null}
        <div className="Body">
            <Switch>
              <Redirect from="/" exact to="/home" />
              {sections.map((section) => (
                <Route exact path={section.route}>
                  {section.component}
                </Route>
              ))}
            </Switch>
        </div>
        <Container className="fixed-bottom">
          <Row >
            <Col className="d-flex w-100 mb-1 justify-content-center">
              <a href="https://www.linkedin.com/in/mollyweybright/"><AiFillLinkedin className="mr-1"/></a>
              <a href="https://www.instagram.com/mollyweybright/?hl=en"><AiFillInstagram /></a>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <p className="text-lightGrey text-center">
                &copy; Molly N. Weybright 2020<br/>Webmaster Evan D. Dunn
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
} export default App;
