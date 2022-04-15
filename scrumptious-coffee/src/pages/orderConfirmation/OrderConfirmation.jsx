import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// styles
import "./OrderConfirmation.css";
import {
  Image,
  CardGroup,
  Card,
  ListGroup,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

export default function OrderConfirmation() {
  const orders = JSON.parse(localStorage.getItem("order"));
  const location = useLocation();
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.inCart;

  function getDate() {
    const date = new Date().toUTCString();
    return date;
  }

  const subTotalMethod = useCallback(() => {
    let addSubTotal = 0;
    cartItems.forEach((item) => {
      addSubTotal = addSubTotal += item.pricePrePound * item.qty;
    });
    setSubTotal(addSubTotal.toFixed(2));
  }, [cartItems]);

  const taxMethod = useCallback(() => {
    let addTax = 0;
    addTax = subTotal * 0.08;
    setTax(addTax.toFixed(2));
  }, [subTotal]);

  useEffect(() => {
    subTotalMethod();
    taxMethod();

    window.onunload = () => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("order");
    };
  }, [subTotalMethod, taxMethod, location]);

  return (
    <>
      {!window.localStorage.getItem("order") ? (
        <div className="order-confirmation-jumbotron">
          <Alert variant="danger" className="confirmation-alert">
            <p className="confirmation-alert-text">
              No order has been made. Go <Link to="/">home</Link>.
            </p>
          </Alert>
        </div>
      ) : (
        <div className="confirmation-container">
          <div className="p-5 text-center bg-light">
            <h1 className="mb-3">Thank you for your order!</h1>
            <h4 className="mb-3">
              Order number: {orders.id.replace("tok_", "")}
            </h4>
            <h6 className="mb-3">Date/Time: {getDate()}</h6>
          </div>

          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Shipping Information</Card.Title>
                <Card.Text className="order-confirmation-indent">
                  <strong>Name</strong>: {orders.shipName}
                  <br />
                  <strong>Address</strong>: {orders.shipAddress}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Billing</Card.Title>
                <Card.Text className="order-confirmation-indent">
                  <strong>Name</strong>: {orders.billName}
                  <br />
                  <strong>Address</strong>: {orders.billAddress}
                  <br />
                  <strong>Card Number Ending in</strong>: {orders.last4}
                  <br />
                  <strong>Email</strong>: {orders.email}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          <CardGroup className="order-confirmation-summary">
            <Card>
              <Card.Body>
                <Card.Title>Order List: </Card.Title>
                <ListGroup
                  variant="flush"
                  className="order-confirmation-scrollable-div"
                >
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <Row>
                        <Col md={2}>
                          <Link to={`/products/${item.id}`}>
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Link>
                        </Col>
                        <Col
                          md={2}
                          id="cart-name"
                          style={{ textAlign: "center" }}
                        >
                          <Link to={`/products/${item.id}`} id="item-name">
                            {item.name}
                          </Link>
                        </Col>
                        <Col
                          md={4}
                          id="cart-price"
                          style={{ textAlign: "center" }}
                        >
                          ${parseFloat(item.pricePrePound).toFixed(2)} X{" "}
                          {item.qty} = $
                          {parseFloat(item.pricePrePound * item.qty).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Order Summary </Card.Title>
                <Card.Text className="order-confirmation-indent">
                  <strong>Subtotal</strong>: ${subTotal}
                  <br />
                  Tax: ${tax}
                  <br />
                  Total: ${orders.total}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      )}
    </>
  );
}
