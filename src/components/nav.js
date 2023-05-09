import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import favicon from '../image/favicon/favicon.svg';

function Navigation() {
    return (  
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#introduction"><img src={favicon} width="50" height="50" alt="Jon Chen logo"/>Jon Chen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;