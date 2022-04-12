import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Make post request
    const url = "";
    axios
      .post(url, {
        email,
        password,
      })
      .then((response) => navigate("/"))
      .catch((error) => console.log(error));
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group className="mb-3  form-group" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
