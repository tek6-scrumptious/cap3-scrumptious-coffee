import { Link } from "react-router-dom";

// styles
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar className="header" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Scrumptious Coffee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="links" to="/">
                Home
              </Link>
              <Link className="links" to="/products">
                Products
              </Link>
              <Link className="links" to="/aboutus">
                About Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
