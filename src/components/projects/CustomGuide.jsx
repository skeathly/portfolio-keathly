import React from "react";
import { Carousel } from 'react-bootstrap';

const CustomGuide = () => {
    const slides = [
        {
            id: 1,
            img: '/images/project-customguide.png',
            alt: 'First Slide',
            description: 'CustomGuide catalog listing on the CustomGuide website.'
        }, {
            id: 2,
            img: '/images/project-customguide-player.png',
            alt: 'Second Slide',
            description: 'Example screenshot in the process of wireframing out elearning player completion states screens in the new CustomGuide platform.'
        }, {
            id: 3,
            img: '/images/project-customguide-tile-1.png',
            alt: 'Third Slide',
            description: 'Designed each tile image for the CustomGuide product catalog (Microsoft Outlook).'
        }, {
            id: 4,
            img: '/images/project-customguide-tile-2.png',
            alt: 'Fourth Slide',
            description: 'Another example of tile image I designed for the CustomGuide product catalog (Microsoft Powerpoint).'
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

            <h3 className="mt-4">CustomGuide <small>(customguide.com)</small></h3>
            <p>
                <strong>Front End Developer</strong> <span className="spacer">|</span> May 2001 – May 2009 &amp; October 2014 – June 2017
            </p>
            <ul>
                <li>
                    Headed feasibility study to determine viability of open source (<a href="https://moodle.org" target="_blank" rel="noopener noreferrer">Moodle</a>),
                    commercial (<a href="https://www.totaralearning.com" target="_blank" rel="noopener noreferrer">Totara LMS</a>), and custom development options for a new Learning
                    Management System.
                </li>
                <li>
                    Protyped / developed front-end templates and components for custom built social learning and development platform.
                    Created standards compliant HTML, CSS and integrated JavaScript framework code (<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>)
                    into the platform.
                </li>
                <li>
                    Developed automated <abbr title="Shareable Content Object Reference Model">SCORM</abbr> generation tools for HTML5
                    elearning content (PHP).
                </li>
                <li>
                    Developed and maintained additional CustomGuide Wordpress sites which included Custom Post Types and Fields as well
                    as integration with Salesforce CRM platform (PHP).
                </li>
            </ul>
        </>
    )
}

export default CustomGuide;