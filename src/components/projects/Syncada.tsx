import React, { Suspense } from "react";
import { Spinner } from 'react-bootstrap';
import { Img } from 'react-image';

const Syncada = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4 text-center">
                <Suspense fallback="Loading...">
                    <Img
                        src={'/images/project-syncada.png'}
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

            <h3>Syncada <small>(portal.syncada.com)</small></h3>
            <p>
                <strong>UI Developer</strong> <span className="spacer">|</span> January 2013 – June 2013
            </p>
            <ul>
                <li>
                    Translated designs from visual designers into high fidelity, interactive
                    prototypes for use via business development teams.
                </li>
                <li>
                    Utilized Microsoft Visual Studio 2012 and TFS environment to develop
                    and extend front-end JavaScript widgets (Kendo UI) with internal and
                    external Agile development teams.
                </li>
                <li>
                    Partnered with engineering teams to ensure interaction designs were
                    implemented accurately.
                </li>
            </ul>
        </>
    )
}

export default Syncada;