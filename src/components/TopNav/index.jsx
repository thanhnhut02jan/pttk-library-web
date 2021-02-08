import React, { useState } from 'react';

import {
  Link
} from "react-router-dom";

import {
  Navbar,
  Nav
} from 'react-bootstrap';

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/books-management/'>Quản lý sách</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;