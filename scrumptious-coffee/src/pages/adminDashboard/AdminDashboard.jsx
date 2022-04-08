import json from "../../database.json";
import {Card, Button,ButtonGroup} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="products">
          {json.products.map((item) => (
            <Card className="item-card" key={item.id}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img
                  className="products-image"
                  variant="top"
                  src={item.image}
                />
              </Card.Body>
              <Card.Body className="price-button-container">
                <Card.Text>${item.price} </Card.Text>
                <ButtonGroup className="mb-3">
                 <Button variant="success" onClick={() => navigate(`/AdminProductView/${item.id}`)}>Update</Button>
    
                <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          ))}
        </div>
       
      );
}
 
export default AdminDashboard;