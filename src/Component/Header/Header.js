import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo-img/assignment-10-logo.png'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    const handleSignOut = () => {
        signOut(auth)
    }
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

                            {
                                user ? <CustomLink onClick={handleSignOut} to='/login' >Sign Out</CustomLink> : <CustomLink to="/login">Login</CustomLink>
                            }

                            {
                                user?.displayName && <Link className='mt-2 ms-4 text-decoration-none text-white' to=''> {user.displayName} </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;