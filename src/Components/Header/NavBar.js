import React from 'react'
import { Navbar, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap';
import '../Header/NavBar.css';

export default function NavBar() {
    return (
        <div>
            <Navbar className= "navBar" expand="lg">
  <Navbar.Brand className= "text" href="/">Ruben Sainz</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Form inline className="links">
    <Nav className="text mr-auto">
      <Nav.Link className= "text" href="/">Home</Nav.Link>
      <Nav.Link className= "text" href="/Portfolio">Portfolio</Nav.Link>
      <Nav.Link className= "text" href="/Contact">Contact</Nav.Link>
    </Nav>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
