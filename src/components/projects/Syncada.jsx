import React from "react";
import { Image } from 'react-bootstrap';

const Syncada = () => {
    return (
        <>
            <div className="project-image-wrapper mb-4">
                <Image className="custom-shadow" src="/images/project-syncada.png" alt="Syncada website" rounded fluid />
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