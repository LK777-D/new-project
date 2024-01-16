import Image from "next/image";
import restImg from "../../assets/restaurant.jpg";
import Link from "next/link";
const PlaceCard = ({ name, city, addressLine1, addressLine2, id }) => {
  return (
    <Link href={`/restaurants/${id}`} className="w-[90%] max-w-[30rem]  ">
      <Image alt="rest" src={restImg} className="rounded-md" />
      <div>
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
