// styles
import "./AboutUs.css";
import { Card, Button, Container } from "react-bootstrap";
import PersonalCard from "../../components/aboutUs/PersonalCard";
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
            <div className="personal-card-right">
              <PersonalCard
                title="Alan Sobenes"
                body="Discovering my love for coding has been a very fun experience. This 3 month camp has had its challenges but through it all I am very proud to be able to say I have made it through. I want to thank my Agile team for being a pleasure to work with, it was nice having teammates with so much creativity and motivation. It was an honor working with them daily, and I am grateful for the opportunity TEKsystems has provided me."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="alan"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Dinah Brito"
                body="I’ve been wanting to change careers since 2016. Programming was always an interest, but it wasn’t until Covid hit that I had the time to actually learn more about it. After taking a class on HTML and CSS, I realized that this was something I enjoyed. I spent a lot of time trying to teach myself how to code, but realized that I learned faster with structure and some guidance. Teksystems bootcamp provided the learning environment to help focus on the skills and languages I would need to become a software developer. While there is still a lot to learn, this bootcamp has given me a good foundation to work with."
                other="about-us-cards-container-left"
                imageUrl="dinah"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Jonothan Castillo"
                body="Hello, I am Jonothan Castillo, when I started this boot camp I had zero experience with react, MySQL, and Springboot. I learned a lot in a short time thanks to this boot camp. And I got to learn about the planning that happens behind these projects and got experiences that will help me in the future."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="jonothan"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Joseph Capocci"
                body="My experience over the last 3 months with the camp has been incredible. I have learned many new programming techniques and tools, such as Java. The course has truly grown my development skills, before this bootcamp I could not imagine building a website like this one here. But through an amazing team and well-taught courses, we were able to achieve it. I can't thank my team enough for all of the cooperation throughout the bootcamp and especially on capstone 3, I knew team scrumptious was the best from the beginning!"
                other="about-us-cards-container-left"
                imageUrl="joey"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Michael Rivera"
                body="The TekSystems Bootcamp was an incredible opportunity that I feel so grateful to have been a part of. I am so proud not only of my own progress but of everyone who attended the cohort. My team was fantastic and I really enjoyed the process of building capstone 3 as a group."
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="michael"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Rami Aboomar"
                body="In early 2021 my interest in web development started. That's when I began self-studying and looking for the right boot camp to attend that would guide me and allow me to grow. In late 2021 I found out about TEKsystems boot camp. After three months with TEK systems, my experience has been fantastic; I'm now able to build a full-stack application and better understand what web development is. My journey has been up and down during those three months, but I've met many amazing people and grown as a developer."
                other="about-us-cards-container-left"
                imageUrl="rami"
              />
            </div>
            <div className="personal-card-right">
              <PersonalCard
                title="Waleed Saleh"
                body="My journey started way before entering TekSystems. It all first started at CodeCademy back in 2016 and then working through a year of Kenzie Academy to achieve a Full Stack Certificate in 2020. Once I had entered into TekSystems I gained a few new tricks in frontend development and also gained a new tool to add to my belt. Java and SpringBoot. Since the recruiting phase I had the pleasure to work with Cheryl and experiencing her positive attitude toward TekSystem and that gets me excited to begin my new journey with TekSystems and begin my future in tech!"
                position="about-us-image-right"
                other="about-us-cards-container-right"
                bodyPosition="about-us-grid-right"
                imageUrl="waleed"
              />
            </div>
            <div className="personal-card-left">
              <PersonalCard
                title="Jon Kol (Coffee Master)"
                body="I am Jon Kol. A veteran of TekCamp 3.
                When I was asked to be a TA for Tek6 I was a bit unsure. Now able to reflect back on it this has been a very satisfying adventure in working with and getting to know each member of team Scrumptious.
                Currently I am CoffeeMaster for the Scrumptious Coffee Company. Along with my 45-70 and lack of basic hygiene I scour the most rugged parts of the earth in search of the perfect beans."
                other="about-us-cards-container-left about-us-grid-left"
                imageUrl="jon"
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
