import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const ImgComponent = () => (
    <Img
        src={'/images/project-target.png'}
        className="custom-shadow img-fluid rounded"
        loader={
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
    />
)

const Target = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense>
                    <ImgComponent />
                </Suspense>
            </div>

            <hr />

            <h3>Target <small>(m.target.com)</small></h3>
            <p>
                <strong>Front End Developer</strong> <span className="spacer">|</span> July 2013 – July 2014
            </p>
            <ul>
                <li>
                    Front End development utilizing standards compliant HTML5, CSS3,
                    JavaScript and some JSP to develop new features and enhancements to the
                    Target Mobile Web platform.
                </li>
                <li>
                    Responsible for resolution of mobile defects from older Android 2.x to
                    modern mobile devices. Involved in troubleshooting mobile web embeds
                    within Android and iPhone Target mobile apps.
                </li>
                <li>
                    Utilized the JIRA platform to keep track of development and defects.
                </li>
                <li>
                    Collaborated with remote development teams (Front End / Back End), <abbr title="User Experience">UX</abbr> Strategists,
                    Business Analysts, and Designers to move Target platform forward.
                </li>
            </ul>
        </>
    )
}

export default Target;