import testimg1 from "../../assets/restaurant.jpg";
import testimg2 from "../../assets/restaurant2.webp";
import testimg3 from "../../assets/pub.jpg";
import { useMemo } from "react";
import rating from "../../assets/star (1).svg";
import Image from "next/image";
import clock from "../../assets/clock.svg";
const LargePlaceCard = ({
  imageValues,
  city,
  name,
  addressLine1,
  addressLine2,
}) => {
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
          <div className="flex mt-1">
            <Image alt="star" src={rating} width={20} height={20} />
            <Image alt="star" src={rating} width={20} height={20} />
            <Image alt="star" src={rating} width={20} height={20} />
            <Image alt="star" src={rating} width={20} height={20} />
            <Image alt="star" src={rating} width={20} height={20} />
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
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[3px]  mx-auto  mt-5 md:px-[1.5rem] ">
        <Image
          className="object-cover aspect-[5/6] md:aspect-[17/9] md:h-[20rem]   "
          alt="img"
          src={imageValues[0]}
          width={1000}
          height={1000}
        />
        {/* <Image
          className="object-cover aspect-[5/6] md:aspect-[15/9]  md:h-[20rem] "
          alt="img"
          src={testimg2}
          width={1000}
          height={1000}
        />
        <Image
          className="object-cover aspect-[5/6] md:aspect-[15/9]  md:h-[20rem] "
          alt="img"
          src={testimg3}
          width={1000}
          height={1000}
        /> */}
      </div>
    </div>
  );
};

export default LargePlaceCard;
