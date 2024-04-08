import React, { useState } from "react";
import "../css/menu.css";

const PizzaItem = ({ pizza }) => {
  const { name, ingredients, unitPrice, soldOut, imageUrl } = pizza;
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleDelete = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className="pizza">
      <img src={imageUrl} alt={name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{name}</p>
        <p className="pizza__ingredients">
          {ingredients ? ingredients.join(", ") : ""}
        </p>
        <div className="pizza__actions">
          {soldOut ? (
            <p className="pizza__price">Sold out</p>
          ) : (
            <>
              {unitPrice !== undefined && (
                <p className="pizza__price">€{unitPrice.toFixed(2)}</p>
              )}
              <div>
                <button onClick={handleDelete} className="button">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={handleAdd} className="button">
                  +
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default PizzaItem;
