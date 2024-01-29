const ReviewForm = ({
  restaurantId,
  reviewType,
  setReviewType,
  setReview,
  addReview,
}) => {
  const submitReview = (e) => {
    e.preventDefault();
    addReview(restaurantId);
  };
  return (
    <div className="w-[90%] mx-auto mt-7 flex flex-col items-center max-w-[37rem] ">
      <div>
        <h1 className="text-2xl">Choose Review Type (Global or Local)</h1>
      </div>

      <div className="flex gap-2 text-1xl my-5">
        <button
          className={reviewType === "GLOBAL" ? "underline" : ""}
          onClick={() => setReviewType("GLOBAL")}
        >
          GLobal
        </button>
        <button
          className={reviewType === "LOCAL" ? "underline" : ""}
          onClick={() => setReviewType("LOCAL")}
        >
          Local
        </button>
      </div>
      <form className="" onSubmit={submitReview}>
        <label>
          Write your review ({reviewType})
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your review here..."
            className="border p-4 w-full mt-3 "
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className=" px-2 py-1 my-4 transition hover:bg-black/70 duration-150 ease-in  text-white fontlemon rounded-sm p-1 bg-black"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
