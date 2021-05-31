import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const RSM = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense fallback="Loading...">
                    <Img
                        src={'/images/project-rsm-1.png'}
                        className="custom-shadow img-fluid rounded"
                        loader={
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        }
                    />
                </Suspense>
            </div>

            <hr />

            <h3>RSM<small> (rsmus.com)</small></h3>
            <p><strong>Front End Developer</strong> <span className="spacer">|</span> October 2020 – January 2021</p>
            <ul>
                <li>
                    Developed an internal auditing application for RSM which included multiple subsidiary applications 
                    developed in React.  Application made use of React Hooks rather than older style class components.
                </li>
                <li>Integrated project into modules to help keep several distinct applications organized.</li>

                <li>
                    Utilized React-Bootstrap framework to help speed up development time and customized it using 
                    SASS to align with RSM branding guidelines.
                </li>
                <li>
                    Made use of React's Context API to handle state management application needs and also used 
                    Jest for testing.
                </li> 
            </ul>
        </>
    )
}

export default RSM;
