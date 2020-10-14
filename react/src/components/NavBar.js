import React from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';

import Home  from '../views/Home'
import About from '../views/About'
import Reading from '../views/Reading'
import Portfolio from '../views/Portfolio'

const sections = [
  {title: 'Home', route:'/home', component: <Home />}, 
  {title: 'About', route:'/about', component: <About />}, 
  // {title: 'Reading', route:'/reading', component: <Reading />}, 
  {title: 'Portfolio', route: '/portfolio', component: <Portfolio />},
];

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Container className="NavBar">
        {!this.props.home 
          ?
            <div>
              <Row className="justify-content-center mt-3">
                <Nav className="Logo">
                    <img height="100" src={logo}/>
                </Nav>
              </Row>
              <Row className="justify-content-center">
                <Nav className="Links">
                  {sections.map((section, i) => (
                    <Nav.Item key={i}>
                      {
                        section.title != 'Portfolio' 
                        ? 
                          <Nav.Link active as={Link} to={section.route}>
                            {section.title} 
                          </Nav.Link>
                        : 
                          <Dropdown>
                            <Dropdown.Toggle variant='link'>{section.title}</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="">
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Graphic Design
                                </Nav.Link>
                              </Dropdown.Item>
                              <Dropdown.Item href="">
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Fiction
                                </Nav.Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Jounralism
                                </Nav.Link>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        }
                    </Nav.Item>
                  ))}
                </Nav>
              </Row>
            </div>
          :
            <Row className="justify-content-between">
              <Nav className="">
                  <h2 className="">Molly N. Weybright | Writer</h2>
              </Nav>
              <Nav className="Links">
                  {sections.map((section, i) => (
                    <Nav.Item key={i}>
                      {
                        section.title != 'Portfolio' 
                        ? 
                          <Nav.Link active as={Link} to={section.route}>
                            {section.title} 
                          </Nav.Link>
                        : 
                          <Dropdown>
                            <Dropdown.Toggle variant='link'>{section.title}</Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="">
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Graphic Design
                                </Nav.Link>
                              </Dropdown.Item>
                              <Dropdown.Item href="">
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Fiction
                                </Nav.Link>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                <Nav.Link active as={Link} to={'/portfolio'}>
                                  Jounralism
                                </Nav.Link>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        }
                    </Nav.Item>
                  ))}
                </Nav>
            </Row>
        }
      </Container>
    );
  }
}
