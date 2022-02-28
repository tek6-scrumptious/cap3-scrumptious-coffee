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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
