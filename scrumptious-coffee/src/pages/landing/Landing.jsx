import React from "react";

// styles
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing()
{
  return (
    <div className="landing-container">

      <div>
        <div className="background-landing">
          <div className='logo-container'>
            <Link to="/products">
              <img
                src={process.env.PUBLIC_URL + "/images/ScrumptiousLogo.png"}
                className="logo"
                alt="scrumptious logo"
              />
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}
