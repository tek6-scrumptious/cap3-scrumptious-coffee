import { Link } from "react-router-dom";

// styles
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar variant="dark" expand="lg" className="header-container">
        <Link to="/" className="hover">
          Scrumptious Coffee
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-items" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto dropdown-links">
            <Nav.Link className="links dropdown-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="links dropdown-link" href="/products">
              Products
            </Nav.Link>
            <Nav.Link className="links dropdown-link" href="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link className="links dropdown-link" href="/cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="guest-link">
            <Nav.Link>Welcome, Guest!</Nav.Link>
          </Nav>
          <Form className="d-flex search">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
