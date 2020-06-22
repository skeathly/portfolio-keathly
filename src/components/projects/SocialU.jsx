import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const ImgComponent = () => (
    <Img
        src={'/images/project-socialu.png'}
        className="custom-shadow img-fluid rounded"
        loader={
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    />
)

const SocialU = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense>
                    <ImgComponent />
                </Suspense>
            </div>

            <hr />

            <h3>SocialU <small>(socialu.com)</small></h3>
            <p>
                <strong>Front End Developer</strong> <span className="spacer">|</span> Jun 2009 – Dec 2012
            </p>
            <ul>
                <li>
                    Developed front-end templates and components in an Agile development environment for SocialU, a social learning and development platform.</li>
                <li>
                    Focused on creating standards compliant HTML, CSS, and JavaScript
                    (jQuery / jQuery UI) code. Ensured cross-browser compatibility on
                    multiple operating systems, browsers and devices.
                </li>
                <li>
                    Embraced mobile first, responsive design approach.
                </li>
                <li>
                    Created a flexible HTML document standard used for translation into
                    multiple formats utilized on desktop, mobile and eReader (ePub, Mobi)
                    platforms.
                </li>
            </ul>
        </>
    )
}

export default SocialU;