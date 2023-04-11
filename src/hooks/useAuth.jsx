import * as React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../apiServices/authService";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const navigate = useNavigate();

  return {
    authed,
    login(values) {
      authService
        .login({
          email: values.email,
          password: values.password,
        })
        .then(() => {
          setAuthed(true);
          navigate("/");
        });
    },
    logout() {
      return new Promise((res) => {
        window.localStorage.removeItem("auth");
        window.localStorage.removeItem("auth_token");
        window.localStorage.removeItem("auth_email");

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
