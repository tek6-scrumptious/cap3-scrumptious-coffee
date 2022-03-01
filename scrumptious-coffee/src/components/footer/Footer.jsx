import { Col, Container, Row } from "react-bootstrap";
// styles
import "./Footer.css";

export default function Footer() {
  // React Router needs to be installed and links need to be styled
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col>
            <a href="/">About Us</a>
          </Col>
          <Col>
            <a href="/">Return Policy</a>
          </Col>
          <Col>©Scrumptious: 2022</Col>
          <Col>Date Established: 2/28/2022</Col>
        </Row>
      </Container>
    </>
  );
}
