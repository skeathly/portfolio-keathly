import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";

import Footer from './Footer';
import Navigation from './Navigation';
import Ameriprise from './projects/Ameriprise';
import CustomGuide from './projects/CustomGuide';
import LHI from './projects/LHI';
import Microsoft from './projects/Microsoft';
import Perficient from './projects/Perficient';
import SocialU from './projects/SocialU';
import Syncada from './projects/Syncada';
import Target from './projects/Target';

const ProjectPage: React.FC = () => {
    let { id } = useParams();
    let history = useHistory();

    const renderSwitch = (id) => {
        switch (id) {
            case 'ameriprise':
                return <Ameriprise />;
            case 'customguide':
                return <CustomGuide />;
            case 'lhi':
                return <LHI />;
            case 'microsoft':
                return <Microsoft />;
            case 'perficient':
                return <Perficient />;
            case 'socialu':
                return <SocialU />;
            case 'syncada':
                return <Syncada />;
            case 'target':
                return <Target />;
        }
    }

    return (
        <>
            <Navigation />
            <Container className="project-page">
                <Row className="mt-4 mb-3">
                    <Col>
                        <Button onClick={() => history.goBack()} variant="secondary"><IoIosArrowBack /> Back</Button>
                    </Col>
                </Row>
                <div className="mb-5">{renderSwitch(id)}</div>
            </Container>
            <Footer />
        </>
    )
}

export default ProjectPage;