"use client";
import { useState, useContext, createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
const authCtx = createContext();
const AuthenticationCtxProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState(false);
  const [authIsOpen, setAuthIsopen] = useState(false);
  const [modalIsopen, setModalIsopen] = useState(false);
  const [user, setUser] = useState(null);

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
        "http://174.138.59.141:8080/api/v1/auth/register",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();

      console.log(result);
      setUser(result);
      localStorage.setItem("authToken", result.token);

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
        "http://174.138.59.141:8080/api/v1/auth/authenticate",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }
      const result = await response.json();
      console.log(result);

      setUser(result);

      localStorage.setItem("authToken", result.token);

      setAuthIsopen(false);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setModalIsopen(false);
  };
  const openModal = () => {
    setModalIsopen(true);
  };
  const closeModal = () => {
    setModalIsopen(false);
  };

  const authTokenAfterRefresh = async () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${authToken}`);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://174.138.59.141:8080/api/v2/auth/authenticate",
          requestOptions
        );

        const newToken = response.headers.get("X-Access-Token");

        if (newToken) {
          localStorage.setItem("authToken", newToken);
          console.log(newToken);
        }
      } catch (error) {
        console.error("Error checking token validity:", error.message);
      }
    }
  };
  const getUserDeatilsAfterRefresh = async () => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${authToken}`);
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          `http://174.138.59.141:8080/api/v2/auth/getUser?token=${authToken}`,
          requestOptions
        );
        const newToken = response.headers.get("X-Access-Token");
        if (newToken) {
          localStorage.setItem("authToken", newToken);
        }
        const result = await response.json();
        setUser(result);
        console.log(result);
      } catch {}
    }
  };
  useEffect(() => {
    authTokenAfterRefresh();
    getUserDeatilsAfterRefresh();
  }, []);

  const ctxValue = {
    setUsername,
    setPassword,
    setEmail,
    register,
    login,
    reg,
    setReg,
    authIsOpen,
    setAuthIsopen,

    modalIsopen,
    setModalIsopen,
    openModal,
    closeModal,
    logout,
    user,
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
