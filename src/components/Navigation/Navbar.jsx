"use client";
import { useAuthCtx } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/user.png";
import AuthForm from "../authentication/AuthForm";
const Navbar = () => {
  const { authIsOpen, setAuthIsopen } = useAuthCtx();
  return (
    <>
      <nav className="flex  items-center justify-around  h-[8vh] lg:h-[10vh] ">
        <span className="text-xl font-bold">LOGO</span>
        <ul className="flex gap-2 font-semibold ">
          <li>
            <Link href={"/hotels"}>Hotels</Link>
          </li>
          <li>
            {" "}
            <Link href={"/restaurants"}>Restaurants</Link>
          </li>
        </ul>
        <button onClick={() => setAuthIsopen((prev) => !prev)}>
          <Image alt="user" src={img} width={40} height={40} />
        </button>
      </nav>
      <div>{authIsOpen && <AuthForm />}</div>
    </>
  );
};

export default Navbar;