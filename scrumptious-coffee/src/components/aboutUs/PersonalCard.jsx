import React from "react";
import "../../pages/aboutUs/AboutUs.css";
import { Card } from "react-bootstrap";

export default function PersonalCard(props) {
  return (
    <>
      <Card className={"about-us-margin-top about-us-card " + props.other}>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body className={"about-us-grid " + props.bodyPosition}>
          <img
            variant="top"
            src={
              process.env.PUBLIC_URL +
              "images/about-us-images/" +
              props.imageUrl +
              ".png"
            }
            alt=""
            className={"about-us-profile-image " + props.position}
          />
          <Card.Text className="about-us-card-text">{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
