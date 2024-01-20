import PlaceTypeCard from "../../components/placeType/PlaceTypeCard";
const PlaceTypeBox = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  img1,
  img2,
  img3,
  img4,
  img5,
}) => {
  return (
    <section className="flex flex-col justify-center items-center gap-3 ">
      <h1 className="text-2xl">Browse By Foodd</h1>
      <div className="flex flex-row items-center md:justify-center   gap-3 px-2 max-w-[37rem] overflow-y-scroll md:overflow-visible  ">
        <PlaceTypeCard text={text1} img={img1} />
        <PlaceTypeCard text={text2} img={img2} />
        <PlaceTypeCard text={text3} img={img3} />
        <PlaceTypeCard text={text4} img={img4} />
        <PlaceTypeCard text={text5} img={img5} />
      </div>
    </section>
  );
};

export default PlaceTypeBox;
