import { createContext } from "react";
import { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LoggedInContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [isManager, setIsManager] = useLocalStorage("isManager", false);
  const [token, setToken] = useLocalStorage("token", "");
  const [avatar, setAvatar] = useLocalStorage("avatar", "");
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");

  return (
    <LoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isManager,
        setIsManager,
        token,
        setToken,
        avatar,
        setAvatar,
        name,
        setName,
        email,
        setEmail,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
}

export const useLoggedIn = () => useContext(LoggedInContext);
