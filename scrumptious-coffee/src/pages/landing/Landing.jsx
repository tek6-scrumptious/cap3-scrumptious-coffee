// styles
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <h1 className="name">
        {" "}
        <Link to="/products" className="links landingHover">
          Scrumptious{" "}
        </Link>{" "}
      </h1>
      <img
        src={process.env.PUBLIC_URL + "/images/landingPage.jpg"}
        className="image"
        alt="Two coffees with plants"
      />
    </div>
  );
}
