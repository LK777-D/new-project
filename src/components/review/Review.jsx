"use client";
import Image from "next/image";
import testimg from "../../assets/restaurant.jpg";
import ReviewForm from "../../components/review/ReviewForm";
import { useState } from "react";
import { useAddRestCtx } from "../../context/addRestContext";
const Review = ({ selectedRestaurant }) => {
  const { reviewType, userId, setReviewType, review, setReview, addReview } =
    useAddRestCtx();
  const restaurantId = selectedRestaurant.id;
  console.log();
  return (
    <section className="fontlemon lg:flex  ">
      <div className="flex lg:flex-col lg:w-auto border w-[90%] lg:h-[22rem] mx-auto p-3 justify-start gap-3 rounded-sm max-w-[37rem]">
        <Image
          alt="img"
          src={selectedRestaurant.imageValues[0]}
          width={300}
          height={300}
          className="object-cover aspect-square w-[4.5rem] lg:w-[15rem] rounded-sm "
        />
        <div className="flex flex-col">
          <h1 className="font-extrabold">{selectedRestaurant.name}</h1>
          <span className="text-[0.78rem] text-gray-500">
            {selectedRestaurant.addressLine1}
          </span>
          <span className="text-[0.78rem] text-gray-500 ">
            Georgia, {selectedRestaurant.city}
          </span>
        </div>
      </div>
      <div className="h-[80vh] w-[1px] bg-gray-600/30 hidden lg:block "></div>
      <ReviewForm
        setReview={setReview}
        reviewType={reviewType}
        setReviewType={setReviewType}
        addReview={addReview}
        restaurantId={restaurantId}
      />
    </section>
  );
};

export default Review;
