import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";

const LoggedInContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </LoggedInContext.Provider>
  );
}

export const useLoggedIn = () => useContext(LoggedInContext);
