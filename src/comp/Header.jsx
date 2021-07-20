import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
  <header>
        <Navbar expand="lg p-0">
  <Container>
    <Navbar.Brand href="#home"><h1>Valentín</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <li><Nav.Link className="py-4 px-4 elInicio" href="#home">Home</Nav.Link></li>
        <li><Nav.Link className="py-4 px-4" href="#quiensoy">Quien Soy</Nav.Link></li>
        <li><Nav.Link className="py-4 px-4" href="#portfolio">Portfolio</Nav.Link></li>
        <li><Nav.Link className="py-4 px-4 elFin" href="#contacto">Contacto</Nav.Link></li>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
    )
}

export default Header
