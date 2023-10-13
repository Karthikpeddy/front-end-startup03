/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MiddleFill = ({ className, signUpClassName, text = "Sign In" }) => {
  return (
    <div className={`middle-fill ${className}`}>
      <div className={`sign-up ${signUpClassName}`}>{text}</div>
    </div>
  );
};

MiddleFill.propTypes = {
  text: PropTypes.string,
};
