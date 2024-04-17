import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Дані з форми:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Ім'я:
          <input type="text" {...register("name", { required: true })} />
        </label>
        {errors.name && <p className="error">Ім'я є обов'язковим</p>}
      </div>
      <div>
        <label>
          Номер телефону:
          <input
            type="text"
            {...register("phoneNumber", {
              required: true,
              pattern: /^\+?\d+$/,
            })}
          />
        </label>
        {errors.phoneNumber && (
          <p className="error">
            Номер телефону повинен містити лише цифри та '+'
          </p>
        )}
      </div>
      <div>
        <label>
          Адреса:
          <input type="text" {...register("address", { required: true })} />
        </label>
        {errors.address && <p className="error">Адреса є обов'язковою</p>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("priority")} />
          Пріоритизувати замовлення
        </label>
      </div>
      <button type="submit">Підтвердити замовлення</button>
    </form>
  );
};

export default OrderForm;
