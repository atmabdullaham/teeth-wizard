import Rating from "react-rating";
const Feedback = ({ feedback }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className="w-16 h-16 mx-auto rounded-full">
        <img
          src={feedback.image}
          alt="Customer"
          className="rounded-full object-cover w-full h-full"
        />
      </figure>
      <div className="card-body text-center">
        <p className="text-gray-700">{feedback.feedback}</p>

        {/* Dynamic Rating using react-rating */}
        <div className="mt-2 space-x-2">
          <Rating
            initialRating={feedback.rating}
            readonly
            emptySymbol={<span className="text-gray-400 text-xl">☆</span>}
            fullSymbol={<span className="text-yellow-500 text-xl">⭐</span>}
          />
          <span className="text-gray-700 font-medium">
            {feedback.rating} / 5
          </span>
        </div>

        {/* Display Date */}
        <p className="text-sm text-gray-500 mt-2">
          Given on: {new Date(feedback.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Feedback;
