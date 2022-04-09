import json from "../../database.json";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteProduct } from "./AdminAPI";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [APIData, setAPITData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const responseData = axios
        .get("http://localhost:8080/products")
        .then((response) => setAPITData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(APIData);

  return (
    <div className="products">
      <Card className="item-card">
        <Card.Body>
          <Card.Title>New Product</Card.Title>
          <Card.Img
            className="products-image"
            variant="top"
            src="https://i.imgur.com/vzCfvVb.png"
            onClick={() => navigate("/admin-new-product")}
          />
        </Card.Body>
      </Card>

      {APIData.map((item) => (
        <Card className="item-card" key={item.id}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Img
              className="products-image"
              variant="top"
              src={item.imageUrl}
            />
          </Card.Body>
          <Card.Body className="price-button-container">
            <Card.Text>${item.pricePrePound} </Card.Text>
            <ButtonGroup className="mb-3">
              <Button
                variant="success"
                onClick={() => navigate(`/AdminProductView/${item.id}`)}
              >
                Update
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  deleteProduct(item.id);
                }}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AdminDashboard;
