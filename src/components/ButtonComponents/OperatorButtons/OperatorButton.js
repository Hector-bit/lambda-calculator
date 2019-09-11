import React from "react";
//import { exportSpecifier } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator_button">{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;