import Image from "next/image";
const DetailsBox = () => {
  return (
    <div className="bg-white fontlemon  my-5 pl-[2rem] py-[1rem]   ">
      <h1 className="text-xl font-extrabold">Details</h1>
      <div className="h-[2px] w-[95%] mx-auto bg-gray-200 my-[1rem] mr-[2rem]  "></div>
      <div className="flex flex-col gap-[1rem]">
        <div className="flex flex-col gap-[1rem]">
          <span className="font-bold">Price Range</span>
          <span>-$ -$</span>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <span className="font-bold">Tags</span>
          <span>Georgian, Cafe, Restaurant, Bar</span>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <span className="font-bold">Additional Information</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
