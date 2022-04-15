import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addQty,
  subtractQty,
  removeFromCart,
} from "../../redux/actions/cartActions";
import Subtotal from "../subtotal/Subtotal";

// styles
import "./Cart.css";
import { Col, Row, Alert, ListGroup, Button, Image } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.inCart;

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div id="cart-container">
      <Row id="cart-content">
        <h2 id="my-cart">My Cart</h2>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Alert variant="danger" id="cart-alert">
              Cart is empty. <Link to="/products">Go Back</Link>
            </Alert>
          ) : (
            <ListGroup variant="flush" className="cart-scrollable-div">
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
                    <Col md={2} id="cart-name" style={{ textAlign: "center" }}>
                      <Link to={`/products/${item.id}`} id="item-name">
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2} id="cart-price" style={{ textAlign: "center" }}>
                      ${parseFloat(item.pricePrePound).toFixed(2)}
                    </Col>
                    {/* Testing cart quantities */}

                    <Col id="qty-counter" md={2}>
                      <Button
                        size="sm"
                        variant=""
                        id="cart-desc"
                        onClick={() => dispatch(subtractQty(item.id))}
                      >
                        -
                      </Button>
                      <p id="cart-qty">{item.qty}</p>
                      <Button
                        size="sm"
                        id="cart-asc"
                        onClick={() => dispatch(addQty(item.id))}
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={1} id="total-qty">
                      <p>
                        ${parseFloat(item.pricePrePound * item.qty).toFixed(2)}
                      </p>
                    </Col>
                    <Col md={2} style={{ textAlign: "center" }}>
                      <Button
                        id="cart-delete"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash size={20} id="cart-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Subtotal id="subtotal-comp" />
        </Col>
      </Row>
    </div>
  );
}
