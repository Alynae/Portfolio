import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">Jérémy Le bricquer</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/formation">Formation</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
