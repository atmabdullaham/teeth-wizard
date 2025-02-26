import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { div } from "framer-motion/client";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const { pathname } = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex w-90 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={{ from: pathname }} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
