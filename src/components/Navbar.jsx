import React from 'react';

import {Button, Container, Form, Nav, Navbar, NavLink, NavbarBrand} from 'react-bootstrap';

const Navbarfunc = () => {
  return (
    
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FASTECH</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">MyProfile</Nav.Link>
            <Nav.Link href="#">Activity</Nav.Link>
            <Nav.Link href="#">How it Works</Nav.Link>
          </Nav>
          <Button variant="outline-light">Create</Button>{' '}
          <Button variant="outline-dark" className='text-light'>Sign in</Button>{' '}
        </Container>
      </Navbar>
  )
}

export default Navbarfunc;
