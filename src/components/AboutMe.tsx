import React from "react";
import { Row, Col, Container, Image, Button, Badge } from 'react-bootstrap';

const AboutMe = () => {
    const openPDF = () => {
        var newWindow = window.open('http://stankeathly.com/assets/documents/stan-keathly-resume.pdf');
        newWindow.opener = null;
    }

    const tags = ["Angular", "AngularJS", "Bootstrap", "Git", "Headless", "JAM Stack", "jQuery", "NextJS", "Node", "NPM", "React", "Responsive Design", "REST", "Svelte", "TypeScript", "VueJS",
        "Web Applications", "Web Components", "Webpack", "HTML5", "CSS3", "SASS"]

    return (
        <section className="about-me pt-4 pb-4">
            <Container>
                <h2>About Me</h2>
                <Row>
                    <Col md={8}>
                        <p>
                            I'm a frontend developer, website designer, and web standards enthusiast. I have over 10 years of experience designing and building attractive, accesible websites and web applications for clients big and small.
                        </p>
                        <p>
                            I love to learn new things and&nbsp;am constantly striving to find solutions to difficult problems. In addition, I appreciate great design and you can often find me listening to indie music and drinking a cup of joe. When I'm away from my computer, I enjoy spending time with my family.
                        </p>
                        <p>
                            Please have a look around my website, and get in touch if you would like to work together on a project.</p><p>
                        </p>

                        <hr />

                        <h3 style={{ fontSize: '24px' }}>Specialties:</h3>
                        <div>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <span><Badge pill variant="secondary" key={index} className="tag">{tag}</Badge></span>
                                    )
                                })
                            }
                        </div>

                        <hr />

                        <p>Click below to view my resume.</p>
                        <Button onClick={openPDF}>View PDF</Button>
                    </Col>
                    <Col md={4}>
                        <Image src="./images/selfie.jpg" alt="Stan Keathly" rounded fluid />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AboutMe;