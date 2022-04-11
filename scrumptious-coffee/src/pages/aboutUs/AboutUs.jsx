// styles
import "./AboutUs.css";
import { Card, Button, Container } from "react-bootstrap";
import PersonalCard from "./PersonalCard";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <Container className="about-us-container">
        <Card>
          <Card.Body>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "images/Global-Map-With-Beans.png"}
            />
            <hr />
            <Card.Title>From Mountaintop to countertop</Card.Title>
            <Card.Text>
              Our coffee master, Jon Kol, only selects the top 1% of Arabica
              beans from the world’s best growing regions in East Africa, Latin
              America, and the Pacific. <br /> <br />
              We roast in small batches at our facility in Camarillo, CA, where
              we find the roast that best suits the beans from each origin and
              captures what makes each country’s coffee unique. In other words,
              we don’t do anything halfway.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <div className="about-us-margin-top">
          <h3>Our Journey</h3>
          <hr />
          <Card>
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
              cursus eget nunc scelerisque viverra mauris. Rhoncus est
              pellentesque elit ullamcorper.
            </Card.Body>
          </Card>

          <h3 className="about-us-margin-top">Our Team:</h3>
          <hr />
          <div className="about-us-cards-container">
            <div className="personal-card-left">
              <PersonalCard
                title="Jon Kol (Coffee Master)"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                other="about-us-cards-container-left about-us-grid-left"
                imageUrl
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Alan Sobenes"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Dinah Brito"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                other="about-us-cards-container-left"
                imageUrl="dinah"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Jonothan Castillo"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="jonothan"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Joseph Capocci"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                other="about-us-cards-container-left"
                imageUrl="joey"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Michael Rivera"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="michael"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Rami Aboomar"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                other="about-us-cards-container-left"
                imageUrl="rami"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Waleed Saleh"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl
              />
            </div>
          </div>
          <div className="about-us-button-container">
            <Button size="lg" variant="success" className="about-us-button">
              <Link to="/products" className="link">
                CHECK OUT OUR COFFEE
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
