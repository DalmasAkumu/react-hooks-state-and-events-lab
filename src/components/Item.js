import React, { useState } from "react";

function Item({ name, category }) {

const [cart , setCart] = useState("")

function handleCart(event){
  const Item = event.target.value

  setCart("in-cart")
}
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;