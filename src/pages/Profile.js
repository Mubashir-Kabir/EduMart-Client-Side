import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { notifyError } from "../utilities/sharedFunctions";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, displayName, email, phoneNumber } = user;
  return (
    <div>
      <div className="p-8 my-12 text-gray-800">
        <div className="w-full mb-6  ">
          <img
            src={photoURL}
            alt=""
            className=" w-48 mx-auto rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">
              {displayName ? displayName : "name not found"}
            </h2>
          </div>
          <div className="space-y-3 ">
            <span className="flex justify-center items-center space-x-2">
              <HiOutlineMailOpen></HiOutlineMailOpen>
              <span className="text-gray-600">
                {email ? email : "not found"}
              </span>
            </span>
            <span className="flex justify-center items-center space-x-2">
              <AiOutlinePhone></AiOutlinePhone>
              <span className="text-gray-600">
                {phoneNumber ? phoneNumber : "*** **** *****"}
              </span>
            </span>
            <span>
              <button
                onClick={() => {
                  notifyError("Profile edit not available yet");
                }}
                className="text-sm hover:underline hover:text-purple-500"
              >
                Edit profile
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
