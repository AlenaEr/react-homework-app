import React, { useState, useEffect } from "react";
import "../css/menu.css";

const PizzaItem = ({ name, ingredients, unitPrice, soldOut, imageUrl }) => {
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
        <p className="pizza__ingredients">{ingredients.join(", ")}</p>
        <div className="pizza__actions">
          {soldOut ? (
            <p className="pizza__price">Sold out</p>
          ) : (
            <>
              <p className="pizza__price">€{unitPrice.toFixed(2)}</p>
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

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenu(data.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <ul>
      {menu.map((pizza) => (
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
};

export default Menu;
