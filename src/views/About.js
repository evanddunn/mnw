import React from 'react';
import { Container, Row, Col, Media, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

export default class About extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  setModalShow(bool) {
    this.setState({
      showModal: bool,
    })
  }

  render () {
    return (
      <Container>
        <Row className="mb-4 mt-4">
          <Col>
            <Container className='Content'>
              <h2 className="mb-3">Molly N. Weybright</h2>
                <Media>
                  <img
                    width={300}
                    height={300}
                    className="mr-3"
                    src="https://www.servicedirect.com/images/about/headshots/molly-weybright.jpg"
                    alt="Molly N. Weybright"
                  />
                  <Media.Body>
                    <h5>About Me</h5>
                    <p>
                      Molly Weybright is a writer, reader, and designer from North Carolina. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </p>
                  </Media.Body>
                </Media>
                <Button onClick={() => this.setModalShow(true)}>ModalMe</Button>
                <Modal show={this.state.showModal} onHide={() => this.setModalShow(false)}/>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}