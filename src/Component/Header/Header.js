import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logo-img/assignment-10-logo.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div style={{ position: 'sticky', top: '0', zIndex: '10' }}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img style={{ width: '150px', height: '50px', marginBottom: '10px' }} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to="/visitingspot">Local Spot</CustomLink>
                            <CustomLink to="/globalSpot">Global Spot</CustomLink>



                        </Nav>
                        <Nav>
                            <CustomLink to="/about">About</CustomLink>
                            <CustomLink to="/login">Login</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;