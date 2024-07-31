import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#" className='fw-bold'>STYLES & FASHION</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0 fw-bold" 
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">WOMEN</Nav.Link>
          <Nav.Link href="#action2">MEN</Nav.Link>
           <Nav.Link href="#action2">CHILDREN</Nav.Link>
           <Nav.Link href="#action2">BEAUTY</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
