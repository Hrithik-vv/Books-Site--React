import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; 


const schema = Yup.object().shape({
  name: Yup.string()
    .max(20, "Name must be at most 20 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  terms: Yup.boolean().oneOf([true], "You must agree before submitting."),
});

function Registor() {
  const handleSubmit = (values, { resetForm }) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully ");
    console.log("Saved Users:", users);

    resetForm();
  };

  return (
    <Container fluid className="align-items-center">
      <Row className="justify-content-center">
        <Col md={4}>
          <h4>Register</h4>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ name: "", email: "", password: "", terms: false }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Register</h2>

                <Form.Group className="mb-3" controlId="validationName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && !!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationEmail">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    name="terms"
                    label="Agree to terms and conditions"
                    checked={values.terms}
                    onChange={handleChange}
                    isInvalid={touched.terms && !!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                  />
                </Form.Group>

                <Button type="submit" className="w-100">
                  Register
                </Button>

                <div className="mt-3 text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Registor;
