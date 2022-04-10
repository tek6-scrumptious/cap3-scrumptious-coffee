// imports
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { listProductDetails } from "../../redux/actions/productActions";
import Error from "../Error/Error";
import {
  addToCart,
  removeFromCart,
  subtractQty,
  addQty,
} from "../../redux/actions/cartActions";

//styles
import { Card, Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails || {});
  const cartHandler = useSelector((state) => state.cart || {});
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };

  const decreaseQty = () => {
    dispatch(subtractQty(id));
  };

  const addQty = () => {
    dispatch(addQty(id));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <div className="product-detail-wrapper">
            <Card
              style={{ width: "100%" }}
              className="product-detail-card product-detail-page-image "
            >
              <Card.Img
                variant="top"
                className="img-fluid"
                src={product.imageUrl}
              />
            </Card>
            <br />
            <Card
              style={{ width: "100%" }}
              className="product-detail-card card2"
            >
              <Card.Body className="product-detail-order-menu">
                <Card.Title className="product-Detail-Title">
                  {product.name}
                </Card.Title>
                <Card.Text>Weight:</Card.Text>

                <div className="mb-2 weight-buttons">
                  <Button
                    variant=""
                    size="sm"
                    className="lb-button btn-outline-success"
                  >
                    1/2 lb <br />
                    $12.99
                  </Button>{" "}
                  <Button
                    variant=""
                    size="sm"
                    className="lb-button btn-outline-success"
                  >
                    1 lb <br />
                    $19.99
                  </Button>
                  <Button
                    variant=""
                    size="sm"
                    className="lb-button btn-outline-success"
                  >
                    2 lb
                    <br />
                    $29.99
                  </Button>
                </div>
                <br />
                <Card.Text>Bean type:</Card.Text>
                <div className="mb-2 bean-type-button">
                  <Button
                    variant=""
                    size="lg"
                    className="whole-Bean-Button  btn-outline-success"
                  >
                    Whole
                  </Button>
                  <Button
                    variant=""
                    size="lg"
                    className="ground-Bean-Button  btn-outline-success"
                  >
                    Ground
                  </Button>
                </div>
                <br />
                <div>
                  <Card.Text>Quantity:</Card.Text>

                  {product.storeQuantity > 0 ? (
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto" className="my-1">
                          <Card.Text>Quantity:</Card.Text>
                          <div className="qty-counter">
                            <Button
                              onClick={decreaseQty}
                              variant=""
                              className="btn-sm qty-margin btn-outline-success"
                            >
                              -
                            </Button>
                            <p>{product.qty}</p>
                            <Button
                              onClick={addQty}
                              variant=""
                              className="btn-sm btn-outline-success"
                            >
                              +
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
                <br />
                <div className="d-grid gap-2">
                  <Button
                    variant="success"
                    size="lg"
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <br />

          <div className="product-detail-description-wrapper">
            <Card style={{ width: "100%" }} className="product-detail-card">
              <div className="product-detail-description">
                <Card.Title>Description</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

/* {product.storeQuantity > 0 && (
                    <div className="qty-counter">
                      <Button
                        onClick={decrease}
                        variant=""
                        className="btn-sm qty-margin btn-outline-success"
                      >
                        -
                      </Button>
                      <input
                        className="qty-margin"
                        pattern="[0-9]*"
                        size={1}
                        min="1"
                        max="1000"
                        placeholder={qty}
                      />
                      <Button
                        onClick={increase}
                        variant=""
                        className="btn-sm btn-outline-success"
                      >
                        +
                      </Button>
                    </div>
                  )} */
