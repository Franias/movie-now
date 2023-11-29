import React from 'react';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {StyledNav} from './styles'


function Header() {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">Movie Now</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <StyledNav className="me-auto">
                    <StyledNav>Bem vinda, Fran</StyledNav>
                </StyledNav>
                <StyledNav className="me-auto">
                    <Button variant="outline-danger">Sign Out</Button>
                </StyledNav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default Header;