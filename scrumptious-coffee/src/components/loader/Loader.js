import React from "react";

import { Spinner } from "react-bootstrap";
import "./Loader.css";

export default function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      className="loader"
      variant="success"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
