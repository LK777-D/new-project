"use client";
import { useState, useEffect } from "react";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImg = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index]);
  const images = [
    {
      url: "sliderimg1",
      tag: "Hotels",
      text: "In the diverse world of gaming, the triumvirate of Xbox, PlayStation, and Nintendo brings together a spectrum of experiences.",
      bg: "bg-purple-500 ",
    },
    {
      url: "sliderimg2",
      tag: "Restaurants",
      text: "Sony's PlayStation has been a gaming juggernaut, captivating audiences with its groundbreaking consoles and exclusive titles.",
      bg: "bg-blue-800 ",
    },
  ];
  return (
    <div className="max-w-[1900px] h-[50vh] w-[100vw] md:h-[75vh] lg:h-[80vh] lg:w-[100vw] xl:h-[90vh] xl:w-[100vw] relative mx-auto   ">
      <div
        className={`w-full h-full bg-center ${images[index].url} bg-cover duration-500 flex items-end pl-2  `}
      ></div>
    </div>
  );
};

export default Slider;
