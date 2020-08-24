import React from "react";
import { Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import config from './particle-config';

const ParticlesHeader: React.FC = () => {
    return (
        <header className="particle-header">
            <Container className="mt-5 particle-container">
                <h1>Mobile first web development with HTML, CSS, JavaScript, WordPress and more.</h1>
                <p className="lead">
                    My name is Stan Keathly. I'm a frontend developer / designer based in Minneapolis, MN and I'd like to help you build your next project.
                </p>
            </Container>

            <Particles
                style={{
                    position: 'absolute',
                    top: 0
                }}
                params={config} />
        </header>
    )
}

export default ParticlesHeader;