"use client";
import { FaStar } from "react-icons/fa";
import { useAddRestCtx } from "../../context/addRestContext";
const Rate = ({ restId }) => {
  const {
    setRating,
    setCurrentValue,
    setHoverValue,
    rating,
    currentValue,
    hoverValue,
    setRestaurantId,
    setSubmitRating,
    submitRating,
    rateRestaurant,
  } = useAddRestCtx();
  const stars = Array(5).fill(0);

  const handleStarClick = (val) => {
    setCurrentValue(val + ".00");
    setRestaurantId(restId);
    setSubmitRating(true);
  };
  console.log(currentValue);
  console.log(typeof currentValue);
  console.log(restId);
  const handleMouseOverStar = (val) => {
    setHoverValue(val);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  return (
    <div className="flex gap-1">
      {stars.map((_, index) => (
        <FaStar
          width={30}
          key={index}
          onClick={() => handleStarClick(index + 1)}
          onMouseOver={() => handleMouseOverStar(parseFloat(index + 1))}
          color={(hoverValue || currentValue) > index ? "orange" : "gray"}
          onMouseLeave={handleMouseLeave}
        />
      ))}
      {submitRating && (
        <button onClick={rateRestaurant}>submit ratinggg</button>
      )}
    </div>
  );
};

export default Rate;
