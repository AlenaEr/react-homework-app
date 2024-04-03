import React from "react";
import "../css/menu.css";
import { pizzas } from "../menu/data";

const PizzaItem = ({ name, ingredients, unitPrice, soldOut, imageUrl }) => (
  <li className="pizza">
    <img src={imageUrl} alt={name} className="pizza__image" />
    <div className="pizza__info">
      <p className="pizza__name">{name}</p>
      <p className="pizza__ingredients">{ingredients.join(", ")}</p>
      <div className="pizza__actions">
        {soldOut ? (
          <p className="pizza__price">Sold out</p>
        ) : (
          <>
            <p className="pizza__price">€{unitPrice.toFixed(2)}</p>
            <button className="button">Add to cart</button>
          </>
        )}
      </div>
    </div>
  </li>
);

const Menu = () => (
  <ul>
    {pizzas.map((pizza) => (
      <PizzaItem
        key={pizza.id}
        name={pizza.name}
        ingredients={pizza.ingredients}
        unitPrice={pizza.unitPrice}
        soldOut={pizza.soldOut}
        imageUrl={pizza.imageUrl}
      />
    ))}
  </ul>
);

export default Menu;
