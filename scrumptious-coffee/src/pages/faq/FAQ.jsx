import "./FAQ.css";
import React from "react";
import { Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

export default function FAQ() {
  return (
    <div className="faq-container">
      <div className="text-center faq-image-container">
        <img
          src={process.env.PUBLIC_URL + "/images/FAQImage.png"}
          className="img-fluid faq-image"
          alt="FAQ Page"
        />
      </div>

      <div className="return-policy-jumbotron">
        <h1 className="text-center faq-title-text">FAQ</h1>
      </div>

      <Accordion className="faq-accordion-container">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are my Payment Options?</Accordion.Header>
          <AccordionBody>
            We currently accept online orders through our website. We accept all
            major credit cards including Visa, MasterCard, and American Express.
            Please feel free to contact us with any questions regarding
            payments.
            <br />
          </AccordionBody>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What are my Shipping Options?</Accordion.Header>
          <AccordionBody>
            We currrently ship to the contiguous 48 US States, Hawaii, Alaska,
            US Territories, and APO/FPO/DPO.
            <br />
            We offer standard shipping on all orders. We ship orders
            Monday-Friday. All orders placed after Friday 12pm CST will be
            shipped the following Monday.
            <br />
          </AccordionBody>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the Return Policy?</Accordion.Header>
          <AccordionBody>
            We accept returns within 2 weeks from delivery of your order. To
            start a return, please contact us at returns@scrumptiouscoffee.com.
            <br />
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
