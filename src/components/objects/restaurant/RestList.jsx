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
  return (
    <main>
      <div className="flex flex-col items-center gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:p-3">
        {restaurants.map((restaurant) => (
          <PlaceCard
            id={restaurant.id}
            key={restaurant.id}
            name={restaurant.name}
            city={restaurant.city}
            addressLine1={restaurant.addressLine1}
            addressLine2={restaurant.addressLine2}
            images={restaurant.images}
            imageValues={restaurant.imageValues}
          />
        ))}
      </div>
      <div className="flex gap-2 justify-center py-2">
        {page === 0 ? (
          <div className="text-gray-500">previous</div>
        ) : (
          <Link href={`?page=${prevPage}`}>Previouss</Link>
        )}
        {pageNumbers.map((num) => (
          <Link key={num} href={`?page=${num}`}>
            <span>{num + 1}</span>
          </Link>
        ))}
        {page === totalPages - 1 ? (
          <div className="text-gray-500">next</div>
        ) : (
          <Link href={`?page=${nextPage}`}>nextpage</Link>
        )}
      </div>
    </main>
  );
};

export default RestList;
