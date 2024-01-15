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
  const [images, setImages] = useState([]);
  const [restDeatils, setRestDetails] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const { user } = useAuthCtx();
  const userEmail = user?.userEmail;
  const userId = user?.userId;
  const token = user?.token;
  const restId = restDeatils?.id;

  // create rest
  const addRestaurantInfo = async (e) => {
    e.preventDefault();
    const tokken = localStorage.getItem("authToken");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${tokken}`);

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
      setRestDetails(result);
      console.log(result);
      const newToken = response.headers.get("X-Access-Token");
      console.log(newToken);
      if (newToken) {
        localStorage.setItem("authToken", newToken);
      }
    } catch (error) {
      console.error("Error creating restaurant:", error.message);
    }
  };

  const convertImageToBase64 = (image) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(image);
    });
  };
  const uploadRestImages = async (e) => {
    e.preventDefault();
    if (images.length > 3) {
      alert("Can't add more then 3 images ");
      return;
    }
    const imagePromises = images.map(async (image) => {
      const base64Image = await convertImageToBase64(image);
      return base64Image;
    });

    const base64Images = await Promise.all(imagePromises);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      images: base64Images,
      restaurantId: restId,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://174.138.59.141:8080/api/v2/restaurant/upload",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to upload images");
      }

      const result = await response.json();
      console.log(result);
      const newToken = response.headers.get("X-Access-Token");
      if (newToken) {
        localStorage.setItem("authToken", newToken);
      }
    } catch (error) {
      console.error("Error uploading images:", error.message);
    }
  };

  // fetch rests

  const ctxValue = {
    setAddressLine1,
    setAddressLine2,
    setDescription,
    setCity,
    setName,
    addRestaurantInfo,
    uploadRestImages,
    setImages,
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