import React from 'react';
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { IoMdRefreshCircle } from "react-icons/io";
import Navigation from './Navigation';

const NoMatchPage: React.FC = () => {
    let history = useHistory();

    setTimeout(() => {
        history.push('/');
    }, 5000);

    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <Col className="mt-5 text-center">
                        <IconContext.Provider value={{ size: '3.5em', color: "#E63946" }}>
                            <IoMdRefreshCircle />
                        </IconContext.Provider>
                        <h3 className="mt-4">Sorry, page not found.</h3>
                        <p>Returning back to the home page.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NoMatchPage;