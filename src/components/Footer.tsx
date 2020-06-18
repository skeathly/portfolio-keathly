import React from "react";
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer pt-2 pb-2">
            <Container>
                <p className="mb-0">© {year} Stan Keathly</p>
            </Container>
        </footer>
    )
}

export default Footer;