import axios from "axios";
import { React, useState } from "react";
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"


const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if( username !="" && password !="" ){
            axios.post('http://localhost:8080/admin/login', {}, {
        params: {
            username,
            password
        }
    })
        .then(res => {
            if (res.data.username == username) {
                console.log("MATCHED")
                localStorage.setItem("isAuthenticated", "true");
                navigate('/admin-dashboard')
            } else { 
                console.log("WRONG TRY AGAIN!!")
                alert("WRONG TRY AGAIN!!")
            }
        })
        .catch(err => console.log(err))
        }else{
            alert('Please enter a username and password!')
        }
    }

    return (
        <div className="overall-structure">
            <div className="adminlogin-structure">
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AdminLogin;