import React from "react";
import { Carousel } from 'react-bootstrap';

const Ameriprise = () => {
    const slides = [
        {
            id: 1,
            img: '/images/project-ameriprise-1.png',
            alt: 'First Slide',
            description: 'Tasked with 508 and WCAG compliance updates.'
        }, {
            id: 2,
            img: '/images/project-ameriprise-2.png',
            alt: 'Second Slide',
            description: 'Several page components needed to be rewritten in order to make them properly accessible.'
        }, {
            id: 3,
            img: '/images/project-ameriprise-3.png',
            alt: 'Third Slide',
            description: 'In addition to accessibility updates, there were a multitude of UI enhancements along the way.'
        }
    ];

    return (
        <>
            <div className="project-image-wrapper mb-4">
                <Carousel>
                    {
                        slides.map(slide => {
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
                            )
                        })
                    }
                </Carousel>
            </div>

            <hr />

            <h3>Ameriprise Advisors<small> (ameripriseadvisors.com)</small></h3>
            <p><strong>Front End Developer</strong> <span className="spacer">|</span> April 2020 – July 2020</p>
            <ul>
                <li>Was brought into the project to address concerns with 508 and <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> compliance issues.</li>
                <li>Overhauled the site tab order flow to enhance natural user workflow.</li>
                <li>Updated non-accessible components that had been utilized including auto-suggest, dropdowns, and range sliders and others.</li>
                <li>In the process of these updates there was a good number of <abbr title="User Interface">UI</abbr> updates that where also implemented.</li>
            </ul>
        </>
    )
}

export default Ameriprise;