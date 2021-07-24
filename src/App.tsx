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
  linkDetail?: string;
}

const projects: IProject[] = [
  {
    id: 1,
    target: '/project/gretchenswanson',
    img: './images/logo-gretchen-swanson.png',
    alt: 'Gretchen Swanson Logo',
    linkDetail: 'Link to Gretchen Swanson project content',
  },
  {
    id: 2,
    target: '/project/rsm',
    img: './images/logo-rsm.png',
    alt: 'RSM Logo',
    linkDetail: 'Link to RSM project content',
  },
  {
    id: 3,
    target: '/project/ameriprise',
    img: './images/logo-ameriprise.png',
    alt: 'Ameriprise Logo',
    linkDetail: 'Link to Ameriprise Financial project content',
  },
  {
    id: 4,
    target: '/project/lhi',
    img: './images/logo-lhi.png',
    alt: 'LHI Logo',
    linkDetail: 'Link to Logistics Health Incorporated project content',
  },
  {
    id: 5,
    target: '/project/customguide',
    img: './images/logo-customguide.png',
    alt: 'CustomGuide Logo',
    linkDetail: 'Link to CustomGuide project content',
  },
  {
    id: 6,
    target: '/project/microsoft',
    img: './images/logo-microsoft.png',
    alt: 'Microsoft Logo',
    linkDetail: 'Link to Microsoft project content',
  },
  {
    id: 7,
    target: '/project/target',
    img: './images/logo-target.png',
    alt: 'Target Logo',
    linkDetail: 'Link to Target project content',
  },
  {
    id: 8,
    target: '/project/syncada',
    img: './images/logo-syncada.png',
    alt: 'Syncada Logo',
    linkDetail: 'Link to Syncada project content',
  },
  {
    id: 9,
    target: '/project/socialu',
    img: './images/logo-socialu.png',
    alt: 'SocialU Logo',
    linkDetail: 'Link to SocialU project content',
  },
  {
    id: 10,
    target: '/project/perficient',
    img: './images/logo-perficient.png',
    alt: 'Perficient Logo',
    linkDetail: 'Link to Perficient project content',
  },
];

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
            {projects.map(project => (
              <ProjectBlock key={project.id} {...project} />
            ))}
          </Row>
        </Container>
      </section>

      <GetIntouch />
      <Footer />
    </div>
  );
}

export default App;
