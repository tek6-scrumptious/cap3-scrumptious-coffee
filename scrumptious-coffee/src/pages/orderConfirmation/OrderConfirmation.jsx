import React from "react";

// styles
import "./OrderConfirmation.css";
import { Image, CardGroup, Card } from "react-bootstrap";

export default function OrderConfirmation() {
  const orders = JSON.stringify(localStorage.getItem("order"));
  console.log(orders);
  return (
    <div className="confirmation-container">
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">Thank you for your order!</h1>
        <h4 className="mb-3">Order number: </h4>
        <h6 className="mb-3">Date/Time:</h6>
      </div>

      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Shipping Information</Card.Title>
            <Card.Text className="order-confirmation-indent">
              Name:
              <br />
              Address:
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Billing</Card.Title>
            <Card.Text className="order-confirmation-indent">
              Name:
              <br />
              Address:
              <br />
              Card Number Ending in :
              <br />
              Email:
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Shipping Method</Card.Title>
            <Card.Text className="order-confirmation-indent">
              <br />
              SHIPPING TYPE: UPS GROUND 7-8 business days
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup className="order-confirmation-summary">
        <Card>
          <Card.Body>
            <Card.Title>Order List: </Card.Title>
            <Card>
              <div className="order-confirmation-item">
                <Image
                  className="order-confirmation-thumbnail"
                  src="https://i.ebayimg.com/images/g/leIAAOSwg19h-p7v/s-l1600.jpg"
                />

                <div>
                  <Card.Title>Kona Coffee</Card.Title>
                  <Card.Text>
                    Weight:
                    <br />
                    Price:
                    <br />
                    Quantity:
                    <br />
                    Item Total:
                    <br />
                  </Card.Text>
                </div>
                <button className="delete-item-button"> X </button>
              </div>
            </Card>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Order Summary </Card.Title>
            <Card.Text className="order-confirmation-indent">
              Subtotal: $15.00
              <br />
              Tax: $0.89
              <br />
              Shipping: $2.00
              <br />
              Total: $17.89
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
