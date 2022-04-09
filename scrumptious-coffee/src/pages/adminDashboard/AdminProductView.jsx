import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Form, Row, ButtonGroup } from "react-bootstrap";
import axios from "axios";

const AdminProductView = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();

  const getProductById = async () => {
    try {
      const responseData = axios
        .get(`http://localhost:8080/products/${id}`)
        .then((response) => setproduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);
  console.log(product);
  return (
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
        <Card style={{ width: "100%" }} className="product-detail-card card2">
          <Card.Body className="product-detail-order-menu">
            <Card.Title className="product-Detail-Title">
              {product.name}
            </Card.Title>

            <Form>
              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={product.name} />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => console.log(e.target.value)}
                  type="text"
                  placeholder={product.pricePrePound}
                />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder={product.storeQuantity} />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={product.description} />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image Url " />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2">
              <ButtonGroup className="mb-3">
                <Button variant="success" size="lg">
                  Update
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

export default AdminProductView;
