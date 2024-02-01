import Link from "next/link";
import { useAuthCtx } from "../../context/AuthContext";
const UserMenu = ({ user }) => {
  return (
    <div className=" bg-white fontlemon text-center z-[1000000000000] bg-red p-3 flex flex-col items-center  ">
      <span>{user && user.userEmail}</span>
      <Link
        className=" w-[100%] rounded-sm px-2 transition hover:text-white hover:bg-gray-400 duration-150 ease-linear"
        href={"/addrestaurant"}
      >
        Create Restaurant
      </Link>
      {/* <Link
        className="w-[100%] rounded-sm px-2 transition hover:text-white hover:bg-gray-400 duration-150 ease-linear"
        href={"/addrestaurant"}
      >
        Create Hotel
      </Link> */}
    </div>
  );
};

export default UserMenu;
