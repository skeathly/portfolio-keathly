import React from 'react';
import { Carousel } from 'react-bootstrap';

interface Slide {
  id: number;
  img: string;
  alt: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    img: '/images/project-gretchen-swanson-1.png',
    alt: 'First Slide',
    description: 'Gretchen Swanson home page',
  },
  {
    id: 2,
    img: '/images/project-gretchen-swanson-2.png',
    alt: 'Second Slide',
    description: 'Interactive grantee map utilizing D3 library',
  },
  {
    id: 3,
    img: '/images/project-gretchen-swanson-3.png',
    alt: 'Third Slide',
    description: 'News content with options to both filter and search articles',
  },
];

const GretchenSwanson: React.FC = () => {
  return (
    <>
      <div className="project-image-wrapper mb-4">
        <Carousel>
          {slides.map(slide => {
            return (
              <Carousel.Item key={slide.id}>
                <img
                  className="d-block w-100"
                  src={slide.img}
                  alt={slide.alt}
                />
                <Carousel.Caption>
                  <p>{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <hr />

      <h3>
        Gretchen Swanson<small> (https://www.centerfornutrition.org)</small>
      </h3>
      <p>
        <strong>Front End Developer</strong> <span className="spacer">|</span>
        January 2021 – Current
      </p>
      <ul>
        <li>Coming Soon.</li>
      </ul>
    </>
  );
};

export default GretchenSwanson;
