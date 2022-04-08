import React from "react";
import "./AboutUs.css";
import { Card } from "react-bootstrap";

export default function PersonalCard(props) {
  return (
    <>
      <Card className="about-us-margin-top about-us-card">
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
