"use client";
import Link from "next/link";
import rating from "../../assets/star (1).svg";
import Image from "next/image";
import { Rate } from "antd";
const InfoBox = ({ description, restId, score }) => {
  const objScore = parseFloat(score).toFixed(1);
  console.log(typeof score);
  return (
    <div className="bg-white fontlemon  my-5 px-[2rem] py-3  ">
      <h1 className="text-xl font-extrabold">Ratings and Description</h1>
      <div className="py-[1rem] font-bold">
        <div className="flex mt-1">
          <span className="mr-1">{parseFloat(score).toFixed(1)}</span>
          <Rate allowClear={false} allowHalf value={objScore} />
        </div>
      </div>
      <div className="h-[2px] w-[95%] mx-auto bg-gray-200 my-[1rem] mr-[2rem]  "></div>
      <p>{description}</p>
      <button className="w-full my-4 transition hover:bg-black/70 duration-150 ease-in  text-white fontlemon rounded-sm p-1 bg-black">
        <Link
          href={{
            pathname: `/restaurants/${restId}/review`,
            restId: "hello",
          }}
        >
          Write a Review
        </Link>
      </button>
    </div>
  );
};
export default InfoBox;
