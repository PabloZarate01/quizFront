import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Row } from 'reactstrap';

const SurveyCard = (props) => {
  return (
      <React.Fragment>
        <Col sm="4">
        <Card>
          <CardHeader>{props.title}</CardHeader>
          <CardBody>
            <CardText>{props.text}</CardText>
            <CardBody>{props.option}</CardBody>
          </CardBody>
          <CardFooter>{props.date}</CardFooter>
        </Card>
        </Col>
      </React.Fragment>
  );
};

export default SurveyCard;