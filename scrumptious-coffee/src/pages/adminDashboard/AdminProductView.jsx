import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Form, Row, ButtonGroup } from "react-bootstrap";
import { updateProduct, getProductById } from "./AdminAPI";
import { clearInput } from "./AdminFunctions";
import "./adminUpdateProduct.css";

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
  const inputs = document.getElementsByClassName("updateFormInput");
  const navigate = useNavigate();

  const getSingleProduct = () => {
    getProductById(id).then((res) => {
      setproduct(res.data);
    });
  };

  const updateSingleProduct = async () => {
    await updateProduct(
      id,
      productName,
      productPrice,
      qty,
      productImgUrl,
      productDescription
    );
    getSingleProduct();
    clearInput(inputs);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

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
                  className="updateFormInput"
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
                  className="updateFormInput"
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
                  className="updateFormInput"
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
                  className="updateFormInput"
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
                  className="updateFormInput"
                  type="text"
                  placeholder="Image Url "
                  onChange={(e) => setproductImgUrl(e.target.value)}
                />
              </Form.Group>
              <h5 id="updated-product-success">{productName} updated</h5>
            </Form>
            <div className="d-grid gap-2">
              <ButtonGroup className="mb-3">
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => {
                    updateSingleProduct();
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
