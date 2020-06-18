import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from 'react-bootstrap';

const ProjectBlock = (props) => {
    const { id, target, img, alt } = props.project;
    return (
        <Col xs={6} sm={4} md={3} key={id}>
            <Card className="project-card">
                <Link to={target}>
                    <Card.Img src={img} alt={alt} />
                </Link>
            </Card>
        </Col>
    )
}

export default ProjectBlock;