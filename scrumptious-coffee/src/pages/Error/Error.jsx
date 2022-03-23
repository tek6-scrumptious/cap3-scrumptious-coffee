import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return <div>
       <div className="error-Text">
    <h1>404 Error</h1>
    <h3>Oops, looks like we spilled the beans here.
    <br /> 
    Please go back and try again.</h3>
    </div>

    <img 
      src={process.env.PUBLIC_URL + "/images/Error404SpilledBeansImage.png"} 
      className="error-Image"
      alt="Spilled coffee image"
    />
 

    
    </div>;
};

export default Error;
