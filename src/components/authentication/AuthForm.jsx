"use client";
import { useEffect } from "react";
import { useAuthCtx } from "../../context/AuthContext";

const AuthForm = () => {
  const {
    reg,
    setAuthIsopen,
    register,
    setReg,
    setUsername,
    setEmail,
    setPassword,
    login,
    authIsOpen,
  } = useAuthCtx();
  useEffect(() => {
    if (authIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [authIsOpen]);
  return (
    <div
      onClick={() => setAuthIsopen(false)}
      className="flex bg-gray-400/30 fixed  top-[8vh] lg:top-[10vh] z-20 items-center justify-center  w-full mx-auto h-[92vh] lg:h-[90vh]
     shadow-lg overflow-hidden"
    >
      <form
        onSubmit={reg ? register : login}
        onClick={(e) => e.stopPropagation()}
        className=" text-white  mx-auto flex flex-col items-center w-[80%rem] rounded-xl bg-gray-800 bg-opacity-80 px-16 py-4 shadow-lg  max-sm:px-8"
      >
        <div className=" my-5">
          <span>Please enter login details</span>
        </div>
        <div>
          {reg && (
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
              type="email"
              name="name"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 text-lg">
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
              type="Password"
              name="name"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            {
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl  transition-colors duration-300 hover:bg-yellow-600"
              >
                {reg ? "Register" : "Login"}
              </button>
            }
          </div>
          <p className="w-full text-center mt-3">
            {reg ? "Already Have An Account?" : "Dont Have An Account?"}
            <button
              type="button"
              onClick={() => setReg(!reg)}
              className="text-yellow-400 underline"
            >
              {!reg ? "Register" : "Login"}
            </button>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};
export default AuthForm;
