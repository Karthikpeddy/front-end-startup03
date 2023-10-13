/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Black } from "../Black";
import "./style.css";

export const White = ({ className }) => {
  return (
    <div className={`white ${className}`}>
      <Black className="black-instance" divClassName="design-component-instance-node" />
    </div>
  );
};
