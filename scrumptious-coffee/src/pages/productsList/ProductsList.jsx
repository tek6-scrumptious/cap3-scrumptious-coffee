import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { listProducts } from "../../redux/actions/productActions";
import Error from "../Error/Error";

// styles
import "./ProductsList.css";
import { Card } from "react-bootstrap";

export default function ProductsList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList || {});
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <h1>
          <Error />
        </h1>
      ) : (
        <div className="products">
          {products.map((item) => (
            <Card className="item-card" key={item.id}>
              <Card.Body>
                <Link to={"/products/" + item.id} className="link-product">
                  <Card.Title>{item.name}</Card.Title>
                </Link>
                <Link to={"/products/" + item.id}>
                  <Card.Img
                    className="products-image"
                    variant="top"
                    src={item.imageUrl}
                  />
                </Link>
              </Card.Body>
              <Card.Body className="price-button-container">
                <Card.Text className="item-price">
                  ${parseFloat(item.pricePrePound).toFixed(2)}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
