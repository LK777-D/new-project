import rating from "../../assets/star (1).svg";
import Image from "next/image";
const InfoBox = ({ description }) => {
  return (
    <div className="bg-white fontlemon  my-5 px-[2rem] py-3  ">
      <h1 className="text-xl font-extrabold">Ratings and Description</h1>
      <div className="py-[1rem] font-bold">
        <div className="flex mt-1">
          <span className="mr-1">5.0</span>
          <Image alt="star" src={rating} width={20} height={20} />
          <Image alt="star" src={rating} width={20} height={20} />
          <Image alt="star" src={rating} width={20} height={20} />
          <Image alt="star" src={rating} width={20} height={20} />
          <Image alt="star" src={rating} width={20} height={20} />
          <span className="ml-1">0 reviews</span>
        </div>
      </div>
      <div className="h-[2px] w-[95%] mx-auto bg-gray-200 my-[1rem] mr-[2rem]  "></div>
      <p>{description}</p>
      <button className="w-full my-4 transition hover:bg-black/70 duration-150 ease-in  text-white fontlemon rounded-sm p-1 bg-black">
        Write a Review
      </button>
    </div>
  );
};
export default InfoBox;
