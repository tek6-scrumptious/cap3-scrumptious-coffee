import { React } from "react";
import { Form, Button } from "react-bootstrap"
import {useRef, useState, useEffect } from "react";
import useAuth from "../../components/admin/useAuth";
import "./AdminLogin.css"

const AdminLogin = () => {
const { setAuth } = useAuth;

    return (
        <div className="adminlogin-structure">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Login
                </Button>
            </Form>
        </div>

    );
}

export default AdminLogin;