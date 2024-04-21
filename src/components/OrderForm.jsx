import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = ({ cart }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    if (!cart || cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const order = {
      address: data.address,
      customer: data.customer,
      phone: data.phone,
      priority: data.priority,
      position: "",
      cart: cart.map((item) => ({
        name: item.name,
        pizzaId: item.pizzaId,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
        unitPrice: item.unitPrice,
      })),
    };

    try {
      const response = await fetch(
        "https://react-fast-pizza-api.onrender.com/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        window.location.href = `/api/order/${responseData.data.id}`;
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Address:</label>
          <input type="text" {...register("address", { required: true })} />
          {errors.address && <p>Address is required</p>}
        </div>
        <div>
          <label>Customer Name:</label>
          <input type="text" {...register("customer", { required: true })} />
          {errors.customer && <p>Customer name is required</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            {...register("phone", { required: true, pattern: /^\+?\d+$/ })}
          />
          {errors.phone && <p>Invalid phone number</p>}
        </div>
        <div>
          <label>
            Priority:
            <input type="checkbox" {...register("priority")} />
          </label>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
