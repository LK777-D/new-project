"use client";
import { useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";
const authCtx = createContext();
const AuthenticationCtxProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState(false);
  const [authIsOpen, setAuthIsopen] = useState(false);

  const router = useRouter();
  const register = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const formData = {
      userName: username,
      email: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formData),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://167.99.61.234:8080/api/v1/auth/register",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.text();
      console.log(result);
      setAuthIsopen(false);
      router.push("/");

      setReg(false);
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };
  const login = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const loginData = {
      email: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(loginData),
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://167.99.61.234:8080/api/v1/auth/authenticate",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const result = await response.text();
      console.log(result);
      router.push("/");
      setAuthIsopen(false);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };
  const word = 100;

  const ctxValue = {
    word,
    setUsername,
    setPassword,
    setEmail,
    register,
    login,
    reg,
    setReg,
    authIsOpen,
    setAuthIsopen,
  };

  return <authCtx.Provider value={ctxValue}>{children}</authCtx.Provider>;
};
export default AuthenticationCtxProvider;

export const useAuthCtx = () => {
  const ctx = useContext(authCtx);
  if (!ctx) {
    throw new Error("context provider error ");
  }
  return ctx;
};
