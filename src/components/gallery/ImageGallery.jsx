import Image from "next/image";

const ImageGallery = ({
  setImageGalleryIsOpen,
  selectedImageIndex,
  imageValues,
}) => {
  return (
    <div
      onClick={() => setImageGalleryIsOpen(false)}
      className="fixed top-0 h-[100vh] bg-gray-500/70 flex items-center justify-center w-full"
    >
      <div className="px-1">
        <Image
          alt="objImage"
          src={imageValues[selectedImageIndex]}
          width={1000}
          height={1000}
          className="max-h-[15rem] shadow-lg shadow-black rounded-sm object-cover md:max-h-[28rem]"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
