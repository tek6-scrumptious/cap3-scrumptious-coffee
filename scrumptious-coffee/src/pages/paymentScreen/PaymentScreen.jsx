import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./PaymentScreen.css";

export default function PaymentScreen() {
  return (
    <>
      <Container fluid className="payment-container">
        <Form>
          <Row>
            <Col className="payment-form-col-padding">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label as="legend" column sm={12}>
                    Shipping
                  </Form.Label>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="$5.99 - Standard"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="$9.99 - Express"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="$19.99 - Overnight"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      />
                  </Form.Group>
                </Form.Group>
              </Row>
              

              <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="1234 5678 8765 4321" />
              </Form.Group>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" placeholder="Expiration Date" />
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="text" placeholder="123" />
              </Form.Group>
            </Row>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Billing address same as Shipping?"
                  />
              </Form.Group>
            </Col>

            <Col className="aside-col-remove-padding">
              <aside className="totals">
                <div>
                  <h2>Subtotal: $0.00</h2>
                  <h2>Tax: $0.00</h2>
                  <h2>Shipping Cost: $0.00</h2>
                  <h2>Total: $0.00</h2>
                </div>
                <Button
                  href="/order-confirmation"
                  variant="success"
                  type="submit"
                  >
                  Place Order!
                </Button>
              </aside>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
