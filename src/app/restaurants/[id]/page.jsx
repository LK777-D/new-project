import { fetchRestaurantById } from "../../../fetches/restaurants/fetchRests";
import DetailsBox from "../../../components/objects/DetailsBox";
import InfoBox from "../../../components/objects/InfoBox";
import LocationBox from "../../../components/objects/LocationBox";
import LargePlaceCard from "../../../components/objects/LargePlaceCard";
import ReviewList from "../../../components/review/ReviewList";
import { fetchReviews } from "../../../fetches/restaurants/fetchRests";
import Review from "../../../components/review/review";
const SingleRestaurant = async ({ params }) => {
  const id = params.id;
  const selectedRestaurant = await fetchRestaurantById(id);
  const restId = selectedRestaurant.id;
  const imageValues = selectedRestaurant.imageValues;
  const score = selectedRestaurant.score;
  const creatorId = selectedRestaurant.createdBy;

  const reviews = await fetchReviews(restId);
  return (
    <main className=" bg-gray-200 border border-t">
      <LargePlaceCard
        selectedRestaurant={selectedRestaurant}
        name={selectedRestaurant.name}
        city={selectedRestaurant.city}
        addressLine1={selectedRestaurant.addressLine1}
        addressLine2={selectedRestaurant.addressLine2}
        imageValues={imageValues}
        restId={restId}
        score={score}
        creatorId={creatorId}
      />
      <div className="md:grid md:grid-cols-3 md:gap-5  md:px-[1.5rem] ">
        <InfoBox restId={restId} description={selectedRestaurant.description} />
        <DetailsBox />
        <LocationBox
          addressLine1={selectedRestaurant.addressLine1}
          addressLine2={selectedRestaurant.addressLine2}
        />
      </div>
      <div className="md:px-[1.5rem]">
        <ReviewList reviews={reviews} />
      </div>
    </main>
  );
};

export default SingleRestaurant;
