"use client";
import { useAuthCtx } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../../assets/user.png";
import AuthForm from "../authentication/AuthForm";
import ModalPopUp from "../modal/Modal";

const Navbar = () => {
  const {
    logout,
    authIsOpen,
    setAuthIsopen,
    token,
    user,
    openModal,
    setModalIsopen,
  } = useAuthCtx();

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
      <nav className="flex  items-center justify-around  h-[8vh] lg:h-[10vh] ">
        <span className="text-xl font-bold">LOGOO</span>
        <ul className="flex gap-2 font-semibold ">
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            <Link href={"/hotels"}>Hotels</Link>
          </li>
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            {" "}
            <Link href={"/restaurants"}>Restaurants</Link>
          </li>
          <li className="transition hover:text-gray-500 duration-150 ease-linear">
            {" "}
            <Link href={"/addrestaurant"}>add</Link>
          </li>
        </ul>
        <div>
          {!token ? (
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
          <span>{user && user?.userEmail}</span>
        </div>
      </nav>
      <div>{authIsOpen && <AuthForm />}</div>
    </>
  );
};

export default Navbar;
