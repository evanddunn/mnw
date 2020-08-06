import React from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <Container className="NavBar">
        <Nav className="Logo justify-content-center">
            <img height="100" src={logo}/>
        </Nav>
        <Nav className="Links justify-content-between">
          {this.props.sections.map((section) => (
            <Nav.Item>
              <Nav.Link active as={Link} to={section.route}>
                {section.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    );
  }
}
