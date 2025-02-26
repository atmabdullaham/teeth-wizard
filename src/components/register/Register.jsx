import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";
import { authContext } from "../authProvider/AuthProvider";

const Register = () => {
  const { handleRegister, handleGoogleLogin, manageProfile } =
    useContext(authContext);
  const [error, setError] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.cPassword.value;
    console.log(name, photoUrl, email, password, cPassword);
    if (password.length < 6) {
      setError("password must be 6 character");
    }
    if (password !== cPassword) {
      setError("password doesn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("password must contain at least one lower letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("password must contain at least one Upper case letter");
      return;
    }
    handleRegister(email, password).then((res) => {
      manageProfile(name, photoUrl);
    });
  };
  // const { handleGoogleLogin } = useContext(authContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          {/* Photo URL Input */}
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo URL (optional)"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          {/* confirm Password Input */}
          <input
            type="password"
            name="cPassword"
            placeholder="Type Password Again"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Navigate to Login */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500 hover:underline">
            Login here
          </NavLink>
        </p>
        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="px-4 text-gray-500">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google & GitHub Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-2xl mr-2" />
          Continue with Google
        </button>

        <button
          // onClick={handleGithubLogin}
          className="w-full flex items-center justify-center border py-2 rounded-md mt-3 hover:bg-gray-100 transition"
        >
          <FaGithub className="text-2xl mr-2" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Register;
