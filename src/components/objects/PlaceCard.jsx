"use client";
import Image from "next/image";

import Link from "next/link";
const PlaceCard = ({
  images,
  imageValues,
  name,
  city,
  addressLine1,
  addressLine2,
  id,
}) => {
  return (
    <Link href={`/restaurants/${id}`} className="w-[90%] max-w-[30rem]  ">
      <div>
        <div>
          {images.slice(0, 1).map((imageId, index) => (
            <Image
              key={index}
              src={imageValues[0]}
              alt={`restimage`}
              height={0}
              width={0}
              style={{ width: "120px", height: "auto" }}
            />
          ))}
        </div>
        <div className="flex justify-around">
          <span>{name}</span>
          <span>{city}</span>
        </div>
        <div className="flex justify-around">
          <span>{addressLine1}</span>
          <span>{addressLine2}</span>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
