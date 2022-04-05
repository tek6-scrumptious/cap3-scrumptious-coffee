// json data will be removed later once backend is created
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import Error from "../Error/Error";

// styles
import "./ProductsList.css";
import { Card, Button } from "react-bootstrap";

export default function ProductsList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList || {});
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h1>
          <Error />
        </h1>
      ) : (
        <div className="products">
          {products.map((item) => (
            <Card className="item-card" key={item.id}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img
                  className="products-image"
                  variant="top"
                  src={item.image}
                />
              </Card.Body>
              <Card.Body className="price-button-container">
                <Card.Text>${item.price}</Card.Text>
                <Button
                  href={"/product/" + item.id}
                  variant="success"
                  className="product-button"
                >
                  Check it Out
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
