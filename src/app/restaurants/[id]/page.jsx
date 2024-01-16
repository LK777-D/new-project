import fetchRestaurants from "../../../fetches/restaurants/fetchRests";
import Image from "next/image";
import testImg from "../../../assets/restaurant.jpg";
import Link from "next/link";
const SingleRestaurant = async ({ params }) => {
  const restaurantsData = await fetchRestaurants();
  const restaurants = restaurantsData.restaurants;
  const id = params.id;
  const selectedRestaurant = restaurants.filter(
    (restaurant) => restaurant.id === id
  );

  return (
    <main>
      <div>
        {selectedRestaurant.map((restaurant) => (
          <div
            key={restaurant.id}
            href={`/restaurants/${id}`}
            className="w-[90%] max-w-[30rem]  "
          >
            <Image alt="rest" src={testImg} className="rounded-md" />
            <div>
              <div className="flex justify-around">
                <span>{restaurant.name}</span>
                <span>{restaurant.city}</span>
              </div>
              <div className="flex justify-around">
                <span>{restaurant.addressLine1}</span>
                <span>{restaurant.addressLine2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SingleRestaurant;
