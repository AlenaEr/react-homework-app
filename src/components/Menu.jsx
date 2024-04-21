import React, { useState, useEffect } from "react";
import PizzaItem from "./PizzaItem";
import OrderForm from "./OrderForm";
import "../css/menu.css";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <div>
      <ul>
        {menu.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </ul>
      <OrderForm cart={cart} />
    </div>
  );
};

export default Menu;
