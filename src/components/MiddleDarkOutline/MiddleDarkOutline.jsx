/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MiddleDarkOutline = ({ className, text = "Your email" }) => {
  return (
    <div className={`middle-dark-outline ${className}`}>
      <div className="your-email">{text}</div>
    </div>
  );
};

MiddleDarkOutline.propTypes = {
  text: PropTypes.string,
};
