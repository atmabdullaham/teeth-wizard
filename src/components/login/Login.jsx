import { useContext } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authContext } from "../authProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(contextValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((res) => {
        navigate(location.state.from);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const googleLoginHandler = () => {
    handleGoogleLogin().then((res) => {
      navigate(location.state.from);
    });
  };
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome Back!
        </h2>

        {/* Email & Password Login Form */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Register here
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
          onClick={googleLoginHandler}
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

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
