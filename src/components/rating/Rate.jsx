"use client";
import { FaStar } from "react-icons/fa";
import { useAddRestCtx } from "../../context/addRestContext";
import { Rate as Rating } from "antd";
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

  const handleRate = (value) => {
    setCurrentValue(value.toString());
    setSubmitRating(true);
    setRestaurantId(restId);
  };
  return (
    <div className="flex gap-1">
      <Rating
        allowHalf
        allowClear={false}
        value={currentValue}
        tooltips={["Bad", "Normal", "Good", "Very Good", "Excellent"]}
        onChange={(value) => handleRate(value)}
      />
      {submitRating && <button onClick={rateRestaurant}>submit rating</button>}
    </div>
  );
};

export default Rate;
