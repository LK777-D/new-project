import location from "../../assets/location.svg";
import website from "../../assets/website.svg";
import phone from "../../assets/phone.svg";
import Image from "next/image";

const LocationBox = ({ addressLine1, addressLine2 }) => {
  return (
    <div className="bg-white fontlemon flex flex-col gap-[1rem]  my-5 px-[2rem] py-[1rem]   ">
      <h1 className="text-xl font-extrabold">Location and contact</h1>
      <div className="flex gap-1 ">
        <Image alt="img" src={location} width={25} height={25} />
        <span>{addressLine1}</span>
      </div>
      <div className="flex gap-1 ">
        <Image alt="img" src={location} width={25} height={25} />
        <span>{addressLine2}</span>
      </div>
      <div className="flex gap-1 ">
        <Image alt="img" src={website} width={25} height={25} />
        <span>Website</span>
      </div>
      <div className="flex gap-1 ">
        <Image alt="img" src={phone} width={25} height={25} />
        <span>Call -</span>
      </div>
    </div>
  );
};

export default LocationBox;
