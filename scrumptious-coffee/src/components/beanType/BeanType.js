// imports
import React from "react";

// styles
import "./BeanType.css";
import { Card, Button } from "react-bootstrap";

export default function BeanType() {
  return (
    <div>
      <Card.Text>Bean type:</Card.Text>

      <Button size="lg" variant="outline-success" className="whole-btn">
        Whole
      </Button>
      <Button size="lg" variant="outline-success" className="ground-btn">
        Ground
      </Button>
    </div>
  );
}
