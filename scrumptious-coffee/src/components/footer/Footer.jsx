import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// styles
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Row className="footer-row">
          <Col>Est: 2/28/2022</Col>
          <Col>
            <Link className="links" to="/about-us">
              About Us
            </Link>
          </Col>
          <Col>
            <Link className="links" to="/return_policy">
              Return Policy
            </Link>
          </Col>
          <Col>© Scrumptious 2022</Col>
        </Row>
      </Container>
    </>
  );
}
