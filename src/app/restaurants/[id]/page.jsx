import { fetchRestaurantById } from "../../../fetches/restaurants/fetchRests";
import Image from "next/image";
import testImg from "../../../assets/restaurant.jpg";
import Link from "next/link";
import DetailsBox from "../../../components/objects/DetailsBox";
import InfoBox from "../../../components/objects/InfoBox";
import LocationBox from "../../../components/objects/LocationBox";
import LargePlaceCard from "../../../components/objects/LargePlaceCard";
const SingleRestaurant = async ({ params }) => {
  const id = params.id;
  const selectedRestaurant = await fetchRestaurantById(id);
  const restId = selectedRestaurant.id;
  const images = selectedRestaurant.images;
  const imageValues = selectedRestaurant.imageValues;
  const score = selectedRestaurant.score;
  console.log(selectedRestaurant);
  return (
    <main className=" bg-gray-200 border border-t">
      {selectedRestaurant.score}

      <LargePlaceCard
        selectedRestaurant={selectedRestaurant}
        name={selectedRestaurant.name}
        city={selectedRestaurant.city}
        addressLine1={selectedRestaurant.addressLine1}
        addressLine2={selectedRestaurant.addressLine2}
        imageValues={imageValues}
        restId={restId}
        score={score}
      />
      <div className="md:grid md:grid-cols-3 md:gap-5  md:px-[1.5rem] ">
        <InfoBox description={selectedRestaurant.description} />
        <DetailsBox />
        <LocationBox
          addressLine1={selectedRestaurant.addressLine1}
          addressLine2={selectedRestaurant.addressLine2}
        />
      </div>
    </main>
  );
};

export default SingleRestaurant;
