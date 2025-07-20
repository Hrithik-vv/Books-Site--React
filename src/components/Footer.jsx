import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Book Store</h5>
            <p>Bringing books closer to you.</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaLinkedinIn /></a>
              <a href="#" className="text-light"><FaGithub /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-light mt-4" />

        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
