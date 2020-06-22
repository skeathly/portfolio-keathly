import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const ImgComponent = () => (
    <Img
        src={'/images/project-perficient.png'}
        className="custom-shadow img-fluid rounded"
        loader={
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    />
)

const Perficient = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense>
                    <ImgComponent />
                </Suspense>
            </div>

            <hr />

            <h3 className="mt-4">Perficient <small>(perficient.com)</small></h3>
            <p>
                <strong>Interactive Developer</strong> <span className="spacer">|</span> Jun 1999 – Apr 2001
            </p>
            <ul>
                <li>
                    Planned, designed, developed and maintained dynamic websites and
                    web-based applications for a wide range of clients including 3M, Blue
                    Cross / Blue Shield, Pradium, Cenex Harvest States, and DirectAg and
                    more.
                </li>
                <li>
                    Conducted web-based projects included accessibility, usability, performance,
                    and browser compatibility testing.
                </li>
                <li>
                    Utilized tools and technologies in the development of these sites including
                    Adobe Dreamweaver, Adobe Photoshop, HTML, and JavaScript.
                </li>
            </ul>
        </>
    )
}

export default Perficient;