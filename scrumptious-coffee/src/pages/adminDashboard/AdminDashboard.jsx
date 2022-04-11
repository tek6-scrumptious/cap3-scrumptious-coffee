import { Card, Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteProduct } from "./AdminAPI";
import { useEffect, useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [APIData, setAPITData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      axios
        .get(
          "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/"
        )
        .then((response) => setAPITData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const logout = () => {
    console.log("BYYYEEEEE");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <>
      <div className="mb-2 sign-out-btn">
        <Button variant="success" size="lg" onClick={(e) => logout(e)}>
          Sign Out
        </Button>
      </div>
      <div className="products admin-products-view">
        <Card className="item-card">
          <Card.Body>
            <Card.Title>Add Product</Card.Title>
            <Card.Img
              className="products-image"
              variant="top"
              src="https://i.imgur.com/vzCfvVb.png"
              onClick={() => navigate("/admin-new-product")}
            />
            <Card.Body>
              <Button
                className="add-product-btn"
                variant="success"
                size="md"
                onClick={() => navigate("/admin-new-product")}
              >
                Add Product
              </Button>
            </Card.Body>
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
    </>
  );
};

export default AdminDashboard;
