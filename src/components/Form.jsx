import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserName } from "../contexts/UserNameProvider";

const Form = () => {
  const [name, setName] = useState("");
  const { updateUserName } = useUserName();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserName(name);
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
