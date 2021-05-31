import React from 'react';
import './App.scss';
import { Container, Row } from 'react-bootstrap';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import GetIntouch from './components/GetInTouch';
import Navigation from './components/Navigation';
import ParticlesHeader from './components/ParticlesHeader';
import ProjectBlock from './components/ProjectBlock';

interface IProject {
  id: number;
  target: string;
  img: string;
  alt: string;
}

const projects: IProject[] = [
  {
    id: 1,
    target: '/project/rsm',
    img: './images/logo-rsm.png',
    alt: 'RSM Logo'
  },
  {
    id: 2,
    target: '/project/ameriprise',
    img: './images/logo-ameriprise.png',
    alt: 'Ameriprise Logo'
  },
  {
    id: 3,
    target: '/project/lhi',
    img: './images/logo-lhi.png',
    alt: 'LHI Logo'
  },
  {
    id: 4,
    target: '/project/customguide',
    img: './images/logo-customguide.png',
    alt: 'CustomGuide Logo'
  },
  {
    id: 5,
    target: '/project/microsoft',
    img: './images/logo-microsoft.png',
    alt: 'Microsoft Logo'
  },
  {
    id: 6,
    target: '/project/target',
    img: './images/logo-target.png',
    alt: 'Target Logo'
  },
  {
    id: 7,
    target: '/project/syncada',
    img: './images/logo-syncada.png',
    alt: 'Syncada Logo'
  },
  {
    id: 8,
    target: '/project/socialu',
    img: './images/logo-socialu.png',
    alt: 'SocialU Logo'
  },
  {
    id: 9,
    target: '/project/perficient',
    img: './images/logo-perficient.png',
    alt: 'Perficient Logo'
  },
]

function App() {
  return (
    <div className="App">
      <Navigation />
      <ParticlesHeader />
      <AboutMe />

      <section className="projects pt-4 pb-4">
        <Container>
          <h2 className="mb-3">Past Projects</h2>
          <Row>
            {
              projects.map(project => <ProjectBlock key={project.id} {...project} />)
            }
          </Row>
        </Container>
      </section>

      <GetIntouch />
      <Footer />
    </div>
  );
}

export default App;
