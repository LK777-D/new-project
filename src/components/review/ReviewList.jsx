"use client";
import { useState } from "react";
const ReviewList = ({ reviews }) => {
  const [index, setIndex] = useState(4);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  const viewMoreHandler = () => {
    if (index < reviews.length) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(4);
    }
  };
  return (
    <section className="fontlemon">
      <div className="flex flex-col gap-3 ">
        {reviews.length > 0 &&
          reviews.slice(0, index).map((review, i) => (
            <div className="bg-white p-5 border max-w-[40rem]" key={i}>
              <div>
                <h1 className="text-md">{review.userEmail}</h1>
                <span className="text-lg text-gray-700">
                  {formatDate(review.createdAt)}
                </span>
              </div>
              <div className="w-[90%] mx-auto h-[1px] bg-gray-500/40 my-3 "></div>
              <span className="text-[0.8rem] text-gray-500 ">
                {review.content}
              </span>
            </div>
          ))}
      </div>
      <button
        onClick={viewMoreHandler}
        className="my-3 transition duration-150 hover:text-gray-500 ease-linear"
      >
        {index < reviews.length ? "View More" : "View Less"}
      </button>
    </section>
  );
};

export default ReviewList;
