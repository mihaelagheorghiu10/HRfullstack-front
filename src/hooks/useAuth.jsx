import * as React from "react";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const navigate = useNavigate();

  return {
    authed,
    login(values) {
      return new Promise((res) => {
        window.localStorage.setItem("login", JSON.stringify(values));
        setAuthed(true);
        navigate("/");
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        window.localStorage.removeItem("login");
        setAuthed(false);
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
