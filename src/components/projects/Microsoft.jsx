import React from "react";
import { Image } from 'react-bootstrap';

const Microsoft = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4">
                <Image className="custom-shadow" src="/images/project-microsoft.png" alt="Microsoft's ExpertZone website" rounded fluid />
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