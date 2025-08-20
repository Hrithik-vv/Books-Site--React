import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === loginInfo.email);

    if (!user) {
      toast.error("Invalid Credentials");
      return;
    }

    if (user.password !== loginInfo.password) {
      toast.error("Invalid Credentials");
      return;
    }

    toast.success("Login Successful ");
    navigate('/Dashboard')
 
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={4}>
          <h4>Login</h4>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4}>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            <div className="mt-3 text-center">
              Don't have an account? <Link to="/Registor">Sign Up</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
