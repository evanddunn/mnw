import React from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, Row } from 'react-bootstrap';

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
                  {this.props.sections.map((section) => (
                    <Nav.Item>
                      <Nav.Link active as={Link} to={section.route}>
                        {section.title}
                      </Nav.Link>
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
                  {this.props.sections.map((section, i) => (
                    <Nav.Item key={i}>
                      <Nav.Link key={i} active as={Link} to={section.route}>
                        {section.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
            </Row>
        }
      </Container>
    );
  }
}
