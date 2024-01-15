import fetchRestaurants from "../../../fetches/restaurants/fetchRests";
const RestList = async () => {
  const restaurantsData = await fetchRestaurants();
  const restaurants = restaurantsData.restaurants;

  return (
    <main>
      <div className="grid grid-cols-3 gap-3 ">
        {restaurants.map((restaurant) => (
          <div key={restaurant.key} className="flex flex-col">
            <span>{restaurant.name}</span>
            <span>{restaurant.city}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RestList;
