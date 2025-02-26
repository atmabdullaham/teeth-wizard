import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const Modal = ({ treatment }) => {
  const { user } = useContext(authContext);
  console.log(treatment);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.fName.value;
    const lname = e.target.lName.value;
    const email = e.target.email.value;
    const treatmentIn = treatment;
    const info = {
      fname,
      lname,
      email,
      treatmentIn,
    };
    let saveData = [];
    const localData = localStorage.getItem("appointments");
    if (localData) {
      saveData = JSON.parse(localData);
    }
    saveData.push(info);
    localStorage.setItem("appointments", JSON.stringify(saveData));
  };
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-2xl shadow-lg bg-white p-6 relative">
          {/* Modal Header */}
          <h3 className="font-bold text-2xl text-center text-gray-800">
            🏥 Book Your Appointment
          </h3>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            method="dialog"
            className="space-y-4 mt-4"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="input input-bordered w-full rounded-lg"
                  required
                  name="fName"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="input input-bordered w-full rounded-lg"
                  required
                  name="lName"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full rounded-lg"
                required
                name="email"
                value={user?.email}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+880 123 456 7890"
                className="input input-bordered w-full rounded-lg"
                required
                name="phone"
              />
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Appointment Date
              </label>
              <input
                type="date"
                className="input input-bordered w-full rounded-lg"
                required
                name="data"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <textarea
                placeholder="Enter your address..."
                className="textarea textarea-bordered w-full rounded-lg"
                required
                name="address"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-primary w-full text-lg py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition-all"
              >
                ✨ Make Appointment
              </button>
            </div>
            <button
              type="button"
              className="btn btn-primary w-full text-lg py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 transition-all"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
