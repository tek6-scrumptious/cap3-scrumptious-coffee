import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return <div>
    

    <img 
      src={process.env.PUBLIC_URL + "/images/Error404SpilledBeansImage.png"} 
      className="image"
      alt="Spilled coffee image"
    />

    <h1>404 Error</h1>
    <h3>Oops, looks like we spilled the beans here.
      <br /> 
      Please go back and try again.</h3>
    
    </div>;
};

export default Error;
