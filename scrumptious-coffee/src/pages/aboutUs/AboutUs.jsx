// styles
import "./AboutUs.css";
import { Card, Button, Container } from "react-bootstrap";
import PersonalCard from "./PersonalCard";

export default function AboutUs() {
  return (
    <Container className="about-us-container">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" alt="world map" />
        <Card.Body>
          <Card.Text>
            <Card.Title>From Mountaintop to countertop</Card.Title>
            Our coffee master, Jon Kol, only selects the top 1% of Arabica beans
            from the world’s best growing regions in East Africa, Latin America,
            and the Pacific. <br /> <br />
            We roast in small batches at our facility in Camarillo, CA, where we
            find the roast that best suits the beans from each origin and
            captures what makes each country’s coffee unique. In other words, we
            don’t do anything halfway.
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="about-us-margin-top about-us-card">
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
        <PersonalCard
          title="Jon Kol (Product Manager)"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Alan Sobenes"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Dinah Brito"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Jonothan Castillo"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Joseph Capocci"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Michael Rivera"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Rami Aboomar"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <PersonalCard
          title="Waleed Saleh"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra mauris. Rhoncus est pellentesque elit ullamcorper."
        />
        <Button size="lg" variant="success" className="about-us-button">
          CHECK OUT OUR COFFEE
        </Button>
      </div>
    </Container>
  );
}
