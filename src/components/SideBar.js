import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { FiLogIn, FiBox } from "react-icons/fi";

const SideBar = ({ courses }) => {
  const { user, auth } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  const logOut = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        //loging out
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="h-full p-3 space-y-2  lg:w-60 bg-gray-50 text-gray-800">
        {user?.uid ? (
          <div className="lg:flex hidden items-center p-2 space-x-4">
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-full bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {user?.displayName ? user.displayName : "name not found"}
              </h2>
              <span className="flex items-center space-x-1">
                <Link
                  to="/profile"
                  className="text-xs hover:underline text-gray-600"
                >
                  View profile
                </Link>
              </span>
            </div>
          </div>
        ) : (
          <div className="px-5 ">
            <Link
              to="/log-in"
              state={{ from: location }}
              replace
              className="flex justify-center text-xl font-semi text-white bold bg-purple-600 items-center hover:underline p-2 rounded-md"
            >
              <span>Log in</span>
              <FiLogIn className="mt-1"></FiLogIn>
            </Link>
          </div>
        )}

        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-2 text-sm">
            {courses.map((course) => (
              <li
                key={Math.random() * 1000 * Math.random() * 10000}
                className="bg-gray-100 text-left hover:underline text-gray-900"
              >
                <Link
                  to={`../course/${course.id}`}
                  className="flex  items-center p-2 space-x-3 rounded-md"
                >
                  <FiBox></FiBox>
                  <span>{course.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm hidden lg:block">
            <li>
              {user?.uid ? (
                <button
                  onClick={logOut}
                  className="flex items-center hover:underline p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  >
                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                  <span>Logout</span>
                </button>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
