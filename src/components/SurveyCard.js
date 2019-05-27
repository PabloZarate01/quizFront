import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row } from 'reactstrap';

const SurveyCard = (props) => {
  return (
      <React.Fragment>
        <Col>
        <Card>
          <CardHeader>CardHeader</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        <Card>
          <CardHeader tag="h3">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
        </Col>
      </React.Fragment>
  );
};

export default SurveyCard;