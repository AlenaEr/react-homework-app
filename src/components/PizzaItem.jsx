import React, { useReducer } from "react";
import "../css/menu.css";

const initialState = {
  quantity: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { quantity: state.quantity + 1 };
    case "decrement":
      return { quantity: state.quantity > 0 ? state.quantity - 1 : 0 };
    default:
      throw new Error();
  }
}

const PizzaItem = ({ pizza }) => {
  const { name, ingredients, unitPrice, soldOut, imageUrl } = pizza;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    dispatch({ type: "increment" });
  };

  const handleDelete = () => {
    dispatch({ type: "decrement" });
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
                <span>{state.quantity}</span>
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

