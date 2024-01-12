"use client";
import { useAuthCtx } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/user.png";
import AuthForm from "../authentication/AuthForm";
const Navbar = () => {
  const { authIsOpen, setAuthIsopen, token } = useAuthCtx();
  return (
    <>
      <nav className="flex  items-center justify-around  h-[8vh] lg:h-[10vh] ">
        <span className="text-xl font-bold">LOGO</span>
        <ul className="flex gap-2 font-semibold ">
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            <Link href={"/hotels"}>Hotels</Link>
          </li>
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            {" "}
            <Link href={"/restaurants"}>Restaurants</Link>
          </li>
        </ul>
        <button onClick={() => setAuthIsopen((prev) => !prev)}>
          {!token ? (
            <Image alt="user" src={img} width={40} height={40} />
          ) : (
            <button>Logout</button>
          )}
          <span>{token && token.slice(0, 5)}</span>
        </button>
      </nav>
      <div>{authIsOpen && <AuthForm />}</div>
    </>
  );
};

export default Navbar;
