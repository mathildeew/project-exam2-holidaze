import { createContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(null);

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
