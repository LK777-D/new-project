"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
    }, 5500);
    return () => clearInterval(intervalId);
  }, [index]);
  const images = [
    {
      url: "sliderimg1",
      tag: "Hotels",
      text: "unparalleled comfort and hospitality as you explore our comprehensive array of hotels.  ",
    },
    {
      url: "sliderimg2",
      tag: "Restaurants",
      text: "Explore an exquisite culinary journey with our curated selection of restaurants.",
    },
  ];
  return (
    <div className="max-w-[1900px] h-[50vh] w-[100vw] md:h-[75vh] lg:h-[80vh] lg:w-[100vw] xl:h-[37rem] xl:w-[100vw] relative mx-auto   ">
      <div
        className={`w-full h-full bg-center ${images[index].url} bg-cover duration-500 flex items-end pl-2  `}
      >
        <div className="flex flex-col gap-3 items-center justify-center text-center w-full h-full">
          <h1 className="text-white text-2xl font-extrabold lg:text-[3rem]">
            {images[index].tag}
          </h1>
          <span className="text-white w-[80%] text-sm lg:text-2xl ">
            {images[index].text}
          </span>
          <Link
            className="bg-white text-gray-600 px-5 py-2 rounded-lg transition hover:bg-gray-200 duration-150 ease-linear"
            href={"/"}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
