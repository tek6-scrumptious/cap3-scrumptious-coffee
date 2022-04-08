import "./ReturnPolicy.css";
import React from "react";
import { Link } from "react-router-dom";
import { Image, CardGroup, Card } from "react-bootstrap";

export default function ReturnPolicy(){

return(

    <div className="faq-container">
        <div className="text-center faq-image-container">
            <img src={process.env.PUBLIC_URL + "/images/FAQImage.png"} className='img-fluid faq-image' alt='FAQ Hero Image'/>
        </div>
        
        <div className="return-policy-jumbotron">
        <h1 className="text-center faq-title-text">FAQ</h1>

      </div>

    
        <Card>
          <Card.Body>
            <Card.Title>Payment Options</Card.Title>
            <Card.Text className="">
             We currently accept online orders through our website. We accept all major credit cards including Visa, MasterCard, and American Express.
              <br />
              Please feel free to contact us with any questions regarding payments.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card >
          <Card.Body>
            <Card.Title>Shipping Options</Card.Title>
            <Card.Text className="">
              We currrently ship to the contiguous 48 US States, Hawaii, Alaska, US Territories, and APO/FPO/DPO. 
                <br />
              We offer standard shipping on all orders. We ship orders Monday-Friday. All orders placed after Friday 12pm CST will be shipped the following Monday. 
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card >
          <Card.Body>
            <Card.Title>Return Policy</Card.Title>
            <Card.Text className="">
              We accept returns within 2 weeks from delivery of your order. To start a return, please contact us at returns@scrumptiouscoffee.com.
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

    </div>
);
    
}