import React from "react";
import { Row, Col, Container, Image, Button, Badge } from 'react-bootstrap';
import { IoIosMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const AboutMe = () => {
    const openResume = () => {
        var newWindow = window.open('./documents/stan-keathly-resume.pdf');
        newWindow.opener = null;
    }

    const tags = ["Angular", "AngularJS", "Bootstrap", "Express", "Git", "Headless", "JAM Stack", "jQuery", "NextJS", "Node", "NPM", "React", "React Native", "Redux", "Responsive Design", "REST", "Svelte", "TypeScript", "VueJS",
        "Web Applications", "Web Components", "Webpack", "HTML5", "CSS3", "SASS", "WCAG Compliance"]

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
                                        <Badge pill variant="secondary" key={index} className="tag">{tag}</Badge>
                                    )
                                })
                            }
                        </div>

                        <hr />

                        <p>Click to view my resume.</p>
                        <Button onClick={openResume} className="mb-3">View Resume</Button>
                        <hr class="d-block d-md-none" />
                    </Col>
                    <Col md={4} className="text-center">
                        <Image src="./images/selfie.jpg" alt="Stan Keathly" rounded fluid />

                        <hr />

                        <div className="social">
                            <a href="mailto:skeathly@gmail.com?subject=Contact Form">
                                <IoIosMail aria-hidden="true" />
                                <span className="sr-only">Send me an email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/stan-keathly" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin aria-hidden="true" />
                                <span className="sr-only">Visit my LinkedIn page</span>
                            </a>
                            <a href="https://github.com/skeathly" target="_blank" rel="noopener noreferrer">
                                <IoLogoGithub  aria-hidden="true" />
                                <span className="sr-only">Visit my Github page</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default AboutMe;
