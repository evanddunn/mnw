import React from 'react';
import { Card, Container, Row, Col, Media, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

import { Home as home } from '../views/Home';
import About from '../views/About';
import Reading from '../views/Reading';
import Portfolio from '../views/Portfolio';
import logo from '../assets/logo1.png';
import mollyHero from '../assets/molly-hero.jpg';

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
              src={mollyHero}
              alt="Molly N. Weybright"
              style={{
                borderRadius: '5px',
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            />
          </Row>
        <NavBar home />
      </Container>
    )
  }
}