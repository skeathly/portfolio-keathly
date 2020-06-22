import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const ImgComponent = () => (
    <Img
        src={'/images/project-microsoft.png'}
        className="custom-shadow img-fluid rounded"
        loader={
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    />
)

const Microsoft = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense>
                    <ImgComponent />
                </Suspense>
            </div>

            <hr />

            <h3>Microsoft's Expert Zone <small>(expertzone.microsoft.com)</small></h3>
            <p>
                <strong>Freelance Front End Developer</strong> <span className="spacer">|</span> July 2014 - October 2014
            </p>
            <ul>
                <li>
                    Developed front end designs using Bootstrap 3 framework per reference designs which made
                    extensive use of Mustache templates.
                </li>
                <li>
                    Created and integrated AngularJS components into the primary header and grid systems.
                </li>
                <li>
                    Collaborated with the Front End Lead and back end team members.
                </li>
            </ul>
        </>
    )
}

export default Microsoft;