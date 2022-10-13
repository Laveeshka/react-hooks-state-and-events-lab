import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  //set initial state
  const [inCart, setInCart] = useState("false"); //initial value of state variable is false, item is not cart

  function buttonClickHandler(){
    setInCart(!inCart); //update value of state variable
  }

  const liClassName = !inCart? "in-cart" : "";
  const buttonText = !inCart? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={buttonClickHandler} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
