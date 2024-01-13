"use client";
import { useAuthCtx } from "../../context/AuthContext";
import Modal from "react-modal";

const ModalPopUp = ({
  logout,
  mainText,
  heading,
  btn1,
  btn2,
  onClick1,
  onClick2,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(41, 35, 35, 0.5)", // Set your desired background color with opacity
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      paddingRight: "15%",
      paddingLeft: "15%",
      backgroundColor: "white",
      zIndex: 1000,
    },
  };
  const { modalIsopen, setModalIsopen, openModal, closeModal } = useAuthCtx();
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsopen}
      onRequestClose={closeModal}
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1>{heading}</h1>
        <span className="font-extralight text-gray-500 text-[0.7rem]">
          {mainText}
        </span>
        <div className="flex items-center justify-center gap-5">
          <button
            className="border border-gray-300 transition hover:border-gray-800 duration-150 ease-linear px-8 py-1 rounded-lg "
            onClick={onClick1}
          >
            {btn1}
          </button>
          <button
            className="px-8 py-1 bg-black transition hover:bg-gray-900 duration-150  ease-linear text-white rounded-lg"
            onClick={onClick2}
          >
            {btn2}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPopUp;
