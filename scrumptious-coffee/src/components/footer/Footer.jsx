import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// styles
import "./Footer.css";

export default function Footer() {
  return (
    <Navbar className="footer">
      <Container>
        <div className="links-container">
          <Nav className="me-auto footer-flex">
            <Nav disabled style={{ color: "white" }} className="footer-links">
              Est: 2/28/2022
            </Nav>
            <Nav>
              <Link className="footer-links" to="/aboutus">
                About Us
              </Link>
            </Nav>
            <Nav>
              <Link className="footer-links" to="/return_policy">
                Return Policy
              </Link>
            </Nav>
            <Nav>
              <Link className="footer-links" to="/return_policy">
                Return Policy
              </Link>
            </Nav>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
