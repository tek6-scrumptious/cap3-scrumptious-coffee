//styles

import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import "./ProductDetail.css";
export default function ProductDetail()
{
  const [count, setCount] = useState(1);
  const decrease = () =>
  {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increase = () =>
  {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="product-detail-wrapper">

        <Card style={{ width: '100%' }} className="product-detail-card product-detail-page-image ">
          <Card.Img variant="top" classname="img-fluid" src="https://i.ebayimg.com/images/g/leIAAOSwg19h-p7v/s-l1600.jpg" />

        </Card>
        <br />
        <Card style={{ width: '100%' }} className="product-detail-card card2">
          <Card.Body className="product-detail-order-menu">
            <Card.Title className="product-Detail-Title">Kona Coffee</Card.Title>
            <Card.Text>
              Weight:
            </Card.Text>

            <div className="mb-2 weight-buttons">
              <Button variant="" size="sm" className="lb-button btn-outline-success">
                1/2 lb <br />$12.99
              </Button>{' '}
              <Button variant="" size="sm" className="lb-button btn-outline-success">
                1 lb <br />$19.99
              </Button>{' '}
              <Button variant="" size="sm" className="lb-button btn-outline-success">
                2 lb<br />$29.99
              </Button>
            </div>

            <br />
            <Card.Text>
              Bean type:
            </Card.Text>
            <div className="mb-2 bean-type-button">
              <Button variant="" size="lg" className="whole-Bean-Button  btn-outline-success">
                Whole
              </Button>{' '}
              <Button variant="" size="lg" className="ground-Bean-Button  btn-outline-success">
                Ground
              </Button>
            </div>
            <br />
            <div>
              <Card.Text>Quantity:</Card.Text>
              <div className="qty-counter">
                <Button onClick={decrease} variant="" className="btn-sm qty-margin btn-outline-success">-</Button>
                <input className="qty-margin" size={2} pattern='[0-9]*' min='1' max='1000' value={count} />
                <Button onClick={increase} variant="" className="btn-sm btn-outline-success">+</Button>
              </div>
            </div>
            <br />
            <div className="d-grid gap-2">
              <Button variant="success" size="lg">
                Add to cart
              </Button>
            </div>

          </Card.Body >
        </Card >

      </div>

      <br />

      <div className="product-detail-description-wrapper">
        <Card style={{ width: '100%' }} className='product-detail-card'>
          <div className="product-detail-description">
            <Card.Title>Description</Card.Title>
            <Card.Text>Bar , americano, macchiato mazagran saucer aged variety. Macchiato siphon eu, barista so dark cultivar barista caffeine dripper. In café au lait, trifecta, americano, bar  turkish instant froth strong espresso. French press, cortado cultivar, strong sugar frappuccino robust shop mug so half and half. Aroma so mazagran robust milk and coffee.

              Whipped to go, ut sit that, crema java spoon medium espresso flavour acerbic. Siphon aftertaste single origin to go cream cappuccino grounds rich. Mocha, arabica doppio medium café au lait variety espresso turkish. Plunger pot pumpkin spice, cup, espresso aged, aromatic sugar grounds extraction body. Milk aroma coffee whipped arabica cortado, single origin, dark fair trade black french press saucer.</Card.Text>

          </div>
        </Card>
      </div>
    </div >
  );
}
