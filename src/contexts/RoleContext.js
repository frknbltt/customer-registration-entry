import { createContext, useState } from "react";

export const RoleContext = createContext();

const RoleContextProvider = (props) => {
  const [roles, setRoles] = useState([]);

  const getRoles = () => {
    setRoles([
      { title: "Admin", id: "admin" },
      { title: "User", id: "user" },
      { title: "Manager", id: "manager" },
    ]);
  };

  return (
    <RoleContext.Provider value={{ roles, getRoles }}>
      {props.children}
    </RoleContext.Provider>
  );
};

export default RoleContextProvider;
