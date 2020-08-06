import React from 'react';
import { Card, Container, Row, Col, Media, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends React.Component  {
  render () {
    return (
      <Container>
        <Row className="mb-4">
          <Col>
            <Container className='Content'>
              <h2>Molly N. Weybright</h2>
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
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </p>
                    <Link as={Link} to={'about'}>Read More</Link>
                  </Media.Body>
                  <img
                    width={300}
                    height={300}
                    className="ml-3"
                    src="https://www.servicedirect.com/images/about/headshots/molly-weybright.jpg"
                    alt="Molly N. Weybright"
                  />
                </Media>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="w-50 mt-5 mb-5 p-3 ">
            <h4>'A reader lives a thousand lives before he dies. The man who never reads lives only one'</h4>
            <p className="d-flex justify-content-end">- George R. R. Martin</p>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
                <Row>
                <Col>
                  <Card>
                    <Card.Img style={{filter: "blur(5px)", height: '300px'}} src="https://st4.depositphotos.com/25502864/30160/i/1600/depositphotos_301603262-stock-photo-book-stack-library-room-copy.jpg"/>
                    <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                      <Card.Text>
                        <h3 className="text-white">Reading</h3>
                      </Card.Text>
                      <Link as={Link} to={'reading'} className="text-red">Read More</Link>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                </Row>
            </Container>
          </Col>
          <Col>
            <Card>
              <Card.Img style={{filter: "blur(5px)", height: '300px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"/>
              <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                <Card.Text>
                  <h3 className="text-white">Graphic Design</h3>
                </Card.Text>
                <Link as={Link} to={'reading'} className="text-red">Read More</Link>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
          <Container>
              <Media>
                <img
                  width={100}
                  className="mr-3"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"
                  alt="Molly N. Weybright"
                />
                <Media.Body>
                  <h6>ANother one</h6>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo.
                  </p>
                  <Card.Link as={Link} to={'portfolio'}>Read More</Card.Link>
                </Media.Body>
              </Media>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}