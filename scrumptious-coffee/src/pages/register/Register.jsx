import React from "react";
import { Link } from "react-router-dom";
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

    // Make post request
    const url =
      "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/user/register";
    axios
      .post(
        url,
        {},
        {
          params: {
            email,
            password,
          },
        }
      )
      .then((response) => {
        const userId = response.data.id;
        window.localStorage.setItem("userId", userId);
        navigate("/");
        window.location.reload(false);
      })
      .catch((error) => alert(error));
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>

        <Button variant="success" className="login-register-btn">
          <Link className="link login-register-link" to="/login">
            Have an account? Login!
          </Link>
        </Button>
      </Form>
    </div>
  );
}
