import React from "react";
import { Button, Container } from 'react-bootstrap';

const AboutMe = () => {
    const openPDF = () => {
        var newWindow = window.open('http://stankeathly.com/assets/documents/stan-keathly-resume.pdf');
        newWindow.opener = null;
    }

    return (
        <section className="resume pt-4 pb-4">
            <Container>
                <h2>Resume</h2>
                <p>If you're a recruiter or just interested in a hard copy of my resume as a PDF, you can view it by clicking the button below.</p>

                <Button onClick={openPDF}>View PDF</Button>
            </Container>
        </section>
    )
}

export default AboutMe;