import React, { useState, useEffect } from "react";
import PizzaItem from "./PizzaItem";
import "../css/menu.css";


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
