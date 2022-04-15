// imports
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productAdd, productSub } from "../../redux/actions/productActions";
import { listProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

// components
import Loader from "../../components/loader/Loader";
import Error from "../Error/Error";

//styles
import { Card, Row, Col, ListGroup, Button } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails || {});
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
  };

  const buyLess = () => {
    if (product.qty > 1) {
      dispatch(productSub(id));
    }
  };

  const addMore = (id) => {
    dispatch(productAdd(id));
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
                <div className="product-price-container">
                  <Card.Text className="product-price">
                    <strong>Price</strong>: {product.pricePrePound}
                  </Card.Text>
                </div>
                <div className="product-description">
                  <Card.Title>Description</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </div>
                <br />
                <div id="roast-location">
                  <div>
                    <Card.Title>Roast:</Card.Title>
                    <Card.Text>{product.roast}</Card.Text>
                  </div>
                  <div>
                    <Card.Title>Location:</Card.Title>
                    <Card.Text>{product.location}</Card.Text>
                  </div>
                </div>
                <br />
                <div>
                  {product.storeQuantity > 0 ? (
                    <ListGroup.Item id="listgroup-border">
                      <Row>
                        <Col xs="auto" className="my-1">
                          <div id="qty-container">
                            <Card.Text id="qty-title">Quantity:</Card.Text>
                            <div className="qty-counter">
                              <Button
                                onClick={() => buyLess(product.id)}
                                variant=""
                                className="btn-sm qty-margin"
                                id="product-desc"
                              >
                                -
                              </Button>
                              <p className="count-amount">{product.qty}</p>
                              <Button
                                onClick={() => addMore(product.id)}
                                variant=""
                                className="btn-sm"
                                id="product-asc"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ) : (
                    "Out of Stock"
                  )}
                </div>
                <br />
                <div className="product-add-container">
                  <Button
                    variant=""
                    size="lg"
                    id="product-add-cart"
                    onClick={() => addToCartHandler(id)}
                  >
                    <div className="cart-icon">{<BsCart2 />}</div>{" "}
                    <div className="add-text">Add to cart</div>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
