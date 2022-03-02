// styles
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      {window.innerWidth <= 415 ? (
        <div>
          <div>
            <Link to="/products">
              <img
                src={process.env.PUBLIC_URL + "/images/ScrumptiousLogo.png"}
                className="logoMobile"
                alt="scrumptious logo"
              />
            </Link>
            <img
              src={process.env.PUBLIC_URL + "/images/landingPageMobile.jpg"}
              className="image"
              alt="Two coffees with plants"
            />
          </div>
        </div>) : (
          <div>
          <div>
            <Link to="/products">
              <img
                src={process.env.PUBLIC_URL + "/images/ScrumptiousLogo.png"}
                className="logo shrink"
                alt="scrumptious logo"
              />
            </Link>
            <img
              src={process.env.PUBLIC_URL + "/images/landingPage.jpg"}
              className="image"
              alt="Two coffees with plants"
            />
          </div>
        </div>
      )}
    </div>
  );
}
