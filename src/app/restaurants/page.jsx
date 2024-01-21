import RestList from "../../components/objects/restaurant/RestList";

import PlaceTypeCard from "../../components/placeType/PlaceTypeCard";
import PlaceTypeBox from "../../components/placeType/PlaceTypeBox";
// type images
import georgian from "../../assets/georgian.webp";
import asian from "../../assets/asian.jpg";
import italian from "../../assets/italian.jpeg";
import pub from "../../assets/pub.jpg";
import cafe from "../../assets/cafe.jpg";
const Restaurants = ({ searchParams }) => {
  let page = parseInt(searchParams.page, 10);

  console.log(searchParams.page);

  return (
    <main className="bg-gray-200 py-10">
      <div
        className="flex flex-col gap-[5rem] items-center
      "
      >
        <div>
          <PlaceTypeBox
            text1="Georgian"
            img1={georgian}
            text2="Pub"
            img2={pub}
            text3="Italian"
            img3={italian}
            text4="Cafe"
            img4={cafe}
            text5={"Asian"}
            img5={asian}
          />
        </div>
        <RestList page={page} />
      </div>
    </main>
  );
};

export default Restaurants;
