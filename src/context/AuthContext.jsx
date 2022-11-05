import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let userID = {
    name: " Yeasin",
  };

  return <AuthContext.Provider value={userID}>{children}</AuthContext.Provider>;
};

export default AuthContext;
