import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RegisterForm = () => {
  const { auth } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const nameValidation = (e) => {
    if (e.target.value === "") {
      setErr("Please tell us your name");
      return;
    }
    if (!/.{4,}/.test(e.target.value)) {
      setErr("Please tell us your full name");
      return;
    }
    setErr("");
    setName(e.target.value);
  };
  const urlValidation = (e) => {
    if (e.target.value === "") {
      return;
    }
    if (
      !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
        e.target.value
      )
    ) {
      setErr("URL must be starts with HTTP or HTTPS");
      return;
    }
    setUrl(e.target.value);
  };
  const mailValidation = (e) => {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    if (mail) {
      setErr("");
      setEmail(e.target.value);
    } else {
      setErr("Invalid Email Address!!");
    }
  };
  const passValidation = (e) => {
    if (!/.{6,}/.test(e.target.value)) {
      setErr("password should be at least 6 charecter!!");
      return;
    }
    if (!/(?=.*?[0-9])/.test(e.target.value)) {
      setErr("password should be at least 1 digit!!");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(e.target.value)) {
      setErr("password should be at least 1 special cherecter!!");
      return;
    }
    setErr("");
    setPassword(e.target.value);
  };

  const signUpWithEmailPass = (event) => {
    event.preventDefault();
    if (name && email && password) {
      setErr("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            setErr("The Email is already registered");
            return;
          }
          setErr(errorMessage.slice(22, -2));
        });
    } else {
      setErr("Please fill the informtion bellow");
    }
  };
  const signUpWithGmail = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const signUpWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <div className="w-full p-8 space-y-3 rounded-xl bg-white shadow-2xl text-gray-800">
        <h1 className="text-red-500">{err}</h1>

        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              required
              onBlur={nameValidation}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              onBlur={urlValidation}
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="link of your picture "
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              required
              onBlur={mailValidation}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              required
              onChange={passValidation}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-200 text-gray-800 focus:border-purple-600"
            />
          </div>
          <button
            onClick={signUpWithEmailPass}
            className="block w-full p-3 text-center rounded-md text-gray-50 bg-purple-600 hover:bg-purple-800"
          >
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Log in with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={signUpWithGmail}
            aria-label="Log in with Google"
            className="p-3 rounded-sm text-3xl"
          >
            <FcGoogle></FcGoogle>
          </button>

          <button
            onClick={signUpWithGithub}
            aria-label="Log in with GitHub"
            className="p-3 rounded-sm text-3xl"
          >
            <FaGithub></FaGithub>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">
          Already have an account?
          <Link
            to="/log-in"
            className="text-purple-600 hover:underline hover:text-purple-400 ml-2"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
