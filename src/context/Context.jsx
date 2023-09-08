import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";

const AuthContext = createContext();
const LoggedinContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      <LoggedinContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        {children}
      </LoggedinContext.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const useLoggedIn = () => useContext(LoggedinContext);
