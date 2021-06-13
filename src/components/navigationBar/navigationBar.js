import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
.navbar, .navbar-brand {
    color: black;
    font : normal normal normal 1.6rem/1.4em playfairdisplay-bold,'playfair display',serif;
    &:hover {
      text-decoration : none;
    }
}

a, .navbar-nav .nav-link,p {
    color: black;
    font: normal normal normal 1rem/1.4em playfairdisplay-bold,'playfair display',serif;
    &:hover {
        color: #BB5A3A;
    transition : color 0.4s ease 0s;
    }
}
}`;

const NavigationBar = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Link to="/" className="d-inline-block align-top navbar">
          V Blogs
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/blog" className="nav-link">
                My Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/aboutMe" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <a href="#vaishantCopyright" className="nav-link">
                Contact
              </a>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
