import React from "react";
import { Image } from 'react-bootstrap';

const LHI = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4">
                <Image className="custom-shadow" src="/images/project-lhi.png" alt="LHI login screen" rounded fluid />
            </div>

            <hr />

            <h3>Logistics Health Incorporated<small> (logisticshealth.com)</small></h3>
            <p><strong>Front End Developer</strong> <span class="spacer">|</span> November 2017 – March 2020</p>
            <ul>
                <li>
                    Developed in-house Angular component and style library that included a common set of web controls
                    (auto-suggest, calendar, modal, toast, and others) that were utilized across the organization's
                    various web applications.
                </li>
                <li>
                    Involved in migrating multiple older web applications to utilize modern Angular infrastructure
                    as well as implement new features and fix bugs.
                </li>
                <li>
                    Responsible for web application version upgrades from Angular 4-8 and fixing issues associated
                    with these upgrades.
                </li>
                <li>
                    Worked collaboratively with the UX team to implement new features and address backlog items.
                </li>
            </ul>
        </>
    )
}

export default LHI;