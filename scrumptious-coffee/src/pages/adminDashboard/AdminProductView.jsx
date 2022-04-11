import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Form, Row, ButtonGroup } from "react-bootstrap";
import { updateProduct } from "./AdminAPI";
import axios from "axios";

const AdminProductView = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [productName, setproductName] = useState(product.name);
  const [productPrice, setproductPrice] = useState(product.pricePrePound);
  const [qty, setqty] = useState(product.storeQuantity);
  const [productDescription, setproductDescription] = useState(
    product.description
  );
  const [productImgUrl, setproductImgUrl] = useState(product.imageUrl);
  const navigate = useNavigate();

  const getProductById = async () => {
    try {
      axios
        .get(
          `http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/${id}`
        )
        .then((response) => setproduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [getProductById]);

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
                <Form.Control
                  type="text"
                  placeholder={product.name}
                  onChange={(e) => setproductName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setproductPrice(e.target.value)}
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
                <Form.Control
                  type="text"
                  placeholder={product.storeQuantity}
                  onChange={(e) => setqty(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={product.description}
                  onChange={(e) => setproductDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-2"
                controlId="formHorizontalEmail"
                as={Row}
              >
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image Url "
                  onChange={(e) => setproductImgUrl(e.target.value)}
                />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2">
              <ButtonGroup className="mb-3">
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => {
                    updateProduct(
                      product.id,
                      productName,
                      productPrice,
                      qty,
                      productImgUrl,
                      productDescription
                    );
                  }}
                >
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
