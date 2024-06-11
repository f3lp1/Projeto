import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/auth", { email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        api.defaults.headers.common[
          "Authorization"
        ] = `JWT ${response.data.token}`;

        localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
        localStorage.setItem("@Auth:token", response.data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};