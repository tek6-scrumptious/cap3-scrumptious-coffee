//styles
import "./ProductDetail.css";
import { Card, Button, ButtonGroup } from "react-bootstrap";

export default function ProductDetail()
{
  return (
    <div>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://i.ebayimg.com/images/g/leIAAOSwg19h-p7v/s-l1600.jpg" />

      </Card>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Kona Coffee</Card.Title>
          <Card.Text>
            Weight:
          </Card.Text>
          <div className="mb-2">
            <Button variant="success" size="sm">
              1/2 lb <br />$12.99
            </Button>{' '}
            <Button variant="success" size="sm">
              1 lb <br />$19.99
            </Button>{' '}
            <Button variant="success" size="sm">
              2 lb<br />$29.99
            </Button>
          </div>
          <br />
          <Card.Text>
            Bean type:
          </Card.Text>
          <div className="mb-2">
            <Button variant="success" size="lg">
              Whole
            </Button>{' '}
            <Button variant="success" size="lg">
              Ground
            </Button>
          </div>
          <br />
          <div>
            <Card.Text>Quantity:</Card.Text>
            <input type="number" min='1' max='1000' />
          </div>
          <br />
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Add to cart
            </Button>

          </div>
        </Card.Body>
      </Card>

    </div>
  );
}
