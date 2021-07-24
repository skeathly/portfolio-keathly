import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

interface Props {
  id: number;
  target: string;
  img: string;
  alt: string;
  linkDetail?: string;
}

const ProjectBlock: React.FC<Props> = ({
  id,
  target,
  img,
  alt,
  linkDetail,
}) => {
  return (
    <Col xs={6} sm={4} md={3} key={id}>
      <Card className="project-card">
        <Link to={target}>
          <Card.Img src={img} alt={alt} />
          <div className="sr-only">{linkDetail}</div>
        </Link>
      </Card>
    </Col>
  );
};

export default ProjectBlock;
