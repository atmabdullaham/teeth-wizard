import { NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () => {
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
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
