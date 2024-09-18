import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../images/Logo.svg'; // Import the local image

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo} // Use the imported local image
            alt="Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
