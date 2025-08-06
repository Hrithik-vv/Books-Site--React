import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function Header({ cartItems,setCartItem }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-nav">
      <Container>
        <Navbar.Brand href="#home">BOOK STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-spacing">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About" className="nav-spacing">
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
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#cart" className="position-relative icon-link">
              <div style={{ position: "relative", display: "inline-block" }}>
                <FaCartPlus size={20} />
                <span className="cartCount">{cartItems}</span>
              </div>
            </Nav.Link>

            <Nav.Link as={Link} to="/Login" className="nav-spacing">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
