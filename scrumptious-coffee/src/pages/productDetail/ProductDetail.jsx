// imports
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { listProductDetails } from "../../redux/actions/productActions";
import Error from "../Error/Error";
import { addToCart } from "../../redux/actions/cartActions";
import { productAdd, productSub } from "../../redux/actions/productActions";
import BeanType from "../../components/beanType/BeanType";

//styles
import {
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import "./ProductDetail.css";
import PoundPrice from "../../components/poundPrice/PoundPrice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails || {});
  const cartHandler = useSelector((state) => state.cart || {});
  const { loading, error, product } = productDetails;
  const [count, setCount] = useState(product.qty ? product.qty : 1);

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
  };

  const buyLess = () => {
    dispatch(productSub(id));
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addMore = (id) => {
    dispatch(productAdd(id));
    if (count !== product.storeQuantity) {
      setCount(count + 1);
    }
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
                <PoundPrice />
                <br />
                <BeanType />
                <br />
                <div>
                  {product.storeQuantity > 0 ? (
                    <ListGroup.Item>
                      <Row>
                        <Col xs="auto" className="my-1">
                          <Card.Text>Quantity:</Card.Text>
                          <div className="qty-counter">
                            <Button
                              onClick={() => buyLess(product.id)}
                              variant=""
                              className="btn-sm qty-margin count-button"
                            >
                              -
                            </Button>
                            <p className="count-amount">{count}</p>
                            <Button
                              onClick={() => addMore(product.id)}
                              variant=""
                              className="btn-sm count-button"
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
                    onClick={() => addToCartHandler(id)}
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
