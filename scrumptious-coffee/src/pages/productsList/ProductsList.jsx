// json data will be removed later once backend is created
import json from "../../database.json";

// styles
import "./ProductsList.css";
import { Card, Button } from "react-bootstrap";

export default function ProductsList() {
  json.products.map((item) => console.log(item));

  return (
    <div className="products">
      {json.products.map((item) => (
        <Card className="item-card">
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
            <Button variant="success" className="product-button">
              Check it Out
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
