import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    priority: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Номер телефону є обов'язковим";
    } else if (!/^\+?\d+$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber =
        "Номер телефону повинен містити лише цифри та '+'";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Адреса є обов'язковою";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Дані з форми:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>
          Номер телефону:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>
      <div>
        <label>
          Адреса:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="priority"
            checked={formData.priority}
            onChange={handleChange}
          />
          Пріоритизувати замовлення
        </label>
      </div>
      <button type="submit">Підтвердити замовлення</button>
    </form>
  );
};

export default OrderForm;
