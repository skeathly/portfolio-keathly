import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation: React.FC = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Stan Keathly</Navbar.Brand>
                    <Navbar.Toggle className="d-none" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-none">
                            <Nav.Link href="#deets">nav</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">nav</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default Navigation;