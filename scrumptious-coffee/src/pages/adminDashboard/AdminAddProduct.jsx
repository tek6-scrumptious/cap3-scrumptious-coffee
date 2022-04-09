import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Form, Row, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import { addNewProduct } from "./AdminAPI";
import axios from "axios";

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const inputs = document.getElementsByClassName("productInput");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [Description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  const formValidation = (e) => {
    let flag = 5;

    for (let element of inputs) {
      if (element.value == "" || element.value == 0) {
        console.log("error");
        flag--;
      }
    }
    if (flag === 5) {
      const jsonData = {
        name: Name,
        imageUrl: ImageUrl,
        description: Description,
        storeQuantity: Price,
        pricePrePound: Quantity,
      };
      addNewProduct(jsonData);
    }
  };

  return (
    <div>
      <div className="product-detail-wrapper">
        <Card style={{ width: "100%" }} className="product-detail-card card2">
          <Card.Body className="product-detail-order-menu">
            <Card.Title className="product-Detail-Title"></Card.Title>

            <Form>
              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="productInput"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className="productInput"
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  className="productInput"
                  type="text"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="productInput"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  className="productInput"
                  type="text"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2">
              <ButtonGroup className="mb-3">
                <Button
                  variant="success"
                  size="lg"
                  onClick={(e) => {
                    formValidation(e);
                    // addNewProduct(jsonData);
                  }}
                >
                  Add
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    navigate("/admin-dashboard");
                  }}
                >
                  Dashboard
                </Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminAddProduct;
