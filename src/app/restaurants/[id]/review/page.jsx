import Review from "../../../../components/review/review";
import { fetchRestaurantById } from "../../../../fetches/restaurants/fetchRests";
const reviewRestaurant = async ({ params }) => {
  const restaurantId = params.id;
  const selectedRestaurant = await fetchRestaurantById(restaurantId);

  return (
    <main>
      <Review selectedRestaurant={selectedRestaurant} />
    </main>
  );
};

export default reviewRestaurant;
