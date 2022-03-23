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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {window.innerWidth === 375 ? (
          <Navbar.Collapse id="basic-navbar-nav">
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
        ) : (
          <>
            <Nav className="me-auto nav-items">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products">Products</Link>
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
          </>
        )}
      </Navbar>
    </div>
  );
}
