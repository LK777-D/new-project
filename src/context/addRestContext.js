"use client";
import { useState, createContext, useContext } from "react";
import { useAuthCtx } from "./AuthContext";
const addRestCtx = createContext();

const AddRestCtxProvider = ({ children }) => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthCtx();
  const userEmail = user?.userEmail;
  const userId = user?.userId;

  const addRestaurantInfo = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmYXJuYTFAZ21haWwuY29tIiwiaWF0IjoxNzA1MTUzNDU1LCJleHAiOjE3MDUxNTQ4OTV9.T46okqofl-rkV37sfJ6yicZ8JTBFYy9gr6YLEZb9MaU"
    );

    const raw = JSON.stringify({
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city,
      name,
      description,
      creatorEmail: userEmail,
      createdBy: userId,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://174.138.59.141:8080/api/v2/restaurant/create",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to create restaurant");
      }
      const result = await response.json();
    } catch (error) {
      console.error("Error creating restaurant:", error.message);
    }
  };

  const ctxValue = {
    setAddressLine1,
    setAddressLine2,
    setDescription,
    setCity,
    setName,
    addRestaurantInfo,
  };

  return <addRestCtx.Provider value={ctxValue}>{children}</addRestCtx.Provider>;
};
export default AddRestCtxProvider;

export const useAddRestCtx = () => {
  const ctx = useContext(addRestCtx);
  if (!ctx) {
    throw new Error("Context provider error");
  }
  return ctx;
};
