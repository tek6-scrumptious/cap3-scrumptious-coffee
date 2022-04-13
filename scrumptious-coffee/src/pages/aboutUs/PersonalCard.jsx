import React from "react";
import "./AboutUs.css";
import { Card } from "react-bootstrap";

export default function PersonalCard(props) {
  return (
    <>
      <Card className="about-us-margin-top about-us-card">
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body className="about-us-grid">
          <img
            variant="top"
            src={process.env.PUBLIC_URL + "images/ScrumptiousLogo.png"}
            alt=""
            className={"about-us-profile-image " + props.position}
          />
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
