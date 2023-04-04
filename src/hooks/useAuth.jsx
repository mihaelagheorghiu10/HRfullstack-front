import * as React from "react";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

function useAuth() {
  const navigate = useNavigate();

  return {
    login(values) {
      return new Promise((res) => {
        window.localStorage.setItem("login", JSON.stringify(values));
        navigate("/");
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        window.localStorage.setItem("login", null);
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
