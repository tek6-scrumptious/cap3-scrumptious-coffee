import React from "react";

// styles
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing()
{
  return (
    <div className="landing-container">
      {window.innerWidth <= 415 ? (
        <div>
          <div className="imageMobile">
            <Link to="/products">
              <img
                src={process.env.PUBLIC_URL + "/images/ScrumptiousLogo.png"}
                className="logoMobile"
                alt="scrumptious logo"
              />
            </Link>
            {/* <img
              // src={process.env.PUBLIC_URL + "/images/landingPageMobile3.png"}
              className="imageMobile"
              alt="Two coffees with plants"
            /> */}
          </div>
        </div>
      ) : (
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
              src={process.env.PUBLIC_URL + "/images/landingPage2.png"}
              className="image"
              alt="Two coffees with plants"
            />
          </div>
        </div>
      )}
    </div>
  );
}
