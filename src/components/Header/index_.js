import  React, {Component}  from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
class Header extends Component {
    state = {  }
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">Movie Now</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav>Bem vinda, Fran</Nav>
                </Nav>
                <Nav className="me-auto">
                    <Button variant="outline-danger">Sign Out</Button>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default Header;