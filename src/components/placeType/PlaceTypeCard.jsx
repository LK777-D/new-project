import Image from "next/image";
import Link from "next/link";
const PlaceTypeCard = ({ text, img, to }) => {
  return (
    <Link
      href={`restaurants/filter/${to}`}
      className="flex flex-col min-w-[28%] rounded-lg  h-[7.5rem]  "
    >
      <div className=" max-h-[70%] ">
        <Image
          className="rounded-t-lg w-full h-full object-cover "
          alt="foodimg"
          src={img}
          width={500}
          height={300}
        />
      </div>
      <div className="bg-white py-[7px] pl-2 rounded-b-lg text-sm text-ligh ">
        {text}
      </div>
    </Link>
  );
};

export default PlaceTypeCard;
