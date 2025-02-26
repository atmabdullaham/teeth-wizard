import { NavLink } from "react-router";
import "./Navbar.css";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const { handleLogout, user } = useContext(authContext);
  // console.log(user);
  return (
    <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center px-3">
      <div>
        <h1 className="text-xl font-extrabold">TEETH WIZARD</h1>
      </div>
      <div className="space-x-3">
        <NavLink
          to="/"
          // className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Home
        </NavLink>
        <NavLink to="/all-treatment">All Treatment</NavLink>
        <NavLink to="/my-appointment">My Appointment</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        {user?.email ? (
          <div className="flex  justify-center items-center gap-0.5">
            <img
              className="w-10 h-10 rounded-full border-2"
              src={`${user.photoURL}`}
              alt=""
            />
            <button
              onClick={handleLogout}
              className="w-full  bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
