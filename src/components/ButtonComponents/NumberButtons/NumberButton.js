import React from "react";
//import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"

const NumberButton = (props) => {
  //console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number_button">{props.number}</button>
    </>
  );
};

export default NumberButton;