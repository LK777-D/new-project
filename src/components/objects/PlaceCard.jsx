"use client";
import Image from "next/image";
import img1 from "../../assets/restaurant2.webp";
import Link from "next/link";
import star from "../../assets/star (1).svg";
const PlaceCard = ({
  images,
  imageValues,
  name,
  city,
  addressLine1,
  addressLine2,
  id,
  description,
}) => {
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  console.log(imageValues, name);

  const base64String = btoa(
    String.fromCharCode.apply(null, new Uint8Array(imageValues[0]))
  );

  // Use the base64 string in your image source
  const imageSource = `data:image/jpeg;base64,${base64String}`;
  return (
    <Link
      href={`/restaurants/${id}`}
      className="w-[90%]   max-w-[30rem]  rounded-sm   "
    >
      <div className="flex flex-col border border-gray-300  shadow-xl rounded-sm gap-2 w-full h-full md:min-w-[47rem] bg-white pb-1 md:pb-0 md:flex-row ">
        <div>
          <Image
            src={imageValues[0]}
            alt={`image-`}
            width={600}
            height={400}
            className="aspect-[15/6] rounded-l-sm object-cover md:aspect-square  md:max-h-[12rem] md:max-w-[11rem]   "
          />
        </div>
        <div className="bg-white flex flex-col   font-normal gap-1 pl-3 w-full">
          <span className=" fontlemon text-xl">
            {capitalizeFirstLetter(name)}
          </span>
          <div className="font-extralight text-#333333 text-sm ">
            <div className="flex fontlight gap-3 ">
              <div className="flex">
                <Image
                  alt="star"
                  src={star}
                  width={20}
                  height={20}
                  style={{ fill: "green" }}
                />
                <Image alt="star" src={star} width={20} height={20} />
                <Image alt="star" src={star} width={20} height={20} />
                <Image alt="star" src={star} width={20} height={20} />
                <Image alt="star" src={star} width={20} height={20} />
              </div>
              <span>- reviews</span>
              <span className="text-green-600">Open Now</span>
            </div>
            <div className="fontlight flex gap-1">
              <span>
                Restaurants & Cafes, <span className="font-bold">Georgian</span>{" "}
                |
              </span>
              <span>-$ -$</span>
            </div>
            <div className="  fontlight">
              <span>
                {city}, {addressLine1}
              </span>
              <span>{addressLine2}</span>
            </div>
          </div>
          <div className="h-[1px] my-3 w-[95%] mx-auto bg-gray-600/40  "></div>
          <span className="font-extralight text-sm">
            {description.slice(0, 50)}...
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
