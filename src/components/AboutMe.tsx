import React from "react";
import { Row, Col, Container, Image } from 'react-bootstrap';

const AboutMe = () => {
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
                    </Col>
                    <Col md={4}>
                        <Image src="./images/selfie.jpg" rounded fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe;