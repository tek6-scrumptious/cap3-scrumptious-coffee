import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./PaymentScreen.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "@emotion/styled";
import axios from "axios";
import CheckoutError from "./CheckoutError"



export default function PaymentScreen({ price, onSuccessfulCheckout }) {
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const CardElementContainer = styled.div`
    height: 60x;
    display: flex;
    align-items: center;
    & .StripeElement {
      width: 100%;
      padding: 15px;
      
    }
  `;
  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      firstName: ev.target.firstName.value,
      lastName: ev.target.lastName.value,
      email: ev.target.email.value,
      address: {
        city: ev.target.city.value,
        line1: ev.target.shippingAddress.value,
        state: ev.target.state.value,
        postal_code: ev.target.zip.value
      },
      shipping: ev.target.formHorizontalRadios.value,
    };
    console.log(billingDetails)

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("apiRouteFromServer", {

        // price v goes here multiply by 100
        amount: 52.50 * 100
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
    }
  };
  const iframeStyles = {
    base: {
      color: "black",
      fontSize: "16px",
      iconColor: "green",
      "::placeholder": {
        color: "black"
      }
    },
    invalid: {
      iconColor: "black",
      color: "black"
    },
    complete: {
      iconColor: "lightblue"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    hidePostalCode: true
  };
  return (
    <>
      <Container fluid className="payment-container">
        <Form onSubmit={handleFormSubmit}>
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
                      value="5.99"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="$9.99 - Express"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      value="9.99"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="$19.99 - Overnight"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      value="19.99"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Billing address same as Shipping?"
                    />
                  </Form.Group>
                </Form.Group>

              </Row>
              <CardElementContainer>
                <CardElement
                  options={cardElementOpts}
                  onChange={handleCardDetailsChange} />
              </CardElementContainer>
              {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
            </Col>
            <Col className="aside-col-remove-padding">
              <aside className="totals">
                <div>
                  {/* this needs to be reflected from cart and add the shipping */}
                  <h2>Subtotal: $0.00</h2>
                  <h2>Tax: $0.00</h2>
                  <h2>Shipping Cost: $0.00</h2>
                  <h2>Total: $0.00</h2>
                </div>
                <Button
                  // href="/order-confirmation"
                  variant="success"
                  type="submit"
                  disabled={isProcessing || !stripe}

                >
                  {isProcessing ? "Processing..." : `Pay $52.50`}
                </Button>
              </aside>
            </Col>
          </Row>
        </Form>

      </Container>

    </>
  );
}

