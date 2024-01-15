import fetchRestaurants from "../../../fetches/restaurants/fetchRests";
const RestList = async () => {
  const restaurantsData = await fetchRestaurants();
  const restaurants = restaurantsData.restaurants;

  return (
    <main>
      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.key}>
            <span>{restaurant.name}</span>
            <span>{restaurant.city}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RestList;
