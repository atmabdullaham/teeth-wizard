import Rating from "react-rating";
import { useLoaderData } from "react-router";
import Modal from "../modal/Modal";

const Details = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 border border-gray-200">
      <img
        src={singleData.image}
        alt={singleData.treatment}
        className="w-full h-52 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {singleData.treatment}
        </h2>
        <p className="text-gray-600 text-center mt-2">
          {singleData.description}
        </p>

        <div className="mt-4 space-y-3">
          <p className="text-lg">
            <strong className="text-gray-700">Doctor:</strong>{" "}
            {singleData.doctor}
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Cost:</strong> {singleData.cost}{" "}
            Taka
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Duration:</strong>{" "}
            {singleData.duration}
          </p>
          <p className="text-lg">
            <strong className="text-gray-700">Availability:</strong>{" "}
            {singleData.availability}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div
            className="flex items-center justify-center
        gap-2 mt-4"
          >
            <Rating
              initialRating={singleData.rating}
              readonly
              emptySymbol={<span className="text-gray-300 text-2xl">☆</span>}
              fullSymbol={<span className="text-yellow-500 text-2xl">★</span>}
            />
            <span className="text-gray-700 text-lg">({singleData.rating})</span>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary"
            >
              Book Appointment
            </button>
          </div>
        </div>
        <Modal></Modal>
      </div>
    </div>
  );
};

export default Details;
