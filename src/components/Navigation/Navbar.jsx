"use client";
import { useAuthCtx } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import userLogo from "../../assets/user-setting.svg";
import AuthForm from "../authentication/AuthForm";
import ModalPopUp from "../modal/Modal";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { logout, authIsOpen, setAuthIsopen, user, setModalIsopen } =
    useAuthCtx();
  const [userMenuIsopen, setUserMenuIsOpen] = useState(false);
  console.log(user);
  return (
    <>
      <ModalPopUp
        btn1="Cancel"
        btn2="Logout"
        heading="Confirm Log Out"
        mainText={"Are You Sure You Want To Log Out?"}
        onClick2={logout}
        onClick1={() => setModalIsopen(false)}
      />
      <nav className="flex relative  fontabril items-center justify-around  h-[8vh] lg:h-[10vh] ">
        <Link href={"/"} className="text-xl font-bold">
          LOGO
        </Link>
        <ul className="flex gap-2 font-semibold ">
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            <Link href={"/hotels"}>Hotels</Link>
          </li>
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            {" "}
            <Link href={"/restaurants?page=0"}>Restaurants</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <span className="">
            {user && (
              <button
                className="mt-2"
                onClick={() => setUserMenuIsOpen((prev) => !prev)}
              >
                <Image alt="user" width={40} height={40} src={userLogo} />
              </button>
            )}
            {userMenuIsopen && (
              <span className="absolute top-[8.5vh] translate-x-[-61%] lg:top-[10.5vh]  z-50">
                <UserMenu user={user} />{" "}
              </span>
            )}
          </span>
          {!user ? (
            <button
              onClick={() => setAuthIsopen((prev) => !prev)}
              className="px-3 py-1 rounded-xl bg-black text-white transition hover:bg-white hover:border hover:border-black hover:text-black duration-150 ease-linear "
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => setModalIsopen(true)}
              className="px-3 py-1 rounded-xl bg-black text-white transition hover:bg-white hover:border hover:border-black hover:text-black duration-150 ease-linear "
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <div>{authIsOpen && <AuthForm />}</div>
    </>
  );
};

export default Navbar;
