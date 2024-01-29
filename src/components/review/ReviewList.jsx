const ReviewList = ({ reviews }) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };
  return (
    <section className="fontlemon">
      <div className="flex flex-col gap-3 ">
        {reviews.length > 0 &&
          reviews.map((review, i) => (
            <div className="bg-white p-5 border max-w-[40rem]" key={i}>
              <div>
                <h1 className="text-md">{review.userEmail}</h1>
                <span className="text-lg text-gray-700">
                  {formatDate(review.createdAt)}
                </span>
              </div>
              <div className="w-[90%] mx-auto h-[1px] bg-gray-500/40 my-3 "></div>
              <span className="text-[0.8rem] text-gray-500 ">
                {review.content}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ReviewList;
