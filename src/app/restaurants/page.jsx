import RestList from "../../components/objects/restaurant/RestList";
import fetchRestaurants from "../../fetches/restaurants/fetchRests";
const Restaurants = ({ searchParams }) => {
  let page = parseInt(searchParams.page, 10);

  console.log(searchParams.page);

  return (
    <main>
      <RestList page={page} />
    </main>
  );
};

export default Restaurants;
