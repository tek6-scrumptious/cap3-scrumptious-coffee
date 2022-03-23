// json data will be removed later once backend is created
import json from "../../database.json";

// styles
import "./ProductsList.css";
import { Card, Button } from "react-bootstrap";

export default function ProductsList() {
  json.products.map((item) => console.log(item));

  return (
    <div>
      <h1>Product View</h1>
      {json.products.map((item) => (
        <Card
          className="item-card"
        >
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Img variant="top" src={item.image} />
            <Card.Text>${item.price}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="success">Check it Out</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
