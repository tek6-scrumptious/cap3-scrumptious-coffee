// styles
import './OrderConfirmation.css'
import { Link } from 'react-router-dom'
import { Image, CardGroup, Card, Button, ButtonGroup } from "react-bootstrap";

export default function OrderConfirmation()
{
  return (
    <div>
      <div class="p-5 text-center bg-light">
        <h1 class="mb-3">Thank you for your order!</h1>
        <h4 class="mb-3">Order number: </h4>
        <h6 class="mb-3">Date/Time:</h6>
      </div>


      <CardGroup>
        <Card>

          <Card.Body>
            <Card.Title>Shipping Information</Card.Title>
            <Card.Text class="order-confirmation-indent">
              Name:
              <br />
              Address:
              <br />
            </Card.Text>
          </Card.Body>

        </Card>
        <Card>

          <Card.Body>
            <Card.Title>Billing</Card.Title>
            <Card.Text class="order-confirmation-indent">
              Name:
              <br />
              Address:
              <br />
              Card Number Ending in :
              <br />
              Email:
              <br />
            </Card.Text>
          </Card.Body>

        </Card>
        <Card>

          <Card.Body>
            <Card.Title>Shipping Method</Card.Title>
            <Card.Text class="order-confirmation-indent">
              <br />
              SHIPPING TYPE: UPS GROUND 7-8 business days
              <br />
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>

      <CardGroup className='order-confirmation-lower-divs'>
        <Card>
          <Card.Body>
            <Card.Title>Order List: </Card.Title>

            <Card>

              {/* <Image variant="false" class="thumbnail" src="https://i.ebayimg.com/images/g/leIAAOSwg19h-p7v/s-l1600.jpg" /> */}

              <div className='order-confirmation-item'>
                <div>Img placeholder</div>
                <Card.Text>
                  <Card.Title>Kona Coffee</Card.Title>
                  Weight:
                  <br />
                  Price:
                  <br />
                  Quantity:
                  <br />
                  Item Total:
                  <br />
                </Card.Text>
                <div class="delete-item-button"> X </div>
              </div>
            </Card>
          </Card.Body>
        </Card>

        <Card class="order-confirmation-summary-subtotal">
          <Card.Body >
            <Card.Title>Order Summary </Card.Title>
            <Card.Text className='order-confirmation-indent'>
              Subtotal: $15.00
              <br />
              Tax: $0.89
              <br />
              Shipping: $2.00
              <br />
              Total: $17.89
            </Card.Text>

          </Card.Body>
        </Card>
      </CardGroup>

    </div >


  )
}


