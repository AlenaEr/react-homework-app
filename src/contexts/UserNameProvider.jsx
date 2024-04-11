import React, { createContext, useContext, useState } from "react";

const UserNameContext = createContext();
export const useUserName = () => useContext(UserNameContext);
export const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const updateUserName = (name) => {
    setUserName(name);
  };

  return (
    <UserNameContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;