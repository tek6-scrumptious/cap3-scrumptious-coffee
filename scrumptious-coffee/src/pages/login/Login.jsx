import React from "react";
import { useNavigate } from "react-router";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  async function handleLogin(e) {
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
    <div className="login-container">
      <Container>
        <h2>Login</h2>
        <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 "
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
