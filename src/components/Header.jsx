import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-nav">
      <Container>
        <Navbar.Brand href="#home">BOOK STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="nav-spacing">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-spacing">
              About Us
            </Nav.Link>
            <NavDropdown title="Catergoties" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ficton</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romace</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mystery</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#search" className="icon-link">
              <FaSearch size={18} />
            </Nav.Link>
            <Nav.Link href="#cart" className="icon-link">
              <FaShoppingCart size={18} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
