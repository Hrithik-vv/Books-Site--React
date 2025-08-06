import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="About us"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Your Bookstore</strong> – your one-stop destination for inspiring reads! 
            Our mission is to make books accessible, affordable, and enjoyable for everyone.
          </p>
          <p>
            We believe books have the power to transform lives. Whether you're a seasoned reader or just beginning your literary journey, 
            we’re here to guide you through stories that inform, entertain, and uplift.
          </p>
          <p>
            Founded in 2025, our store brings together curated collections, affordable prices, and a passion for knowledge.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
