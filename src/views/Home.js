import React from 'react';
import { Card, Container, Row, Col, Media, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

import { Home as home } from '../views/Home'
import About from '../views/About'
import Reading from '../views/Reading'
import Portfolio from '../views/Portfolio'
import logo from '../logo.svg'

const sections = [
  {title: 'Home', route:'/home', component: <home />}, 
  {title: 'About', route:'/about', component: <About />}, 
  {title: 'Reading', route:'/reading', component: <Reading />}, 
  {title: 'Portfolio', route:'/portfolio', component: <Portfolio />},
];

export default class Home extends React.Component  {
  render () {
    return (
      <Container>
          <Row className="justify-content-center">
            <img className="mt-3 mb-3" height="100" src={logo}/>
          </Row>
          <Row className="justify-content-center">
            <img
              width={1000}
              className="mb-3"
              src="https://format-com-cld-res.cloudinary.com/image/private/s--XsBfUMxq--/c_crop,h_675,w_1215,x_0,y_0/c_fill,g_center,h_534,w_960/dpr_2,fl_keep_iptc.progressive.apng/v1/6eb2389e6427a13540adbb1abec7622b/Screen_Shot_2017-02-22_at_12_36_54_PM.png"
              alt="Molly N. Weybright"
              style={{
                borderRadius: '5px',
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            />
          </Row>
        <NavBar home sections={sections} />
      </Container>
    )
  }
}