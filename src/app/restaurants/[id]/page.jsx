import { fetchRestaurantById } from "../../../fetches/restaurants/fetchRests";
import DetailsBox from "../../../components/objects/DetailsBox";
import InfoBox from "../../../components/objects/InfoBox";
import LocationBox from "../../../components/objects/LocationBox";
import LargePlaceCard from "../../../components/objects/LargePlaceCard";
import ReviewList from "../../../components/review/ReviewList";
import { fetchReviews } from "../../../fetches/restaurants/fetchRests";
import SingleObject from "../../../components/objects/SingleObject";
const SingleRestaurant = async ({ params }) => {
  const id = params.id;
  const selectedRestaurant = await fetchRestaurantById(id);
  const restId = selectedRestaurant.id;
  const imageValues = selectedRestaurant.imageValues;
  const score = selectedRestaurant.score;
  const creatorId = selectedRestaurant.createdBy;

  const reviews = await fetchReviews(restId);
  console.log(selectedRestaurant);
  return (
    <main>
      <SingleObject selectedRestaurant={selectedRestaurant} reviews={reviews} />
    </main>
  );
};

export default SingleRestaurant;
