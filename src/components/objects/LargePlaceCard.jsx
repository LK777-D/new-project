"use client";
import testimg1 from "../../assets/restaurant.jpg";
import testimg2 from "../../assets/restaurant2.webp";
import testimg3 from "../../assets/pub.jpg";
import { useState } from "react";
import rating from "../../assets/star (1).svg";
import Image from "next/image";
import ImageGallery from "../../components/gallery/ImageGallery";
import Rate from "../../components/rating/Rate";
import clock from "../../assets/clock.svg";
import { useAddRestCtx } from "../../context/addRestContext";
import { useAuthCtx } from "../../context/AuthContext";

const LargePlaceCard = ({
  imageValues,
  city,
  name,
  addressLine1,
  addressLine2,
  restId,
  selectedRestaurant,
  restaurantId,
  creatorId,
  score,
}) => {
  const [imageGalleryIsOpen, setImageGalleryIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setImageGalleryIsOpen(true);
  };
  const { deleteRestaurant } = useAddRestCtx();
  const { user } = useAuthCtx();
  const userId = user?.userId;
  return (
    <div className="flex flex-col fontlemon   ">
      <div className="bg-white py-[1.5rem] pl-[2rem] md:pl-0">
        <div className="md:px-[1.5rem] flex flex-col">
          <h1 className="font-extrabold text-2xl">{name}</h1>
          <h3 className="text-gray-400">Georgia, {city}</h3>
          <div className="flex gap-1 md:hidden">
            <span className="text-gray-400">{addressLine1}</span>
            <span className="text-gray-400">{addressLine2}</span>
          </div>
          <div>
            <Rate restId={restId} />
            <span>0 reviews</span>
          </div>
          <div className="md:flex items-center gap-2">
            <span>Georgian,Cafe,Restaurant </span>|<span>-$ -$</span>|
            <span className="flex mt-2 md:mt-0">
              <Image alt="clock" src={clock} />{" "}
              <span className="mr-1 font-bold">Open Now </span>- PM - - AM
            </span>
            |
            <div className="  hidden md:flex md:gap-1">
              <span className="text-gray-400">{addressLine1}</span>,
              <span className="text-gray-400">{addressLine2}</span>
            </div>
          </div>
          {userId === creatorId && (
            <button onClick={() => deleteRestaurant(restId, creatorId)}>
              Delete Restaurant
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[3px]  mx-auto  mt-5 md:px-[1.5rem] ">
        {imageValues.map((_, index) => (
          <Image
            key={index}
            className="object-cover aspect-[5/6] md:aspect-[17/9] md:h-[20rem]   "
            alt="img"
            src={imageValues[index]}
            width={1000}
            height={1000}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {imageGalleryIsOpen && (
        <div>
          <ImageGallery
            selectedImageIndex={selectedImageIndex}
            imageValues={imageValues}
            setImageGalleryIsOpen={setImageGalleryIsOpen}
          />
        </div>
      )}
    </div>
  );
};

export default LargePlaceCard;
