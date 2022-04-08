import { useParams,useNavigate } from "react-router-dom";
import {Card,Button, Form,Row, ButtonGroup} from "react-bootstrap"
import json from "../../database.json";

const AdminProductView = () => {
    const {id} = useParams();
    const itemId = id-1
    const item = json.products[itemId];
    const navigate = useNavigate();
    
    return (<div>
        <div className="product-detail-wrapper">
  
          <Card style={{ width: '100%' }} className="product-detail-card product-detail-page-image ">
            <Card.Img variant="top" classname="img-fluid" src={item.image} />
  
          </Card>
          <br />
          <Card style={{ width: '100%' }} className="product-detail-card card2">
            <Card.Body className="product-detail-order-menu">
              <Card.Title className="product-Detail-Title">{item.name}</Card.Title>

              <Form>
                <Form.Group className="mb-2" controlId="formHorizontalEmail" as={Row}>
                <Form.Label >Name</Form.Label>
                <Form.Control type="text" placeholder={item.name} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formHorizontalEmail" as={Row}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder={item.price} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formHorizontalEmail" as={Row}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder={item.storeQuanity} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formHorizontalEmail" as={Row}>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={item.description} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formHorizontalEmail" as={Row}>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image Url "/>
                </Form.Group>
                </Form>
          
            

              <div className="d-grid gap-2">

              <ButtonGroup className="mb-3">
              <Button variant="success" size="lg">
                  Update
                </Button>
                <Button variant="success" onClick={()=>{navigate("/admin-dashboard")}}>Dashboard</Button>
                </ButtonGroup>
              </div>
  
            </Card.Body >
          </Card >
  
        </div>
  
      
      </div > );
}
 
export default AdminProductView;