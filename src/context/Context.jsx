import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { get } from "../js/storage/localStorage";

const LoggedInContext = createContext();
const token = get("token");
console.log(token);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </LoggedInContext.Provider>
  );
}

export const useLoggedIn = () => useContext(LoggedInContext);
