"use client";
import { useAddRestCtx } from "../../../context/addRestContext";
import { useState } from "react";
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
    firstFormSubmitted,
    setRestTypes,
    restaurantTypes,
    restTypes,
  } = useAddRestCtx();
  const handleCheckboxChange = (type) => {
    if (restTypes.includes(type)) {
      setRestTypes(restTypes.filter((t) => t !== type));
    } else {
      setRestTypes([...restTypes, type]);
    }
    console.log(restTypes);
  };
  return (
    <section className="flex flex-col items-center gap-5">
      <form
        onSubmit={addRestaurantInfo}
        className="p-1 w-[95%] max-w-[25rem] mx-auto"
      >
        <div className="mb-5">
          <label
            htmlFor="address1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Addressline 1
          </label>
          <input
            type="text"
            id="address1"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Addressline 1"
            onChange={(e) => setAddressLine1(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="address2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Addressline 2
          </label>
          <input
            type="text"
            id="address2"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Addressline 2"
            onChange={(e) => setAddressLine2(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Restaurant Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Restaurant Types
          </label>
          <div className="flex flex-wrap gap-2">
            {restaurantTypes.map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={restTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                />
                <span className="ml-2 text-sm text-gray-900 dark:text-white">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="textarea"
            id="description"
            className="shadow-sm h-[7rem]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            rows="20"
            cols="40"
            required
          />
        </div>

        <button
          type="submit"
          disabled={firstFormSubmitted}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
    ${firstFormSubmitted ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Create Restaurant
        </button>
      </form>
      {firstFormSubmitted && (
        <form
          onSubmit={uploadRestImages}
          className="py-7 flex flex-col  justify-center gap-2 text-center "
        >
          <input
            className="fontabril fontlight"
            type="file"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setImages(files);
            }}
            multiple
          />
          <button
            type="submit"
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
    `}
          >
            Add Restaurant Images
          </button>
        </form>
      )}
    </section>
  );
};

export default AddRestForm;
