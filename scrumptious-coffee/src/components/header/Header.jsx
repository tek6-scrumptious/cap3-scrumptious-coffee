import { Link } from "react-router-dom";

// styles
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Navbar variant="dark" expand="lg" className="header-container">
        <Link to="/" className="hover web-title">
          Scrumptious Coffee
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-items" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto dropdown-links">
            <Link className="links dropdown-link hover" to="/">
              Home
            </Link>

            <Link className="links dropdown-link hover" to="/products">
              Products
            </Link>

            <Link className="links dropdown-link hover" to="/about-us">
              About Us
            </Link>
            <Link className="links dropdown-link hover" to="/cart">
              Cart
            </Link>
            <Link
              className="links dropdown-link hover"
              to="/supersecretsquirreladminpage"
            >
              Admin
            </Link>
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
