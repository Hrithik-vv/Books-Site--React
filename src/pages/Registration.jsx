import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Registor() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid className=" align-items-center ">
      <Row className="justify-content-center">
        <Col md={4}>
          <h4>Registor</h4>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Register</h2>

            <Form.Group className="mb-3" controlId="validationName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                maxLength={20}
              />
              <Form.Control.Feedback type="invalid">
                Name is required and should not exceed 20 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                minLength={8}
              />
              <Form.Control.Feedback type="invalid">
                Password is required and must be at least 8 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Register
            </Button>
          
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registor;
