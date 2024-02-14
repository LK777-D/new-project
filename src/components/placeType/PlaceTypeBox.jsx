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
  to1,
  to2,
  to3,
  to4,
  to5,
}) => {
  return (
    <section className="flex fontabril flex-col justify-center items-center gap-3 ">
      <h1 className="text-2xl">Browse By Food</h1>
      <div className="flex flex-row items-center md:justify-center   gap-3 px-2 max-w-[37rem] overflow-y-scroll md:overflow-visible  ">
        <PlaceTypeCard text={text1} img={img1} to={to1} />
        <PlaceTypeCard text={text2} img={img2} to={to2} />
        <PlaceTypeCard text={text3} img={img3} to={to3} />
        <PlaceTypeCard text={text4} img={img4} to={to4} />
        <PlaceTypeCard text={text5} img={img5} to={to5} />
      </div>
    </section>
  );
};

export default PlaceTypeBox;
