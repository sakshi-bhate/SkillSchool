import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from './images/logo.png'
import munlogo from './images/munlogo.png'


const Navigation= () => {
  return (
    <div >
      <Navbar bg="transparent" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand href="https://muniversiti.org/" style={{paddingLeft:0}}>
            <img
            src={munlogo}
            alt="Muniversiti Logo"
            className="d-inline-block align-top"
            width="99"
            height="60"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://muniversiti.org/" style={{fontSize:19}}>
                  ABOUT US
              </Nav.Link>
              <Nav.Link href="#">
                <a className="custom-button link-button">REQUEST A BROCHURE</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
