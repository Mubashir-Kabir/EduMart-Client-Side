import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //show loading until the user state comes from authState to prevent going to the log in page
  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      </div>
    );
  }

  //after getting the user state , based on user log in or not page redirect to the page user want to visit or to the log in page
  if (user && user.uid) {
    return children;
  } else {
    return (
      <Navigate to="/log-in" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
