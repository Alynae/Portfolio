import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  
  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Navbar.Brand as={NavLink} exact to="/" style={{marginLeft:"7%"}}>Jérémy Le bricquer</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav >
          <Nav.Link  as={NavLink} className="itemLink" exact to="/" >Home</Nav.Link>
          <Nav.Link as={NavLink} className="itemLink" exact to="/resume" >Resume</Nav.Link>
          <Nav.Link  as={NavLink} className="itemLink" exact to="/formation"  >Formation</Nav.Link>
          <Nav.Link  as={NavLink} className="itemLink" exact to="/portfolio" >Portfolio</Nav.Link>
          <Nav.Link  as={NavLink} className="itemLink" exact to="/contact" >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;