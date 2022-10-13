import React from "react";
import Item from "./Item";
import {useState } from "react";

function ShoppingList({ items }) {
  //set initial state
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  function selectChangeHandler(event){
    setSelectedCategory(event.target.value); //update value of state variable based on selected option
  }

  const filteredItems = items.filter(item => {
    if(selectedCategory === "All"){
      return true;
    }
    else {
      return item.category === selectedCategory;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={selectChangeHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
