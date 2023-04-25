import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { NavLink } from 'react-router-dom'

const Ericssion = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/ericssion">Ericssion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="/">Sign Up</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Ericssion