import { fetchRestaurantById } from "../../../fetches/restaurants/fetchRests";
import Image from "next/image";
import testImg from "../../../assets/restaurant.jpg";
import Link from "next/link";
const SingleRestaurant = async ({ params }) => {
  const id = params.id;
  const selectedRestaurant = await fetchRestaurantById(id);
  const images = selectedRestaurant.images;
  const imageValues = selectedRestaurant.imageValues;
  return (
    <main>
      <div>
        <div className="w-[90%] max-w-[30rem]  ">
          <div className="flex flex-col md:flex-row gap-3">
            <Image
              src={imageValues[0]}
              alt={`image-$`}
              width={120}
              height={80}
            />
          </div>

          <div>
            <div className="flex justify-around">
              <span>{selectedRestaurant.name}</span>
              <span>{selectedRestaurant.city}</span>
            </div>
            <div className="flex justify-around">
              <span>{selectedRestaurant.addressLine1}</span>
              <span>{selectedRestaurant.addressLine2}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleRestaurant;
