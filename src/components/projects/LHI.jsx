import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const ImgComponent = () => (
    <Img
        src={'/images/project-lhi.png'}
        className="custom-shadow img-fluid rounded"
        loader={
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    />
)

const LHI = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense>
                    <ImgComponent />
                </Suspense>
            </div>

            <hr />

            <h3>Logistics Health Incorporated<small> (logisticshealth.com)</small></h3>
            <p><strong>Front End Developer</strong> <span className="spacer">|</span> November 2017 – March 2020</p>
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
                    Worked collaboratively with the <abbr title="User Experience">UX</abbr> team to implement new features and address backlog items.
                </li>
            </ul>
        </>
    )
}

export default LHI;