import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Navbar.Brand as={NavLink} exact to="/">Jérémy Le bricquer</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Nav >
          <Nav.Link  as={NavLink}exact to="/" >Home</Nav.Link>
          <Nav.Link as={NavLink} exact to="/resume" >Resume</Nav.Link>
          <Nav.Link  as={NavLink} exact to="/formation"  >Formation</Nav.Link>
          <Nav.Link  as={NavLink} exact to="/portfolio" >Portfolio</Nav.Link>
          <Nav.Link  as={NavLink} exact to="/contact" >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
