import React from 'react';
import '../styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Home  from '../views/Home'
import About from '../views/About'
import Reading from './Reading'
import Portfolio from '../views/Portfolio'
import { Container } from 'react-bootstrap';

const sections = [
  {title: 'Home', route:'/home', component: <Home />}, 
  {title: 'About', route:'/about', component: <About />}, 
  {title: 'Reading', route:'/reading', component: <Reading />}, 
  {title: 'Portfolio', route:'/portfolio', component: <Portfolio />},
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Container className="App">
        <NavBar sections={sections} />
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
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default App;
