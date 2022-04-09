import axios from "axios";
import { React, useState } from "react";
import { Form, Button } from "react-bootstrap"
import {  useNavigate } from "react-router-dom";
import "./AdminLogin.css"

const AdminLogin = () => {
    const navigate = useNavigate();
    const[userName ,setUserName]=useState("Alan");
    const[password, setPassword]=useState("tekcamp");


    const submit = (e) => {
        e.preventDefault();
        console.log("here")
        const login = {
            username: userName,
            password: password
        }
        // axios.post('http://localhost:8080/admin/login',{
        //     userName,
        //     password
        // } )
        // .then(res=>{
            navigate('/admin-dashboard')
        // })
        // .catch(err => console.log(err))

    }
    return (
        <div className="overall-structure">
            <div className="adminlogin-structure">
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control  placeholder="Enter username" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <a className="bn39" style={{ marginRight: '20px' }} onClick={(e) => submit(e)}><span className="bn39span"><h6>Add to Cart</h6></span></a> */}
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </div>

        </div>

    );
}

export default AdminLogin;