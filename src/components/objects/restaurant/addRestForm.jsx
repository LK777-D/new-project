"use client";
import { useAddRestCtx } from "../../../context/addRestContext";
const AddRestForm = () => {
  const {
    setAddressLine1,
    setAddressLine2,
    setName,
    setDescription,
    setCity,
    addRestaurantInfo,
    setImages,
    uploadRestImages,
  } = useAddRestCtx();
  return (
    <>
      <form className="flex flex-col items-start" onSubmit={addRestaurantInfo}>
        <input
          type="text"
          placeholder="adreesline1"
          onChange={(e) => setAddressLine1(e.target.value)}
        />
        <input
          type="text"
          placeholder="adressline2"
          onChange={(e) => setAddressLine2(e.target.value)}
        />
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="restname"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">add info</button>
      </form>

      <form onSubmit={uploadRestImages}>
        <input
          type="file"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setImages(files);
          }}
          multiple
        />
        <button type="submit">submit images</button>
      </form>
    </>
  );
};

export default AddRestForm;
