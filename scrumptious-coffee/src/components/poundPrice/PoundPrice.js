import React from "react";

//styles
import "./PoundPrice.css";
import { Card, ButtonGroup, Button } from "react-bootstrap";

export default function PoundPrice() {
  return (
    <div>
      <Card.Text>Weight:</Card.Text>

      <ButtonGroup className="mb-2 weight-buttons">
        <Button variant="outline-success" size="sm" className="lb-button">
          1/2 lb <br />
          $12.99
        </Button>{" "}
        <Button variant="outline-success" size="sm" className="lb-button">
          1 lb <br />
          $19.99
        </Button>
        <Button variant="outline-success" size="sm" className="lb-button">
          2 lb
          <br />
          $29.99
        </Button>
      </ButtonGroup>
    </div>
  );
}
