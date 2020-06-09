import React, { Component } from 'react';
import './Styles.css';
import { Container, Row, Col } from 'reactstrap';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./components/Home/Home";
import Sessions from "./components/Sessions";
import Downloads from "./components/Downloads";
import Settings from "./components/Settings";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = {
    currentPage: "Home"
  }
  render() {
    return (
      <Router>
        <div>
          <Header title="Home" />
          <Container fluid={true}>
            <Row>
              <Col xs="3" style={{ padding: 0 }} className="full-height">
                <Sidebar />
              </Col>
              <Col style={{ padding: 0 }}>
                <Switch>
                  <Route path="/Sessions">
                    <Sessions />
                  </Route>
                  <Route path="/Downloads">
                    <Downloads />
                  </Route>
                  <Route path="/Settings">
                    <Settings />
                  </Route>
                  <Route path="/About">
                    <About />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }

}

export default App;
