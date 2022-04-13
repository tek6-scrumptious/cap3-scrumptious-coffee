import { useNavigate } from "react-router-dom";
import { Card, Button, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { formValidation } from "./AdminFunctions";
import "./adminNewProduct.css";
const AdminAddProduct = () => {
  const navigate = useNavigate();
  const inputs = document.getElementsByClassName("productInput");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [Description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  return (
    <div>
      <div className="product-detail-wrapper">
        <Card className="product-detail-card card2" id="product-detail-card">
          <Card.Body className="product-detail-order-menu">
            <Card.Title className="product-Detail-Title"></Card.Title>

            <Form>
              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="productInput"
                  id="productName"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className="productInput"
                  id="productPrice"
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  className="productInput"
                  id="productQuantity"
                  type="text"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="productInput"
                  id="productDescription"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-2" as={Row}>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  className="productInput"
                  id="productURL"
                  type="text"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </Form.Group>
            </Form>
            <h5 id="add-new-product-error">All fields must be filled out!</h5>
            <h5 id="add-new-product-success">Product Added.</h5>
            <div className="d-grid gap-2">
              <div className="d-grid gap-2">
                <Button
                  variant="success"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    formValidation(
                      e,
                      Name,
                      Price,
                      Quantity,
                      Description,
                      ImageUrl,
                      inputs
                    );
                  }}
                >
                  Add
                </Button>
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => {
                    navigate("/admin-dashboard");
                  }}
                >
                  Dashboard
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminAddProduct;
