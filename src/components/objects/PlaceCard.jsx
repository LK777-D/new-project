import Image from "next/image";
import restImg from "../../assets/restaurant.jpg";
const PlaceCard = ({ name, city, addressLine1, addressLine2 }) => {
  return (
    <div className="w-[90%] max-w-[30rem]  ">
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
    </div>
  );
};

export default PlaceCard;
