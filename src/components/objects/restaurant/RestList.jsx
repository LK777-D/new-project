import Link from "next/link";
import fetchRestaurants from "../../../fetches/restaurants/fetchRests";
import PlaceCard from "../../objects/PlaceCard";
const RestList = async ({ page }) => {
  const restaurantsData = await fetchRestaurants(page);
  const restaurants = restaurantsData.restaurants;
  const totalRestaurants = restaurantsData.itemCount;
  const totalPages = Math.ceil(totalRestaurants / 15);
  const prevPage = page > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const pageNumbers = Array.from({ length: 3 }, (_, i) => page + i).filter(
    (num) => num >= 0 && num < totalPages
  );

  const logrest = () => {
    console.log(restaurants);
  };
  return (
    <section>
      <div className="flex flex-col gap-2 my-5 ">
        <h1 className="text-xl">Top Restaurants in Georgia</h1>
        <span>{restaurants.length} results </span>
      </div>

      <div className="flex flex-col items-center gap-3 md:items-start ">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <PlaceCard
              id={restaurant.id}
              key={restaurant.id}
              name={restaurant.name}
              city={restaurant.city}
              addressLine1={restaurant.addressLine1}
              addressLine2={restaurant.addressLine2}
              images={restaurant.images}
              imageValues={restaurant.imageValues}
              description={restaurant.description}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center py-2">
        {page === 0 ? (
          <div className="text-gray-500">Previous</div>
        ) : (
          <Link className="underline" href={`?page=${prevPage}`}>
            Previouss
          </Link>
        )}
        {pageNumbers.map((num) => (
          <Link key={num} href={`?page=${num}`}>
            <span>{num + 1}</span>
          </Link>
        ))}
        {page === totalPages - 1 ? (
          <div className="text-gray-500">Next</div>
        ) : (
          <Link className="underline" href={`?page=${nextPage}`}>
            Next
          </Link>
        )}
      </div>
    </section>
  );
};

export default RestList;
