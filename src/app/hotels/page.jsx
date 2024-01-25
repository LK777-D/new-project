"use client";
import { useState } from "react";
import Image from "next/image";

const Hotels = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };
  console.log(image);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit Image</button>
      </form>

      {image && (
        <div>
          <h2>Uploaded Image:</h2>
          <Image
            width={100}
            height={100}
            src={image}
            alt="Uploaded"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </main>
  );
};

export default Hotels;
